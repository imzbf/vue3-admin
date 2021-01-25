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
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-s-data"></i>
        <span>数据页</span>
      </template>
      <el-menu-item-group title="数据页">
        <el-menu-item index="/"><i class="el-icon-s-marketing" />数据分析</el-menu-item>
        <el-menu-item index="/oversee"
          ><i class="el-icon-odometer" />数据监控</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-data-board"></i>
        <span>表格页</span>
      </template>
      <el-menu-item index="/table-base"
        ><i class="el-icon-data-board" />基本表格</el-menu-item
      >
      <el-menu-item index="/table-server"
        ><i class="el-icon-data-board" />动态数据表格</el-menu-item
      >
    </el-submenu>
    <el-submenu index="3">
      <template #title>
        <i class="el-icon-edit-outline"></i>
        <span>表单页</span>
      </template>
      <el-menu-item index="/form-base">
        <i class="el-icon-edit-outline"></i>基本表单</el-menu-item
      >
      <el-menu-item index="/form-def">
        <i class="el-icon-edit-outline"></i>自定义表单</el-menu-item
      >
    </el-submenu>
    <el-submenu index="4">
      <template #title>
        <i class="el-icon-warning-outline"></i>
        <span>异常页</span>
      </template>
      <el-menu-item index="/403"><i class="el-icon-warning-outline"></i>403</el-menu-item>
      <el-menu-item index="/404"><i class="el-icon-warning-outline"></i>404</el-menu-item>
      <el-menu-item index="/500"><i class="el-icon-warning-outline"></i>500</el-menu-item>
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
      defaultActive: state.setting.activeMenu
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
