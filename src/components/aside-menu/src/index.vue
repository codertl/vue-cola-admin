<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { stringFragment } from '@/utils/string-fragment'
import { mapPathToMenu, SubMenu } from '@/utils/map-menus'
import avatar from '@/assets/login/cola.svg?component'

const props = withDefaults(
  defineProps<{
    collapse: boolean
  }>(),
  {
    collapse: false
  }
)
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

// 渲染侧边栏的数据
const userMenu = computed(() => userStore.userMenu)

const currentPath = route.path
const currentMenu: SubMenu = mapPathToMenu(currentPath, userMenu.value)

// 当前被点击的菜单
const currentId = ref(currentMenu.id + '')
// 点击菜单切换相应路由
const handleSelectMenuItem = (subMenu: SubMenu) => {
  router.push({
    path: subMenu.url
  })
}
</script>

<template>
  <div class="logo">
    <avatar width="38" height="38" />
    <span v-if="!collapse">cola admin</span>
  </div>
  <el-scrollbar style="height: calc(100% - 48px)">
    <el-menu
      style="border-right: none"
      background-color="#001529"
      text-color="#ccc"
      active-text-color="#fff"
      :default-active="currentId"
      :unique-opened="true"
      :collapse="collapse"
      :collapse-transition="true"
    >
      <template v-for="item in userMenu" :key="item.id">
        <!-- 二级菜单 -->
        <el-sub-menu v-if="item!.type === 1" :index="item!.id + ''">
          <template #title>
            <el-icon color="#fff">
              <component :is="stringFragment(item.icon)" />
            </el-icon>
            <span>{{item!.name}}</span>
          </template>
          <template v-for="subMenu in item.children" :key="subMenu.id">
            <el-menu-item
              :index="subMenu.id + ''"
              @click="handleSelectMenuItem(subMenu)"
              >{{ subMenu.name }}</el-menu-item
            >
          </template>
        </el-sub-menu>
        <!-- 一级菜单 -->
        <template v-if="item.type === 2">
          <el-menu-item :index="item.id">
            <el-icon
              ><component :is="stringFragment(item.icon)"></component
            ></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped lang="less">
.logo {
  width: 100%;
  height: 48px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  box-sizing: border-box;
  background: #002140;
  span {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 800;
    margin-top: 5px;
    color: #0072db;
  }
}
::v-deep(.el-menu-item.is-active) {
  background-color: #0a60bd;
}

::v-deep(.el-menu--collapse .el-sub-menu.is-active .el-icon) {
  color: #0072db;
}
</style>
