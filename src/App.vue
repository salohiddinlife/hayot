<template>
    <h1>{{ categoriesStore.categories }}</h1>
  <div class="wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

import { categoriesStore } from "./store/categories";
import { ref } from "vue";
 console.log(categoriesStore);
</script>

<style lang="scss" scoped></style>
