<template>
    <section class="main__arrivals">
        <div class="main__arrivals-title">
    <span class="main__arrivals-span"></span>
    <h2 class="main__arrivals-text">New Arrival</h2>
    </div>
    <br>
    <!-- arrows -->
    <!-- <img class="img" src="./assets/arrow__left.svg" alt="img"> -->
        <div class="container">
        <div class="main__arrivals-cards">
            <div class="main__arrivals-card" v-for="(product) in newArrivals">
                <img :src="product.url" alt="">
                <h2 v-html="product.title"></h2>
            </div>
        </div>
        </div>
        <!-- arrows -->
        <!-- <img class="img" src="./assets/arrow__right.svg" alt="img"> -->
    </section>
</template>

<script>
export default {
    setup () {
        const newArrivals = [
        {
         title:'Knitted Joggers'
         ,url:'./src/assets/img/first.png' 
        },
        {
         title:'Full Sleeve'  
         ,url:'./src/assets/img/second.png' 
        },
        {
         title:'Active T-Shirts'
         ,url:'./src/assets/img/third.png'   
        },
        {
         title:'Urban Shirts'
         ,url:'./src/assets/img/forth.png'   
        }]

        return { 
            newArrivals
         }
    }
}
</script>

<style lang="scss" scoped>

</style>