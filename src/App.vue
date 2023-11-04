<script setup lang="ts">
import { computed, watch } from 'vue';
import i18next from 'i18next';
import { useSettingStore } from '@/stores';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import enUs from 'element-plus/es/locale/lang/en';
import { debounce } from './utils';

const settingStore = useSettingStore();

const elementLocalMap = {
  'zh-CN': zhCn,
  'en-US': enUs
};

const locale = computed(() => {
  return elementLocalMap[settingStore.state.locale];
});

watch(
  [() => settingStore.state.locale, () => settingStore.state.title],
  () => {
    document.title = `${i18next.t(settingStore.state.title)} - ${i18next.t('管理系统')}`;
  },
  {
    immediate: true
  }
);

// FIX 此处应节流
const updateReSizeState = debounce(() => {
  settingStore.reSized({ isMobile: document.body.offsetWidth < 970 });
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
  <ElConfigProvider :locale="locale">
    <RouterView />
  </ElConfigProvider>
</template>
