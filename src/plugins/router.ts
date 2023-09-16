import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '', name: 'home', component: () => import('@/views/Home.vue')},
  {path: '/weaving', name: 'weaving', component: () => import('@/views/Weaving.vue')},
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router