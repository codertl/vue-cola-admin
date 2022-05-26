<script lang="ts" setup>
import { ref, computed } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import usePageSearch from '@/hooks/usePageSearch'
import usePageModal from '@/hooks/usePageModal'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const pageName = 'users'
const { pageContentRef, handlerSearchClick, handlerResetClick } =
  usePageSearch()
// 动态添加部门和角色
const modalConfigRef = computed(() => {
  const department = modalConfig.formItems.find(
    (item) => item.field === 'departmentId'
  )
  department!.options = userStore.entireDepartment.map((item: any) => {
    return { title: item.name, value: item.id }
  })
  const role = modalConfig.formItems.find((item) => item.field === 'roleId')
  role!.options = userStore.entireRole.map((item: any) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})

console.log(modalConfigRef)
const title = ref('添加用户')
const newCallBack = () => {
  title.value = '添加用户'
  modalConfig.formItems.find((item) => {
    if (item.field === 'password') {
      item.isHidden = false
    }
  })
}
const editCallBack = () => {
  title.value = '修改用户'
  modalConfig.formItems.find((item) => {
    if (item.field === 'password') {
      item.isHidden = true
    }
  })
}
// 拟态框hook
const { pageModalRef, defaultInfo, handleAddClick, handleEditClick } =
  usePageModal(newCallBack, editCallBack)
</script>

<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @search="handlerSearchClick"
      @reset="handlerResetClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @addClick="handleAddClick"
      @editClick="handleEditClick"
      :pageName="pageName"
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
    <page-modal
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      :title="title"
      :pageName="pageName"
      ref="pageModalRef"
    ></page-modal>
  </div>
</template>

<style scoped></style>
