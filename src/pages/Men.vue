<template>
<div class="DIV">
    <aside class="filter">
    <Filtering type="men"/>
</aside>
<main class="main__clothing-men">
    <Clothing :type="type"/>
</main>
</div>
</template>

<script setup>
import Filtering from '@/components/Filtering/Filtering.vue'
import Clothing from '@/components/Clothing/Clothing.vue'
const type = 'men';
</script>

<style lang="scss" scoped>
.DIV{
    display: flex;
    flex-wrap: wrap;
}
</style>