<template>
  <el-breadcrumb>
    <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <el-breadcrumb-item>{{ breadcrumb.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { Breadcrumbs } from './types'
const props = defineProps<{
  breadcrumbs: Breadcrumbs[]
}>()
console.log(props.breadcrumbs)
</script>

<style scoped>
.el-breadcrumb {
  margin-left: 15px;
}
</style>
