<template>
  <div class="d-flex flex-column align-center controller-item">
    <div>
      <v-img :src="controller.icon" class="mb-2" width="48" />
    </div>
    <span
      class="secondary--text button-small--text text-center"
      v-html="controller.desc"
    >
    </span>
  </div>
</template>

<script>
export default {
  props: {
    controller: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
