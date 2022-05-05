<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'bar-chart'
})
</script>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
import * as echarts from 'echarts'
const props = withDefaults(
  defineProps<{
    countData: { name: string; value: number }[]
  }>(),
  {
    countData: () => []
  }
)
const option = computed<echarts.EChartsOption>(() => {
  return {
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
})
</script>

<template><base-echart :option="option"></base-echart></template>

<style scoped lang="less"></style>
