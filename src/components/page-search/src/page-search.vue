<script setup lang="ts">
import { ref } from 'vue'
import TlForm from '@/base-ui/form'
import { Search, RefreshRight } from '@element-plus/icons-vue'
import type { IForm } from '@/base-ui/form/types'
const props = defineProps<{
  searchFormConfig: IForm
}>()
// 双向绑定属性是有config里的field决定
//实现表单组件双向绑定
const formItems = props.searchFormConfig.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}

// formData是由动态绑定的
const formData = ref({ ...formOriginData })

//触发重置
const handleReset = () => {
  formData.value = formOriginData
}

// 触发搜索
const handleSearch = () => {
  console.log('搜索')
}
</script>

<template>
  <div class="page-search">
    <tl-form v-bind="searchFormConfig" :formData="formData">
      <template #handle>
        <el-button :icon="Search" type="primary" @click="handleSearch"
          >查询</el-button
        >
        <el-button :icon="RefreshRight" @click="handleReset">重置</el-button>
      </template>
    </tl-form>
  </div>
</template>

<style scoped lang="less">
.page-search {
  background-color: #fff;
  padding-top: 10px;
}
</style>
