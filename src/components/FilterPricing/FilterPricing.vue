<template>
    <div class="filter__title">
      <h2>Price</h2>
      <img src="/src/assets/img/category__arrow.svg" alt="" />
    </div>
  <section class="filter__pricing">

    <div class="range-slider">
      <input
        type="range"
        class="min-range"
        id="min-input"
        v-model="minPrice"
        :min="min"
        :max="max"
        :step="step"
      />
      <input
        type="range"
        class="max-range"
        id="max-input"
        v-model="maxPrice"
        :min="min"
        :max="max"
        :step="step"
      />
      <div
        class="range-fill"
        :style="{ width: fillWidth, left: fillLeft }"
      ></div>
    </div>
    <div class="price-content">
      <div class="min-price">
        <span>$</span
        ><input
          type="number"
          :value="formattedMinPrice"
          @input="handleMinInput($event.target.value)"
          placeholder="Min Price"
          min="min.value"
          max="max.value"
          step="step.value"
          class="reactive-input min-range-num"
        />
      </div>
      <div class="max-price">
        <span>$</span
        ><input
          type="number"
          :value="formattedMaxPrice"
          @input="handleMaxInput($event.target.value)"
          placeholder="Max Price"
          min="min.value"
          max="max.value"
          step="step.value"
          class="reactive-input max-range-num"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const min = ref(10);
const max = ref(500);
const step = ref(1);

const minPrice = ref(min.value);
const maxPrice = ref(max.value);

const formattedMinPrice = computed(() => `${minPrice.value}`);
const formattedMaxPrice = computed(() => `${maxPrice.value}`);

const fillWidth = computed(
  () =>
    `${((maxPrice.value - minPrice.value) / (max.value - min.value)) * 100}%`
);
const fillLeft = computed(
  () => `${((minPrice.value - min.value) / (max.value - min.value)) * 100}%`
);

const handleMinInput = (newValue) => {
  const parsedValue = parseInt(newValue.replace(/\$\D+/g, "")); // Remove non-numeric characters
  if (parsedValue < min.value) {
    minPrice.value = min.value;
  } else if (parsedValue > maxPrice.value) {
    minPrice.value = maxPrice.value;
  } else {
    minPrice.value = parsedValue;
  }
};

const handleMaxInput = (newValue) => {
  const parsedValue = parseInt(newValue.replace(/\$\D+/g, "")); // Remove non-numeric characters
  if (parsedValue < minPrice.value) {
    maxPrice.value = minPrice.value;
  } else if (parsedValue > max.value) {
    maxPrice.value = max.value;
  } else {
    maxPrice.value = parsedValue;
  }
};
</script>

<style lang="scss" scoped>
.filter__pricing {
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 9px 20px 0px rgba(14, 88, 48, 0.1);
}

h4 {
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
}

.price-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
  gap: 30px;
}

label {
  font-size: 14px;
  font-weight: 500;
}

p {
  font-size: 16px;
  font-weight: 600;
}

.range-slider {
  width: 225px;
  position: relative;
  margin: 15px 0 30px 0;
}

.range-fill {
  height: 6px;
  background-color: rgb(138, 51, 253);
  position: absolute;
  z-index: 1;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  position: absolute;
  left: 0;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: rgb(138, 51, 253);
  cursor: pointer;
  margin-top: -5px;
  position: relative;
  z-index: 1;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  background: #e8e8e8;
  border-radius: 3px;
  border: none;
}
.min-range-num,
.max-range-num {
  width: 97px;
  height: 32px;
  color: rgb(60, 66, 66);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  box-sizing: border-box;
  border: 1px solid rgb(190, 188, 189);
  border-radius: 8px;
  opacity: 0.8;
  padding-left: 20px;
}
.min-price,
.max-price {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & span {
    position: absolute;
    left: 5px;
    z-index: 99;
  }
}
</style>
