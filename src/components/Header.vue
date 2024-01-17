<template>
  <header class="header">
    <div class="container">
      <!-- <img src="@/assets/img/logo.svg" alt="" /> -->
      <a href="#"><h2 class="header__logo">HAYOT</h2></a>
      <ul class="header__list">
        <li><a class="header__link" href="#">Shop</a></li>
        <li><a class="header__link" href="#">Men</a></li>
        <li><a class="header__link" href="#">Women</a></li>
        <li><a class="header__link" href="#">Combos</a></li>
        <li><a class="header__link" href="#">Joggers</a></li>
      </ul>
      <div class="group">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            ></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" class="input" />
      </div>
      <div class="header__btns">
        <span class="header__btns-btn">
          <img src="@/assets/img/heart.svg" alt="" />
        </span>
        <span class="header__btns-btn">
          <img src="@/assets/img/user.svg" alt="" />
        </span>
        <span class="header__btns-btn">
          <img src="@/assets/img/cart.svg" alt="" />
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
