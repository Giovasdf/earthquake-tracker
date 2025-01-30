import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/earthquake-tracker'), // 🛠 Configurar la base correcta
  routes: [{ path: '/', name: 'HomeView', component: HomeView }],
})

export default router
