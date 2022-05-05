<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'dashboard'
})
</script>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import Card from '@/base-ui/card'
import {
  BarChart,
  LineChart,
  RoseChart,
  PieChart
} from '@/components/page-chart'
import { useDashboardStore } from '@/stores/dashboard'

const dashboardStore = useDashboardStore()

// 请求图表数据
dashboardStore.getChartData()

const categoryGoodsCount = computed(() => {
  dashboardStore.categoryGoodsCount
  return dashboardStore.categoryGoodsCount?.map((item) => {
    return {
      value: item.id,
      name: item.name
    }
  })
})

const categoryGoodsSale = computed(() => {
  const name: string[] = []
  const count: number[] = []
  dashboardStore.categoryGoodsSale?.forEach((item) => {
    name.push(item.name)
    count.push(item.goodsCount)
  })
  return {
    name,
    count
  }
})
const categoryGoodsFavor = computed(() => {
  const name: string[] = []
  const favor: number[] = []
  dashboardStore.categoryGoodsFavor?.forEach((item) => {
    name.push(item.name)
    favor.push(item.goodsFavor)
  })
  return {
    name,
    favor
  }
})
</script>

<template>
  <el-row>
    <el-col :span="7"
      ><Card title="分类商品数量(饼图)">
        <pie-chart :countData="categoryGoodsCount" /></Card
    ></el-col>
    <el-col :span="10"
      ><Card :style="{ margin: '0 20px' }"><bar-chart /></Card
    ></el-col>
    <el-col :span="7"
      ><Card title="分类商品数量(玫瑰图)"
        ><rose-chart :countData="categoryGoodsCount" /></Card
    ></el-col>
  </el-row>
  <el-row style="margin-top: 20px">
    <el-col :span="12"
      ><Card title="分类商品的销量" :style="{ marginRight: '20px' }"
        ><line-chart :data="categoryGoodsSale" /></Card
    ></el-col>
    <el-col :span="12"
      ><Card title="分类商品的收藏"
        ><bar-chart :data="categoryGoodsFavor" /></Card
    ></el-col>
  </el-row>
</template>

<style scoped></style>
