<script lang="ts">
export default { name: 'HeaderIndex' };
</script>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useSettingStore, useUserStore } from '@/stores';
import screenfull from 'screenfull';
import { DEMO_USER_HEAD } from '@/config/urls';
import { ElMessage } from 'element-plus';
import {
  Fold,
  Expand,
  FullScreen,
  SwitchButton,
  Setting,
  User,
  Bell,
  Sunrise,
  MoonNight
} from '@element-plus/icons-vue';
import LocaleSwitch from '@/components/LocaleSwitch/index.vue';

import './index.scss';

import Message from './Message.vue';
import Todo from './Todo.vue';

// 同时设置props的vue属性和ts类型，setup会报错
// interface NavBarPropsType {
//   setSettingVisible: (val: boolean) => void;
// }

const settingStore = useSettingStore();
const userStore = useUserStore();

const configData = reactive({
  // 全屏状态
  isFullscreen: false,
  // 通知内容显示
  bellContent: false
});

const isDark = computed(() => {
  return settingStore.state.theme === 'dark';
});

const adjustMenu = () => {
  if (settingStore.state.isMobile) {
    settingStore.adjustMobileDrawer(!settingStore.state.mobileDrawer);
  } else {
    settingStore.asideState(settingStore.state.aside === 'open' ? 'close' : 'open');
  }
};

// 调整主题
const adjustTheme = () => {
  settingStore.themeChanged(isDark.value ? 'light' : 'dark');
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

if (screenfull.isEnabled) {
  screenfull.on('change', () => {
    configData.isFullscreen = !configData.isFullscreen;
  });
}
</script>

<template>
  <header class="layout-header">
    <ul class="layout-header-left">
      <li class="cper" @click="adjustMenu">
        <ElIcon v-if="settingStore.state.aside === 'open'" :size="18"><Fold /></ElIcon>
        <ElIcon v-else :size="18"><Expand /></ElIcon>
      </li>
      <li class="breadcrumb-help">
        <ElBreadcrumb separator="/">
          <ElBreadcrumbItem
            v-for="breadcrumb of settingStore.state.breadcrumbs"
            :key="breadcrumb"
            >{{ $t(breadcrumb) }}</ElBreadcrumbItem
          >
        </ElBreadcrumb>
      </li>
    </ul>
    <ul class="layout-header-right">
      <ElPopover>
        <template #reference>
          <li>
            <ElBadge :value="12">
              <ElIcon><Bell /></ElIcon>
            </ElBadge>
          </li>
        </template>
        <ElTabs modelValue="message">
          <ElTabPane name="message" :label="$t('消息')">
            <Message />
          </ElTabPane>
          <ElTabPane name="todo" :label="$t('代办')">
            <Todo />
          </ElTabPane>
        </ElTabs>
      </ElPopover>

      <li @click="adjustTheme">
        <ElIcon v-if="isDark"><Sunrise /></ElIcon>
        <ElIcon v-else><MoonNight /></ElIcon>
      </li>

      <LocaleSwitch wrapper />

      <li @click="fullScreen">
        <ElIcon><FullScreen /></ElIcon>
      </li>

      <ElDropdown>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem :icon="User">
              <RouterLink to="/user" class="layout-header-link"> {{ $t('个人中心') }} </RouterLink>
            </ElDropdownItem>
            <ElDropdownItem :icon="Setting">
              <RouterLink to="/user/setting" class="layout-header-link">
                {{ $t('个人设置') }}
              </RouterLink>
            </ElDropdownItem>
            <ElDropdownItem :icon="SwitchButton" @click="userStore.logout">
              {{ $t('退出登录') }}
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
        <li>
          <ElAvatar size="small" :src="DEMO_USER_HEAD" />
        </li>
      </ElDropdown>
      <!-- <li @click="store.commit('setting/settingDrawerVisibleChanged')">
        <el-icon style="transform: rotate(90deg)"><MoreFilled /></el-icon>
      </li> -->
    </ul>
  </header>
</template>
