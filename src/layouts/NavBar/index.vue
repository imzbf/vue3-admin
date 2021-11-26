<script setup lang="ts">
import { reactive, defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
import { key } from '@/store';
import screenfull from 'screenfull';
import { DEMO_USER_HEAD } from '@/config/urls';
import { ElMessage, ElIcon, ElBreadcrumb, ElBreadcrumbItem, ElNotification } from 'element-plus';
import { Fold, Expand } from '@element-plus/icons';

import './index.scss';

import Message from './Message';
import Notification from './Notification';
import Todo from './Todo';

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
      <!-- <Dropdown
            overlayClassName="notice-wrapper"
            trigger={['click']}
            placement="bottomCenter"
            getPopupContainer={() => document.querySelector('.theme-wrapper')}
            overlay={
              <>
                <div class="notice-content">
                  <Tabs defaultActiveKey={1}>
                    <Tabs.TabPane key={1} tab="通知">
                      <Notification />
                    </Tabs.TabPane>
                    <Tabs.TabPane key={2} tab="消息">
                      <Message />
                    </Tabs.TabPane>
                    <Tabs.TabPane key={3} tab="代办">
                      <Todo />
                    </Tabs.TabPane>
                  </Tabs>
                </div>
              </>
            }
          >
            <li>
              <Badge dot>
                <BellOutlined />
              </Badge>
            </li>
          </Dropdown>
          <Dropdown
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
          </Dropdown>

          <li onClick={fullScreen}>
            {configData.isFullscreen ? (
              <FullscreenOutlined />
            ) : (
              <FullscreenExitOutlined />
            )}
          </li> -->
    </ul>
  </div>
</template>
