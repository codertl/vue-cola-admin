<script lang="ts" setup>
import { ref, computed } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { useSystemStore } from '@/stores/system'
const systemStore = useSystemStore()
systemStore.getUserList()
const userList = computed(() => systemStore.userList)
const handleDeleteClick = (item: any) => {
  console.log(item)
}
const handleEditClick = (item: any) => {
  console.log(item)
}
</script>

<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      :tableData="userList"
      @deleteClick="handleDeleteClick"
      @editClick="handleEditClick"
    >
      <template #status="scope">
        <el-switch
          v-model="scope.row.enable"
          :active-value="1"
          :inactive-value="0"
          disabled
        />
      </template>
    </page-content>
  </div>
</template>

<style scoped></style>
