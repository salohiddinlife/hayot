<template>
 <FilterTitle type="size" />
  <div class="filter__sizing">
    <div class="filter__sizing-sizes" >
        <div class="filter__sizing-size" v-for="data in sizes" :key="data.id">
            <h2>{{data.size}}</h2>
        </div>
    </div>
  </div>
</template>

<script setup>
const sizes = [
    {size:"xxs"},
    {size:"xs"},
    {size:"s"},
    {size:"m"},
    {size:"l"},
    {size:"xl"},
    {size:"xxl"},
    {size:"3xl"},
    {size:"4xl"},
]
</script>

<style lang="scss" scoped></style>
