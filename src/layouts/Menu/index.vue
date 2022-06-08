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
  <el-menu
    class="aside-menu dark-menu"
    :collapse-transition="false"
    :collapse="aside"
    :default-active="store.state.setting.selectedKey"
    :default-openeds="store.state.setting.openKeys"
  >
    <sub-menu :menu-list="store.state.menu.menuList" />
  </el-menu>
</template>
