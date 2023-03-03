<template>
  <div class="mx-n2">
    <v-img
      v-if="!$vuetify.breakpoint.xs"
      :src="require('@/assets/images/hospital_detail.svg')"
    ></v-img>
    <div class="px-4">
      <p
        v-if="!$vuetify.breakpoint.xs"
        class="secondary--text subtitle2--text my-5"
      >
        Товчоо
      </p>
      <p
        class="d-flex justify-space-between mb-4 secondary--text subtitle1--text"
      >
        Их амгалан ӨЭМТ
      </p>
      <p class="mb-0 disabled--text body1--text">47.135257° 104.071223°</p>
      <div class="my-5">
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
        <v-btn color="warning" class="px-3 py-2 no-text-transform">
          <v-icon size="20" class="mr-2">mdi-clock</v-icon>
          <span class="button-medium--text">Цаг авах</span>
        </v-btn>
        <v-btn
          depressed
          color="#0085ff14"
          class="px-0"
          width="36"
          min-width="36"
        >
          <v-icon color="primary"> mdi-web </v-icon>
        </v-btn>
        <v-btn depressed color="#0085ff14" width="36" min-width="36">
          <v-icon color="primary">mdi-share-variant</v-icon>
        </v-btn>
      </div>
    </div>
    <v-divider />
    <v-list class="pt-0 pb-3 mt-5 px-4">
      <div class="d-flex mb-4">
        <v-img
          width="24"
          height="24"
          max-width="24"
          :src="require('@/assets/images/road/location.svg')"
          class="mr-3"
        />
        <div>
          <p class="secondary--text caption--text mb-2">
            Сонгино хайрхан дүүрэг 32-р хороо, Баруун туруу
          </p>
          <v-btn
            color="success"
            height="24"
            depressed
            class="py-1 px-2 caption--text no-text-transform"
          >
            <span class="caption--text"> Газрын зураг дээр харах </span>
          </v-btn>
        </div>
      </div>
      <div class="d-flex align-center mb-4">
        <v-icon color="success" size="24" class="mr-3">mdi-clock</v-icon>
        <p class="mb-0 secondary--text title1--text">09:00 - 17:00</p>
      </div>

      <div class="d-flex align-center mb-5">
        <v-icon color="primary">mdi-phone</v-icon>
        <p class="mb-0 ml-3 secondary--text title1--text">9122 0089</p>
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
