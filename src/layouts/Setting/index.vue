<template>
  <ElDrawer
    :modelValue="store.state.setting.settingDrawerVisible"
    direction="rtl"
    size="280px"
    :withHeader="false"
    @close="store.commit('setting/settingDrawerVisibleChanged')"
  >
    <ElDivider>其他设置</ElDivider>
    <IzOther />
  </ElDrawer>
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
