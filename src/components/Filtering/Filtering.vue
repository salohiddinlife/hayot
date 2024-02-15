<template>
    <aside class="filter">
        <FilterHeader @isHeaderActive="updateIsHeaderActive" />
        <div class="filter__content" v-if="isHeaderActive">
            <FilterCategory />
            <FilterPricing />
            <FilterColors />
            <FilterSizing />
            <FilterStyle />
        </div>
    </aside>
</template>

<script setup>
import FilterColors from "@/components/FilterColors/FilterColors.vue";
import FilterSizing from "@/components/FilterSizing/FilterSizing.vue";
import FilterStyle from "@/components/FilterStyle/FilterStyle.vue";
import FilterPricing from "@/components/FilterPricing/FilterPricing.vue";
import FilterCategory from "@/components/FilterCategory/FilterCategory.vue";
import FilterHeader from "@/components/FilterHeader/FilterHeader.vue";
import { ref } from 'vue';

const isHeaderActive = ref(false);

const updateIsHeaderActive = (newValue) => {
    console.log('isHeaderActive updated in parent:', newValue);
    isHeaderActive.value = newValue;
};
</script>

<style lang="scss" scoped></style>
