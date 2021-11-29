<script setup lang="ts">
import IconFont from '@/components/IconFont/index.vue';
import Statistic from '@/components/Statistic/index.vue';
const VITE_BASE = import.meta.env.VITE_BASE;
</script>

<template>
  <div class="page-header">
    <div class="welcome">
      <div class="avatar">
        <ElAvatar :size="60" :src="`${VITE_BASE}/static/img/boy01.jpg`" />
      </div>
      <div class="msg">
        <div class="hello">早上好，毛利小五郎，开始奋斗吧！</div>
        <div class="weather">
          <IconFont type="icon-tianqi" class="icon" />
          <span>外面太阳很大，33℃ - 41℃，建议你不要建议我建议你别去上班！</span>
        </div>
      </div>
    </div>
    <div class="todo">
      <Statistic class="todo-item" value="13">
        <template #title>
          <span class="item-title">
            <IconFont type="icon-beOnDutyIssue" /> <span>issues</span>
          </span>
        </template>
        <template #suffix>
          <span>/ 30</span>
        </template>
      </Statistic>
      <Statistic class="todo-item" value="13">
        <template #title>
          <span class="item-title"> <IconFont type="icon-renwu" /> <span>任务</span> </span>
        </template>
        <template #suffix>
          <span>/ 25</span>
        </template>
      </Statistic>
      <Statistic class="todo-item" value="13">
        <template #title>
          <span class="item-title"> <IconFont type="icon-youjian" /> <span>邮件</span> </span>
        </template>
        <template #suffix>
          <span>/ 23</span>
        </template>
      </Statistic>
    </div>
  </div>
</template>
