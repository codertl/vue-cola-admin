<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import usePageSearch from '@/hooks/usePageSearch'
import usePageModal from '@/hooks/usePageModal'
import { menuMapLeafKeys } from '@/utils/map-menus'
import { useUserStore } from '@/stores/user'
import { ElTree } from 'element-plus'

const userStore = useUserStore()
const pageName = 'role'
const { pageContentRef, handlerSearchClick, handlerResetClick } =
  usePageSearch()

// 动态渲染权限菜单树
const menuList = computed(() => userStore.entireMenu)

const title = ref('添加角色')
const newCallBack = () => {
  title.value = '添加角色'
}
const treeRef = ref<InstanceType<typeof ElTree>>()
const editCallBack = (item: any) => {
  title.value = '修改角色'
  console.log(item)
  const leafKeys = menuMapLeafKeys(item.menuList)
  nextTick(() => {
    treeRef.value?.setCheckedKeys(leafKeys)
  })
}
const otherInfo = ref({})
// 获取check状态下的id属性
const handleCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
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
    </page-content>
    <page-modal
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :title="title"
      :pageName="pageName"
      ref="pageModalRef"
    >
      <el-tree
        :data="menuList"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        ref="treeRef"
        @check="handleCheckChange"
      ></el-tree>
    </page-modal>
  </div>
</template>

<style scoped></style>
