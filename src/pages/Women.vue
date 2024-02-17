<template>
<div class="DIV">
    <aside class="filter">
    <Filtering type="women"/>
</aside>
<main class="main__clothing-women">
    <Clothing :type="type"/>
</main>
</div>
</template>

<script setup>
import Filtering from '@/components/Filtering/Filtering.vue'
import Clothing from '@/components/Clothing/Clothing.vue'
const type = 'women';
</script>

<style lang="scss" scoped>
.DIV{
    display: flex;
    flex-wrap: wrap;
}
</style>