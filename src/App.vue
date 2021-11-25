<script setup lang="ts">
import { computed } from 'vue';
import { key } from '@/store';
import { useStore } from 'vuex';
import { RouterView } from 'vue-router';
const store = useStore(key);

const classNames = computed(() => ['theme-wrapper', `theme-${store.state.setting.theme}`]);
</script>

<template>
  <div :class="classNames">
    <RouterView />
  </div>
</template>
