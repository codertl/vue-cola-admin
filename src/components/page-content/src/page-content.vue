<script setup lang="ts">
import TlTable from '@/base-ui/table'
import type { IContentTableConfig, IProp } from '@/base-ui/table/types'

import { Edit, Delete, Plus } from '@element-plus/icons-vue'

import { formatUtcTime } from '@/utils/date-format'
const props = defineProps<{
  contentTableConfig: IContentTableConfig
  tableData: any[]
}>()
const emits = defineEmits(['editClick', 'deleteClick'])
// 其他slot
const otherPropSlot: IProp[] = props.contentTableConfig.propList.filter(
  (item) => {
    if (item.slotName === 'handler') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName) return true
  }
)

// 增 / 删 / 改 操作
const handleAddClick = () => {}
const handleMuchDelClcik = () => {}
const handlerEditClick = (item: any) => {
  emits('editClick', item)
}
const handlerDeleteClick = (item: any) => {
  emits('deleteClick', item)
}
</script>
<template>
  <el-divider />
  <div class="page-content">
    <tl-table v-bind="contentTableConfig" :tableData="tableData">
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
          @click="handlerEditClick"
        />
        <el-button
          type="danger"
          :icon="Delete"
          circle
          @click="handlerDeleteClick"
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
