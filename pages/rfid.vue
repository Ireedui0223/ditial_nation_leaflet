<template>
  <div class="px-1">
    <div class="mx-n3">
      <v-img :src="require('@/assets/images/rfid-cover.png')"></v-img>
    </div>
    <h3 class="secondary--text subtitle2--text my-5">RFID</h3>
    <div class="d-flex mb-5">
      <div>
        <v-img
          height="32"
          width="32"
          :src="require('@/assets/images/controller-icons/rfid.svg')"
        />
      </div>
      <p class="secondary--text h6--text ml-4 mb-0">RFID</p>
    </div>
    <v-btn icon depressed class="mb-5">
      <v-img
        width="36"
        height="36"
        :src="require('@/assets/images/share.png')"
      />
    </v-btn>
    <div class="mx-n2">
      <v-divider />
    </div>
    <v-list>
      <v-list-item class="align-start px-2">
        <v-img
          width="24"
          max-width="24"
          height="24"
          class="mr-3"
          :src="require('@/assets/images/rfid/road.svg')"
        />
        <v-list-item-content class="py-0">
          <v-list-item-title class="mb-3 secondary--text title1--text"
            >Зам</v-list-item-title
          >
          <v-list-item-subtitle>
            <div class="d-flex justify-space-between mb-1">
              <p class="mb-0">Нэр</p>
              <p class="secondary--text subtitle2--text mb-0">Нарны зам</p>
            </div>
            <div class="d-flex justify-space-between">
              <p class="mb-0">Дугаар</p>
              <p class="secondary--text title1--text">11</p>
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="align-start px-2">
        <v-img
          width="24"
          max-width="24"
          height="24"
          class="mr-3"
          :src="require('@/assets/images/rfid/speed.svg')"
        />
        <div class="d-flex justify-space-between mb-1 w-100 align-center">
          <p class="mb-0">Хурд</p>
          <p class="secondary--text subtitle2--text mb-0">12 км/цаг</p>
        </div>
      </v-list-item>

      <v-list-item class="align-start px-2">
        <v-img
          width="24"
          max-width="24"
          height="24"
          class="mr-3"
          :src="require('@/assets/images/rfid/calendar.svg')"
        />
        <div class="d-flex justify-space-between mb-1 w-100 align-center">
          <p class="mb-0">Шинэчлэгдсэн огноо</p>
          <p class="secondary--text subtitle2--text mb-0">2022.10.18</p>
        </div>
      </v-list-item>

      <v-list-item class="align-center px-2">
        <v-img
          width="24"
          max-width="24"
          height="24"
          class="mr-3"
          :src="require('@/assets/images/rfid/directions.svg')"
        />
        <div class="d-flex justify-space-between mb-1 w-100 align-center">
          <p class="mb-0">Чиглэл</p>
          <p class="secondary--text subtitle2--text mb-0 mx-40">
            Маршал хойшоо чиглэл
          </p>
        </div>
      </v-list-item>

      <v-list-item class="align-start px-2">
        <v-img
          width="24"
          max-width="24"
          height="24"
          class="mr-3"
          :src="require('@/assets/images/rfid/car.svg')"
        />
        <div class="d-flex justify-space-between mb-1 w-100 align-center">
          <p class="mx-60 mb-0">Бүртгэгдсэн тээврийн хэрэгсэлийн тоо</p>
          <p class="mx-40 secondary--text title1--text mb-0">50</p>
        </div>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}
.mx-40 {
  max-width: 30%;
}
.mx-60 {
  max-width: 60%;
}
</style>
