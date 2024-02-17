<template>
<div class="clothing__products">
    
</div>
</template>

<script setup>
import { useProducts } from "@/store/products";
const props = defineProps(['type'])
const products = useProducts()
products.getProducts({ type: props.type })
</script>

<style lang="scss" scoped>

</style>