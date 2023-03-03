<template>
  <div class="mx-n2">
    <v-img
      v-if="!$vuetify.breakpoint.xs"
      :src="require('@/assets/images/road/road_fixing.png')"
    ></v-img>
    <div class="px-4">
      <p
        v-if="!$vuetify.breakpoint.xs"
        class="secondary--text subtitle2--text my-5"
      >
        Зам засвар
      </p>
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
      <div class="my-5">
        <v-btn depressed color="#0085ff14" width="36" min-width="36">
          <v-icon color="primary">mdi-share-variant</v-icon>
        </v-btn>
      </div>
    </div>
    <v-divider />
    <v-list class="pt-0 pb-3 mt-5 px-4">
      <div class="d-flex align-center mb-4">
        <v-img
          width="24"
          height="24"
          max-width="24"
          :src="require('@/assets/images/road/location.svg')"
          class="mr-3"
        />
        <p class="secondary--text title1--text mb-0">Сүхбаатар дүүрэг 2-р хороо</p>
      </div>
      <div class="d-flex align-start">
        <v-icon size="24" color="success" class="mr-3">mdi-clock</v-icon>
        <div class="w-100">
          <p class="mb-3 secondary--text title1--text">Хугацаа</p>
          <v-row no-gutters class="mb-2">
            <v-col cols="8">
              <p class="mb-0 caption--text disabled--text">Эхлэх</p>
            </v-col>
            <v-col cols="4">
              <p class="mb-0 secondary--text title1--text">2022.10.02</p>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="8">
              <p class="mb-0 caption--text disabled--text">Дуусах</p>
            </v-col>
            <v-col cols="4">
              <p class="mb-0 secondary--text title1--text">2022.11.21</p>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}
.no-text-transform {
  text-transform: none;
}
</style>
