<script setup lang="ts">
import RunningProject from './RunningProject.vue';
import CommonlyUsed from './CommonlyUsed.vue';
// import Task from './Task';
// import Record from './Record.vue';
import VaTeam from './Team.vue';
import VisitStatistics from './VisitStatistics.vue';
import RecentWeather from './Weather.vue';
import MultipleGrap from './MultipleGrap.vue';
</script>

<script lang="ts">
export default {
  name: 'IzDashboardPage'
};
</script>

<template>
  <div class="view-space dashboard-body">
    <ElRow :gutter="20">
      <ElCol :span="16">
        <VisitStatistics />
        <!-- <Record /> -->
        <ElRow :gutter="20">
          <ElCol :span="12">
            <RunningProject />
          </ElCol>
          <ElCol :span="12">
            <MultipleGrap />
          </ElCol>
        </ElRow>
      </ElCol>
      <ElCol :span="8">
        <CommonlyUsed />
        <RecentWeather />
        <!-- <Task /> -->
        <VaTeam />
      </ElCol>
    </ElRow>
  </div>
</template>
