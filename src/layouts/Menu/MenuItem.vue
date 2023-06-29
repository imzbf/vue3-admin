<template>
  <ElMenuItem v-if="props.menu.outLink" @click="goto(props.menu.outLink)">
    <ElIcon v-if="menu.iconName">
      <MenuIcon :iconName="menu.iconName" />
    </ElIcon>
    <span>{{ $t(props.menu.title) }}</span>
  </ElMenuItem>

  <ElMenuItem v-else :index="props.menu.path" @click="router.push(props.menu.path)">
    <ElIcon v-if="menu.iconName">
      <MenuIcon :iconName="menu.iconName" />
    </ElIcon>
    <span>{{ $t(props.menu.title) }}</span>
  </ElMenuItem>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { MenuType } from '@/stores';
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
