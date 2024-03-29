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
  ElConfigProvider,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElDivider,
  ElSwitch,
  ElDialog,
  ElImage,
  ElTree
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
  ElConfigProvider,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElDivider,
  ElSwitch,
  ElDialog,
  ElImage,
  ElTree
]

export default function (app: App) {
  for (const item of components) {
    app.use(item)
  }
}
