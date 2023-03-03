<template>
  <div class="px-2">
    <p class="py-5 mb-0 secondary--text subtitle2--text">Зогсоол</p>
    <v-list class="py-0">
      <v-list-item
        v-for="parking in parkings"
        :key="parking.id"
        class="px-0"
        :to="`/parking/${parking.id}`"
      >
        <v-list-item-avatar
          ><v-img
            width="32"
            height="32"
            max-width="32"
            :src="require('@/assets/images/controller-icons/parking.svg')"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="secondary--text button-medium--text mb-1">
            {{ parking.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="caption--text">
            <span
              v-if="parking.isFull !== null"
              :class="parking.isFull ? 'warning--text' : 'success--text'"
            >
              <v-icon size="8" :color="parking.isFull ? 'warning' : 'success'">
                mdi-circle
              </v-icon>
              {{ parking.isFull ? "Дүүрсэн" : `Сул ${parking.detail}` }}
            </span>
            <span class="ml-5">1цаг/{{ parking.price }}₮</span>
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
      parkings: [
        {
          id: 1,
          name: "Талбайн зогсоол",
          isFull: false,
          price: 2000,
          detail: 20,
        },
        {
          id: 2,
          name: "Паркийн зогсоол",
          isFull: false,
          price: 2000,
          detail: 20,
        },
        {
          id: 3,
          name: "Хангарьдын зогсоол",
          isFull: true,
          price: 2000,
          detail: 0,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
