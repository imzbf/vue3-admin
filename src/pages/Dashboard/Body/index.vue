<script setup lang="ts">
import RunningProject from './RunningProject.vue';
import CommonlyUsed from './CommonlyUsed.vue';
// import Task from './Task';
// import Record from './Record.vue';
import VaTeam from './Team.vue';
</script>
<template>
  <div class="view-space dashboard-body">
    <el-row :gutter="20">
      <el-col :span="16">
        <running-project />
        <!-- <Record /> -->
      </el-col>
      <el-col :span="8">
        <CommonlyUsed />
        <!-- <Task /> -->
        <va-team />
      </el-col>
    </el-row>
  </div>
</template>
