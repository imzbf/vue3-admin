<template>
  <div id="login" class="login" :style="{ background: `url(${loginBody})` }">
    <div class="login-container">
      <div class="login-asset">
        <img :src="loginBg" width="500" />
      </div>
      <div class="login-form">
        <h1 class="form-title">后台管理模板</h1>
        <div class="form-item">
          <el-input v-model="data.info.username" size="large" type="text" placeholder="username: 1">
            <template #prefix>
              <el-icon class="el-input__icon"><User /></el-icon>
            </template>
          </el-input>
        </div>
        <div class="form-item">
          <el-input
            v-model="data.info.password"
            size="large"
            type="password"
            show-password
            placeholder="password: 1"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><Lock /></el-icon>
            </template>
          </el-input>
        </div>
        <div class="form-item" style="margin-bottom: 14px">
          <el-checkbox v-model="data.remembered"> 记住我 </el-checkbox>
          <el-popconfirm
            title="自行实现！"
            confirm-button-text="好的"
            cancel-button-text="被迫好的"
          >
            <template #reference>
              <span class="forget-p-help cper">忘记密码？</span>
            </template>
          </el-popconfirm>
        </div>
        <div class="form-item">
          <el-button type="primary" style="width: 100%" :loading="data.spinning" @click="login">
            登录
          </el-button>
        </div>
        <div class="form-item">
          <el-divider>OR</el-divider>
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
      <icon-font class="adjust-theme" :type="themeIcon" @click="adjustTheme" />
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
import { useStore } from 'vuex';
import { key } from '@/store';
import { onBeforeRouteLeave } from 'vue-router';
import { ElMessage } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue';
import IconFont from '@/components/IconFont/index.vue';
import { NAME_KEY, PASSWORD_KEY, REMEMBER_KEY } from '@/config/keys';
import './style.scss';

const loginBgNormal = new URL('../../assets/images/login-bg.svg', import.meta.url).href;
const loginBgDark = new URL('../../assets/images/login-bg-dark.svg', import.meta.url).href;
const loginBody = new URL('../../assets/images/login-body.svg', import.meta.url).href;

const data = reactive({
  info: {
    username: 'admin',
    password: 'admin'
  },
  remembered: true,
  // 请求中状态
  spinning: false
});

const store = useStore(key);

const loginBg = computed(() => {
  return store.state.setting.theme === 'dark' ? loginBgDark : loginBgNormal;
});

const themeIcon = computed(() => {
  return store.state.setting.theme === 'dark' ? 'icon-sun' : 'icon-moon';
});

const login = () => {
  if (data.info.username !== '' && data.info.password !== '') {
    data.spinning = true;
    store
      .dispatch('user/login', {
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
  store.commit('setting/themeChanged', {
    theme: store.state.setting.theme === 'dark' ? 'light' : 'dark'
  });
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
