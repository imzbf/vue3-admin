<template>
  <template v-for="(menu, index) of list" :key="menu.path + index">
    <el-submenu :index="menu.path" v-if="menu.children.length > 0">
      <template #title>
        <i :class="menu.iconClass" />
        <span>{{ menu.menuName }}</span>
      </template>
      <template
        v-for="(menuChild, childIndex) of menu.children"
        :key="menuChild.path + childIndex"
      >
        <el-menu-item v-if="menuChild.children.length === 0" :index="menuChild.path"
          ><i :class="menuChild.iconClass" />{{ menuChild.menuName }}</el-menu-item
        >
        <Nest v-else :list="menuChild.children" />
      </template>
    </el-submenu>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MenuType } from '@/store/modules/menu';

export interface PropsType {
  list: Array<MenuType>;
}

export default defineComponent({
  // 组件名称需与标签名对应
  name: 'Nest',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
});
</script>
