<template>
  <li v-if="props.menu.outLink" :key="`__outlink-${menu.path}`" style="padding-left: 24px">
    <a :href="props.menu.outLink" target="_blank">
      <!-- {menu.iconName && h(Icon[menu.iconName])} -->
      <span>{{ props.menu.title }}</span>
    </a>
  </li>
  <ElMenuItem v-else :key="props.menu.path" :index="props.menu.path">
    <!-- {menu.iconName && h(Icon[menu.iconName])} -->
    <span>{{ props.menu.title }}</span>
  </ElMenuItem>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import { ElMenuItem } from 'element-plus';
import { RouterLink } from 'vue-router';
import type { MenuType } from '@/store/modules/menu';

const props = defineProps({
  menu: {
    type: Object as PropType<MenuType>,
    default: () => ({})
  }
});
</script>
