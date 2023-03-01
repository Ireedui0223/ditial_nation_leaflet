<template>
  <div class="px-1">
    <div class="d-flex mt-6">
      <v-img
        :src="require('@/assets/images/controller-icons/bus.svg')"
        width="32"
        height="32"
        max-width="32"
      />
      <p class="secondary--text h6--text ml-3">Ч:72</p>
    </div>
    <p class="disabled--text title1--text d-flex align-center my-4">
      <span>Хөгжим бүжиг</span>
      <v-icon color="disabled">mdi-menu-right</v-icon>
      <span> Богдхан амралт</span>
    </p>
    <v-img
      width="36"
      height="36"
      :src="require('@/assets/images/share.png')"
      class="mb-5"
    />
    <div class="mx-n3">
      <v-divider />
      <v-tabs v-model="tab" background-color="surface_1" class="px-4">
        <v-tab class="text-capitalize"> Эхлэх цэг </v-tab>
        <v-tab class="text-capitalize"> Эцсийн цэг </v-tab>
      </v-tabs>
      <v-divider />
      <v-tabs-items v-model="tab" class="mt-5 px-4">
        <v-tab-item>
          <div v-for="stop in stops" :key="stop.id">
            <nuxt-link
              :to="`/bus-stop/${stop.id}`"
              class="text-decoration-none"
            >
              <div class="d-flex align-center">
                <div v-if="stop.isEnd">
                  <img
                    class="end-location"
                    :src="require('@/assets/images/icons/end_location.png')"
                  />
                </div>
                <div
                  v-else-if="stop.isStart"
                  class="primary rounded-circle start-circle"
                ></div>
                <div v-else class="primary rounded-circle circle"></div>
                <div
                  class="d-flex align-center justify-center disabled rounded-sm bus-icon mr-2 ml-5"
                >
                  <img :src="require('@/assets/images/icons/bus_white.svg')" />
                </div>
                <p class="mb-0 secondary--text title1--text">{{ stop.name }}</p>
              </div>
            </nuxt-link>
            <div
              v-if="!stop.isEnd"
              class="line"
              :class="stop.passed ? 'primary' : 'disabled'"
            ></div>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div v-for="stop in stops" :key="stop.id">
            <nuxt-link
              :to="`/bus-stop/${stop.id}`"
              class="text-decoration-none"
            >
              <div class="d-flex align-center">
                <div v-if="stop.isEnd">
                  <img
                    class="end-location"
                    :src="require('@/assets/images/icons/end_location.png')"
                  />
                </div>
                <div
                  v-else-if="stop.isStart"
                  class="primary rounded-circle start-circle"
                ></div>
                <div v-else class="primary rounded-circle circle"></div>
                <div
                  class="d-flex align-center justify-center disabled rounded-sm bus-icon mr-2 ml-5"
                >
                  <img :src="require('@/assets/images/icons/bus_white.svg')" />
                </div>
                <p class="mb-0 secondary--text title1--text">{{ stop.name }}</p>
              </div>
            </nuxt-link>
            <div
              v-if="!stop.isEnd"
              class="line"
              :class="stop.passed ? 'primary' : 'disabled'"
            ></div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      stops: [
        {
          id: 1,
          isStart: true,
          isEnd: false,
          name: "Чулуун овоо",
          active: false,
          passed: false,
        },
        {
          id: 2,
          isStart: false,
          isEnd: false,
          name: "Зурагт",
          active: false,
          passed: false,
        },
        {
          id: 3,
          isStart: false,
          isEnd: false,
          name: "Багшийн дээд",
          active: false,
          passed: false,
        },
        {
          id: 4,
          isStart: false,
          isEnd: false,
          name: "Кино үйлдвэр",
          active: true,
          passed: true,
        },
        {
          id: 5,
          isStart: false,
          isEnd: false,
          name: "Жуков",
          active: true,
          passed: true,
        },
        {
          id: 6,
          isStart: false,
          isEnd: false,
          name: "Чингис өргөө",
          active: true,
          passed: true,
        },
        {
          id: 7,
          isStart: false,
          isEnd: true,
          name: "Хонхор",
          active: true,
          passed: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.line {
  height: 28px;
  width: 2px;
  margin-left: 5px;
}
.circle {
  width: 12px;
  height: 12px;
  border: 2px solid white;
}
.start-circle {
  width: 16px;
  height: 16px;
  border: 2px solid white;
  margin-left: -2px;
}
.bus-icon {
  width: 20px;
  height: 20px;
  padding: 4px 5px 4px 5px;
}
.end-location {
  margin: 2px -6px 2px -4px;
}
</style>
