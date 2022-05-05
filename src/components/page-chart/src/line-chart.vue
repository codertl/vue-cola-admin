<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'line-chart'
})
</script>

<script setup lang="ts">
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
      name: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      count: [820, 932, 901, 934, 1290, 1330, 1320]
    })
  }
)
const option: echarts.EChartsOption = {
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
</script>

<template>
  <base-echart :option="option"></base-echart>
</template>

<style scoped lang="less"></style>
