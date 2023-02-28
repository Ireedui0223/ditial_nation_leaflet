<template>
  <div>
    <v-list>
      <v-list-item
        v-for="road in roads"
        :key="road.id"
        :to="`/road/${road.id}`"
      >
        <v-list-item-content>
          <v-list-item-title class="button-medium--text secondary--text">
            {{ road.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="caption--text on_surface_disabled--text">
            {{ road.location }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar>
          <v-img width="32" height="32" max-width="32" :src="road.icon"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roads: [
        {
          id: 1,
          name: "test",
          location: "test",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
        {
          id: 1,
          name: "Засвартай зам",
          location: "Засвартай зам",
          icon: require("@/assets/images/controller-icons/road_construct.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
