<script setup lang="ts">
import type { PropType } from 'vue';
import type { MenuType } from '@/store/modules/menu';
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
    <menu-item v-if="menu.outLink" :menu="menu" />
    <menu-item v-else-if="menu.children.length === 0" :menu="menu" />
    <menu-item v-else-if="menu.children.length === 1" :menu="menu.children[0]" />
    <el-sub-menu v-else :index="menu.path">
      <template #title>
        <el-icon v-if="menu.iconName">
          <menu-icon :icon-name="menu.iconName" />
        </el-icon>
        <span>{{ menu.title }}</span>
      </template>
      <template v-for="menuChild of menu.children">
        <menu-item v-if="menuChild.children.length === 0" :menu="menuChild" />
        <el-sub-menu v-else :index="menuChild.path">
          <template #title>
            <el-icon v-if="menuChild.iconName">
              <menu-icon :icon-name="menuChild.iconName" />
            </el-icon>
            <span ddd>{{ menuChild.title }}</span>
          </template>
          <sub-menu :menu-list="menuChild.children" />
        </el-sub-menu>
      </template>
    </el-sub-menu>
  </template>
</template>
