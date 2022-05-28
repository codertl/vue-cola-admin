import { RouteRecordRaw } from 'vue-router'
import type { IUserMenu } from '@/stores/login'
import { Breadcrumbs } from '@/components/breadcrumb/src/types'
export let firstRoute: any = null
// 通过菜单映射到路由
export function mapMenusToRoutes(userMenu: IUserMenu[]): RouteRecordRaw[] {
  //动态生成的路由
  const router: RouteRecordRaw[] = []

  // 所有的路由
  const allRoutes: RouteRecordRaw[] = []
  const routeFile = import.meta.globEager('../router/main/**/*.ts')

  Object.keys(routeFile).forEach((key) => {
    allRoutes.push(routeFile[key].default)
  })
  // 递归获取所需要的route
  const _recurseGetRoute = (menus: IUserMenu[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((item) => {
          return item.path === menu.url
        })

        if (route) {
          router.push(route)
        }
        if (!firstRoute) {
          // console.log(menu)
          firstRoute = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenu)
  return router
}

export interface SubMenu {
  children: null | SubMenu[]
  id: number
  name: string
  parentId?: number
  sort: number
  type: number
  url: string
}
// 通过路径映射当前路由
export function mapPathToMenu(
  path: string,
  menus: SubMenu[] | any,
  breadcrumbs?: any[]
) {
  for (const menu of menus) {
    if (menu.type === 2 && menu.url == path) {
      return menu
    } else {
      const currentMenu = mapPathToMenu(path, menu.children ?? [])
      if (currentMenu) {
        breadcrumbs?.push({ name: menu.name, path: menu.url })
        breadcrumbs?.push({ name: currentMenu.name, path: currentMenu.url })
        return currentMenu
      }
    }
  }
}

// 获取面包屑
export function mapPathToBreadcrumbs(path: string, menus: SubMenu[] | any) {
  const breadcrumbs: Breadcrumbs[] = []
  mapPathToMenu(path, menus, breadcrumbs)
  return breadcrumbs
}

export function mapMenusToPermission(userMenus: any) {
  const permission: string[] = []

  function _recurseGetPermission(userMenus: any) {
    for (const menu of userMenus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permission.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permission
}

export function menuMapLeafKeys(menu: any) {
  const leafKeys: number[] = []

  function _recurseGetLeaf(menu: any) {
    for (const item of menu) {
      if (item.children) {
        _recurseGetLeaf(item.children)
      } else {
        leafKeys.push(item.id)
      }
    }
  }
  _recurseGetLeaf(menu)

  return leafKeys
}
