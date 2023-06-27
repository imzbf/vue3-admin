<script setup lang="ts">
import { Lightning } from '@element-plus/icons-vue';
import IconFont from '@/components/IconFont/index.vue';
import VaStatistic from '@/components/Statistic/index.vue';
const VITE_BASE = import.meta.env.VITE_BASE;
</script>

<script lang="ts">
export default {
  name: 'IzDashboardHeader'
};
</script>

<template>
  <div class="page-header">
    <div class="welcome">
      <div class="avatar">
        <ElAvatar :size="60" :src="`${VITE_BASE}/static/img/boy01.jpg`" />
      </div>
      <div class="msg">
        <div class="hello">{{ $t('早上好，伙计，开始奋斗吧！') }}</div>
        <div class="weather">
          <span>{{ $t('今天') }} 25-36℃ {{ $t('雷阵雨') }}</span>
          <ElIcon><Lightning /></ElIcon>
        </div>
      </div>
    </div>
    <div class="todo">
      <VaStatistic class="todo-item" value="13">
        <template #title>
          <span class="item-title">
            <IconFont type="icon-beOnDutyIssue" /> <span>issues</span>
          </span>
        </template>
        <template #suffix>
          <span>/ 30</span>
        </template>
      </VaStatistic>
      <VaStatistic class="todo-item" value="13">
        <template #title>
          <span class="item-title">
            <IconFont type="icon-renwu" /> <span>{{ $t('任务') }}</span>
          </span>
        </template>
        <template #suffix>
          <span>/ 25</span>
        </template>
      </VaStatistic>
      <VaStatistic class="todo-item" value="13">
        <template #title>
          <span class="item-title">
            <IconFont type="icon-youjian" /> <span>{{ $t('邮件') }}</span>
          </span>
        </template>
        <template #suffix>
          <span>/ 23</span>
        </template>
      </VaStatistic>
    </div>
  </div>
</template>
