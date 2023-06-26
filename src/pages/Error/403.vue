<template>
  <ElResult icon="error" title="403" subTitle="你的访问被拒绝了！">
    <template #extra>
      <ElButton type="primary" @click="goBack">Back</ElButton>
    </template>
  </ElResult>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Error403';
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
