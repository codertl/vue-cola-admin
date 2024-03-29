import { defineStore } from 'pinia'
import {
  getPageListData,
  editPageData,
  deletePageData,
  createPageData
} from '@/network/api/main'
export const useSystemStore = defineStore('system', {
  state: () => ({
    usersList: [],
    usersCount: 0,
    departmentList: [],
    departmentCount: 0,
    roleList: [],
    roleCount: 0,
    categoryList: [],
    categoryCount: 0,
    goodsList: [],
    goodsCount: 0,
    menuList: [],
    menuCount: 0
  }),
  actions: {
    async getPageList(payload: any) {
      const pageUrl = `/${payload.pageName}/list`
      const { list, totalCount } = await getPageListData(
        pageUrl,
        payload.queryInfo
      )
      this[`${payload.pageName}List`] = list
      this[`${payload.pageName}Count`] = totalCount
    },
    async editPageDataAction(payload: any) {
      const { pageName, id, editData } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      this.getPageList({
        pageName,
        pageInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async deletePageDataAction(payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await deletePageData(pageUrl)
      this.getPageList({
        pageName,
        pageInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction(payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      this.getPageList({
        pageName,
        pageInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
})
