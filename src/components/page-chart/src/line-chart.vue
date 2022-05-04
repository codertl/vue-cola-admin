<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'line-chart'
})
</script>

<script setup lang="ts">
import BaseEchart from '@/base-ui/echart'
import * as echarts from 'echarts'
const option: echarts.EChartsOption = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
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
