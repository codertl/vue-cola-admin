import { defineStore } from 'pinia'
import { getUserListData } from '@/network/api/main'
export const useSystemStore = defineStore('system', {
  state: () => ({
    userList: []
  }),
  actions: {
    async getUserList() {
      const { list } = await getUserListData()
      this.userList = list
    }
  }
})
