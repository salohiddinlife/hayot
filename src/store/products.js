import { defineStore } from 'pinia'
import axios from 'axios'

export const useProducts = defineStore({
    id: 'products',
    state: () => ({
        url: 'https://fakestoreapi.com/products/',
        menProducts:null,
        menProducts:null
    }),
    actions:{
      async getProducts({type}){
        try {
           const res = await axios.get(`${this.url}`)
           console.log(res);
           const data = res.data.results
           if (type == 'men') {
                this.menProducts = data
           } else {
                this.womenProducts = data
           }
        }catch (error){
            console.error("error while getting popular movies", error)
        }
      }
    },
    getters:{}
})