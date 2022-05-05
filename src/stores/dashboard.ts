import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor
} from '@/network/api/main'
import { CategoryGoodsCount, CategoryGoodsFavor } from './types'
export const useDashboardStore = defineStore('dashboard', () => {
  // 分类商品数量
  const categoryGoodsCount = ref<CategoryGoodsCount[] | null>(null)
  // 分类商品销量
  const categoryGoodsSale = ref<CategoryGoodsCount[] | null>(null)
  // 分类商品收藏
  const categoryGoodsFavor = ref<CategoryGoodsFavor[] | null>(null)

  // 获取图标数据
  async function getChartData() {
    const categoryGoodsCountData = await getCategoryGoodsCount()
    categoryGoodsCount.value = categoryGoodsCountData
    const categoryGoodsSaleData = await getCategoryGoodsSale()
    categoryGoodsSale.value = categoryGoodsSaleData
    const categoryGoodsFavorData = await getCategoryGoodsFavor()
    categoryGoodsFavor.value = categoryGoodsFavorData
  }
  return {
    categoryGoodsCount,
    categoryGoodsSale,
    categoryGoodsFavor,
    getChartData
  }
})
