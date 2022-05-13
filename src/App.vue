<script setup lang="ts">
import { key } from '@/store';
import { useStore } from 'vuex';
import { debounce } from './utils';
const store = useStore(key);

// FIX 此处应节流
const updateReSizeState = debounce(() => {
  store.commit('setting/reSized', { isMobile: document.body.offsetWidth < 970 });
});

window.addEventListener('resize', updateReSizeState);

// 监听html标签的class改变情况，变化时，自动调整系统的主题
// const htmlClassObserver = new MutationObserver(() => {
//   const htmlClassList = document.documentElement.classList;
//   const theme = store.state.setting.theme;
//   // 不包含，自动设置
//   if (!htmlClassList.contains(theme)) {
//     store.commit('setting/themeChanged', {
//       theme: theme === 'dark' ? 'light' : 'dark'
//     });
//   }
// });

// htmlClassObserver.observe(document.documentElement, {
//   attributes: true,
//   attributeFilter: ['class']
// });
</script>

<template>
  <router-view />
</template>
