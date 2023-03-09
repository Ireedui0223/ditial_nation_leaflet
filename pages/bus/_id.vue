<template>
  <div v-if="loading" class="d-flex align-center justify-center my-16">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div class="px-1" v-else>
    <div v-if="stops">
      <div class="d-flex mt-6 align-center">
        <v-img
          :src="require('@/assets/images/controller-icons/bus.svg')"
          width="32"
          height="32"
          max-width="32"
        />
        <p class="secondary--text h6--text ml-3 mb-0">
          {{ stops[0].busroute_no }}
        </p>
      </div>
      <p class="disabled--text title1--text d-flex align-center mt-4 mb-5">
        <span>{{ stops[0].from_nmus }}</span>
        <v-icon color="disabled">mdi-menu-right</v-icon>
        <span> {{ stops[0].to_nmmn }}</span>
      </p>
      <v-btn icon depressed class="mb-5">
        <v-img
          width="36"
          height="36"
          :src="require('@/assets/images/share.png')"
        />
      </v-btn>
      <div class="mx-n3">
        <v-divider />
        <v-tabs v-model="tab" background-color="surface_1" class="px-4">
          <v-tab class="text-capitalize"> Эхлэх цэг </v-tab>
          <v-tab class="text-capitalize"> Эцсийн цэг </v-tab>
        </v-tabs>
        <v-divider />

        <v-tabs-items v-model="tab" class="mt-5 px-4">
          <v-tab-item>
            <div v-for="(stop, index) in stops" :key="index">
              <nuxt-link
                :to="`/bus-stop/${stop.startpoint_id}`"
                class="text-decoration-none"
              >
                <div class="d-flex align-center">
                  <div v-if="index === stops.length - 1">
                    <img
                      class="end-location"
                      :src="require('@/assets/images/icons/end_location.png')"
                    />
                  </div>
                  <div
                    v-else-if="index === 0"
                    class="primary rounded-circle start-circle"
                  ></div>
                  <div v-else class="primary rounded-circle circle"></div>
                  <div
                    class="d-flex align-center justify-center disabled rounded-sm bus-icon mr-2 ml-5"
                  >
                    <img
                      :src="require('@/assets/images/icons/bus_white.svg')"
                    />
                  </div>
                  <p class="mb-0 secondary--text title1--text">
                    {{ stop.start_busstop_nm }}
                  </p>
                </div>
              </nuxt-link>
              <div v-if="index !== stops.length - 1" class="line primary"></div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div v-for="(stop, index) in stops" :key="index">
              <nuxt-link
                :to="`/bus-stop/${stop.startpoint_id}`"
                class="text-decoration-none"
              >
                <div class="d-flex align-center">
                  <div v-if="index === stops.length - 1">
                    <img
                      class="end-location"
                      :src="require('@/assets/images/icons/end_location.png')"
                    />
                  </div>
                  <div
                    v-else-if="index === 0"
                    class="primary rounded-circle start-circle"
                  ></div>
                  <div v-else class="primary rounded-circle circle"></div>
                  <div
                    class="d-flex align-center justify-center disabled rounded-sm bus-icon mr-2 ml-5"
                  >
                    <img
                      :src="require('@/assets/images/icons/bus_white.svg')"
                    />
                  </div>
                  <p class="mb-0 secondary--text title1--text">
                    {{ stop.start_busstop_nm }}
                  </p>
                </div>
              </nuxt-link>
              <div v-if="index !== stops.length - 1" class="line primary"></div>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      stops: null,
      loading: false,
    };
  },
  async mounted() {
    await this.get_bus_routes_stops();
  },
  methods: {
    async get_bus_routes_stops() {
      const date = new Date();
      let month = date.getMonth().toString().padStart(2, "0");
      let year = date.getFullYear();
      const route_id = this.$route.params.id;
      this.loading = true;
      const bus_stops_list_time = await fetch(
        `https://ubmap.ulaanbaatar.mn/uscc/busstop_predsvctime_list.php?busroute_id=${route_id}&busstop_seq=&yyyymm=${year}${month}`
      )
        .then((res) => res.json())
        .then((data) => data.busstop_predsvctime_list)
        .catch((err) => console.log(err));
      this.loading = false;
      const unique_bus_stops = bus_stops_list_time.filter(
        (value, index, self) =>
          index ===
          self.findIndex((t) => t.start_busstop_nm == value.start_busstop_nm)
      );
      this.stops = bus_stops_list_time;
    },
  },
  watch: {
    tab(nv, ov) {
      this.stops.reverse();
    },
  },
};
</script>

<style lang="scss" scoped>
.line {
  height: 28px;
  width: 2px;
  margin-left: 5px;
}
.circle {
  width: 12px;
  height: 12px;
  border: 2px solid white;
}
.start-circle {
  width: 16px;
  height: 16px;
  border: 2px solid white;
  margin-left: -2px;
}
.bus-icon {
  width: 20px;
  height: 20px;
  padding: 4px 5px 4px 5px;
}
.end-location {
  margin: 2px -6px 2px -4px;
}
</style>
