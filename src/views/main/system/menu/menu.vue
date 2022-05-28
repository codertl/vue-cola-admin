<script lang="ts" setup>
import { ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

const pageName = ref('menu')
</script>

<template>
  <div class="menu">
    <!-- <page-search :searchFormConfig="searchFormConfig"></page-search> -->
    <page-content
      :pageName="pageName"
      :contentTableConfig="contentTableConfig"
    ></page-content>
  </div>
</template>

<style scoped></style>
