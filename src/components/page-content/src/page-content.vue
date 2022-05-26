<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import TlTable from '@/base-ui/table'
import type { IContentTableConfig, IProp } from '@/base-ui/table/types'

import { Edit, Delete, Plus } from '@element-plus/icons-vue'

import { formatUtcTime } from '@/utils/date-format'

import { useSystemStore } from '@/stores/system'

const props = defineProps<{
  contentTableConfig: IContentTableConfig
  pageName: string
}>()
const emits = defineEmits(['editClick', 'addClick'])
// 其他slot
const otherPropSlot: IProp[] = props.contentTableConfig.formItems.filter(
  (item) => {
    if (item.slotName === 'handler') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName) return true
  }
)
const systemStore = useSystemStore()

// 处理分页
// 双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })

const getPageData = (queryParams: any = {}) => {
  systemStore.getPageList({
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryParams
    }
  })
}
// pagInfo 发生改变时触发一次请求，默认请求一次
watch(
  () => pageInfo.value,
  () => {
    getPageData()
  },
  {
    immediate: true
  }
)
const tableData = computed(() => systemStore[`${props.pageName}List`])
const totalCount = computed(() => systemStore[`${props.pageName}Count`])

// 增 / 删 / 改 操作
const handleAddClick = () => {
  emits('addClick')
}
const handleMuchDelClcik = () => {}
const handlerEditClick = (item: any) => {
  emits('editClick', item)
}
const handlerDeleteClick = (item: any) => {
  // console.log(item)
  systemStore.deletePageDataAction({
    pageName: props.pageName,
    id: item.id
  })
}

defineExpose({
  getPageData
})
</script>
<template>
  <el-divider />
  <div class="page-content">
    <tl-table
      v-bind="contentTableConfig"
      :tableData="tableData"
      :totalCount="totalCount"
      v-model:page="pageInfo"
    >
      <!-- 头部操作按钮 -->
      <template #handlerHead>
        <el-button type="primary" :icon="Plus" @click="handleAddClick"
          >新增</el-button
        >
        <el-button type="danger" :icon="Delete" @click="handleMuchDelClcik"
          >删除</el-button
        >
      </template>
      <!-- 格式化日期  start-->
      <template #createAt="socpe">{{
        formatUtcTime(socpe.row.createAt)
      }}</template>
      <template #updateAt="socpe">{{
        formatUtcTime(socpe.row.createAt)
      }}</template>
      <!-- 格式化日期  end-->

      <!-- 操作 -->
      <template #handler="scope">
        <el-button
          type="primary"
          :icon="Edit"
          circle
          @click="handlerEditClick(scope.row)"
        />
        <el-button
          type="danger"
          :icon="Delete"
          circle
          @click="handlerDeleteClick(scope.row)"
        />
      </template>

      <template
        v-for="item in otherPropSlot"
        :key="item.label"
        #[item.slotName!]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </tl-table>
  </div>
</template>

<style scoped lang="less">
.page-content {
  background-color: #fff;
  padding: 15px;
}
</style>
