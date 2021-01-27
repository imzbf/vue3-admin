<template>
  <section class="black-theme">
    <div :class="layoutAsideClass">
      <header class="logo">
        <img :src="LogoImg" />
        <span v-if="asideOpen">Vue3-Admin</span>
      </header>
      <div class="menu-container"><Menu /></div>
      <footer class="copyright" v-if="asideOpen"><span>@2020 zhoubangfu</span></footer>
    </div>
    <div class="layout">
      <header class="layout-header">
        <NavBar />
      </header>
      <main class="layout-main">
        <router-view />
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import { onMounted, computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

import Menu from './Menu/index.vue';
import NavBar from './NavBar/index.vue';
import LogoImg from '@/assets/logo.png';

export default defineComponent({
  setup() {
    const store = useStore(key);

    // BUG 登录后触发生成菜单
    onMounted(() => {
      store.commit('menu/routeChanged');
    });

    // 侧边栏展开状态
    const asideOpen = computed(() => {
      return store.state.setting.aside === 'open';
    });

    // 侧边栏样式
    const layoutAsideClass = computed(() => {
      return store.state.setting.aside === 'open'
        ? 'layout-aside'
        : 'layout-aside layout-aside-close';
    });

    return {
      asideOpen,
      layoutAsideClass,
      LogoImg
    };
  },
  components: { Menu, NavBar }
});
</script>

<style lang="scss" scoped>
@mixin hidden-words {
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
}

.black-theme {
  display: flex;
  height: 100%;

  .layout-aside {
    width: 210px;
    display: flex;
    flex-direction: column;
    position: relative;
    border-right: 1px solid rgb(230, 230, 230); // 适应element

    transition: all 0.2s;

    .logo {
      background-color: #1d1e23;
      color: #fff;
      padding: 16px;
      display: flex;
      align-items: center;
      @include hidden-words;

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
      background-color: #1d1e23;

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
      @include hidden-words;

      span {
        line-height: 32px;
      }
    }
  }

  .layout-aside-close {
    width: 64px;

    .logo {
      border-right: none;
    }
  }

  .layout {
    flex: 1;

    .layout-main {
      padding: 10px;
    }
  }
}
</style>
