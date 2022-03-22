<template>
  <el-drawer
    :model-value="store.state.setting.settingDrawerVisible"
    @close="store.commit('setting/settingDrawerVisibleChanged')"
    direction="rtl"
    size="280px"
    :with-header="false"
  >
    <el-divider>主题设置</el-divider>
    <theme-preview-vue />
    <el-divider>其他设置</el-divider>
    <Other />
  </el-drawer>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { key } from '@/store';
import ThemePreviewVue from './ThemePreview.vue';
import Other from './Other.vue';

const store = useStore(key);
</script>
