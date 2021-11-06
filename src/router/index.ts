import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TheGame from '@/modules/the-game/views/TheGame.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TheGame',
    component: TheGame
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
