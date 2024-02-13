<template>
  <main class="main">
    <Slider />
    <SaleProducts />
    <Arrivals />
    <Saving />
    <Fashion />
    <ForMens />
    <ForWomens />
    <Reviews />
  </main>
</template>

<script setup>
import Slider from "@/components/MainSlider/MainSlider.vue";
import SaleProducts from "@/components/MainSaleProducts/MainSaleProducts.vue";
import Arrivals from "@/components/MainArrivals/MainArrivals.vue";
import Saving from "@/components/MainSaving/MainSaving.vue";
import Fashion from "@/components/MainFashion/MainFashion.vue";
import ForMens from "@/components/MainForMens/MainForMens.vue";
import ForWomens from "@/components/MainForWomens/MainForWomens.vue";
import Reviews from "@/components/MainReviews/MainReviews.vue";
</script>

<style lang="scss" scoped></style>
