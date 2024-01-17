<template>
<main class="main">
    <MainSlider/>
    <MainSaleProducts/>
    <MainArrivals/>
    <MainSaving/>
</main>
</template>

<script>
import MainSlider from '@/components/MainSlider.vue'
import MainSaleProducts from '@/components/MainSaleProducts.vue'
import MainArrivals from '@/components/MainArrivals.vue'
import MainSaving from '@/components/MainSaving.vue'

export default {
  components:{
    MainSlider,
    MainSaleProducts,
    MainArrivals,
    MainSaving
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>