<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'loading'
})
</script>

<script setup lang="ts">
import * as echarts from 'echarts'
import BaseEchart from '@/base-ui/echart'
const columns: any[] = []
for (let i = 0; i < 7; i++) {
  columns.push({
    type: 'rect',
    x: i * 20,
    shape: {
      x: 0,
      y: -40,
      width: 10,
      height: 80
    },
    style: {
      fill: '#5470c6'
    },
    keyframeAnimation: {
      duration: 1000,
      delay: i * 200,
      loop: true,
      keyframes: [
        {
          percent: 0.5,
          scaleY: 0.1,
          easing: 'cubicIn'
        },
        {
          percent: 1,
          scaleY: 1,
          easing: 'cubicOut'
        }
      ]
    }
  })
}
const option: echarts.EChartsOption = {
  graphic: {
    elements: [
      {
        type: 'group',
        left: 'center',
        top: 'center',
        children: columns
      }
    ]
  }
}
</script>

<template>
  <base-echart :option="option"></base-echart>
</template>

<style scoped lang="less"></style>
