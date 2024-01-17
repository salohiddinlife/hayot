import {createWebHistory, createRouter } from 'vue-router'

import Home from "@/pages/Home.vue"
import SignIn from "@/pages/SignIn.vue"
import SignUp from '@/pages/SignUp.vue'
export const routes = createRouter({
  history: createWebHistory(),
  routes:[
    { path: '/', component: Home},
    { path: '/signup', component: SignUp },
    { path: '/signin', component: SignIn }
  ]
})
