<script lang="ts" setup>
import { defineComponent, computed, h } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { ElMenu } from 'element-plus';
import type { MenuType } from '@/store/modules/menu';
import SubMenuRender from './SubMenuRender.vue';

const store = useStore(key);
const aside = computed(() => store.state.setting.aside === 'close');
</script>

<template>
  <ElMenu>
    <SubMenuRender :menuList="store.state.menu.menuList" />
  </ElMenu>
</template>
