<template>
  <section class="wrapper">
    <div :class="layoutAsideClass">
      <header class="logo">
        <img :src="LogoImg" />
        <span v-if="asideOpen">后台管理模板</span>
      </header>
      <div class="menu-container">
        <AdminMenu />
      </div>
      <footer v-if="asideOpen" class="copyright">
        <span>@2020 imbf.cc</span>
      </footer>
    </div>
    <div class="layout">
      <header class="layout-header">
        <NavBar @setSettingVisible="setSettingVisible" />
      </header>
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
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';
import { key } from '@/store';
import AdminMenu from '@/layouts/Menu/index.vue';
import NavBar from './NavBar/index.vue';
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
