<template>
 <FilterTitle type="colors" />
  <div class="filter__colors" v-if="colors">
    <div class="filter__colors-cards">
      <div class="filter__colors-card"  v-for="data in colors" :key="data.id">
        <img :src="`/src/assets/img/colors/${data.uri}`" alt="" />
        <h2>{{ data.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const colors = [
  { title: "Purple",     uri: "1.svg" },
  { title: "Black",      uri: "2.svg" },
  { title: "Red",        uri: "3.svg" },
  { title: "Orange",     uri: "4.svg" },
  { title: "Navy",       uri: "5.svg" },
  { title: "White",      uri: "6.svg" },
  { title: "Broom",      uri: "7.svg" },
  { title: "Green",      uri: "8.svg" },
  { title: "Yellow",     uri: "9.svg" },
  { title: "Grey",       uri: "10.svg" },
  { title: "Pink",       uri: "11.svg" },
  { title: "Blue",       uri: "12.svg" },
];
</script>

<style lang="scss" scoped></style>
