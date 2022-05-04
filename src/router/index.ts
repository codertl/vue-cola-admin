import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import localCache from '@/utils/local-cache'
import { firstRoute } from '@/utils/map-menus'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    name: 'login',
    path: '/login',
    meta: { name: '登录' },
    component: () => import('@/views/login.vue')
  },
  {
    name: 'main',
    path: '/main',
    // redirect: 'main',
    component: () => import('@/layout/index.vue'),
    children: []
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  NProgress.start()

  // 目标路径不是 /login,并且本地存储没有token直接跳到 /login
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  // 如果目标路径是/main 就重定向到第一个路由
  if (to.path === '/main') {
    return firstRoute.url
  }
})

router.afterEach(() => {
  NProgress.done()
})
export default router
