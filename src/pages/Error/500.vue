<template>
  <ElResult icon="error" title="500" subTitle="好像可以甩锅给服务端了耶！">
    <template #extra>
      <ElButton type="primary" @click="goBack">Back</ElButton>
    </template>
  </ElResult>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Error500';
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
