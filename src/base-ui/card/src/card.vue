<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    style?: object
  }>(),
  {
    title: '标题',
    style: () => ({})
  }
)
</script>

<template>
  <el-card :style="style">
    <template #header>
      <span>{{ title }}</span>
    </template>
    <slot></slot>
  </el-card>
</template>

<style scoped></style>
