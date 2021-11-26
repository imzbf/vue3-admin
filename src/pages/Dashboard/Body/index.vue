<script setup lang="ts">
import { ElRow, ElCol } from 'element-plus';

import ProjectSchedule from './ProjectSchedule.vue';
import CommonlyUsed from './CommonlyUsed.vue';
// import Task from './Task';
// import Record from './Record';
// import Team from './Team';
</script>
<template>
  <div class="view-space dashboard-body">
    <ElRow :gutter="20">
      <ElCol :span="16">
        <ProjectSchedule />
        <Record />
      </ElCol>
      <ElCol :span="8">
        <CommonlyUsed />
        <Task />
        <Team />
      </ElCol>
    </ElRow>
  </div>
</template>
