<template>
  <client-only>
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
        <v-btn width="40" height="40" min-width="40" @click="get_my_location()">
          <v-img
            :src="require('@/assets/images/leaflet_controller/my_location.svg')"
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
                :src="require('@/assets/images/leaflet_controller/layers.svg')"
              />
            </v-btn>
          </template>
          <v-img
            @click="change_layer()"
            width="80"
            height="80"
            class="cursor-pointer"
            :src="require('@/assets/images/leaflet_controller/space_image.png')"
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
        v-if="busses"
      >
        <div v-for="bus in busses" :key="bus.id">
          <l-marker
            @click="drawToolTip($event.target)"
            v-if="bus && bus.lat && bus.lon"
            :lat-lng="[bus.lat, bus.lon]"
          >
            <l-icon
              :icon-size="dynamicSize"
              :icon-anchor="dynamicAnchor"
              icon-url="/_nuxt/assets/images/controller-icons/child_bus.svg"
            />
          </l-marker>
        </div>
      </v-marker-cluster>
      <l-marker
        :lat-lng="[47.7860593200069, 107.29505843972845, 1454.57857154907]"
      >
      </l-marker>

      <l-circle
        v-if="currentLocation"
        :lat-lng="currentLocation"
        radius:4500
        color:primary
      />

      <l-marker v-if="currentLocation" :lat-lng="currentLocation"></l-marker>
    </l-map>
  </client-only>
</template>

<script>
import { REQUEST_ID } from "@/utils/constants";
import { mskey } from "@/utils/constants";
export default {
  data() {
    return {
      REQUEST_ID,
      currentLocation: null,
      tileProviders: [],
      focused: null,
      iconSize: 20,
      bounds: null,
      mskey,
      ssid: null,
      busses: null,
      L: null,
    };
  },

  async mounted() {
    const L = require("leaflet");
    this.L = L;
    await this.get_ssid();
    await this.set_tile();
    await this.get_busses();
  },

  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },
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
      let data = JSON.parse(xhttp.response);

      this.ssid = data.ssid;
      this.$store.commit("setSSID", this.ssid);
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
          this.ssid,
      };

      this.tileProviders.push(space_layer);
      this.tileProviders.push(default_layer);
      this.focused = space_layer;
    },

    async get_busses() {
      const ssid = this.$store.state.ssid;
      console.log(this.$store.state.ssid);
      const busses = await fetch(
        `https://cloudgis.mn/map/v1/busstop/getDirectionByBusName?ssid=${ssid}`
      )
        .then((res) => res.json())
        .then((data) => data.bus_stop_data.list);
      const unique_array = busses.filter(
        (value, index, self) =>
          index ===
          self.findIndex((t) => t.lat === value.lat && t.lon === value.lon)
      );
      this.busses = unique_array;
    },
    drawToolTip(bus) {
      console.log(bus._icon._leaflet_pos);
      let h = `<div>test</div>`;
      render(h);
    },
    createClusterIcon(cluster) {
      const childCount = cluster.getChildCount();
      let iconSize = [40, 40];

      if (childCount === 1) {
        return this.L.marker(cluster.getAllChildMarkers()[0].getLatLng(), {
          icon: this.originIcon,
        });
      }
      return this.L.divIcon({
        html: `<div 
        style="background-image:url('/_nuxt/assets/images/controller-icons/child_bus.svg'); 
              background-position: center;
              background-size: contain;
         ">
        </div>`,
        className: "marker-cluster",
        iconSize,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
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
