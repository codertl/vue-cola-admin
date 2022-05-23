import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import elementPlus from './plugin/element-plus'
import 'element-plus/dist/index.css'
import { MotionPlugin } from '@vueuse/motion'
import 'normalize.css'
import { useUserStore } from '@/stores/user'
// 统一导入 element 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
const userStore = useUserStore()
userStore.initState()
app.use(router)
app.use(MotionPlugin)
app.use(elementPlus)
app.mount('#app')

//注册全局 element-icons 组件
Object.keys(ElementPlusIconsVue).forEach((key) => {
  app.component(
    key,
    ElementPlusIconsVue[key as keyof typeof ElementPlusIconsVue]
  )
})
