<script setup lang="ts">
import { computed } from 'vue';
import { key } from '@/store';
import { useStore } from 'vuex';
import { RouterView } from 'vue-router';
import { debounce } from './utils';
const store = useStore(key);

// FIX 此处应节流
const updateReSizeState = debounce(() => {
  store.commit('setting/reSized', { isMobile: document.body.offsetWidth < 970 });
});

window.addEventListener('resize', updateReSizeState);

const classNames = computed(() => ['theme-wrapper', `theme-${store.state.setting.theme}`]);
</script>

<template>
  <div :class="classNames">
    <RouterView />
  </div>
</template>
