<template>
  <div class="mx-n2">
    <v-img v-if="!$vuetify.breakpoint.xs" :src="require('@/assets/images/parking-single.png')"></v-img>
    <div class="px-4">
      <p v-if="!$vuetify.breakpoint.xs" class="secondary--text subtitle2--text my-5">Зогсоол</p>
      <div class="d-flex justify-space-between mb-4">
        <span>Паркийн зогсоол</span>
        <v-chip color="success" class="px-2 py-1">
          <v-img
            :src="require('@/assets/images/icons/ring.svg')"
            width="8"
            height="8"
            max-width="8"
            class="mr-1"
          ></v-img>
          <!-- <v-icon size="8" color="white" class="mr-1">mdi-circle-double</v-icon> -->
          <span class="caption--text">сул 20</span>
        </v-chip>
      </div>
      <p class="mb-0 disabled--text body1--text">47.135257° 104.071223°</p>
      <div class="mb-5 mt-5">
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
    <v-tabs v-model="tab" background-color="surface_1" class="px-4">
      <v-tab class="text-capitalize"> Ерөнхий </v-tab>
      <v-tab class="text-capitalize"> Үнэлгээ </v-tab>
    </v-tabs>
    <v-divider />
    <v-tabs-items v-model="tab" class="mt-5 px-4">
      <v-tab-item>
        <v-list class="pt-0 pb-3">
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
                Сүхбаатар дүүрэг 11-р хороо, Сүхбаатар дүүрэг 11-р хороо
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
            <v-icon color="traffic_4" size="24" class="mr-3">mdi-clock</v-icon>
            <p class="mb-0 secondary--text title1--text">08:00 - 23:00</p>
          </div>
          <div class="d-flex align-start mb-5">
            <v-img
              :src="require('@/assets/images/icons/car.svg')"
              width="24"
              height="24"
              max-width="24"
            />
            <div class="ml-3 w-100">
              <p class="mb-3 secondary--text title1--text">Багтаамж</p>
              <v-row no-gutters class="mb-2">
                <v-col cols="8">
                  <p class="mb-0 caption--text disabled--text">Нийт багтаамж</p>
                </v-col>
                <v-col cols="4">
                  <p class="mb-0 secondary--text title1--text">80</p>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="8">
                  <p class="mb-0 caption--text disabled--text">
                    Тусгай хэрэгцээт
                  </p>
                </v-col>
                <v-col cols="4">
                  <p class="mb-0 secondary--text title1--text">5</p>
                </v-col>
              </v-row>
            </div>
          </div>

          <div class="d-flex align-center mb-5">
            <v-icon color="primary">mdi-phone</v-icon>
            <p class="mb-0 ml-3 secondary--text title1--text">99006655</p>
          </div>
          <div class="d-flex align-start">
            <v-icon size="24" color="primary" class="mr-3"
              >mdi-credit-card</v-icon
            >
            <div class="w-100">
              <p class="mb-3 secondary--text title1--text">Үнэ</p>
              <v-row no-gutters class="mb-2">
                <v-col cols="8">
                  <p class="mb-0 caption--text disabled--text">1 цаг</p>
                </v-col>
                <v-col cols="4">
                  <p class="mb-0 secondary--text title1--text">2,000 ₮</p>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="8">
                  <p class="mb-0 caption--text disabled--text">2 цаг</p>
                </v-col>
                <v-col cols="4">
                  <p class="mb-0 secondary--text title1--text">4,000 ₮</p>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-list>
      </v-tab-item>
      <v-tab-item> </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}
</style>
