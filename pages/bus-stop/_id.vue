<template>
  <div class="mx-n2">
    <v-img class="mb-5" :src="require('@/assets/images/bus_stop.svg')"></v-img>
    <div class="px-4">
      <p class="mb-5 secondary--text subtitle2--text">Нийтийн тээвэр</p>
      <div class="d-flex align-center">
        <v-img
          width="20"
          height="20"
          max-width="20"
          :src="require('@/assets/images/bus.svg')"
        />
        <p class="mb-0 ml-4 secondary--text h6--text">Сүхбаатрын талбай</p>
      </div>
      <div class="mb-5 mt-5">
        <v-btn color="primary" depressed>
          <v-img
            class="mr-2"
            width="20"
            height="20"
            :src="require('@/assets/images/direction_icon_white.svg')"
          />
          <span class="text-capitalize button-medium--text white--text">
            Очих
          </span>
        </v-btn>
        <v-btn icon depressed>
          <v-img
            width="36"
            height="36"
            :src="require('@/assets/images/share.png')"
          />
        </v-btn>
      </div>
    </div>
    <v-divider />
    <div class="px-4 mt-5">
      <p class="secondary--text title1--text">Нийтийн тээвэр</p>
      <div class="d-flex mb-4">
        <v-btn
          width="48"
          height="24"
          v-for="n in 4"
          :key="n"
          color="primary"
          class="mr-2"
          :to="`/bus/${n}`"
        >
          <span class="d-flex align-center white--text py-1"> Ч10 </span>
        </v-btn>
      </div>

      <p class="secondary--text title1--text">Хүүхдийн тээвэр</p>
      <div class="d-flex mb-4">
        <v-btn
          width="48"
          height="24"
          v-for="n in 4"
          :key="n"
          color="school_bus"
          class="mr-2"
          :to="`/bus/${n}`"
        >
          <span class="d-flex align-center white--text py-1"> Ч10 </span>
        </v-btn>
      </div>

      <p class="mb-5 pt-4 disabled--text body2--text">
        Удахгүй ирэх автобусууд
      </p>
      <v-list class="py-0">
        <v-list-item v-for="bus in buses" :key="bus.id" class="px-0">
          <v-list-item-avatar size="32">
            <v-img :src="require('@/assets/images/controller-icons/bus.svg')" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="secondary--text button-large--text">
              {{ bus.title }}
            </v-list-item-title>
            <v-list-item-subtitle
              style="text-overflow: ellipsis"
              class="disabled--text title1--text d-flex align-center"
            >
              <span>{{ bus.current_loc }}</span>
              <v-icon>mdi-menu-right</v-icon>
              <span> {{ bus.current_dist }}</span>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buses: [
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
        {
          title: "ХО:10А",
          current_loc: "Шадивлан",
          current_dist: "Чингис СОССЭ дээд сургууль",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
