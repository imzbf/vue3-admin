<template>
  <section class="wrapper">
    <div :class="layoutAsideClass">
      <header class="logo">
        <img :src="LogoImg" />
        <span v-if="asideOpen">Vue3-Admin</span>
      </header>
      <div class="menu-container">
        <AdminMenu />
      </div>
      <footer v-if="asideOpen" class="copyright">
        <span>@2020 imbf.cc</span>
      </footer>
    </div>
    <div class="layout">
      <!-- <header class="layout-header">
        <NavBar @setSettingVisible="setSettingVisible" />
      </header> -->
      <main class="layout-main">
        <!-- https://github.com/vuejs/vue-router-next/issues/716#issuecomment-759521287 -->
        <!-- <RouterView v-slot="{ Component }">
          <KeepAlive :include="store.state.setting.cacheList">
            <Component :is="Component" />
          </KeepAlive>
        </RouterView> -->
        <RouterView />
      </main>
    </div>
    <!-- <div class="drawer">
      <Setting visible={data.settingVisible} setVisible={() => { data.settingVisible = false; }} />
    </div>  -->
  </section>
  <!-- <div>
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
  </div> -->
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';
import { key } from '@/store';
import AdminMenu from '@/layouts/Menu/index.vue';
import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons';
import './style.scss';

import LogoImg from '@/assets/logo.png';

const store = useStore(key);

const data = reactive({
  settingVisible: false
});

// 侧边栏样式
const layoutAsideClass = computed(() => {
  return store.state.setting.aside === 'open' ? 'layout-aside' : 'layout-aside layout-aside-close';
});

// 侧边栏展开状态
const asideOpen = computed(() => {
  return store.state.setting.aside === 'open';
});

const setSettingVisible = (val: boolean) => {
  data.settingVisible = val;
};
</script>
