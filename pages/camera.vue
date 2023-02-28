<template>
  <div>
    <v-list>
      <v-list-item
        v-for="camera in cameras"
        :key="camera.id"
        @click="(currentCamera = camera), (dialog = true)"
      >
        <v-list-item-content>
          <v-list-item-title class="button-medium--text secondary--text">
            {{ camera.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="caption--text on_surface_disabled--text">
            {{ camera.location }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar>
          <v-img
            width="32"
            height="32"
            max-width="32"
            :src="require('@/assets/images/controller-icons/camera.svg')"
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
    <v-dialog v-model="dialog">
      <v-card height="300" width="40%">
        <v-card-title>test</v-card-title>
        <pre>{{ currentCamera }}</pre>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCamera: null,
      dialog: false,
      cameras: [
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
        { id: 1, name: "test", location: "test" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
