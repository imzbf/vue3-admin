<template>
  <section :class="wrapperClass">
    <ElDrawer
      v-if="settingStore.state.isMobile"
      :modelValue="settingStore.state.mobileDrawer"
      direction="ltr"
      size="auto"
      :withHeader="false"
      customClass="mobile-menu-drawer"
      @close="adjustMobileDrawer"
    >
      <div class="layout-aside">
        <header class="logo">
          <img :src="LogoImg" />
          <span>vue3-admin</span>
        </header>
        <div class="menu-container">
          <AdminMenu />
        </div>
        <footer class="copyright">
          <span>@2020 imzbf</span>
        </footer>
      </div>
    </ElDrawer>
    <div v-else class="layout-aside">
      <header class="logo">
        <img :src="LogoImg" />
        <span v-if="asideOpen">vue3-admin</span>
      </header>
      <div class="menu-container">
        <AdminMenu />
      </div>
      <footer v-if="asideOpen" class="copyright">
        <span>@2020 imzbf</span>
      </footer>
    </div>
    <div class="layout">
      <VaHeader />
      <VaBar />
      <main class="layout-main">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <KeepAlive :include="settingStore.state.cacheList">
              <Component :is="Component" />
            </KeepAlive>
          </Transition>
        </RouterView>
      </main>
    </div>
    <div class="drawer">
      <VaSetting />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useSettingStore } from '@/stores';
import AdminMenu from '@/layouts/Menu/index.vue';
import VaHeader from './Header/index.vue';
import './style.scss';

import LogoImg from '@/assets/logo.png';
import VaBar from './Bar/index.vue';
import VaSetting from './Setting/index.vue';

const settingStore = useSettingStore();

// 侧边栏样式
const wrapperClass = computed(() => {
  const classList = ['wrapper'];

  if (settingStore.state.aside !== 'open') {
    classList.push('aside-close');
  }

  if (settingStore.state.isMobile) {
    classList.push('is-mobile');
  }
  return classList;
});

// 侧边栏展开状态
const asideOpen = computed(() => {
  return settingStore.state.aside === 'open';
});

const adjustMobileDrawer = () => {
  settingStore.adjustMobileDrawer(!settingStore.state.mobileDrawer);
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
