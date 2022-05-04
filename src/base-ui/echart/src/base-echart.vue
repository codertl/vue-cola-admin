<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import * as echarts from 'echarts'
import useEchart from '../hooks/useEchart'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    option: any
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
const baseEchartRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEchart(baseEchartRef.value!)

  // 数据发生改变时重新渲染图表
  watchEffect(() => {
    setOptions(props.option)
  })
})
</script>

<template>
  <div class="base-echart" ref="baseEchartRef" :style="{ width, height }"></div>
</template>

<style scoped lang="less"></style>
