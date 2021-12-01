<template>
  <ElDrawer
    :model-value="store.state.setting.settingDrawerVisible"
    @close="store.commit('setting/settingDrawerVisibleChanged')"
    direction="rtl"
    size="280px"
    :with-header="false"
  >
    <ElDivider>主题设置</ElDivider>
    <ThemePreviewVue />
    <ElDivider>其他设置</ElDivider>
    <Other />
  </ElDrawer>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { key } from '@/store';
import ThemePreviewVue from './ThemePreview.vue';
import Other from './Other.vue';

const store = useStore(key);
</script>
