<template>
  <ElDrawer
    :modelValue="settingStore.state.settingDrawerVisible"
    direction="rtl"
    size="280px"
    :withHeader="false"
    @close="settingStore.settingDrawerVisibleChanged"
  >
    <ElDivider>其他设置</ElDivider>
    <IzOther />
  </ElDrawer>
</template>

<script lang="ts">
export default { name: 'IzSetting' };
</script>

<script setup lang="ts">
import { useSettingStore } from '@/stores';
import IzOther from './Other.vue';

const settingStore = useSettingStore();
</script>
