import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'ホーム' },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { title: '概要' },
    },
  ],
})

export default router
