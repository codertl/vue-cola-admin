<script setup lang="ts">
import { ref } from 'vue'
import type { IProp } from '../types'

interface IPage {
  currentPage: number
  pageSize: number
}
const props = withDefaults(
  defineProps<{
    tableData: any[]
    title?: string
    propList: IProp[]
    showIndexColumn?: boolean
    showSelectColumn?: boolean
    page?: IPage
    totalCount?: number
  }>(),
  {
    title: '',
    showIndexColumn: false,
    showSelectColumn: false,
    page: () => ({
      currentPage: 0,
      pageSize: 10
    }),
    totalCount: 0
  }
)
const emits = defineEmits(['update:page'])
const handleSizeChange = (pageSize: number) => {
  // console.log(pageSize)
  emits('update:page', { ...props.page, pageSize })
}
const handleCurrentChange = (currentPage: number) => {
  // console.log(currentPage)
  emits('update:page', { ...props.page, currentPage })
}
</script>

<template>
  <div class="head">
    <div class="title">{{ title }}</div>
    <div class="handler">
      <slot name="handlerHead"></slot>
    </div>
  </div>
  <el-table style="width: 100%" :data="tableData">
    <!-- 多选 -->
    <el-table-column
      v-if="showSelectColumn"
      type="selection"
      width="50"
      align="center"
    />
    <!-- 索引 -->
    <el-table-column
      v-if="showIndexColumn"
      type="index"
      label="索引"
      width="60"
      align="center"
    />
    <template v-for="item in propList" :key="item.prop">
      <el-table-column
        v-bind="item"
        align="center"
        :fixed="item.slotName === 'handler' && 'right'"
        show-overflow-tooltip
      >
        <template #default="scope">
          <slot
            :name="item.slotName"
            :row="scope.row"
            >{{ scope.row[item.prop!] }}</slot
          >
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div class="pagination">
    <slot>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        v-model:current-page="page.currentPage"
        :page-sizes="[10, 20, 30]"
        v-model:page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        background
      />
    </slot>
  </div>
</template>

<style scoped lang="less">
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 1px 4px 8px 4px #ece9e9;
  .title {
    font-size: 20px;
    font-weight: 600;
  }
}
.pagination {
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
}
</style>
