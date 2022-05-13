<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
import { key } from '@/store';
import screenfull from 'screenfull';
import { DEMO_USER_HEAD } from '@/config/urls';
import { ElMessage, ElNotification } from 'element-plus';
import {
  Fold,
  Expand,
  FullScreen,
  SwitchButton,
  Setting,
  User,
  Bell,
  MoreFilled,
  ReadingLamp
} from '@element-plus/icons-vue';
import IconFont from '@/components/IconFont/index.vue';

import './index.scss';

import Message from './Message.vue';
import Notification from './Notification.vue';
import Todo from './Todo.vue';
import { Themes } from '@/store/modules/setting';

// 同时设置props的vue属性和ts类型，setup会报错
// interface NavBarPropsType {
//   setSettingVisible: (val: boolean) => void;
// }

const store = useStore(key);

const configData = reactive({
  // 全屏状态
  isFullscreen: false,
  // 通知内容显示
  bellContent: false
});

const adjustMenu = () => {
  if (store.state.setting.isMobile) {
    store.commit('setting/adjustMobileDrawer', {
      mobileDrawer: !store.state.setting.mobileDrawer
    });
  } else {
    store.commit('setting/asideState', {
      aside: store.state.setting.aside === 'open' ? 'close' : 'open'
    });
  }
};

// 调整主题
const adjustTheme = (theme: Themes) => {
  store.commit('setting/themeChanged', {
    theme
  });
};

const fullScreen = () => {
  if (screenfull.isEnabled) {
    if (screenfull.isFullscreen) {
      screenfull.exit();
    } else screenfull.request();
  } else {
    ElMessage.error('浏览器不支持全屏');
  }
};

// 退出登录
const logout = () => {
  store.dispatch('user/logout').catch((error: any) => {
    ElNotification({
      type: 'warning',
      title: '操作失败！',
      message: error?.msg || '未知的异常！'
    });
  });
};

if (screenfull.isEnabled) {
  screenfull.on('change', () => {
    configData.isFullscreen = !configData.isFullscreen;
  });
}
</script>

<template>
  <header class="layout-header">
    <ul class="layout-header-left">
      <li @click="adjustMenu" class="cper">
        <el-icon v-if="store.state.setting.aside === 'open'" :size="18"><Fold /></el-icon>
        <el-icon v-else :size="18"><Expand /></el-icon>
      </li>
      <li class="breadcrumb-help">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="breadcrumb of store.state.setting.breadcrumbs"
            :key="breadcrumb"
            >{{ breadcrumb }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </li>
    </ul>
    <ul class="layout-header-right">
      <el-popover trigger="click">
        <template #reference>
          <li>
            <el-badge :value="12">
              <el-icon><Bell /></el-icon>
            </el-badge>
          </li>
        </template>
        <el-tabs model-value="notice">
          <el-tab-pane name="notice" label="通知">
            <Notification />
          </el-tab-pane>
          <el-tab-pane name="message" label="消息">
            <Message />
          </el-tab-pane>
          <el-tab-pane name="todo" label="代办">
            <Todo />
          </el-tab-pane>
        </el-tabs>
      </el-popover>
      <el-dropdown>
        <li>
          <el-icon>
            <reading-lamp />
          </el-icon>
        </li>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="adjustTheme('light')">
              <icon-font type="icon-taiyang" />
              <span style="padding-left: 4px">默认主题</span>
            </el-dropdown-item>
            <el-dropdown-item @click="adjustTheme('dark')">
              <icon-font type="icon-yueliang" />

              <span style="padding-left: 4px">暗黑主题</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <li @click="fullScreen">
        <el-icon><FullScreen /></el-icon>
      </li>

      <el-dropdown>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <RouterLink to="/user" class="layout-header-link">
                <el-icon><User /></el-icon> 个人中心
              </RouterLink>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/user/setting" class="layout-header-link">
                <el-icon><Setting /></el-icon> 个人设置
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item @click="logout">
              <el-icon><SwitchButton /></el-icon>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
        <li>
          <el-avatar size="small" :src="DEMO_USER_HEAD" />
        </li>
      </el-dropdown>
      <!-- <li @click="store.commit('setting/settingDrawerVisibleChanged')">
        <el-icon style="transform: rotate(90deg)"><MoreFilled /></el-icon>
      </li> -->
    </ul>
  </header>
</template>
