<template>
  <div class="mx-n2" v-if="quality_data">
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
          <p class="mb-0 secondary--text h6--text">
            {{ quality_data.rawAddress }}
          </p>
        </v-list-item-content>
      </v-list-item>

      <p class="my-4 disabled--text body1--text">47.135257° 104.071223°</p>
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
              {{ quality_data.type }}
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
              {{ quality_data.lastUpdated }}
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
      <v-row
        no-gutters
        v-for="element in quality_data.elementList || []"
        :key="element.id"
      >
        <v-col cols="2" class="d-flex align-center">
          <p class="mb-0">{{ element.name }}</p>
        </v-col>
        <v-col cols="6">
          <div
            class="d-flex align-end justify-center mt-3"
            style="height: 40px"
          >
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
      quality_data: this.$store.state.pageData,
    };
  },
  mounted() {
    console.log(this.quality_data);
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
