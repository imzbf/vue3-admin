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
<template>
  <div class="view-space dashboard-body">
    <el-row :gutter="20">
      <el-col :span="16">
        <visit-statistics />
        <!-- <Record /> -->
        <el-row :gutter="20">
          <el-col :span="12">
            <running-project />
          </el-col>
          <el-col :span="12">
            <multiple-grap />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <commonly-used />
        <recent-weather />
        <!-- <Task /> -->
        <va-team />
      </el-col>
    </el-row>
  </div>
</template>
