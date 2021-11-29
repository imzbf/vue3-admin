<script setup lang="ts">
import type { PropType } from 'vue';
import type { MenuType } from '@/store/modules/menu';
import { ElSubMenu, ElIcon } from 'element-plus';
import MenuItem from './MenuItem.vue';
import MenuIcon from './Icon.vue';

const props = defineProps({
  menuList: {
    type: Object as PropType<Array<MenuType>>,
    default: () => []
  }
});
</script>

<template>
  <template v-for="menu of props.menuList" :key="menu.path">
    <MenuItem v-if="menu.outLink" :menu="menu" />
    <MenuItem v-else-if="menu.children.length === 0" :menu="menu" />
    <MenuItem v-else-if="menu.children.length === 1" :menu="menu.children[0]" />
    <ElSubMenu v-else :index="menu.path">
      <template #title>
        <ElIcon v-if="menu.iconName">
          <MenuIcon :icon-name="menu.iconName" />
        </ElIcon>
        <span>{{ menu.title }}</span>
      </template>
      <template v-for="menuChild of menu.children">
        <MenuItem v-if="menuChild.children.length === 0" :menu="menuChild" />
        <ElSubMenu v-else :index="menuChild.path">
          <template #title>
            <ElIcon v-if="menuChild.iconName">
              <MenuIcon :icon-name="menuChild.iconName" />
            </ElIcon>
            <span>{{ menuChild.title }}</span>
          </template>
          <SubMenu :menu-list="menuChild.children" />
        </ElSubMenu>
      </template>
    </ElSubMenu>
  </template>
</template>
