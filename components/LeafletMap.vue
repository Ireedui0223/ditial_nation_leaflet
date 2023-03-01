<template>
  <client-only>
    <l-map
      class="remove-default"
      :zoom="13"
      :center="
        currentLocation
          ? currentLocation
          : [47.762477291192255, 106.7507664505006]
      "
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

      <l-marker :lat-lng="[47.41322, -1.219482]">
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="/_nuxt/assets/images/controller-icons/child_bus.svg"
        />
      </l-marker>

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
export default {
  data() {
    return {
      currentLocation: null,
      tileProviders: [],
      focused: null,
      iconSize: 41,
    };

    //     sample:{
    //       _latlng: Object { lat: 47.7860593200069, lng: 107.29505843972845, alt: 1454.57857154907 }
    // _latlng: Object { lat: 47.762477291192255, lng: 106.7507664505006, alt: 1361.02319797767 }
    // _latlng: Object { lat: 47.70093646602314, lng: 107.22002032789129, alt: 1537.52758876397 }
    // _latlng: Object { lat: 48.076845246297175, lng: 106.86208175622737, alt: 1518.74310789664 }
    // _latlng: Object { lat: 47.9155971587141, lng: 107.09450698325746, alt: 1328.14898753705 }
    //     }
  },
  mounted() {
    const mskey = "359b6742e02ed9d34b34cf3ef597c37b";
    const xhttp = new XMLHttpRequest();
    xhttp.open(
      "GET",
      "https://cloudgis.mn/map/v1/init/pc?mskey=" + mskey,
      false
    );
    xhttp.send();
    const data = JSON.parse(xhttp.response);

    const ssid = data.ssid;
    const space_layer = {
      name: "space",
      url: "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    };
    const default_layer = {
      name: "default",
      url: "https://cloudgis.mn/map/v1/tilemap/mobile/{z}/{x}/{y}?ssid=" + ssid,
    };

    this.tileProviders.push(space_layer);
    this.tileProviders.push(default_layer);
    // this.focused = default_layer;
    this.focused = space_layer;
    console.log(this.focused);
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
    change_layer() {
      this.focused =
        this.focused.name === "space"
          ? this.tileProviders[1]
          : this.tileProviders[0];
    },

    get_my_location() {
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
