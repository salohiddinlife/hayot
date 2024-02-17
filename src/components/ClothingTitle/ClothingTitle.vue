<template>
  <div class="clothing__header">
    <div class="clothing__header-title">{{ type }}'s clothing</div> <!-- Use type directly -->
    <div class="clothing__header-type"></div>
  </div>
</template>

<script setup>

const { type } = defineProps(['type']);
</script>

<style lang="scss" scoped>
</style>