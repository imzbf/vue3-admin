<template>
  <div class="page-button">
    <div class="view-space">
      <ElRow>
        <VaCard>
          <ElRow>
            <ElButton>Default</ElButton>
            <ElButton type="primary">Primary</ElButton>
            <ElButton type="success">Success</ElButton>
            <ElButton type="info">Info</ElButton>
            <ElButton type="warning">Warning</ElButton>
            <ElButton type="danger">Danger</ElButton>
            <ElButton>中文</ElButton>
          </ElRow>

          <ElRow>
            <ElButton plain>Plain</ElButton>
            <ElButton type="primary" plain>Primary</ElButton>
            <ElButton type="success" plain>Success</ElButton>
            <ElButton type="info" plain>Info</ElButton>
            <ElButton type="warning" plain>Warning</ElButton>
            <ElButton type="danger" plain>Danger</ElButton>
          </ElRow>

          <ElRow>
            <ElButton round>Round</ElButton>
            <ElButton type="primary" round>Primary</ElButton>
            <ElButton type="success" round>Success</ElButton>
            <ElButton type="info" round>Info</ElButton>
            <ElButton type="warning" round>Warning</ElButton>
            <ElButton type="danger" round>Danger</ElButton>
          </ElRow>

          <ElRow>
            <ElButton :icon="Search" circle></ElButton>
            <ElButton type="primary" :icon="Edit" circle></ElButton>
            <ElButton type="success" :icon="Check" circle></ElButton>
            <ElButton type="info" :icon="Message" circle></ElButton>
            <ElButton type="warning" :icon="Star" circle></ElButton>
            <ElButton type="danger" :icon="Delete" circle></ElButton>
          </ElRow>
        </VaCard>
      </ElRow>
      <ElRow>
        <VaCard>
          <ElRow>
            <ElButton disabled>Default</ElButton>
            <ElButton type="primary" disabled>Primary</ElButton>
            <ElButton type="success" disabled>Success</ElButton>
            <ElButton type="info" disabled>Info</ElButton>
            <ElButton type="warning" disabled>Warning</ElButton>
            <ElButton type="danger" disabled>Danger</ElButton>
          </ElRow>

          <ElRow>
            <ElButton plain disabled>Plain</ElButton>
            <ElButton type="primary" plain disabled>Primary</ElButton>
            <ElButton type="success" plain disabled>Success</ElButton>
            <ElButton type="info" plain disabled>Info</ElButton>
            <ElButton type="warning" plain disabled>Warning</ElButton>
            <ElButton type="danger" plain disabled>Danger</ElButton>
          </ElRow>
        </VaCard>
      </ElRow>
    </div>
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Button';
export default { name };
</script>

<script setup lang="ts">
import VaCard from '@/components/Card/index.vue';
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons-vue';
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
</style>
