<template>
  <v-row no-gutters class="px-3 py-lg-5 py-sm-5 py-xl-5 pb-xs-2">
    <v-col
      v-for="(controller, index) in sidebar_items"
      :key="`controller-${index}`"
      cols="3"
      class="pa-3 d-flex flex-column align-center controller-item"
    >
      <nuxt-link :to="controller.url" class="text-decoration-none">
        <Controller :controller="controller" />
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
import Controller from "../components/Controller.vue";
export default {
  name: "IndexPage",
  components: {
    Controller,
  },
  data() {
    return {
      sidebar_items: [
        {
          icon: require("@/assets/images/controller-icons/bus.svg"),
          desc: "Тээвэр",
          url: "/bus",
        },
        {
          icon: require("@/assets/images/controller-icons/child_bus.svg"),
          desc: "Хүүхдийн автобус",
          url: "/child-bus",
        },
        {
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
          desc: "Зам засвар",
          url: "/road",
        },
        {
          icon: require("@/assets/images/controller-icons/traffic.svg"),
          desc: "Гэрлэн дохио",
          url: "/",
        },
        {
          icon: require("@/assets/images/controller-icons/parking.svg"),
          desc: "Зогсоол",
          url: "/parking",
        },
        {
          icon: require("@/assets/images/controller-icons/camera.svg"),
          desc: "Хяналтын камер",
          url: "/camera",
        },
        {
          icon: require("@/assets/images/controller-icons/agency.svg"),
          desc: "Товчоод",
          url: "/",
        },
        {
          icon: require("@/assets/images/controller-icons/rfid.svg"),
          desc: "RFID",
          url: "/rfid",
        },
        {
          icon: require("@/assets/images/controller-icons/medic.svg"),
          desc: "Өрхийн эмнэлэг",
          url: "/",
        },
        {
          icon: require("@/assets/images/controller-icons/well.svg"),
          desc: "Худаг",
          url: "/",
        },
        {
          icon: require("@/assets/images/controller-icons/air_pollution.svg"),
          desc: "Агаарын чанар",
          url: "/",
        },
        {
          icon: require("@/assets/images/controller-icons/online_business.png"),
          desc: "Онлайн бизнес төв",
          url: "/online-business",
        },
        {
          icon: require("@/assets/images/controller-icons/public_toilet.svg"),
          desc: "Нийтийн бие засах газар",
          url: "/",
        },
        {
          icon: require("@/assets/images/controller-icons/online_business.png"),
          desc: "Захирагчийн ажлын алба",
          url: "/online-business",
        },
      ],
    };
  },
};
</script>
