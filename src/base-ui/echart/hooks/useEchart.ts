import { ECharts } from 'echarts'
import * as echarts from 'echarts'
import { useEventListener, useTimeoutFn, tryOnUnmounted } from '@vueuse/core'
export default function useEchart(dom: HTMLElement) {
  let echartInstance: ECharts | null
  // 初始化 echart 实例
  echartInstance = echarts.init(dom, undefined, { renderer: 'svg' })

  const setOptions = (options: echarts.EChartsOption) => {
    // 通过传入的配置渲染图表
    echartInstance!.setOption(options)
  }

  // 窗口尺寸发生改变同时图表也改变尺寸
  useEventListener('resize', () => {
    useTimeoutFn(() => {
      echartInstance!.resize()
    }, 180)
  })

  tryOnUnmounted(() => {
    if (!echartInstance) return
    // 销毁图表
    echartInstance.dispose()
    echartInstance = null
  })
  return {
    echartInstance,
    setOptions
  }
}
