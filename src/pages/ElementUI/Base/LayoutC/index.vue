<template>
  <div class="page-layout">
    <div class="view-space">
      <VaCard>
        <ElRow>
          <ElCol :span="24"><div class="grid-content bg-purple-dark"></div></ElCol>
        </ElRow>
        <ElRow>
          <ElCol :span="12"><div class="grid-content bg-purple"></div></ElCol>
          <ElCol :span="12"><div class="grid-content bg-purple-light"></div></ElCol>
        </ElRow>
        <ElRow>
          <ElCol :span="8"><div class="grid-content bg-purple"></div></ElCol>
          <ElCol :span="8"><div class="grid-content bg-purple-light"></div></ElCol>
          <ElCol :span="8"><div class="grid-content bg-purple"></div></ElCol>
        </ElRow>
        <ElRow>
          <ElCol :span="6"><div class="grid-content bg-purple"></div></ElCol>
          <ElCol :span="6"><div class="grid-content bg-purple-light"></div></ElCol>
          <ElCol :span="6"><div class="grid-content bg-purple"></div></ElCol>
          <ElCol :span="6"><div class="grid-content bg-purple-light"></div></ElCol>
        </ElRow>
        <ElRow>
          <ElCol :span="4"><div class="grid-content bg-purple"></div></ElCol>
          <ElCol :span="4"><div class="grid-content bg-purple-light"></div></ElCol>
          <ElCol :span="4"><div class="grid-content bg-purple"></div></ElCol>
          <ElCol :span="4"><div class="grid-content bg-purple-light"></div></ElCol>
          <ElCol :span="4"><div class="grid-content bg-purple"></div></ElCol>
          <ElCol :span="4"><div class="grid-content bg-purple-light"></div></ElCol>
        </ElRow>
      </VaCard>
    </div>
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'LayoutC';
export default { name };
</script>

<script setup lang="ts">
import VaCard from '@/components/Card/index.vue';
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
