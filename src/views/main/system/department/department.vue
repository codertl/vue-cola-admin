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
import { useSystemStore } from '@/stores/system'

const systemStore = useSystemStore()
const pageName = 'department'
const { pageContentRef, handlerSearchClick, handlerResetClick } =
  usePageSearch()

// 动态添加部门
const modalConfigRef = computed(() => {
  const department = modalConfig.formItems.find(
    (item) => item.field === 'parentId'
  )
  department!.options = systemStore.departmentList.map((item: any) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})
const title = ref('添加部门')
const newCallBack = () => {
  title.value = '添加部门'
  modalConfig.formItems.find((item) => {
    if (item.field === 'password') {
      item.isHidden = false
    }
  })
}
const editCallBack = () => {
  title.value = '修改部门'
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
  <div class="department">
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
