<template>
  <el-result icon="error" title="500" sub-title="好像可以甩锅给服务端了耶！">
    <template #extra>
      <el-button type="primary" size="medium">Back</el-button>
    </template>
  </el-result>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Error500';
export default { name };
</script>
