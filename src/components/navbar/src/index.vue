<template>
  <div class="navbar">
    <div class="navbar-left">
      <el-icon :size="20" @click="handleFold">
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
      <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    </div>
    <div class="info">
      <el-icon :size="18" @click="toggle()">
        <full-screen />
      </el-icon>

      <el-dropdown trigger="click">
        <div class="user" ref="buttonRef">
          <el-avatar :size="28" :src="avatar" />
          <span>{{ userInfo?.name }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              ><span @click="handleLogout">退出登录</span></el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-icon :size="18"><setting /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, unref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLoginStore } from '@/stores/login'
import { mapPathToBreadcrumbs } from '@/utils/map-menus'

import Breadcrumb from '@/components/breadcrumb'
import avatar from '@/assets/avatar.jpg'

import { useFullscreen } from '@vueuse/core'
// 全屏切换
const { toggle } = useFullscreen()
const emit = defineEmits(['changeFold'])
const isFold = ref(false)
const handleFold = () => {
  console.log(isFold.value)
  isFold.value = !isFold.value
  emit('changeFold', isFold.value)
}

const route = useRoute()
const userStore = useLoginStore()

// 获取面包屑
const breadcrumbs = computed(() => {
  const userMenus = userStore.userMenu
  const currentPath = route.path
  return mapPathToBreadcrumbs(currentPath, userMenus)
})

// 用户信息
const userInfo = computed(() => userStore.userInfo)

// 退出登录
const handleLogout = () => {
  localStorage.removeItem('token')
  location.reload()
}
</script>

<style scoped lang="less">
.navbar {
  width: 100%;
  height: 48px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 5px;

  .el-icon:hover {
    cursor: pointer;
    color: rgb(48, 48, 255);
  }
}
.info,
.info .user {
  display: flex;
  align-items: center;
}
.info {
  .el-icon {
    width: 36px;
    height: 48px;
  }
  .user {
    color: #333;
    height: 48px;
    display: flex;
    justify-content: center;
    span {
      margin-left: 5px;
    }
  }
  .el-icon:hover,
  .user:hover {
    background-color: #f6f6f6;
    cursor: pointer;
  }
}
.el-icon {
  color: #333;
}
</style>
