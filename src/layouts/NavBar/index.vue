<script setup lang="ts">
import { reactive, defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
import { key } from '@/store';
import screenfull from 'screenfull';
import { DEMO_USER_HEAD } from '@/config/urls';
import {
  ElMessage,
  ElIcon,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElNotification,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElPopover
} from 'element-plus';
import { Fold, Expand, FullScreen, SwitchButton, Setting, User, Bell } from '@element-plus/icons';

import './index.scss';

import Message from './Message.vue';
import Notification from './Notification.vue';
import Todo from './Todo.vue';

// 同时设置props的vue属性和ts类型，setup会报错
// interface NavBarPropsType {
//   setSettingVisible: (val: boolean) => void;
// }

const store = useStore(key);

const props = defineProps({
  setSettingVisible: {
    type: Function,
    default: (val: boolean) => {
      return val;
    }
  }
});

const configData = reactive({
  // 全屏状态
  isFullscreen: false,
  // 通知内容显示
  bellContent: false
});

const adjustMenu = () => {
  store.commit('setting/asideState', {
    aside: store.state.setting.aside === 'open' ? 'close' : 'open'
  });
};

// 调整主题
const adjustTheme = ({ key }: any) => {
  store.commit('setting/themeChanged', {
    theme: key
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
  <div class="layout-bar">
    <ul class="layout-bar-left">
      <li @click="adjustMenu" class="cper">
        <ElIcon v-if="store.state.setting.aside === 'open'" :size="18"><Fold /></ElIcon>
        <ElIcon v-else :size="18"><Expand /></ElIcon>
      </li>
      <li class="breadcrumb-help">
        <ElBreadcrumb separator="/">
          <ElBreadcrumbItem
            v-for="breadcrumb of store.state.setting.breadcrumbs"
            :key="breadcrumb"
            >{{ breadcrumb }}</ElBreadcrumbItem
          >
        </ElBreadcrumb>
      </li>
    </ul>
    <ul class="layout-bar-right">
      <ElPopover trigger="click">
        <template #reference>
          <li>
            <ElBadge :value="12">
              <ElIcon><Bell /></ElIcon>
            </ElBadge>
          </li>
        </template>
        <ElTabs>
          <ElTabPane name="notice" label="通知">
            <Notification />
          </ElTabPane>
          <ElTabPane name="message" label="消息">
            <Message />
          </ElTabPane>
          <ElTabPane name="todo" label="代办">
            <Todo />
          </ElTabPane>
        </ElTabs>
      </ElPopover>
      <!-- <Dropdown
            trigger={['click']}
            overlay={
              <Menu onClick={adjustTheme}>
                <Menu.Item key="mix">
                  <MyIcon type="icon-ditu_diqiu" />
                  黑白主题
                </Menu.Item>
                <Menu.Item key="light">
                  <MyIcon type="icon-taiyang" />
                  白色主题
                </Menu.Item>
                <Menu.Item key="dark">
                  <MyIcon type="icon-yueliang" />
                  暗黑主题
                </Menu.Item>
              </Menu>
            }
          >
            <li>
              <SkinOutlined />
            </li>
          </Dropdown> -->

      <li @click="fullScreen">
        <ElIcon><FullScreen /></ElIcon>
      </li>

      <ElDropdown>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>
              <RouterLink to="/user" class="layout-bar-link">
                <ElIcon><User /></ElIcon> 个人中心
              </RouterLink>
            </ElDropdownItem>
            <ElDropdownItem>
              <RouterLink to="/user/setting" class="layout-bar-link">
                <ElIcon><Setting /></ElIcon> 个人设置
              </RouterLink>
            </ElDropdownItem>
            <ElDropdownItem @click="logout">
              <ElIcon><SwitchButton /></ElIcon>
              退出登录
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
        <li>
          <ElAvatar size="small" :src="DEMO_USER_HEAD" />
        </li>
      </ElDropdown>
    </ul>
  </div>
</template>
