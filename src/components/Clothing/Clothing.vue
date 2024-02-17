<template>
  <div class="clothing">
    <ClothingTitle :type="type" />
    <ClothingProducts :type="type"/>
  </div>
</template>

<script setup>

import ClothingProducts from "../ClothingProducts/ClothingProducts.vue";
import ClothingTitle from "../ClothingTitle/ClothingTitle.vue";
const props = defineProps(['type']);
const type = props.type;
</script>

<style lang="scss" scoped></style>
