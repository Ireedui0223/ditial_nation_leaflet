<template>
  <div class="px-2">
    <v-text-field
      placeholder="Автобусны буудал, дугаар хайх"
      hide-details
      outlined
      clearable
      color="secondary"
      v-model="search_value"
      append-icon="mdi-magnify"
      class="rounded-lg my-5 custom-search"
      @focus="search_focused = true"
    />
    <!-- @focusout="search_focused = false" -->
    <div v-show="!search_focused">
      <div class="d-flex justify-space-between mt-4">
        <v-select
          class="button-small--text mr-2 no-shadow select-border"
          placeholder="Улаанбаатар"
          solo
          rounded
          flat
          hide-details
          height="40"
          color="secondary"
          v-model="select_start"
          :items="['ulaanbaatar', 'tuvaimag']"
        ></v-select>
        <v-select
          class="button-small--text ml-2 no-shadow select-border"
          placeholder="Дүүрэг"
          solo
          rounded
          flat
          hide-details
          height="40"
          color="secondary"
          v-model="select_end"
          :items="['ulaanbaatar', 'дүүрэг']"
        ></v-select>
      </div>
    </div>
    <v-list v-show="!search_focused">
      <v-list-item
        v-for="bus in buses || []"
        :key="bus.id"
        class="px-0"
        :to="`/bus/${bus.id}`"
      >
        <v-list-item-avatar size="32">
          <v-img :src="require('@/assets/images/controller-icons/bus.svg')" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="secondary--text button-large--text">
            {{ bus.title }}
          </v-list-item-title>
          <v-list-item-subtitle
            style="text-overflow: ellipsis"
            class="disabled--text title1--text d-flex align-center"
          >
            <span>{{ bus.current_loc }}</span>
            <v-icon>mdi-menu-right</v-icon>
            <span> {{ bus.current_dist }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <p class="mb-0 primary--text caption--text">
            <v-icon size="8" color="primary">mdi-circle</v-icon> 10 мин
          </p>
          <p class="mb-0 disabled--text caption--text">2 буудал</p>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-list v-show="search_focused" class="py-0">
      <v-list-item class="px-0" to="/bus-stop/1">
        <v-list-item-avatar size="20" class="mr-2">
          <v-img :src="require('@/assets/images/bus.svg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content> Барилгачдын талбай </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { REQUEST_ID } from "@/utils/constants";
export default {
  data() {
    return {
      search_focused: false,
      search_value: "",
      select_start: "",
      select_end: "",
    };
  },
};
</script>
A
<style lang="scss" scoped>
.custom-search ::v-deep(.v-input__control) {
  .v-input__slot {
    fieldset {
      border: 1px solid #e6e6e6;
    }
  }
}
.select-border ::v-deep(.v-input__control) {
  border: 2px solid #e5e7ea;
}
</style>
