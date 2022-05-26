// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'
import { loginRequest, getUserInfo, getUserMenu } from '@/network/api/login'
import type { Account } from '@/network/api/login/types'
import cache from '@/utils/local-cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import { ElMessage } from 'element-plus'
import { useUserStore } from './user'
export interface IUserInfo {
  cellphone: number
  createAt: string
  department: any
  enable: number
  id: number
  name: string
  realname: string
  role: any
  updateAt: string
}

export interface IUserMenu {
  children: IUserMenu[]
  icon: string
  id: number
  name: string
  sort: number
  type: number
  url: string
}
export const useLoginStore = defineStore('login', () => {
  const token = ref<string>('')
  const userInfo = ref<IUserInfo>()
  const userMenu = ref<IUserMenu[]>()
  async function getLoginData(account: Account) {
    try {
      const { token: reToken, id } = await loginRequest(account)

      token.value = reToken
      // 本地保存token
      cache.setCache('token', reToken ?? '')

      // 用户信息请求
      const reUserInfo = await getUserInfo(id)
      userInfo.value = reUserInfo
      cache.setCache('userInfo', reUserInfo ?? '')

      // 获取用户菜单
      const reUserMenu = await getUserMenu(id)
      userMenu.value = reUserMenu
      cache.setCache('userMenu', reUserMenu ?? '')
      const userRoutes = await mapMenusToRoutes(reUserMenu)
      userRoutes.forEach((route) => {
        router.addRoute('main', route)
      })
      console.log(userRoutes)
      // 登录成功提示
      ElMessage({
        message: '登录成功',
        type: 'success',
        duration: 1000,
        center: true
      })
      setTimeout(() => {
        router.push({
          name: 'main'
        })
      }, 1500)
    } catch {
      // 登录失败提示
      ElMessage.error('账号或密码错误！')
    }
  }

  // 每次刷新都重新从本地获取数据
  function initState() {
    const cacheToken = cache.getCache('token')
    if (cacheToken) {
      token.value = cacheToken
      useUserStore().getInitialDataAction()
    }
    const cacheUserInfo = cache.getCache('userInfo')
    if (cacheUserInfo) userInfo.value = cacheUserInfo
    const cacheUserMenu = cache.getCache('userMenu')
    if (cacheUserMenu) {
      userMenu.value = cacheUserMenu
      const userRoutes = mapMenusToRoutes(cacheUserMenu)
      userRoutes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  }
  return {
    token,
    userInfo,
    userMenu,
    getLoginData,
    initState
  }
})
