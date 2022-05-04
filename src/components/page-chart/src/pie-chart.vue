<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'pie-chart'
})
</script>

<script setup lang="ts">
import BaseEchart from '@/base-ui/echart'
import * as echarts from 'echarts'

const option: echarts.EChartsOption = {
  tooltip: {
    trigger: 'item'
  },

  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
</script>

<template>
  <base-echart :option="option"></base-echart>
</template>

<style scoped lang="less"></style>
