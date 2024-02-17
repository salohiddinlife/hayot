<template>
  <div class="clothing__products">
    <div
      class="clothing__products-item"
      v-for="(item, idx) in content"
      :key="idx"
    >
      <span class="clothing__products-item-heart" @click="liked()">
        <img src="/src/assets/img/heart.svg" v-if="!isLiked"
      />
      <img src="/src/assets/img/heart-solid.svg" v-else alt="">
      </span>
      <img class="clothing__products-item-img" :src="item.thumbnail" alt="" />
      <div class="clothing__products-item-descr">
        <div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.brand }}’s Brand</p>
          <span class="product__status">
            <img
              :src="
                item.stock > 0
                  ? '/src/assets/img/checked.svg'
                  : '/src/assets/img/not_checked.svg'
              "
            />
            <h3>{{ item.stock > 0 ? "in stock" : "out of stock" }}</h3></span
          >
        </div>
        <span class="clothing__products-item-price"
          ><p>${{ item.price }}</p></span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProducts } from "@/store/products";
import { ref } from 'vue';

const isLiked = ref(false);

const liked = () => {
    isLiked.value = !isLiked;
};
const props = defineProps(["type"]);
const products = useProducts();
products.getProducts();
const content = computed(() => products.regProducts);
</script>

<style lang="scss" scoped>
.product__status {
  display: flex;
  align-items: center;
  gap: 5px;
  & img{
    height: 14px;
    width: 14px;
  }
  & h3 {
    color:rgb(33, 184, 33);
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }
}
</style>
