<template>
  <section class="black-theme">
    <div :class="layoutAsideClass">
      <header class="logo">
        <img :src="`/@/assets/logo.png`" />
        <span v-if="asideOpen">Vue3-Admin</span>
      </header>
      <div class="menu-container"><Menu /></div>
      <footer class="copyright"><span>@2020 zhoubangfu</span></footer>
    </div>
    <div class="layout">
      <header class="layout-header">
        <div class="">
          <div @click="adjustMenu"><i class="el-icon-s-fold" /></div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </header>
      <div>路由标签栏</div>
      <main class="layout-main">
        <router-view />
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '/@/store';

import Menu from './Menu/index.vue';

export interface SetUpReturn {
  collapse: boolean;
}

export default defineComponent({
  setup() {
    const store = useStore(key);
    const asideOpen = computed(() => {
      return store.state.setting.aside === 'open';
    });

    const layoutAsideClass = computed(() => {
      return (
        'layout-aside ' +
        (store.state.setting.aside === 'open' ? '' : 'layout-aside-close')
      );
    });

    const adjustMenu = () => {
      store.commit('setting/asideState', {
        aside: store.state.setting.aside === 'open' ? 'close' : 'open'
      });
    };

    return { adjustMenu, asideOpen, layoutAsideClass };
  },
  components: { Menu }
});
</script>

<style lang="scss" scoped>
.black-theme {
  display: flex;
  height: 100%;

  .layout-aside {
    width: 210px;
    display: flex;
    flex-direction: column;
    position: relative;

    .logo {
      background-color: #1d1e23;
      color: #fff;
      padding: 16px;
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
      }

      span {
        font-size: 18px;
        font-weight: 600;
        padding-left: 10px;
      }
    }

    .menu-container {
      flex: 1 1;
      max-height: 100%;
      overflow-x: hidden;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 0 !important;
      }
    }

    .copyright {
      background-color: #1d1e23;
      color: #ddd;
      font-size: 14px;
      padding: 16px;
      text-align: center;

      span {
        line-height: 32px;
      }
    }
  }

  .layout-aside-close {
    width: 64px;
  }

  .layout {
    flex: 1;
  }
}
</style>
