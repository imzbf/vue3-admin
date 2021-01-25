<template>
  <el-menu
    style="height: 100%"
    :collapse="aside"
    router
    default-active="about"
    background-color="#1d1e23"
    text-color="#eee"
    :collapse-transition="false"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group title="分组1">
        <el-menu-item index="/"><i class="el-icon-location" />首页</el-menu-item>
        <el-menu-item index="1-2"><i class="el-icon-location" />选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3"><i class="el-icon-location"></i>选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template #title><i class="el-icon-location" /> <span>选项4</span></template>
        <el-menu-item index="1-4-1"><i class="el-icon-question" />选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="about">
      <i class="el-icon-menu"></i>
      <template #title>关于</template>
    </el-menu-item>
    <el-menu-item index="login">
      <i class="el-icon-setting"></i>
      <template #title>登录</template>
    </el-menu-item>
    <el-submenu index="5">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template #title>分组一</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="5-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '/@/store';

export interface PropsType {
  collapse: boolean;
}

export default defineComponent({
  setup(props: PropsType) {
    const { state } = useStore(key);

    const aside = computed(() => {
      return state.setting.aside === 'close';
    });

    return {
      props,
      aside,
      handleOpen(key: string | number, keyPath: string): void {
        console.log(key, keyPath);
      },
      handleClose(key: string | number, keyPath: string): void {
        console.log(key, keyPath);
      }
    };
  },
  methods: {}
});
</script>

<style lang="scss">
.el-menu {
  border-right: none;
}

.is-active {
  background-color: #111 !important;
}
</style>
