<template>
  <div class="mx-n2">
    <v-img
      v-if="!$vuetify.breakpoint.xs"
      :src="require('@/assets/images/air_quality_detail.svg')"
    />
    <div class="px-4">
      <p
        v-if="!$vuetify.breakpoint.xs"
        class="secondary--text subtitle2--text my-5"
      >
        Агаарын чанар
      </p>
      <v-list-item class="px-0">
        <v-list-item-avatar size="54" color="traffic_4">
          <v-icon color="white">mdi-weather-windy</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <p class="mb-0 secondary--text h6--text">БЗД - Баруун 4 зам</p>
        </v-list-item-content>
      </v-list-item>

      <p class="mb-0 disabled--text body1--text">47.135257° 104.071223°</p>
    </div>
    <v-divider />
    <v-list class="pt-0 my-5 px-4">
      <div class="d-flex py-0 align-center mb-3">
        <v-icon size="24" color="primary" class="mr-3">mdi-fan</v-icon>
        <v-row no-gutters>
          <v-col cols="6">
            <p class="mb-0 disabled--text title1--text">Агаарын чанар</p>
          </v-col>
          <v-col cols="6">
            <p class="mb-0 success--text title1--text font-weight-bold">
              Хэвийн
            </p>
          </v-col>
        </v-row>
      </div>

      <div class="d-flex py-0 align-center mb-3">
        <v-icon size="24" color="primary" class="mr-3">mdi-clock</v-icon>
        <v-row no-gutters>
          <v-col cols="6">
            <p class="mb-0 disabled--text title1--text">Огноо</p>
          </v-col>
          <v-col cols="6">
            <p class="mb-0 secondary--text title1--text font-weight-bold">
              2022-08-03 16:15
            </p>
          </v-col>
        </v-row>
      </div>

      <div class="d-flex py-0 align-center mb-3">
        <v-icon size="24" color="primary" class="mr-3">mdi-thermometer</v-icon>
        <v-row no-gutters>
          <v-col cols="6">
            <p class="mb-0 disabled--text title1--text">Темпратур</p>
          </v-col>
          <v-col cols="6">
            <p class="mb-0 secondary--text title1--text font-weight-bold">
              20.8°C
            </p>
          </v-col>
        </v-row>
      </div>

      <div class="d-flex py-0 align-center mb-3">
        <v-icon size="24" color="primary" class="mr-3"
          >mdi-weather-windy</v-icon
        >
        <v-row no-gutters>
          <v-col cols="6">
            <p class="mb-0 disabled--text title1--text">Салхи</p>
          </v-col>
          <v-col cols="6">
            <p class="mb-0 secondary--text title1--text font-weight-bold">
              1 м/с
            </p>
          </v-col>
        </v-row>
      </div>
    </v-list>
    <v-divider />
    <div class="px-4">
      <v-row no-gutters class="my-3">
        <v-col cols="2">
          <p class="mb-0 text-center title1--text secondary--text text-no-wrap">
            Элемент
          </p>
        </v-col>
        <v-col cols="6">
          <p class="mb-0 text-center title1--text secondary--text text-no-wrap">
            Үзүүлэлт
          </p></v-col
        >
        <v-col cols="2">
          <p class="mb-0 text-center title1--text secondary--text text-no-wrap">
            Доод
          </p>
        </v-col>
        <v-col cols="2">
          <p class="mb-0 text-center title1--text secondary--text text-no-wrap">
            Дээд
          </p>
        </v-col>
      </v-row>
      <v-row no-gutters v-for="element in elementList" :key="element.id">
        <v-col cols="2" class="d-flex align-center">
          <p class="mb-0">{{ element.name }}</p>
        </v-col>
        <v-col cols="6">
          <div
            class="d-flex align-end justify-center mt-3"
            style="height: 40px"
          >
            <!-- <div
            v-for="(item, index) in valueList.length > 9
              ? valueList.slice(0, 10)
              : valueList"
            :key="index"
          > -->
            <div
              v-for="(item, index) in element.valueList.filter((el, index) =>
                index % 2 == 0 ? el : ''
              )"
              :key="index"
            >
              <div
                style="width: 10px; margin-right: 3px"
                :style="`background-color:${item.color}; height: ${
                  (item.y / element.max) * 40
                }px`"
              ></div>
            </div>
          </div>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
          <p class="mb-0">{{ element.min }}</p>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
          <p class="mb-0">{{ element.max }}</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elementList: [
        {
          id: "pm10",
          name: "PM10",
          detail: "PM 10 тоосонцор",
          unit: "АЧИ",
          standard: null,
          current: 50,
          currentColor: "#00e400",
          min: 10,
          minColor: "#00e400",
          max: 91,
          maxColor: "#ffff00",
          valueList: [
            {
              y: 10,
              color: "#00e400",
            },
            {
              y: 11,
              color: "#00e400",
            },
            {
              y: 13,
              color: "#00e400",
            },
            {
              y: 31,
              color: "#00e400",
            },
            {
              y: 52,
              color: "#ffff00",
            },
            {
              y: 73,
              color: "#ffff00",
            },
            {
              y: 79,
              color: "#ffff00",
            },
            {
              y: 88,
              color: "#ffff00",
            },
            {
              y: 91,
              color: "#ffff00",
            },
            {
              y: 88,
              color: "#ffff00",
            },
            {
              y: 76,
              color: "#ffff00",
            },
            {
              y: 65,
              color: "#ffff00",
            },
            {
              y: 55,
              color: "#ffff00",
            },
            {
              y: 47,
              color: "#00e400",
            },
            {
              y: 47,
              color: "#00e400",
            },
            {
              y: 47,
              color: "#00e400",
            },
            {
              y: 53,
              color: "#ffff00",
            },
            {
              y: 63,
              color: "#ffff00",
            },
            {
              y: 74,
              color: "#ffff00",
            },
            {
              y: 72,
              color: "#ffff00",
            },
            {
              y: 64,
              color: "#ffff00",
            },
            {
              y: 57,
              color: "#ffff00",
            },
            {
              y: 56,
              color: "#ffff00",
            },
            {
              y: 50,
              color: "#00e400",
            },
          ],
        },
        {
          id: "pm25",
          name: "PM2.5",
          detail: "PM 2.5 тоосонцор",
          unit: "АЧИ",
          standard: null,
          current: 46,
          currentColor: "#00e400",
          min: 10,
          minColor: "#00e400",
          max: 122,
          maxColor: "#ff7e00",
          valueList: [
            {
              y: 10,
              color: "#00e400",
            },
            {
              y: 11,
              color: "#00e400",
            },
            {
              y: 13,
              color: "#00e400",
            },
            {
              y: 37,
              color: "#00e400",
            },
            {
              y: 87,
              color: "#ffff00",
            },
            {
              y: 114,
              color: "#ff7e00",
            },
            {
              y: 118,
              color: "#ff7e00",
            },
            {
              y: 121,
              color: "#ff7e00",
            },
            {
              y: 122,
              color: "#ff7e00",
            },
            {
              y: 119,
              color: "#ff7e00",
            },
            {
              y: 110,
              color: "#ff7e00",
            },
            {
              y: 102,
              color: "#ff7e00",
            },
            {
              y: 82,
              color: "#ffff00",
            },
            {
              y: 61,
              color: "#ffff00",
            },
            {
              y: 62,
              color: "#ffff00",
            },
            {
              y: 60,
              color: "#ffff00",
            },
            {
              y: 79,
              color: "#ffff00",
            },
            {
              y: 102,
              color: "#ff7e00",
            },
            {
              y: 111,
              color: "#ff7e00",
            },
            {
              y: 105,
              color: "#ff7e00",
            },
            {
              y: 91,
              color: "#ffff00",
            },
            {
              y: 62,
              color: "#ffff00",
            },
            {
              y: 60,
              color: "#ffff00",
            },
            {
              y: 46,
              color: "#00e400",
            },
          ],
        },
        {
          id: "co",
          name: "CO",
          detail: "Нүүрстөрөгчийн дутуу исэл",
          unit: "АЧИ",
          standard: null,
          current: 11,
          currentColor: "#00e400",
          min: 5,
          minColor: "#00e400",
          max: 21,
          maxColor: "#00e400",
          valueList: [
            {
              y: 12,
              color: "#00e400",
            },
            {
              y: 10,
              color: "#00e400",
            },
            {
              y: 8,
              color: "#00e400",
            },
            {
              y: 5,
              color: "#00e400",
            },
            {
              y: 5,
              color: "#00e400",
            },
            {
              y: 7,
              color: "#00e400",
            },
            {
              y: 10,
              color: "#00e400",
            },
            {
              y: 12,
              color: "#00e400",
            },
            {
              y: 15,
              color: "#00e400",
            },
            {
              y: 17,
              color: "#00e400",
            },
            {
              y: 19,
              color: "#00e400",
            },
            {
              y: 20,
              color: "#00e400",
            },
            {
              y: 21,
              color: "#00e400",
            },
            {
              y: 21,
              color: "#00e400",
            },
            {
              y: 21,
              color: "#00e400",
            },
            {
              y: 20,
              color: "#00e400",
            },
            {
              y: 19,
              color: "#00e400",
            },
            {
              y: 18,
              color: "#00e400",
            },
            {
              y: 18,
              color: "#00e400",
            },
            {
              y: 17,
              color: "#00e400",
            },
            {
              y: 16,
              color: "#00e400",
            },
            {
              y: 14,
              color: "#00e400",
            },
            {
              y: 12,
              color: "#00e400",
            },
            {
              y: 11,
              color: "#00e400",
            },
          ],
        },
        {
          id: "so2",
          name: "SO2",
          detail: "Хүхрийн давхар исэл",
          unit: "АЧИ",
          standard: null,
          current: 23,
          currentColor: "#00e400",
          min: 5,
          minColor: "#00e400",
          max: 55,
          maxColor: "#ffff00",
          valueList: [
            {
              y: 5,
              color: "#00e400",
            },
            {
              y: 7,
              color: "#00e400",
            },
            {
              y: 9,
              color: "#00e400",
            },
            {
              y: 19,
              color: "#00e400",
            },
            {
              y: 35,
              color: "#00e400",
            },
            {
              y: 54,
              color: "#ffff00",
            },
            {
              y: 55,
              color: "#ffff00",
            },
            {
              y: 54,
              color: "#ffff00",
            },
            {
              y: 47,
              color: "#00e400",
            },
            {
              y: 34,
              color: "#00e400",
            },
            {
              y: 40,
              color: "#00e400",
            },
            {
              y: 30,
              color: "#00e400",
            },
            {
              y: 35,
              color: "#00e400",
            },
            {
              y: 30,
              color: "#00e400",
            },
            {
              y: 39,
              color: "#00e400",
            },
            {
              y: 28,
              color: "#00e400",
            },
            {
              y: 28,
              color: "#00e400",
            },
            {
              y: 30,
              color: "#00e400",
            },
            {
              y: 41,
              color: "#00e400",
            },
            {
              y: 46,
              color: "#00e400",
            },
            {
              y: 39,
              color: "#00e400",
            },
            {
              y: 37,
              color: "#00e400",
            },
            {
              y: 32,
              color: "#00e400",
            },
            {
              y: 23,
              color: "#00e400",
            },
          ],
        },
        {
          id: "no2",
          name: "NO2",
          detail: "Азотын давхар исэл",
          unit: "АЧИ",
          standard: null,
          current: 13,
          currentColor: "#00e400",
          min: 0,
          minColor: "#00e400",
          max: 38,
          maxColor: "#00e400",
          valueList: [
            {
              y: 0,
              color: "#00e400",
            },
            {
              y: 2,
              color: "#00e400",
            },
            {
              y: 5,
              color: "#00e400",
            },
            {
              y: 19,
              color: "#00e400",
            },
            {
              y: 28,
              color: "#00e400",
            },
            {
              y: 32,
              color: "#00e400",
            },
            {
              y: 37,
              color: "#00e400",
            },
            {
              y: 38,
              color: "#00e400",
            },
            {
              y: 38,
              color: "#00e400",
            },
            {
              y: 35,
              color: "#00e400",
            },
            {
              y: 35,
              color: "#00e400",
            },
            {
              y: 33,
              color: "#00e400",
            },
            {
              y: 30,
              color: "#00e400",
            },
            {
              y: 30,
              color: "#00e400",
            },
            {
              y: 31,
              color: "#00e400",
            },
            {
              y: 27,
              color: "#00e400",
            },
            {
              y: 27,
              color: "#00e400",
            },
            {
              y: 24,
              color: "#00e400",
            },
            {
              y: 23,
              color: "#00e400",
            },
            {
              y: 21,
              color: "#00e400",
            },
            {
              y: 20,
              color: "#00e400",
            },
            {
              y: 19,
              color: "#00e400",
            },
            {
              y: 18,
              color: "#00e400",
            },
            {
              y: 13,
              color: "#00e400",
            },
          ],
        },
        {
          id: "o3",
          name: "O3",
          detail: "Озон",
          unit: "АЧИ",
          standard: null,
          current: 38,
          currentColor: "#00e400",
          min: 13,
          minColor: "#00e400",
          max: 79,
          maxColor: "#ffff00",
          valueList: [
            {
              y: 62,
              color: "#ffff00",
            },
            {
              y: 71,
              color: "#ffff00",
            },
            {
              y: 77,
              color: "#ffff00",
            },
            {
              y: 79,
              color: "#ffff00",
            },
            {
              y: 76,
              color: "#ffff00",
            },
            {
              y: 69,
              color: "#ffff00",
            },
            {
              y: 60,
              color: "#ffff00",
            },
            {
              y: 50,
              color: "#00e400",
            },
            {
              y: 40,
              color: "#00e400",
            },
            {
              y: 31,
              color: "#00e400",
            },
            {
              y: 22,
              color: "#00e400",
            },
            {
              y: 17,
              color: "#00e400",
            },
            {
              y: 14,
              color: "#00e400",
            },
            {
              y: 13,
              color: "#00e400",
            },
            {
              y: 13,
              color: "#00e400",
            },
            {
              y: 13,
              color: "#00e400",
            },
            {
              y: 14,
              color: "#00e400",
            },
            {
              y: 14,
              color: "#00e400",
            },
            {
              y: 16,
              color: "#00e400",
            },
            {
              y: 18,
              color: "#00e400",
            },
            {
              y: 21,
              color: "#00e400",
            },
            {
              y: 26,
              color: "#00e400",
            },
            {
              y: 32,
              color: "#00e400",
            },
            {
              y: 38,
              color: "#00e400",
            },
          ],
        },
      ],
    };
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
