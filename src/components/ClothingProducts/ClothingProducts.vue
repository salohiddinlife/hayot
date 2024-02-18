<template>
  <div class="clothing__products">
    <div
      class="clothing__products-item"
      v-for="(item, idx) in content"
      :key="idx"
    >
      <span class="clothing__products-item-heart" @click="liked(item)">
        <Transition name="bounce">
          <img src="/src/assets/img/heart.svg" v-if="!item.liked" />
          <img src="/src/assets/img/heart-solid.svg" v-else alt="" />
        </Transition>
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
            <h3>{{ item.stock > 0 ? "in stock" : "out of stock" }}</h3>
          </span>
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
import { ref, onMounted } from "vue";

const products = useProducts();
const content = ref([]);

const loadProducts = async () => {
  await products.getProducts();
  content.value = products.regProducts.map(product => ({
    ...product,
    liked: false
  }));
};

const liked = (item) => {
  item.liked = !item.liked;
  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem('likedProducts', JSON.stringify(content.value));
};

onMounted(() => {
  loadProducts();
  const likedProducts = JSON.parse(localStorage.getItem('likedProducts'));
  if (likedProducts && Array.isArray(likedProducts)) { 
    content.value.forEach((item, index) => {
      if (likedProducts[index] && typeof likedProducts[index].liked === 'boolean') {
        item.liked = likedProducts[index].liked;
      }
    });
  }
});
</script>


<style lang="scss" scoped>
.product__status {
  display: flex;
  align-items: center;
  gap: 5px;
  & img {
    height: 14px;
    width: 14px;
  }
  & h3 {
    color: rgb(33, 184, 33);
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
