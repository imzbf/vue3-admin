<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import SubMenu from './SubMenu.vue';
import './style.scss';

const store = useStore(key);
const aside = computed(
  () => !store.state.setting.isMobile && store.state.setting.aside === 'close'
);
</script>

<script lang="ts">
export default { name: 'IzMenu' };
</script>

<template>
  <ElMenu
    class="aside-menu dark-menu"
    :collapseTransition="false"
    :collapse="aside"
    :defaultActive="store.state.setting.selectedKey"
    :defaultOpeneds="store.state.setting.openKeys"
  >
    <SubMenu :menuList="store.state.menu.menuList" />
  </ElMenu>
</template>
