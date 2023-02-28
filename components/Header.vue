<template>
  <header class="d-flex justify-space-between main-header pr-8 py-8">
    <div >
      <div class="mt-n1 d-flex">
        <v-btn
          depressed
          min-width="32"
          width="32"
          height="40"
          @click="active_navbar = !active_navbar"
        >
          <v-icon size="24">
            {{ active_navbar ? "ph-caret-left" : "ph-caret-right" }}
          </v-icon>
        </v-btn>
        <v-btn depressed min-width="40" height="40" width="40" class="ml-5">
          <v-img :src="require('@/assets/images/discard/direction_icon.svg')" />
        </v-btn>
      </div>
      <v-btn
        v-if="$route.path !== '/'"
        depressed
        width="32"
        min-width="32"
        height="40"
        class="mt-3"
        to="/"
      >
        <v-icon>ph-x</v-icon>
      </v-btn>
    </div>
    <div class="d-flex">
      <div class="d-flex align-center white rounded-sm mh-48">
        <div v-for="(icon, index) in icons" :key="`icon-${index}`">
          <v-btn
            @click="select(icon)"
            depressed
            min-width="40"
            width="40"
            height="40"
            color="transparent"
          >
            <v-img
              class="ma-4"
              width="24"
              :src="
                require(`@/assets/images/${icon}${
                  isActive(icon) ? '' : '_disabled'
                }.svg`)
              "
            />
          </v-btn>
        </div>
      </div>
      <v-avatar width="48" class="primary pa-2 ml-6">
        <v-img
          width="28"
          height="28"
          :src="require('@/assets/images/person.svg')"
        />
      </v-avatar>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    navbar: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      focused: [],
      icons: ["bus", "traffic", "parking", "prohibit"],
    };
  },
  methods: {
    select(value) {
      if (this.focused.includes(value)) {
        this.focused.splice(
          this.focused.findIndex((e) => e == value),
          1
        );
      } else {
        this.focused.push(value);
      }
    },
    isActive(value) {
      return this.focused.includes(value);
    },
  },
  computed: {
    active_navbar: {
      get() {
        return this.$props.navbar;
      },
      set(v) {
        this.$emit("update:navbar", v);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  width: 100%;
  position: absolute;
  z-index: 100000000;
}
.mh-48 {
  max-height: 48px;
}
</style>
