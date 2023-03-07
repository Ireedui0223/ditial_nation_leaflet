<template>
  <div v-if="loading" class="d-flex align-center justify-center my-16">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <div class="mt-5" v-if="air_qualitys">
      <v-list class="py-0">
        <v-list-item
          v-for="air_quality in air_qualitys || []"
          :key="air_quality.id"
          :to="`/air-quality/${air_quality.id}`"
          class="px-3"
        >
          <v-list-item-avatar
            :color="air_quality.elementList[0].maxColor"
            class="pa-3"
          >
            <v-icon color="white">mdi-weather-windy</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              class="on_surface--text button-medium--text mb-1"
            >
              {{ air_quality.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      air_qualitys: null,
      loading: true,
    };
  },
  async fetch() {
    this.loading = true;
    const list = await fetch("http://agaar.mn:8080/aqdb/api/station/list")
      .then((res) => res.json())
      .then((this.loading = false));
    if (!list) {
      console.log("aldaa garlaa");
    } else {
      this.air_qualitys = list;

      this.$store.commit("setAirQualityList", list);
    }
  },
};
</script>

<style lang="scss" scoped></style>
