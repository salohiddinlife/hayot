import {createWebHistory, createRouter } from 'vue-router'

import Home from "@/pages/Home.vue"
import SignIn from "@/pages/SignIn.vue"
import SignUp from '@/pages/SignUp.vue'
export const routes = createRouter({
  history: createWebHistory(),
  routes:[
    { path: '/', component: Home},
    { path: '/signup', name: 'signup', component: () => import('@/pages/SignUp.vue')},
    {path: '/signin', name: 'signin', component: () => import('@/pages/SignIn.vue')},
    {path: '/men', name: 'men', component: () => import('@/pages/Men.vue')},
    {path: '/women', name: 'women', component: () => import('@/pages/Women.vue')},
    
    
  ]
})
