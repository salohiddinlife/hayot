import '@/assets/styles/main.scss'
import { createApp } from 'vue'
import { routes } from '@/routes'
import { createPinia } from 'pinia'
import App from './App.vue'

import FilterTitle from "@/components/FilterTitle/FilterTitle.vue";



const pinia = createPinia()
const app = createApp(App)

app.component('FilterTitle', FilterTitle)

app.use(pinia)
app.use(routes)
app.mount('#app')
