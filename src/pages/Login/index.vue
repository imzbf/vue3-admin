<template>
  <div class="login" id="login" :style="{ background: `url(${loginBody})` }">
    <div class="login-container">
      <div class="login-asset">
        <img :src="loginBg" width="500" />
      </div>
      <div class="login-form">
        <h1 class="form-title">后台管理模板</h1>
        <div class="form-item">
          <el-input size="large" type="text" v-model="data.info.username" placeholder="username: 1">
            <template #prefix>
              <el-icon class="el-input__icon"><User /></el-icon>
            </template>
          </el-input>
        </div>
        <div class="form-item">
          <el-input
            size="large"
            type="password"
            v-model="data.info.password"
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
          <el-popconfirm title="自行实现！" confirmButtonText="好的" cancel-buttonText="被迫好的">
            <template #reference>
              <span class="forget-p-help cper">忘记密码？</span>
            </template>
          </el-popconfirm>
        </div>
        <div class="form-item">
          <el-button type="primary" @click="login" style="width: 100%" :loading="data.spinning">
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
import './style.scss';
import { onBeforeRouteLeave } from 'vue-router';
import { ElMessage } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue';

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

const login = () => {
  if (data.info.username !== '' && data.info.password !== '') {
    data.spinning = true;
    store
      .dispatch('user/login', {
        ...data.info,
        remembered: data.remembered
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

onMounted(() => {
  document.addEventListener('keyup', keyUpHandler);
});

onBeforeRouteLeave((_to, _from, next) => {
  // 清除按键监控
  document.removeEventListener('keyup', keyUpHandler);
  next();
});
</script>
