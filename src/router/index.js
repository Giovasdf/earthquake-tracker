import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/about', name: 'AboutView', component: () => import('../views/AboutView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
