<template>
  <v-row no-gutters class="px-3 py-lg-5 py-sm-5 py-xl-5 pb-xs-2">
    <v-col
      v-for="(controller, index) in sidebar_items"
      :key="`controller-${index}`"
      xl="3"
      sm="3"
      md="3"
      lg="3"
      cols="4"
      class="pa-3 d-flex flex-column align-center controller-item"
    >
      <nuxt-link :to="controller.url" class="text-decoration-none">
        <Controller :controller="controller" />
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      sidebar_items: [
        {
          icon: require("@/assets/images/business_controller_icons/visit_service.svg"),
          desc: "Зочлох үйлчилгээ",
          url: "/visit",
        },
        {
          icon: require("@/assets/images/business_controller_icons/purchase.svg"),
          desc: "Худалдаа",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/business_controller_icons/household_service.svg"),
          desc: "Ахуйн үйлчилгээ",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/business_controller_icons/auto_service.svg"),
          desc: "Авто үйлчилгээ",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/business_controller_icons/factory.svg"),
          desc: "Үйлдвэрлэл",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/business_controller_icons/game_center.svg"),
          desc: "Тоглоомын төв",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/business_controller_icons/art_and_culture.svg"),
          desc: "Соёл урлаг",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/business_controller_icons/hui_7_hudag.svg"),
          desc: "Наадам<br/> Хүй 7 худаг",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/business_controller_icons/center_stadium.svg"),
          desc: "Наадам<br/> Төв цэнгэлдэх хүрээлэн",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/business_controller_icons/fitness.svg"),
          desc: "Чийрэгжүүлэх, Бялдаржуулах үйлчилгээ",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/business_controller_icons/food.svg"),
          desc: "Хоол үйлдвэрлэл, үйлчилгээ",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/business_controller_icons/liquor.svg"),
          desc: "Согтууруулах ундаа худалдах",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/business_controller_icons/fire_truck.svg"),
          desc: "Галын дүгнэлт",
          url: "/online-business",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
