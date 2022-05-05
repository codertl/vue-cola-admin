<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'pie-chart'
})
</script>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
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
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.countData,
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
})
</script>

<template>
  <base-echart :option="option"></base-echart>
</template>

<style scoped lang="less"></style>
