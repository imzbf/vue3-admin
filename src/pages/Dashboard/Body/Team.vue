<template>
  <va-card border class="va-mb team">
    <template #title>
      <icon-font type="icon-86" class="title-icon" />
      我的团队
    </template>
    <el-row>
      <el-col :span="12" class="item">
        <el-avatar :src="`${VITE_BASE}/static/img/boy01.jpg`" />
        <span class="name">vra-dever</span>
      </el-col>
      <el-col :span="12" class="item">
        <el-avatar :src="`${VITE_BASE}/static/img/boy01.jpg`" />
        <span :class="name">vra-dever</span>
      </el-col>
      <el-col :span="12" class="item">
        <el-avatar :src="`${VITE_BASE}/static/img/boy01.jpg`" />
        <span :class="name">vra-dever</span>
      </el-col>
      <el-col :span="12" class="item">
        <el-avatar :src="`${VITE_BASE}/static/img/boy01.jpg`" />
        <span class="name">vra-dever</span>
      </el-col>
      <el-col :span="12" class="item">
        <el-avatar :src="`${VITE_BASE}/static/img/boy01.jpg`" />
        <span class="name">vra-dever</span>
      </el-col>
    </el-row>
  </va-card>
</template>

<script setup lang="ts">
import VaCard from '@/components/Card/index.vue';
import IconFont from '@/components/IconFont/index.vue';

const VITE_BASE = import.meta.env.VITE_BASE;
</script>

<style lang="scss">
.team {
  .item {
    margin: 12px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;

    .name {
      margin-left: 12px;
      font-size: 14px;
    }
  }
}
</style>
