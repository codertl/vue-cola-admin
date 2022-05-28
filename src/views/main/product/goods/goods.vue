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

const pageName = 'goods'
const { pageContentRef, handlerSearchClick, handlerResetClick } =
  usePageSearch()

const title = ref('添加商品')
const newCallBack = () => {
  title.value = '添加商品'
  modalConfig.formItems.find((item) => {
    if (item.field === 'password') {
      item.isHidden = false
    }
  })
}
const editCallBack = () => {
  title.value = '编辑商品'
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
      <template #status="scope">
        <el-switch
          v-model="scope.row.status"
          :active-value="1"
          :inactive-value="0"
          disabled
        />
      </template>
      <template #image="scope">
        <el-image
          style="width: 50px; height: 50px"
          :src="scope.row.imgUrl"
          fit="cover"
          :previewSrcList="[scope.row.imgUrl]"
        />
      </template>
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

<style>
.ei-flow-form .el-card__body {
  z-index: initial !important;
}
.el-table__fixed-body-wrapper {
  z-index: auto !important;
}
</style>
