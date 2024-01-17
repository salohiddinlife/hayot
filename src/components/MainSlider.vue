<template>
 <section class="main__slider">
    <img src="@/assets/img/slide.svg" alt="" class="main__slide" >
<div class="container">
    <!-- its sign for slider -->
    <img class="main__slide-left" src="@/assets/img/Left.svg" alt="">
    <p class="main__slide-text">T-shirt / Tops</p>
    <h2 class="main__slide-title">Summer <br> Value Pack</h2>
    <p class="main__slide-text">cool / colorful / comfy</p>
    <a class="fancy" style="max-width:250px;" href="#">
  <span class="top-key"></span>
  <span class="text">Shop Now</span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</a>
    <!-- its sign for slider -->
<img class="main__slide-right" src="@/assets/img/Right.svg" alt="">
</div>
 </section>
</template>

<script>
export default {
    components: {

    },
    setup() {
      
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
 .swiper {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>