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
const pageName = 'category'
const { pageContentRef, handlerSearchClick, handlerResetClick } =
  usePageSearch()

const title = ref('新建分类')
const newCallBack = () => {
  title.value = '新建分类'
  modalConfig.formItems.find((item) => {
    if (item.field === 'password') {
      item.isHidden = false
    }
  })
}
const editCallBack = () => {
  title.value = '编辑分类'
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
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :title="title"
      :pageName="pageName"
      ref="pageModalRef"
    ></page-modal>
  </div>
</template>

<style scoped></style>
