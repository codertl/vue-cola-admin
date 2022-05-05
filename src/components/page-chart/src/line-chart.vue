<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
export default defineComponent({
  name: 'line-chart'
})
</script>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
import * as echarts from 'echarts'
interface IData {
  name: string[]
  count: number[]
}
const props = withDefaults(
  defineProps<{
    data: IData
  }>(),
  {
    data: () => ({
      name: [],
      count: []
    })
  }
)
const option = computed<echarts.EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.data.name
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.data.count,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<template>
  <base-echart :option="option"></base-echart>
</template>

<style scoped lang="less"></style>
