import { defineStore } from 'pinia';

export const categoriesStore = defineStore({
  id: 'categories',
  state: () => ({
    categories: [],
  }),
  actions: {
    async loadCategories() {
      try {
        const response = await fetch('/src/categories.json');
        const data = await response.json();
        this.categories = data;
        console.log(this.categories);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    },
  },
});
