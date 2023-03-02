<template>
  <div class="mx-n2">
    <v-img :src="require('@/assets/images/road/road_fixing.png')" />
    <div class="mx-3">
      <p class="secondary--text subtitle2--text mb-5 px-1">Зам засвар</p>
      <div class="d-flex align-center mb-5">
        <v-img
          :src="require('@/assets/images/controller-icons/road_construct.svg')"
          width="32"
          height="32"
          max-width="32"
          class="mr-4"
        />
        <div>
          <p class="mb-0 secondary--text h6--text">Засвартай зам</p>
          <p class="mb-0 on_surface_disabled--text body1--text">
            Тогтохтөрийн гудамж
          </p>
        </div>
      </div>
      <v-img
        width="32"
        height="32"
        :src="require('@/assets/images/share.png')"
        class="mb-5"
      />
    </div>
    <v-divider />
    <div class="mt-5 mx-4 w-100">
      <div class="d-flex align-center mb-4">
        <v-img
          width="24"
          height="24"
          max-width="24"
          :src="require('@/assets/images/road/location.svg')"
        />
        <p class="mb-0 ml-4 title1--text secondary--text">
          Сүхбаатар дүүрэг 2-р хороо
        </p>
      </div>
      <div class="d-flex w-100">
        <v-icon color="success">mdi-clock</v-icon>
        <div class="w-100 px-4 mr-4">
          <p class="mb-3 title1--text secondary--text">Хугацаа</p>
          <p class="d-flex justify-space-between mb-1">
            <span class="disabled--text caption--text">Эхлэх</span>
            <span class="secondary--text subtitle2--text">2022.10.02</span>
          </p>
          <p class="d-flex justify-space-between mb-0">
            <span class="disabled--text caption--text">Дуусах</span>
            <span class="secondary--text subtitle2--text">2022.10.02</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}
</style>
