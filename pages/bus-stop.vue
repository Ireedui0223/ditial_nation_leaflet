<template>
  <div class="mx-n2">
    <v-img :src="require('@/assets/images/bus_stop.svg')"></v-img>
    <div class="px-2">
      <p class="mb-0">Нийтийн тээвэр</p>
      <div class="d-flex">
        <v-img
          width="20"
          height="20"
          max-width="20"
          :src="require('@/assets/images/bus.svg')"
        ></v-img>
        <p class="mb-0">Сүхбаатрын талбай</p>
      </div>
    </div>
    <v-divider />
    <div class="px-2">
      <p>Нийтийн тээвэр</p>
      <div class="d-flex">
        <span
          v-for="n in 4"
          :key="n"
          class="d-flex align-center primary rounded-sm px-2 py-1 mr-2 bus-chip white--text"
        >
          Ч10
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bus-chip {
  width: 48px;
  height: 24px;
}
</style>
