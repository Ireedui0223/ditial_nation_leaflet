<template>
  <v-app>
    <div
      class="full-height d-flex flex-column-reverse flex-sm-row flex-md-row flex-lg-row flex-xl-row"
    >
      <!-- mobile search bar-->
      <div
        v-show="$vuetify.breakpoint.xs"
        class="mobile-search-field surface_1 py-5 px-3"
      >
        <v-text-field
          hide-details
          outlined
          color="#E6E6E6"
          v-model="search_value"
        >
          <template v-slot:prepend-inner>
            <v-btn @click="$router.back()" icon class="mt-n2">
              <v-icon color="disabled">mdi-arrow-left</v-icon>
            </v-btn>
          </template>
          <template v-slot:append>
            <v-btn icon width="32" height="32" class="pa-1 mt-n1">
              <v-img :src="require('@/assets/images/direction_icon.svg')" />
            </v-btn>
          </template>
        </v-text-field>
        <div class="d-flex justify-space-between mt-4">
          <v-select
            class="button-small--text mr-2 no-shadow"
            placeholder="Улаанбаатар"
            solo
            hide-details
            v-model="select_search"
            :items="['ulaanbaatar', 'tuvaimag']"
          ></v-select>
          <v-select
            class="button-small--text ml-2 no-shadow"
            placeholder="Дүүрэг"
            solo
            hide-details
            v-model="select_district"
            :items="['ulaanbaatar', 'дүүрэг']"
          ></v-select>
        </div>
      </div>

      <!-- navigation  -->

      <v-slide-x-transition hide-on-leave v-if="ssid">
        <div>
          <div
            v-show="$vuetify.breakpoint.xs"
            @click="drawer = !drawer"
            class="rounded-lg py-2 cursor-pointer"
          >
            <div class="drag_menu" />
          </div>
          <v-card
            class="overflow-y-auto px-lg-2 px-md-2 px-sm-2 py-2"
            color="surface_1"
            elevation="0"
            v-show="drawer"
            :min-width="$vuetify.breakpoint.xs ? '100%' : '370'"
            :max-width="$vuetify.breakpoint.xs ? '100%' : '370'"
            :max-height="$vuetify.breakpoint.xs ? '40vh' : '100%'"
          >
            <!-- mobile close bar -->

            <div>
              <!-- this logo won't display on mobile -->
              <div class="d-none d-sm-flex flex-column">
                <v-img
                  max-width="108"
                  :src="require('@/assets/images/logo.svg')"
                />
                <div class="py-4">
                  <v-text-field
                    hide-details
                    outlined
                    color="#E6E6E6"
                    v-model="search_value"
                  >
                    <template v-slot:prepend-inner>
                      <v-btn @click="$router.back()" icon class="mt-n2">
                        <v-icon color="disabled">mdi-arrow-left</v-icon>
                      </v-btn>
                    </template>
                    <template v-slot:append>
                      <v-btn icon width="32" height="32" class="pa-1 mt-n1">
                        <v-img
                          :src="require('@/assets/images/direction_icon.svg')"
                        />
                      </v-btn>
                    </template>
                  </v-text-field>
                </div>
                <v-divider />
              </div>

              <Nuxt />
            </div>
          </v-card>
        </div>
      </v-slide-x-transition>

      <div v-if="ssid" id="map-wrap">
        <Header v-if="!$vuetify.breakpoint.xs" :navbar.sync="drawer" />
        <l-map
          ref="map"
          class="remove-default"
          :zoom="16"
          :center="currentLocation ? currentLocation : [47.918528, 106.916752]"
        >
          <l-control-scale
            position="bottomright"
            :imperial="true"
            :metric="false"
          />

          <l-control position="bottomright">
            <v-btn
              width="40"
              height="40"
              min-width="40"
              @click="get_my_location()"
            >
              <v-img
                :src="
                  require('@/assets/images/leaflet_controller/my_location.svg')
                "
              />
            </v-btn>
          </l-control>

          <l-control-zoom position="bottomright" />
          <l-control position="bottomright">
            <v-menu nudge-left="100">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  width="40"
                  height="40"
                  min-width="40"
                >
                  <v-img
                    :src="
                      require('@/assets/images/leaflet_controller/layers.svg')
                    "
                  />
                </v-btn>
              </template>
              <v-img
                @click="change_layer()"
                width="80"
                height="80"
                class="cursor-pointer"
                :src="
                  require('@/assets/images/leaflet_controller/space_image.png')
                "
              ></v-img>
            </v-menu>
          </l-control>
          <!-- <l-control-layers position="bottomright" /> -->

          <l-tile-layer
            v-if="focused"
            :name="focused.name"
            :visible="true"
            :url="focused.url"
            :subdomains="focused.subdomains"
            layer-type="base"
          />
          <v-marker-cluster
            :options="{ iconCreateFunction: createClusterIcon }"
            v-if="bus_stops"
          >
            <div v-for="bus in bus_stops" :key="bus.id">
              <l-marker
                v-if="bus && bus.lat && bus.lon"
                :lat-lng="[bus.lat, bus.lon]"
              >
                <l-popup :content="bus.name"></l-popup>
                <l-icon
                  :icon-size="[iconSize, iconSize]"
                  :icon-anchor="[iconSize, iconSize]"
                  icon-url="/_nuxt/assets/images/icons/bus_stop.svg"
                />
              </l-marker>
            </div>
          </v-marker-cluster>
          <l-marker :lat-lng="[47.918519, 106.916752]"> </l-marker>
          <!-- <teleport to="#markers">
            </teleport> -->
          <div id="markers"></div>
          <l-circle
            v-if="currentLocation"
            :lat-lng="currentLocation"
            radius:4500
            color:primary
          />

          <l-marker
            v-if="currentLocation"
            :lat-lng="currentLocation"
          ></l-marker>
        </l-map>
      </div>
    </div>
  </v-app>
</template>

<script>
import { REQUEST_ID, mskey } from "@/utils/constants";
import Header from "@/components/Header.vue";
export default {
  name: "DefaultLayout",
  components: {
    Header,
  },
  data() {
    return {
      REQUEST_ID,
      mskey,
      search_value: "",
      select_search: "",
      select_district: "",
      drawer: false,
      ssid: false,
      currentLocation: null,
      tileProviders: [],
      iconSize: 20,
      focused: null,
      bounds: null,
    };
  },
  async mounted() {
    await this.get_ssid();
    await this.set_tile();
  },
  methods: {
    async get_ssid() {
      let xhttp = new XMLHttpRequest();
      xhttp.open(
        "GET",
        "https://cloudgis.mn/map/v1/init/pc?mskey=" + REQUEST_ID.mskey,
        false
      );
      xhttp.send();
      const data = JSON.parse(xhttp.response);
      this.ssid = data.ssid;
      this.$store.commit("setSSID", this.ssid);
    },
    async set_tile() {
      const space_layer = {
        name: "space",
        url: "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      };
      const default_layer = {
        name: "default",
        url:
          "https://cloudgis.mn/map/v1/tilemap/mobile/{z}/{x}/{y}?ssid=" +
          this.$store.state.ssid,
      };

      this.tileProviders.push(space_layer);
      this.tileProviders.push(default_layer);
      this.focused = space_layer;
    },
    change_layer() {
      this.focused =
        this.focused.name === "space"
          ? this.tileProviders[1]
          : this.tileProviders[0];
    },

    get_my_location() {
      const track = this.$refs.map;
      this.bounds = track.mapObject.getBounds();
      console.log({ LLX: this.bounds["_southWest"]["lng"] });
      console.log({
        LLY: this.bounds["_southWest"]["lat"],
      });
      console.log({
        URX: this.bounds["_northEast"]["lng"],
      });
      console.log({
        URY: this.bounds["_northEast"]["lat"],
      });

      if (navigator.geolocation) {
        const successCallback = (position) => {
          const { latitude, longitude } = position.coords;
          let my_loc = [];
          my_loc.push(latitude);
          my_loc.push(longitude);
          this.currentLocation = my_loc;
        };

        const errorCallback = (error) => {
          console.log(error);
        };
        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback
        );
      } else {
        alert("browser doesn't support geolocation");
      }
    },

    createClusterIcon(cluster) {
      const childCount = cluster.getChildCount();
      let iconSize = [2 * this.icon, 2 * this.icon];

      if (childCount === 1) {
        return this.$L.marker(cluster.getAllChildMarkers()[0].getLatLng(), {
          icon: this.originIcon,
        });
      }
      return this.$L.divIcon({
        html: `<div 
        style="background-image:url('/_nuxt/assets/images/icons/bus_stop.svg'); 
              background-position: center;
              background-size: contain;
              border-radius:0px;
         ">
        </div>`,
        className: "marker-cluster",
        iconSize,
      });
    },
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },
    bus_stops: {
      get() {
        return this.$store.state.bus_stops;
      },
      set(e) {},
    },
  },
};
</script>

<style lang="scss" scoped>
#map-wrap {
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 0 !important;
}

.full-height {
  height: 100vh;
  max-height: 100vh;
}
.drag_menu {
  position: relative;
  margin: auto;
  width: 60%;
  height: 4px;
  background-color: #e8e9ee;
}
.mobile-search-field {
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0px;
}
.no-shadow ::v-deep(.v-input__control) {
  .v-input__slot {
    box-shadow: none !important;
  }
}
.remove-default ::v-deep(.leaflet-control-container) {
  .leaflet-left {
    display: none;
  }
  .leaflet-right {
    .leaflet-control-zoom {
      margin-bottom: 20px;
      border: none;
      a {
        width: 40px;
        height: 40px;
      }
    }
    .leaflet-control-scale {
      margin-bottom: 0px;
      .leaflet-control-scale-line {
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: 0.02;
        padding: 8px 12px 12px 8px;
        border: 0.5px solid #ffffff;
        border-radius: 16px 16px 0px 0px;
      }
    }
    .leaflet-control-attribution {
      display: none;
    }
  }
}
</style>
