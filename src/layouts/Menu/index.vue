<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { ElMenu } from 'element-plus';
import SubMenu from './SubMenu.vue';
import './style.scss';

const store = useStore(key);
const aside = computed(() => store.state.setting.aside === 'close');
</script>

<template>
  <ElMenu
    class="aside-menu dark-menu"
    :collapse-transition="false"
    :collapse="aside"
    :default-active="store.state.setting.selectedKey"
    :default-openeds="store.state.setting.openKeys"
  >
    <SubMenu :menuList="store.state.menu.menuList" />
  </ElMenu>
</template>
