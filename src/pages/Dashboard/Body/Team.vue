<template>
  <VaCard border class="va-mb team">
    <template #title>
      <IconFont type="icon-86" class="title-icon" />
      {{ $t('我的团队') }}
    </template>
    <ElRow>
      <ElCol :span="12" class="item">
        <ElAvatar :src="`${VITE_BASE}/static/img/boy01.jpg`" />
        <span class="name">{{ $t('技术有限组') }}</span>
      </ElCol>
      <ElCol :span="12" class="item">
        <ElAvatar :src="`${VITE_BASE}/static/img/boy01.jpg`" />
        <span class="name">{{ $t('挖山小组') }}</span>
      </ElCol>
      <ElCol :span="12" class="item">
        <ElAvatar :src="`${VITE_BASE}/static/img/boy01.jpg`" />
        <span class="name">{{ $t('阳光青年组') }}</span>
      </ElCol>
    </ElRow>
  </VaCard>
</template>

<script setup lang="ts">
import VaCard from '@/components/Card/index.vue';
import IconFont from '@/components/IconFont/index.vue';

const VITE_BASE = import.meta.env.VITE_BASE;
</script>

<script lang="ts">
export default {
  name: 'IzDashboardTeam'
};
</script>

<style lang="scss">
.team {
  .item {
    margin: 12px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;

    & > span {
      vertical-align: middle;
    }

    .name {
      margin-left: 12px;
      font-size: 14px;
    }
  }
}
</style>
