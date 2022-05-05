<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'bar-chart'
})
</script>

<script setup lang="ts">
import BaseEchart from '@/base-ui/echart'
import * as echarts from 'echarts'
const props = withDefaults(
  defineProps<{
    countData: { name: string; value: number }[]
  }>(),
  {
    countData: () => [
      { value: 40, name: 'rose 1' },
      { value: 38, name: 'rose 2' },
      { value: 32, name: 'rose 3' },
      { value: 30, name: 'rose 4' },
      { value: 28, name: 'rose 5' },
      { value: 26, name: 'rose 6' },
      { value: 22, name: 'rose 7' },
      { value: 18, name: 'rose 8' }
    ]
  }
)
const option = {
  legend: {
    top: 'bottom'
  },
  tooltip: {
    trigger: 'item'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '分类数据',
      avoidLabelOverlap: true,
      type: 'pie',
      radius: [15, 150],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      label: {
        show: false
      },
      data: props.countData
    }
  ]
}
</script>

<template><base-echart :option="option"></base-echart></template>

<style scoped lang="less"></style>
