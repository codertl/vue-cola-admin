<script setup lang="ts">
import { ref, watch } from 'vue'
import TlForm from '@/base-ui/form'
import { useSystemStore } from '@/stores/system'

import { editPageData } from '@/network/api/main'
const props = defineProps<{
  modalConfig: any
  defaultInfo: any
  title: string
  pageName: string
}>()

const systemStore = useSystemStore()

const dialogVisible = ref(false)

const formData = ref<any>({})
watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[item.field] = newValue[item.field]
    }
  }
)
// 点击确定按钮逻辑
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    // 修改
    console.log({
      pageName: props.pageName,
      editData: { ...formData.value },
      id: props.defaultInfo.id
    })
    const url = `/${props.pageName}/${props.defaultInfo.id}`
    // editPageData(url, { ...formData.value })
    systemStore.editPageDataAction({
      pageName: props.pageName,
      editData: { ...formData.value },
      id: props.defaultInfo.id
    })
  } else {
    systemStore.createPageDataAction({
      pageName: props.pageName,
      newData: { ...formData.value }
    })
  }
}
defineExpose({
  dialogVisible
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="30%"
    center
    close-on-press-escape
  >
    <tl-form
      v-bind="modalConfig"
      v-model="formData"
      :colLayout="{ span: 24 }"
    ></tl-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirmClick">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="less"></style>
