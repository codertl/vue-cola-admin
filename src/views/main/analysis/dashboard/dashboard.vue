<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'dashboard'
})
</script>

<script lang="ts" setup>
import Card from '@/base-ui/card'
import {
  BarChart,
  LineChart,
  RoseChart,
  PieChart
} from '@/components/page-chart'
</script>

<template>
  <el-row>
    <el-col :span="7"
      ><Card title="分类商品数量(饼图)"> <pie-chart /></Card
    ></el-col>
    <el-col :span="10"
      ><Card :style="{ margin: '0 20px' }"><bar-chart /></Card
    ></el-col>
    <el-col :span="7"
      ><Card title="分类商品数量(玫瑰图)"><rose-chart /></Card
    ></el-col>
  </el-row>
  <el-row style="margin-top: 20px">
    <el-col :span="12"
      ><Card title="分类商品的销量" :style="{ marginRight: '20px' }"
        ><line-chart /></Card
    ></el-col>
    <el-col :span="12"
      ><Card title="分类商品的收藏"><bar-chart /></Card
    ></el-col>
  </el-row>
</template>

<style scoped></style>
