<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1"> item one </el-menu-item>
          <el-menu-item index="1-2"> item one </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3"> item three </el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title> item four </template>
          <el-menu-item index="1-4-1"> item one </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
  <div>
    <div>状态栏</div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, ElIcon } from 'element-plus';
import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
