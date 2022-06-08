<template>
  <el-drawer
    :model-value="store.state.setting.settingDrawerVisible"
    direction="rtl"
    size="280px"
    :with-header="false"
    @close="store.commit('setting/settingDrawerVisibleChanged')"
  >
    <el-divider>其他设置</el-divider>
    <iz-other />
  </el-drawer>
</template>

<script lang="ts">
export default { name: 'IzSetting' };
</script>

<script setup lang="ts">
import { useStore } from 'vuex';
import { key } from '@/store';
import IzOther from './Other.vue';

const store = useStore(key);
</script>
