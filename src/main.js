import '@/assets/styles/main.scss'
import { createApp } from 'vue'
import { routes } from '@/routes'
import { createPinia } from 'pinia'
import App from './App.vue'

import FilterTitle from "@/components/FilterTitle/FilterTitle.vue";
import Loader from "@/components/UI/Loader.vue";



const pinia = createPinia()
const app = createApp(App)

app.component('FilterTitle', FilterTitle)
app.component('Loader', Loader)
app.use(pinia)
app.use(routes)
app.mount('#app')
