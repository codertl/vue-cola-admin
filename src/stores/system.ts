import { defineStore } from 'pinia'
import { getPageListData } from '@/network/api/main'
export const useSystemStore = defineStore('system', {
  state: () => ({
    usersList: [],
    usersCount: 0
  }),
  actions: {
    async getPageList(payload: any) {
      const pageUrl = `${payload.pageName}/list`
      const { list, totalCount } = await getPageListData(
        pageUrl,
        payload.queryInfo
      )
      this.usersList = list
      this.usersCount = totalCount
    }
  }
})
