<template>
  <el-menu
    style="height: 100%"
    :collapse="aside"
    router
    :default-active="defaultActive"
    background-color="#1d1e23"
    text-color="#eee"
    :collapse-transition="false"
  >
    <Nest :list="menuList" />
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import Nest from './nest.vue';

export default defineComponent({
  // 组件需要申明props，setup方法中才能正确接收到props
  props: {},
  setup(props) {
    const { state } = useStore(key);

    const aside = computed(() => state.setting.aside === 'close');
    const defaultActive = computed(() => state.setting.activeMenu);
    const menuList = computed(() => state.menu.menuList);

    return {
      ...props,
      aside,
      defaultActive,
      menuList
    };
  },
  components: { Nest }
});
</script>

<style lang="scss">
.el-menu {
  border-right: none;
  .is-active {
    background-color: #111 !important;
  }
}
</style>
