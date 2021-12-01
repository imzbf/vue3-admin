<template>
  <div class="dashboard">
    <Header />
    <Body />
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Dashboard';
export default { name };
</script>

<script setup lang="ts">
import Header from './Header.vue';
import Body from './Body/index.vue';
import './index.scss';
</script>
