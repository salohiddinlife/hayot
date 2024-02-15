<template>
  <div class="filter__title">
    {{ props.type }}
    <img src="/src/assets/img/category__arrow.svg" alt="" />
  </div>
</template>

<script setup>
const props = defineProps(["type"]);
</script>

<style lang="scss" scoped>
</style>
