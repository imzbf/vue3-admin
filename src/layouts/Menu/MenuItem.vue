<template>
  <el-menu-item v-if="props.menu.outLink" @click="goto(props.menu.outLink)">
    <el-icon v-if="menu.iconName">
      <menu-icon :icon-name="menu.iconName" />
    </el-icon>
    <span>{{ props.menu.title }}</span>
  </el-menu-item>

  <el-menu-item v-else :index="props.menu.path" @click="router.push(props.menu.path)">
    <el-icon v-if="menu.iconName">
      <menu-icon :icon-name="menu.iconName" />
    </el-icon>
    <span>{{ props.menu.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { MenuType } from '@/store/modules/menu';
import MenuIcon from './Icon.vue';
import { goto } from '@/utils';
import { useRouter } from 'vue-router';

const props = defineProps({
  menu: {
    type: Object as PropType<MenuType>,
    default: () => ({})
  }
});

const router = useRouter();
</script>
