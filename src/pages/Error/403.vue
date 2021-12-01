<template>
  <el-result icon="error" title="403" sub-title="你的访问被拒绝了！">
    <template #extra>
      <el-button type="primary" size="medium">Back</el-button>
    </template>
  </el-result>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Error403';
export default { name };
</script>
