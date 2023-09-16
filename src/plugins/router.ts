import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '', name: 'home', component: () => import('@/pages/Home.vue')},
  {path: '/weaving', name: 'weaving', component: () => import('@/pages/Weaving.vue')},
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router