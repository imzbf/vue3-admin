<template>
  <section class="black-theme">
    <div :class="layoutAsideClass">
      <header class="logo">
        <img :src="`/@/assets/logo.png`" />
        <span v-if="asideOpen">Vue3-Admin</span>
      </header>
      <div class="menu-container"><Menu /></div>
      <footer class="copyright" v-if="asideOpen"><span>@2020 zhoubangfu</span></footer>
    </div>
    <div class="layout">
      <header class="layout-header">
        <div class="layout-bar">
          <ul class="layout-bar-left">
            <li @click="adjustMenu" class="cper"><i :class="data.menuTouchClass" /></li>
            <li class="breadcrumb-help">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item
                  v-for="(breadcrumb, index) of breadcrumbs"
                  :key="breadcrumb + index"
                  >{{ breadcrumb }}</el-breadcrumb-item
                >
              </el-breadcrumb>
            </li>
          </ul>
          <ul class="layout-bar-right">
            <li>
              <el-badge :value="12" class="item">
                <i class="el-icon-bell" />
              </el-badge>
            </li>
            <li><i class="el-icon-table-lamp" /></li>
            <li><i class="el-icon-full-screen" /></li>
            <li><i class="el-icon-setting" /></li>
            <el-dropdown>
              <li><el-avatar size="small" :src="`/@/assets/IMG_0380.GIF`" /></li>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-switch-button" divided
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </ul>
        </div>
      </header>
      <main class="layout-main">
        <router-view />
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import { onMounted, computed, defineComponent, reactive, watch } from 'vue';
import { useStore } from 'vuex';
import { key } from '/@/store';

import Menu from './Menu/index.vue';

export interface SetUpReturn {
  collapse: boolean;
}

export default defineComponent({
  setup() {
    const store = useStore(key);

    // BUG 登录后触发生成菜单
    onMounted(() => {
      store.commit('menu/routeChanged');
    });

    const data = reactive({
      logoShow: store.state.setting.aside === 'open',
      menuTouchClass: 'el-icon-s-fold'
    });

    // 隐藏显示菜单图标样式，watch写法
    watch(
      () => store.state.setting.aside === 'open',
      (state) => {
        data.menuTouchClass = state ? 'el-icon-s-fold' : 'el-icon-s-unfold';
      }
    );

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

    const breadcrumbs = computed(() => store.state.setting.breadcrumbs);

    const adjustMenu = () => {
      store.commit('setting/asideState', {
        aside: store.state.setting.aside === 'open' ? 'close' : 'open'
      });
    };

    return { adjustMenu, asideOpen, data, breadcrumbs, layoutAsideClass };
  },
  components: { Menu }
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

    .layout-header {
      .layout-bar {
        display: flex;
        justify-content: space-between;
        box-shadow: 0 1px 4px rgb(220, 223, 230);

        .layout-bar-left,
        .layout-bar-right {
          position: relative;
          display: flex;

          li {
            height: 50px;
            padding: 0 10px;
            display: inline-flex;
            align-items: center;
          }
        }

        .layout-bar-left {
          @media screen and (max-width: 750px) {
            .breadcrumb-help {
              display: none;
            }
          }
        }

        .layout-bar-right {
          padding-right: 10px;

          li {
            cursor: pointer;
            padding: 0 16px;
            transition: all 0.3s;

            &:hover {
              background-color: rgb(244, 244, 245);
            }
          }
        }
      }
    }

    .layout-main {
      padding: 10px;
    }
  }
}
</style>
