<script lang="ts" setup>
import { computed } from 'vue';
import { useSettingStore, useMenuStore } from '@/stores';
import SubMenu from './SubMenu.vue';
import './style.scss';

const settingStore = useSettingStore();
const menuStore = useMenuStore();
const aside = computed(() => !settingStore.state.isMobile && settingStore.state.aside === 'close');
</script>

<script lang="ts">
export default { name: 'IzMenu' };
</script>

<template>
  <ElMenu
    class="aside-menu dark-menu"
    :collapseTransition="false"
    :collapse="aside"
    :defaultActive="settingStore.state.selectedKey"
    :defaultOpeneds="settingStore.state.openKeys"
  >
    <SubMenu :menuList="menuStore.state.menuList" />
  </ElMenu>
</template>
