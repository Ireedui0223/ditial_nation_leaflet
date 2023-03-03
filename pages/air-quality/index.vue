<template>
  <div class="px-2">
    <v-list class="py-0">
      <v-list-item
        v-for="air_quality in air_qualitys"
        :key="air_quality.id"
        class="px-0"
        :to="`/air-quality/${air_quality.id}`"
      >
        <v-list-item-avatar :color="air_quality.quality" class="pa-3">
          <v-icon color="white">mdi-weather-windy</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="on_surface--text button-medium--text mb-1">
            {{ air_quality.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="caption--text disabled--text">
            Одоогийн байршлаас
            <span class="secondary--text">{{ air_quality.distance }}</span> км
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      air_qualitys: [
        {
          id: 1,
          name: "Чингэлтэй",
          distance: 4,
          quality: "warning",
        },
        {
          id: 2,
          name: "Баянзүрх",
          distance: 4,
          quality: "traffic_5",
        },
        {
          id: 3,
          name: "Баянгол",
          distance: 4,
          quality: "info",
        },
        {
          id: 4,
          name: "Мишээл",
          distance: 4,
          quality: "success",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
