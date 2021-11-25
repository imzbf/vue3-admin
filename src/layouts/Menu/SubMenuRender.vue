<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import type { MenuType } from '@/store/modules/menu';
import { ElSubMenu } from 'element-plus';
import MenuItemRender from './MenuItemRender.vue';

const props = defineProps({
  menuList: {
    type: Object as PropType<Array<MenuType>>,
    default: () => []
  }
});
</script>

<template>
  <ElSubMenu v-for="menu of props.menuList" :key="menu.path" :index="menu.path">
    <template #title>
      <!-- <el-icon><location /></el-icon> -->
      <span>{{ menu.title }}</span>
    </template>
    <template v-for="menuChild of menu.children">
      <MenuItemRender v-if="menuChild.children.length === 0" :menu="menuChild" />
      <SubMenuRender v-else :menu-list="menuChild.children" />
    </template>
  </ElSubMenu>
</template>
