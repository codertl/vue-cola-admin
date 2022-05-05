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

interface IData {
  name: string[]
  favor: number[]
}
const props = withDefaults(
  defineProps<{
    data: IData
  }>(),
  {
    data: () => ({
      name: [],
      favor: []
    })
  }
)
const option = computed<echarts.EChartsOption>(() => {
  return {
    title: {
      text: '可以缩放'
    },
    tooltip: {
      trigger: 'item'
    },
    xAxis: {
      data: props.data.name,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.data.favor
      }
    ]
  }
})
</script>

<template>
  <base-echart :option="option"></base-echart>
</template>

<style scoped lang="less"></style>
