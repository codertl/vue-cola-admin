<script setup lang="ts">
import { IFormItem, IColLayout } from '../types'
const props = withDefaults(
  defineProps<{
    formData: any
    formItems: IFormItem[]
    labelWidth?: string
    itemStyle?: any
    colLayout?: IColLayout
  }>(),
  {
    labelWidth: '100px',
    itemStyle: () => ({ padding: '10px 40px' }),
    colLayout: () => ({
      xl: 6, // 24 ->4
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
)
const emit = defineEmits(['update:modelValue'])
const handleValueChange = (value: string, field: string) => {
  emit('update:modelValue', { ...props.formData, [field]: value })
}
</script>

<template>
  <el-form :label-width="labelWidth" :model="formData">
    <el-row>
      <template v-for="(item, index) in formItems" :key="item.field">
        <el-col v-bind="colLayout">
          <el-form-item
            v-if="!item.isHidden"
            :label="item.label"
            :rules="item.rules"
            :style="itemStyle"
          >
            <!-- 渲染 默认input 或者 password  -->
            <template v-if="item.type === 'input' ?? 'password'">
              <el-input
                :type="item.type"
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
                v-model="formData[item.field]"
                @update:modelValue="handleValueChange($event, item.field)"
                clearable
              ></el-input>
            </template>
            <!-- 渲染 select选择器 -->
            <template v-if="item.type === 'select'">
              <el-select
                v-model="formData[item.field]"
                :placeholder="item.placeholder"
                style="width: 100%"
                clearable
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.title"
                  :value="option.value"
                >
                </el-option>
              </el-select>
            </template>

            <!-- 渲染 日期选择器 -->
            <template v-if="item.type === 'datepicker'">
              <el-date-picker
                v-model="formData[item.field]"
                v-bind="item.otherOptions"
                style="width: 100%"
              >
              </el-date-picker>
            </template>
          </el-form-item>
        </el-col>
        <el-col
          v-if="index === formItems.length - 1"
          v-bind="colLayout"
          :style="itemStyle"
          style="display: flex; justify-content: flex-end"
        >
          <slot name="handle"></slot>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<style scoped lang="less"></style>
