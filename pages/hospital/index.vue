<template>
  <div v-if="loading" class="d-flex align-center justify-center my-16">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else class="px-2">
    <p class="py-5 mb-0 secondary--text subtitle2--text">Зогсоол</p>
    <v-list v-if="hospitals" class="py-0">
      <v-list-item
        v-for="hospital in hospitals"
        :key="hospital.poi_seq"
        class="px-0"
        :to="`/hospital/${hospital.poi_seq}`"
      >
        <v-list-item-avatar
          ><v-img
            width="32"
            height="32"
            max-width="32"
            :src="hospital.poi_code1_icon"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="on_surface--text button-medium--text mb-1">
            {{ hospital.poi_title }}
          </v-list-item-title>
          <v-list-item-subtitle class="caption--text disabled--text">
            <!-- Одоогийн байршлаас -->
            <span class="secondary--text">{{ hospital.poi_address2 }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon outlined color="primary" class="pa-2">
            <v-img
              :src="require('@/assets/images/direction_icon_blue.svg')"
            ></v-img>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hospitals: null,
      loading: false,
    };
  },
  async mounted() {
    await this.getHospital();
  },
  methods: {
    async getHospital() {
      const ssid = this.$store.state.ssid;
      this.loading = true;
      const hospitals = await fetch(
        `https://cloudgis.mn/map/v1/poi/searchPoaName2Mobile?ssid=${ssid}&name=өрхийн эмнэлэг&limit=1000`
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
      // this.hospitals = hospitals;
      this.loading = false;
      // this.$store.commit("setPoi_code1_icon", hospitals);
    },
  },
};
</script>

<style lang="scss" scoped></style>
