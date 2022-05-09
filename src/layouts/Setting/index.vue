<template>
  <el-drawer
    :model-value="store.state.setting.settingDrawerVisible"
    @close="store.commit('setting/settingDrawerVisibleChanged')"
    direction="rtl"
    size="280px"
    :with-header="false"
  >
    <el-divider>其他设置</el-divider>
    <Other />
  </el-drawer>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { key } from '@/store';
import Other from './Other.vue';

const store = useStore(key);
</script>
