<template>
  <div class="layout-bar">
    <ul class="layout-bar-left">
      <li @click="adjustMenu" class="cper"><i :class="menuTouchClass" /></li>
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
      <el-popover placement="top-end" trigger="click">
        <template #reference>
          <li>
            <el-badge :value="12" class="item">
              <i class="el-icon-bell" />
            </el-badge>
          </li>
        </template>
        <el-tabs value="first">
          <el-tab-pane label="通知" name="first">通知</el-tab-pane>
          <el-tab-pane label="消息" name="second">消息</el-tab-pane>
          <el-tab-pane label="邮件" name="third">邮件</el-tab-pane>
        </el-tabs>
      </el-popover>
      <li><i class="el-icon-table-lamp" /></li>
      <li @click="fullScreen">
        <i :class="isFullscreen ? 'el-icon-aim' : 'el-icon-full-screen'" />
      </li>
      <li><i class="el-icon-setting" /></li>
      <el-dropdown>
        <li><el-avatar size="small" :src="HeadImg" /></li>
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
</template>

<script lang="ts">
import { defineComponent, computed, reactive, watch } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import screenfull from 'screenfull';
import HeadImg from '@/assets/head02.gif';

import { ElMessage } from 'element-plus';

export default defineComponent({
  setup() {
    const store = useStore(key);

    const data = reactive({
      menuTouchClass: 'el-icon-s-fold',
      // 全屏状态
      isFullscreen: false
    });
    const breadcrumbs = computed(() => store.state.setting.breadcrumbs);

    // 隐藏显示菜单图标样式，watch写法
    watch(
      () => store.state.setting.aside === 'open',
      (state) => {
        data.menuTouchClass = state ? 'el-icon-s-fold' : 'el-icon-s-unfold';
      }
    );

    const adjustMenu = () => {
      store.commit('setting/asideState', {
        aside: store.state.setting.aside === 'open' ? 'close' : 'open'
      });
    };

    const fullScreen = () => {
      if (screenfull.isEnabled) {
        if (screenfull.isFullscreen) {
          screenfull.exit();
        } else screenfull.request();
      } else {
        ElMessage({
          showClose: true,
          message: '浏览器不支持全屏',
          type: 'error'
        });
      }
    };

    if (screenfull.isEnabled) {
      screenfull.on('change', () => {
        data.isFullscreen = !data.isFullscreen;
      });
    }

    return {
      ...data,
      breadcrumbs,
      HeadImg,
      adjustMenu,
      fullScreen
    };
  }
});
</script>

<style lang="scss" scoped>
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
</style>
