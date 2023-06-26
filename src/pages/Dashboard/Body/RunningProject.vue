<template>
  <VaCard
    border
    :shadow="false"
    class="va-mb project"
    bodyClass="clear"
    :bodyStyle="{ paddingTop: 10 }"
  >
    <template #title>
      <IconFont type="icon-shouye" class="title-icon" />
      运行中的项目
    </template>
    <template #func>
      <RouterLink to="/project" class="normal-link"> 全部项目 </RouterLink>
    </template>
    <ElTable :data="tableData" style="width: 100%">
      <ElTableColumn prop="name" label="名称" :minWidth="90">
        <template #default="scope">
          <ElLink type="primary" :href="scope.row.url" target="_blank">
            {{ scope.row.name }}</ElLink
          >
        </template>
      </ElTableColumn>
      <ElTableColumn prop="status" label="状态">
        <template #default="scope">
          <ElTag :type="scope.row.status === '运行中' ? 'success' : 'danger'">{{
            scope.row.status
          }}</ElTag>
        </template>
      </ElTableColumn>
      <ElTableColumn prop="date" label="上次启动" :minWidth="160" />
    </ElTable>
  </VaCard>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import VaCard from '@/components/Card/index.vue';
import IconFont from '@/components/IconFont/index.vue';

// const VITE_BASE = import.meta.env.VITE_BASE;

// const proj = {
//   title: 'vue3-admin',
//   description: '项目基于vue@3.x系列开发，开发环境使用vite@2.x搭配纯jsx',
//   avatar: `${VITE_BASE}/static/img/boy01.jpg`,
//   team: 'vra-dever',
//   date: '4个月前'
// };

const tableData = [
  {
    name: 'vue3-admin',
    url: 'https://github.com/imzbf/vue3-admin',
    date: '2021-12-05 21:35:17',
    status: '运行中'
  },
  {
    name: 'md-editor-v3',
    url: 'https://github.com/imzbf/md-editor-v3',
    date: '2021-12-05 21:35:17',
    status: '运行中'
  },
  {
    name: 'md-editor-rt',
    url: 'https://github.com/imzbf/md-editor-rt',
    date: '2021-12-05 21:35:17',
    status: '运行中'
  },
  {
    name: 'bbs',
    url: 'https://github.com/imzbf',
    date: '2021-12-05 21:35:17',
    status: '已停止'
  }
];
</script>
