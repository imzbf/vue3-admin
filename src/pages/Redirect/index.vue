<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

onMounted(() => {
  const { path, query } = route;

  router.replace({ path: path.replace('/redirect', ''), query });
});
</script>

<template><span></span></template>
