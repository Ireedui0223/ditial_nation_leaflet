<template>
  <v-app>
    <div
      class="full-height d-flex flex-column-reverse flex-sm-row flex-md-row flex-lg-row flex-xl-row"
    >
      <!-- mobile search bar-->
      <div
        v-show="$vuetify.breakpoint.xs"
        class="mobile-search-field surface_1 py-5 px-3"
      >
        <v-text-field
          hide-details
          outlined
          color="#E6E6E6"
          v-model="search_value"
        >
          <template v-slot:prepend-inner>
            <v-btn @click="$router.back()" icon class="mt-n2">
              <v-icon color="disabled">mdi-arrow-left</v-icon>
            </v-btn>
          </template>
          <template v-slot:append>
            <v-btn icon width="32" height="32" class="pa-1 mt-n1">
              <v-img :src="require('@/assets/images/direction_icon.svg')" />
            </v-btn>
          </template>
        </v-text-field>
        <div class="d-flex justify-space-between mt-4">
          <v-select
            class="button-small--text mr-2 no-shadow"
            placeholder="Улаанбаатар"
            solo
            hide-details
            v-model="select_search"
            :items="['ulaanbaatar', 'tuvaimag']"
          ></v-select>
          <v-select
            class="button-small--text ml-2 no-shadow"
            placeholder="Дүүрэг"
            solo
            hide-details
            v-model="select_district"
            :items="['ulaanbaatar', 'дүүрэг']"
          ></v-select>
        </div>
      </div>

      <!-- navigation  -->

      <v-slide-x-transition hide-on-leave>
        <div>
          <div
            v-show="$vuetify.breakpoint.xs"
            @click="drawer = !drawer"
            class="rounded-lg py-2 cursor-pointer"
          >
            <div class="drag_menu" />
          </div>
          <v-card
            class="overflow-y-auto px-lg-2 px-md-2 px-sm-2 py-2"
            color="surface_1"
            elevation="0"
            v-show="drawer"
            :min-width="$vuetify.breakpoint.xs ? '100%' : '370'"
            :max-width="$vuetify.breakpoint.xs ? '100%' : '370'"
            :max-height="$vuetify.breakpoint.xs ? '40vh' : '100%'"
          >
            <!-- mobile close bar -->

            <div>
              <!-- this logo won't display on mobile -->
              <div class="d-none d-sm-flex flex-column">
                <v-img
                  max-width="108"
                  :src="require('@/assets/images/logo.svg')"
                />
                <div class="py-4">
                  <v-text-field
                    hide-details
                    outlined
                    color="#E6E6E6"
                    v-model="search_value"
                  >
                    <template v-slot:prepend-inner>
                      <v-btn @click="$router.back()" icon class="mt-n2">
                        <v-icon color="disabled">mdi-arrow-left</v-icon>
                      </v-btn>
                    </template>
                    <template v-slot:append>
                      <v-btn icon width="32" height="32" class="pa-1 mt-n1">
                        <v-img
                          :src="require('@/assets/images/direction_icon.svg')"
                        />
                      </v-btn>
                    </template>
                  </v-text-field>
                </div>
                <v-divider />
              </div>

              <Nuxt />
            </div>
          </v-card>
        </div>
      </v-slide-x-transition>

      <div id="map-wrap">
        <Header v-if="!$vuetify.breakpoint.xs" :navbar.sync="drawer" />
        <LeafletMap />
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import LeafletMap from "../components/LeafletMap.vue";
export default {
  name: "DefaultLayout",
  components: {
    Header,
    LeafletMap,
  },
  data() {
    return {
      search_value: "",
      select_search: "",
      select_district: "",
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#map-wrap {
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 0 !important;
}

.full-height {
  height: 100vh;
  max-height: 100vh;
}
.drag_menu {
  position: relative;
  margin: auto;
  width: 60%;
  height: 4px;
  background-color: #e8e9ee;
}
.mobile-search-field {
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0px;
}
.no-shadow ::v-deep(.v-input__control) {
  .v-input__slot {
    box-shadow: none !important;
  }
}
</style>
