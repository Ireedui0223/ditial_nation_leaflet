<template>
  <div class="mx-n2">
    <v-img
      v-if="!$vuetify.breakpoint.xs"
      :src="require('@/assets/images/agency_detail.svg')"
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
        22-н товчоо
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
            class="py-1 px-2 caption--text text-lowercase"
          >
            <span class="caption--text"> Газрын зураг дээр харах </span>
          </v-btn>
        </div>
      </div>
      <div class="d-flex align-center mb-4">
        <v-icon color="success" size="24" class="mr-3">mdi-clock</v-icon>
        <p class="mb-0 secondary--text title1--text">24 / 7</p>
      </div>
      <div class="d-flex align-start mb-5">
        <v-img
          :src="require('@/assets/images/icons/car.svg')"
          width="24"
          height="24"
          max-width="24"
        />
        <div class="ml-3 w-100">
          <p class="mb-3 secondary--text title1--text">Нэвтрэлтийн мэдээлэл</p>
          <v-row no-gutters class="mb-2">
            <v-col cols="8">
              <p class="mb-0 caption--text disabled--text">Орсон нийт</p>
            </v-col>
            <v-col cols="4">
              <p class="mb-0 secondary--text title1--text">3,834</p>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="8">
              <p class="mb-0 caption--text disabled--text">Гарсан нийт</p>
            </v-col>
            <v-col cols="4">
              <p class="mb-0 secondary--text title1--text">2,132</p>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="d-flex align-center mb-5">
        <v-icon color="primary">mdi-phone</v-icon>
        <p class="mb-0 ml-3 secondary--text title1--text">99006655</p>
      </div>
      <div class="d-flex align-start">
        <v-icon size="24" color="primary" class="mr-3">mdi-credit-card</v-icon>
        <div class="w-100">
          <p class="mb-3 secondary--text title1--text">Үнэ</p>
          <v-row no-gutters class="mb-2">
            <v-col cols="8">
              <p class="mb-0 caption--text disabled--text">Жижиг тэрэг</p>
            </v-col>
            <v-col cols="4">
              <p class="mb-0 secondary--text title1--text">2,000 ₮</p>
            </v-col>
          </v-row>
          <v-row no-gutters class="mb-2">
            <v-col cols="8">
              <p class="mb-0 caption--text disabled--text">Нийтийн тээвэр</p>
            </v-col>
            <v-col cols="4">
              <p class="mb-0 secondary--text title1--text">4,000 ₮</p>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="8">
              <p class="mb-0 caption--text disabled--text">Ачааны машин</p>
            </v-col>
            <v-col cols="4">
              <p class="mb-0 secondary--text title1--text">8,000 ₮</p>
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
</style>
