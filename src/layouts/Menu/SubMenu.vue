<script setup lang="ts">
import type { PropType } from 'vue';
import type { MenuType } from '@/store/modules/menu';
import MenuItem from './MenuItem.vue';
import MenuIcon from './Icon.vue';

const props = defineProps({
  menuList: {
    type: Array as PropType<Array<MenuType>>,
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
          <MenuIcon :iconName="menu.iconName" />
        </ElIcon>
        <span>{{ $t(menu.title) }}</span>
      </template>
      <template v-for="menuChild of menu.children">
        <MenuItem
          v-if="menuChild.children.length === 0"
          :key="`el-menu-item-${menuChild.title}`"
          :menu="menuChild"
        />
        <ElSubMenu v-else :key="`el-sub-menu-${menuChild.title}`" :index="menuChild.path">
          <template #title>
            <ElIcon v-if="menuChild.iconName">
              <MenuIcon :iconName="menuChild.iconName" />
            </ElIcon>
            <span>{{ $t(menuChild.title) }}</span>
          </template>
          <SubMenu :menuList="menuChild.children" />
        </ElSubMenu>
      </template>
    </ElSubMenu>
  </template>
</template>
