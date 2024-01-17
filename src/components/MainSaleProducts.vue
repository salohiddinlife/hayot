<template>
<section class="main__sale">
    <div class="container">
        <div class="main__sale-card" v-for="(product) in sales">
            <img :src="product.url" alt="img" class="main__sale-img">
        <div class="main__sale-text">
            <p class="main__sale-first">{{ product.first }}</p>
        <h2 class="main__sale-title" v-html="product.title"></h2>
        <p class="main__sale-second">{{ product.second }}</p>
        <a class="main__sale-link" href="#">{{ product.link }}</a>
        </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    setup () {
        const sales = [{
    id:1,
    url:'./src/assets/img/left__img.png',
    first:"Low Price",
    title:"High Coziness",
    second:"UPTO 50% OFF",
    link:"Explore Items"
},{
    id:2,
    url:'./src/assets/img/right__img.png',
    first:"Beyoung Presents",
    title:"Breezy Summer <br> Style",
    second:"UPTO 50% OFF",
    link:"Explore Items"
}]

        return {
            sales
        }
    },
}
</script>

<style lang="scss" scoped>
// 486
</style>