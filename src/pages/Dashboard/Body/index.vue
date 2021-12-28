<script setup lang="ts">
import RunningProject from './RunningProject.vue';
import CommonlyUsed from './CommonlyUsed.vue';
// import Task from './Task';
// import Record from './Record.vue';
import Team from './Team.vue';
</script>
<template>
  <div class="view-space dashboard-body">
    <ElRow :gutter="20">
      <ElCol :span="16">
        <RunningProject />
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
