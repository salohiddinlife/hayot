<template>
  <section class="footer__socials">
    <div class="footer__socials-box">
      <div v-for="(item, index) in socials" :key="index">
        <img :src="`/src/assets/img/${item.url}`" :class="item.class" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
const socials = [
  { class: "social__icon", url: "facebook.svg" },
  { class: "social__icon", url: "instagram.svg" },
  { class: "social__icon", url: "x.svg" },
  { class: "social__icon", url: "in.svg" },
];
</script>

<style scoped>
/* Add your scoped styles here */
</style>
