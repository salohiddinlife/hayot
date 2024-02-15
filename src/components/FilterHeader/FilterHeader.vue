<template>
    <div class="filter__header filter__title" @click="filterStatus" >
        <h2>Filter</h2>
        <img src="@/assets/img/filter.svg" alt="">
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

let isHeaderActive = false;

const filterStatus = () => {
    isHeaderActive = !isHeaderActive;
    console.log(isHeaderActive);
    emits('isHeaderActive', isHeaderActive);
};

const emits = defineEmits(['isHeaderActive']);
</script>
<style lang="scss" scoped>
.filter__header{
    border-bottom: none;
}
</style>