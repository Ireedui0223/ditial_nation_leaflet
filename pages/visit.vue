<template>
  <div class="px-4 py-lg-5 py-sm-5 py-xl-5 pb-xs-2">
    <!-- <v-select hide-details solo chips :items="chooses"></v-select> -->
    <v-chip outlined class="mb-1">
      Зочлох үйлчилгээ
      <v-icon color="secondary" size="8" class="ml-2">ph-caret-down</v-icon>
    </v-chip>
    <!-- <v-list density="compact">
      <v-list-item-group v-model="chosen_hotel">
        <v-list-item v-for="hotel in hotels" :key="hotel.id" :value="hotel">
          <v-list-item-icon>
            <v-checkbox hide-details :label="hotel.name"></v-checkbox>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list> -->
    <div v-for="hotel in hotels" :key="hotel.id">
      <v-checkbox hide-details dense class="py-1">
        <template v-slot:label>
          <p class="on_surface--text subtitle2--text mb-0">{{ hotel.name }}</p>
        </template>
      </v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosen_hotel: null,
      hotels: [
        { name: "Дэн буудал", id: 1 },
        { name: "Дэн буудал", id: 2 },
        { name: "Дэн буудал", id: 3 },
        { name: "Дэн буудал", id: 4 },
        { name: "Дэн буудал", id: 5 },
        { name: "Дэн буудал", id: 6 },
      ],
      chooses: [
        {
          name: "Зочилох үйлчилгээ",
          id: 1,
        },
        {
          name: "Зочилох үйлчилгээ",
          id: 2,
        },
        {
          name: "Зочилох үйлчилгээ",
          id: 3,
        },
        {
          name: "Зочилох үйлчилгээ",
          id: 4,
        },
        {
          name: "Зочилох үйлчилгээ",
          id: 5,
        },
        {
          name: "Зочилох үйлчилгээ",
          id: 6,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
