import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// dayjs 默认不支持UTC，如果格式化UTC时间需要安装UTC插件
dayjs.extend(utc)
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm'
export function formatUtcTime(
  utcTime: string,
  formatType: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcTime).utcOffset(8).format(formatType)
}
