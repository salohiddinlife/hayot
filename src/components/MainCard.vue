<template>

 <div
    class="main__saving-card"
    v-for="(product, i) in cards"
    :key="i"
    :class="{ 'large': i === 3 || i === 4 || i === 2 }"
    :style="{ 'background': `url(${product.image}) no-repeat center / cover` }"
  >
    <span v-show="product.stock" class="main__saving-card-span">{{ product.stock }}</span>
    <h1 class="main__saving-card-title" v-html="product.title"></h1>
    <p class="main__saving-card-descr">{{ product.descr }}</p>
    <p class="main__saving-card-dsc">{{ product.dsc }}</p>
    <img
      :src="product.url"
      alt=""
      class="main__saving-card-arrow"
    />
    <button class="main__saving-card-btn">SHOP NOW</button>
  </div>

</template>

<script setup>
defineProps(["cards"]);
</script>

<style lang="scss" scoped></style>
