import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecord } from 'vue-router'

const routes: RouteRecord[] = []
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
