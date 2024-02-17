<template>
  <div class="clothing__header">
    <div class="clothing__header-title">{{ type }}'s clothing</div>
    <!-- unnecesary -->
    <!-- <div class="clothing__header-type">
      <span class="clothing__header-type-new">New</span>
      <span class="clothing__header-type-rec">Recommended</span>
      
    </div> -->
  </div>
</template>

<script setup>

const { type } = defineProps(['type']);
</script>

<style lang="scss" scoped>
</style>