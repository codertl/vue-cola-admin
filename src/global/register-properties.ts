import { App } from 'vue'
import formatUtcTime from '@/utils/date-format'
// 注册全局属性
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    // 格式化时间
    formatTime(dateTime: string) {
      return formatUtcTime(dateTime)
    }
  }
}
