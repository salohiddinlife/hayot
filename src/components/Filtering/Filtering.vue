<template>
<aside class="filter">
<FilterHeader/>
<FilterCategory/>
<FilterPricing/>
<FilterColors/>
<FilterSizing/>
<FilterStyle/>
</aside>
</template>

<script setup>
import FilterColors from '@/components/FilterColors/FilterColors.vue'
import FilterSizing from '@/components/FilterSizing/FilterSizing.vue'
import FilterStyle from '@/components/FilterStyle/FilterStyle.vue'
import FilterPricing from '@/components/FilterPricing/FilterPricing.vue'
import FilterCategory from '@/components/FilterCategory/FilterCategory.vue'
import FilterHeader from '@/components/FilterHeader/FilterHeader.vue'

</script>

<style lang="scss" scoped>

</style>