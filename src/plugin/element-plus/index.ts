import { App } from 'vue'
import {
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElIcon,
  ElScrollbar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElAvatar
} from 'element-plus'

const components = [
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElIcon,
  ElScrollbar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElAvatar
]

export default function (app: App) {
  for (const item of components) {
    app.use(item)
  }
}
