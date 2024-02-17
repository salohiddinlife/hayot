<template>
<Filtering type="men"/>
<main class="main main__clothing">
    <Clothing :type="type"/>
</main>
</template>

<script setup>
import Filtering from '@/components/Filtering/Filtering.vue'
import Clothing from '@/components/Clothing/Clothing.vue'
const type = 'men';
</script>

<style lang="scss" scoped>
</style>