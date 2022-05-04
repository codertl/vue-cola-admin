<script setup lang="ts">
import { ref } from 'vue'
import AsideMenu from '@/components/aside-menu'
import Navbar from '@/components/navbar'
import NavTags from '@/components/nav-tags'

// 菜单是否折叠
const isCollapse = ref(false)
const handleIsCollapse = (isFold: boolean) => {
  console.log(isFold)
  isCollapse.value = isFold
}
</script>

<template>
  <el-container class="container">
    <el-aside :width="isCollapse ? '60px' : '210px'" class="aside-menu"
      ><aside-menu :collapse="isCollapse"></aside-menu
    ></el-aside>
    <el-container class="page">
      <el-header height="86px">
        <navbar @changeFold="handleIsCollapse" />
        <nav-tags />
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
.container {
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  background-color: #f0f2f5;
}
.aside-menu {
  height: 100%;
  background-color: #001529;
  transition: width 0.18s;
  -webkit-transition: width 0.18s;
  -moz-transition: width 0.18s;
  -o-transition: width 0.18s;
}
.page {
  width: 100%;
}
::v-deep(.el-header) {
  padding: 0;
}
</style>
