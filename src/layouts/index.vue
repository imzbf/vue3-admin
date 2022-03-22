<template>
  <section :class="wrapperClass">
    <el-drawer
      v-if="store.state.setting.isMobile"
      :model-value="store.state.setting.mobileDrawer"
      @close="adjustMobileDrawer"
      direction="ltr"
      size="auto"
      :with-header="false"
      custom-class="mobile-menu-drawer"
    >
      <div class="layout-aside">
        <header class="logo">
          <img :src="LogoImg" />
          <span>后台管理模板</span>
        </header>
        <div class="menu-container">
          <admin-menu />
        </div>
        <footer class="copyright">
          <span>@2020 imbf.cc</span>
        </footer>
      </div>
    </el-drawer>
    <div v-else class="layout-aside">
      <header class="logo">
        <img :src="LogoImg" />
        <span v-if="asideOpen">后台管理模板</span>
      </header>
      <div class="menu-container">
        <admin-menu />
      </div>
      <footer v-if="asideOpen" class="copyright">
        <span>@2020 imbf.cc</span>
      </footer>
    </div>
    <div class="layout">
      <va-header />
      <va-bar />
      <main class="layout-main">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <keep-alive :include="store.state.setting.cacheList">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </main>
    </div>
    <div class="drawer">
      <va-setting />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import AdminMenu from '@/layouts/Menu/index.vue';
import VaHeader from './Header/index.vue';
import './style.scss';

import LogoImg from '@/assets/logo.png';
import VaBar from './Bar/index.vue';
import VaSetting from './Setting/index.vue';

const store = useStore(key);

const data = reactive({
  settingVisible: false,
  mobileMenuDrawer: true
});

// 侧边栏样式
const wrapperClass = computed(() => {
  const classList = ['wrapper'];

  if (store.state.setting.aside !== 'open') {
    classList.push('aside-close');
  }

  if (store.state.setting.isMobile) {
    classList.push('is-mobile');
  }
  return classList;
});

// 侧边栏展开状态
const asideOpen = computed(() => {
  return store.state.setting.aside === 'open';
});

const adjustMobileDrawer = () => {
  store.commit('setting/adjustMobileDrawer', {
    mobileDrawer: !store.state.setting.mobileDrawer
  });
};
</script>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Layout';
export default { name };
</script>

<style lang="scss">
.is-mobile {
  .mobile-menu-drawer {
    .el-drawer__body {
      padding: 0;
    }
  }
}
</style>
