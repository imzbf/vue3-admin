<template>
  <div class="login">
    <div class="login-container">
      <div class="login-form">
        <div class="form-item">
          <ElInput
            v-model="data.info.username"
            size="large"
            type="text"
            :placeholder="$t('用户名')"
            clearable
          >
            <template #prefix>
              <ElIcon class="el-input__icon"><User /></ElIcon>
            </template>
          </ElInput>
        </div>
        <div class="form-item">
          <ElInput
            v-model="data.info.password"
            size="large"
            type="password"
            showPassword
            :placeholder="$t('密码')"
            clearable
          >
            <template #prefix>
              <ElIcon class="el-input__icon"><Lock /></ElIcon>
            </template>
          </ElInput>
        </div>
        <div class="form-item" style="margin-bottom: 14px">
          <ElCheckbox v-model="data.remembered">{{ $t('记住我') }}</ElCheckbox>
          <ElPopconfirm :title="$t('开发中')">
            <template #reference>
              <span class="forget-p-help cper">{{ $t('忘记密码？') }}</span>
            </template>
          </ElPopconfirm>
        </div>
        <div class="form-item">
          <ElButton type="primary" style="width: 100%" :loading="data.spinning" @click="login">
            {{ $t('登录') }}
          </ElButton>
        </div>
        <div class="form-item">
          <ElDivider>OR</ElDivider>
          <ul class="oauth">
            <li class="cper">
              <svg class="icon login-icon" aria-hidden="true">
                <use xlink:href="#icon-facebook"></use>
              </svg>
            </li>
            <li class="cper">
              <svg class="icon login-icon" aria-hidden="true">
                <use xlink:href="#icon-google_plus"></use>
              </svg>
            </li>
            <li class="cper">
              <svg class="icon login-icon" aria-hidden="true">
                <use xlink:href="#icon-qq"></use>
              </svg>
            </li>
            <li class="cper">
              <svg class="icon login-icon" aria-hidden="true">
                <use xlink:href="#icon-wechat"></use>
              </svg>
            </li>
            <li class="cper">
              <svg class="icon login-icon" aria-hidden="true">
                <use xlink:href="#icon-github"></use>
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div class="login-actions">
        <ElIcon v-if="isDark" class="adjust-theme" @click="adjustTheme"><Sunrise /></ElIcon>
        <ElIcon v-else class="adjust-theme" @click="adjustTheme"><MoonNight /></ElIcon>

        <LocaleSwitch size="small" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Login';
export default { name };
</script>

<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue';
import { useSettingStore, useUserStore } from '@/stores';
import { onBeforeRouteLeave } from 'vue-router';
import { ElMessage } from 'element-plus';
import { User, Lock, Sunrise, MoonNight } from '@element-plus/icons-vue';
import { NAME_KEY, PASSWORD_KEY, REMEMBER_KEY } from '@/config/keys';
import LocaleSwitch from '@/components/LocaleSwitch/index.vue';

import './style.scss';

const data = reactive({
  info: {
    username: 'admin',
    password: 'admin'
  },
  remembered: true,
  // 请求中状态
  spinning: false
});

const settingStore = useSettingStore();
const userStore = useUserStore();

const isDark = computed(() => {
  return settingStore.state.theme === 'dark';
});

const login = () => {
  if (data.info.username !== '' && data.info.password !== '') {
    data.spinning = true;
    userStore
      .login({
        ...data.info,
        remembered: data.remembered
      })
      .then(() => {
        if (data.remembered) {
          localStorage.setItem(REMEMBER_KEY, data.remembered + '');
          // 自行加密
          localStorage.setItem(NAME_KEY, data.info.username);
          localStorage.setItem(PASSWORD_KEY, data.info.password);
        } else {
          localStorage.removeItem(REMEMBER_KEY);
          localStorage.removeItem(NAME_KEY);
          localStorage.removeItem(PASSWORD_KEY);
        }
      })
      .catch((error: any) => {
        data.spinning = false;
        ElMessage.error(error?.msg || '未知的异常！');
      });
  } else {
    ElMessage.error('登录信息不能为空！');
  }
};

const keyUpHandler = (e: any) => {
  if (e.keyCode == 13) {
    login();
  }
};

// 调整主题
const adjustTheme = () => {
  settingStore.themeChanged(settingStore.state.theme === 'dark' ? 'light' : 'dark');
};

onMounted(() => {
  document.addEventListener('keyup', keyUpHandler);

  // 处理密码
  const name = localStorage.getItem(NAME_KEY);
  const password = localStorage.getItem(PASSWORD_KEY);
  const remembered = localStorage.getItem(REMEMBER_KEY);

  if (name && password) {
    // 自定解密
    data.info.username = name;
    data.info.password = password;
    data.remembered = !!remembered;
  }
});

onBeforeRouteLeave((_to, _from, next) => {
  // 清除按键监控
  document.removeEventListener('keyup', keyUpHandler);
  next();
});
</script>
