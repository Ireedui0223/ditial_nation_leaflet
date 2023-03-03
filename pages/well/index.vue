<template>
    <div class="px-2">
      <p class="py-5 mb-0 secondary--text subtitle2--text">Зогсоол</p>
      <v-list class="py-0">
        <v-list-item
          v-for="well in wells"
          :key="well.id"
          class="px-0"
          :to="`/well/${well.id}`"
        >
          <v-list-item-avatar
            ><v-img
              width="32"
              height="32"
              max-width="32"
              :src="require('@/assets/images/controller-icons/well.svg')"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="on_surface--text button-medium--text mb-1">
              {{ well.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="caption--text disabled--text">
              Одоогийн байршлаас
              <span class="secondary--text">{{ well.distance }}</span> км
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
        wells: [
          {
            id: 1,
            name: "22-н товчоо",
            distance: 4,
          },
          {
            id: 2,
            name: "Баянзүрх товчооо",
            distance: 4,
          },
          {
            id: 3,
            name: "Эмээлт товчоо",
            distance: 4,
          },
          {
            id: 4,
            name: "Налайхын товчоо",
            distance: 4,
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  