<template>
  <a :href="props.menu.outLink" v-if="props.menu.outLink" target="_blank">
    <li :key="`__outlink-${menu.path}`" class="el-menu-item" style="padding-left: 20px">
      <ElIcon v-if="menu.iconName">
        <MenuIcon :icon-name="menu.iconName" />
      </ElIcon>
      <span>{{ props.menu.title }}</span>
    </li>
  </a>

  <ElMenuItem v-else :key="props.menu.path" :index="props.menu.path">
    <ElIcon v-if="menu.iconName">
      <MenuIcon :icon-name="menu.iconName" />
    </ElIcon>
    <span>{{ props.menu.title }}</span>
  </ElMenuItem>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import { ElMenuItem, ElIcon } from 'element-plus';
import type { MenuType } from '@/store/modules/menu';
import MenuIcon from './Icon.vue';

const props = defineProps({
  menu: {
    type: Object as PropType<MenuType>,
    default: () => ({})
  }
});
</script>
