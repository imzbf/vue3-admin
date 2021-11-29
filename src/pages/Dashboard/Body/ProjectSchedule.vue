<template>
  <FeCard :border="true" class="va-mb project" bodyClass="clear" :bodyStyle="{ paddingTop: 10 }">
    <template #title>
      <IconFont type="icon-shouye" class="title-icon" />
      进行中的项目
    </template>
    <template #func>
      <RouterLink to="/project" class="normal-link"> 全部项目 </RouterLink>
    </template>
  </FeCard>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import FeCard from '@/components/Card/index.vue';
import IconFont from '@/components/IconFont/index.vue';

const VITE_BASE = import.meta.env.VITE_BASE;

const proj = {
  title: 'vue3-admin',
  description: '项目基于vue@3.x系列开发，开发环境使用vite@2.x搭配纯jsx',
  avatar: `${VITE_BASE}/static/img/boy01.jpg`,
  team: 'vra-dever',
  date: '4个月前'
};
</script>
