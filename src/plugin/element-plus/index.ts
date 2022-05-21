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
  ElAvatar,
  ElRow,
  ElCol,
  ElCard,
  ElDropdown,
  ElForm,
  ElInput,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElConfigProvider
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
  ElAvatar,
  ElRow,
  ElCol,
  ElCard,
  ElDropdown,
  ElForm,
  ElInput,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElConfigProvider
]

export default function (app: App) {
  for (const item of components) {
    app.use(item)
  }
}
