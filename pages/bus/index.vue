<template>
  <div v-if="loading" class="d-flex align-center justify-center my-16">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else class="px-2">
    <v-text-field
      placeholder="Автобусны буудал, дугаар хайх"
      hide-details
      outlined
      clearable
      color="secondary"
      v-model="search_value"
      append-icon="mdi-magnify"
      class="rounded-lg my-5 custom-search"
      @focus="search_focused = true"
    />
    <!-- @focusout="search_focused = false" -->
    <div v-show="!search_focused">
      <div class="d-flex justify-space-between mt-4">
        <v-select
          class="button-small--text mr-2 no-shadow select-border"
          placeholder="Улаанбаатар"
          solo
          rounded
          flat
          hide-details
          height="40"
          color="secondary"
          v-model="select_start"
          :items="['ulaanbaatar', 'tuvaimag']"
        ></v-select>
        <v-select
          class="button-small--text ml-2 no-shadow select-border"
          placeholder="Дүүрэг"
          solo
          rounded
          flat
          hide-details
          height="40"
          color="secondary"
          v-model="select_end"
          :items="['ulaanbaatar', 'дүүрэг']"
        ></v-select>
      </div>
    </div>
    <v-list v-show="!search_focused">
      <v-list-item
        v-for="bus in buses || []"
        :key="bus.busroute_id"
        class="px-0"
        :to="`/bus/${bus.busroute_id}`"
      >
        <v-list-item-avatar size="32">
          <v-img :src="require('@/assets/images/controller-icons/bus.svg')" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="secondary--text button-large--text">
            {{ bus.busroute_no }}
          </v-list-item-title>
          <v-list-item-subtitle
            style="text-overflow: ellipsis"
            class="disabled--text title1--text d-flex align-center"
          >
            {{ bus.busroute_name }}
            <!-- <span>{{ bus.current_loc }}</span>
            <v-icon>mdi-menu-right</v-icon>
            <span> {{ bus.current_dist }}</span> -->
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <p class="mb-0 primary--text caption--text">
            <v-icon size="8" color="primary">mdi-circle</v-icon> 10 мин
          </p>
          <p class="mb-0 disabled--text caption--text">2 буудал</p>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-list v-show="search_focused" class="py-0">
      <v-list-item class="px-0" to="/bus-stop/1">
        <v-list-item-avatar size="20" class="mr-2">
          <v-img :src="require('@/assets/images/bus.svg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content> Барилгачдын талбай </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_focused: false,
      search_value: "",
      select_start: "",
      select_end: "",
      loading: false,
      buses: null,
    };
  },
  async mounted() {
    await this.get_bus_routes();
    await this.get_busses_stop();
  },
  methods: {
    async get_bus_routes() {
      const date = new Date();
      let day = date.getDay().toString().padStart(2, "0");
      let month = date.getMonth().toString().padStart(2, "0");
      let year = date.getFullYear();
      this.loading = true;
      const bus_routes = await fetch(
        `https://ubmap.ulaanbaatar.mn/uscc/busroute_list.php?yyyymm=${year}${month}&yyyymmdd=${year}${month}${day}`
      )
        .then((res) => res.json())
        .then((data) => data.busroute_list)
        .catch((err) => console.log(err));
      this.loading = false;
      this.buses = bus_routes;
    },
    async get_busses_stop() {
      const ssid = this.$store.state.ssid;
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
      this.$store.commit("setBus_stops", unique_array);
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-search ::v-deep(.v-input__control) {
  .v-input__slot {
    fieldset {
      border: 1px solid #e6e6e6;
    }
  }
}
.select-border ::v-deep(.v-input__control) {
  border: 2px solid #e5e7ea;
}
</style>
