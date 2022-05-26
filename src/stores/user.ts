import { defineStore } from 'pinia'
import { getPageListData } from '@/network/api/main'
export const useUserStore = defineStore('user', {
  state: () => ({
    entireDepartment: [],
    entireRole: [],
    entireMenu: []
  }),
  actions: {
    async getInitialDataAction() {
      // 获取角色数据
      const { list: role } = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      // 获取部门数据
      const { list: department } = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      // 获取菜单数据
      const { list: menu } = await getPageListData('/menu/list', {
        offset: 0,
        size: 1000
      })
      // 缓存数据
      this.entireRole = role
      this.entireDepartment = department
      this.entireMenu = menu
    }
  }
})
