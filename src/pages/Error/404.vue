<template>
  <el-result icon="error" title="404" sub-title="资源消失了！">
    <template #extra>
      <el-button type="primary" @click="goBack">Back</el-button>
    </template>
  </el-result>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Error404';
export default { name };
</script>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const goBack = () => {
  const { redirect } = route.query;

  if (redirect) {
    router.replace(redirect as string);
  } else {
    router.replace('/');
  }
};
</script>
