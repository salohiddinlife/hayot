import axios from 'axios';
import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore({
  id: 'categories',
  state: () => ({
    products: null,
  }),
  actions: {
    async getImgs() {
      try {
        const response = await axios.get("https://65a7bd4094c2c5762da76bd2.mockapi.io/hayot/v1/Category");
        this.products = response.data[0];
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    },
  },
  getters: {

  },
});
