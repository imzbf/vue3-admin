<template>
  <div class="page-user-setting">
    <div class="view-space">
      <el-row :gutter="20">
        <el-col :span="6">
          <va-card>
            <el-menu router :default-active="defaultActive">
              <el-menu-item index="/user/setting/account">
                <el-icon><CreditCard /></el-icon>
                资料设置</el-menu-item
              >
              <el-menu-item index="/user/setting/security">
                <el-icon><Coin /></el-icon>
                安全设置</el-menu-item
              >
              <el-menu-item index="/user/setting/binding">
                <el-icon><Connection /></el-icon>
                账号绑定</el-menu-item
              >
              <el-menu-item index="/user/setting/message">
                <el-icon><ChatDotRound /></el-icon>
                消息通知</el-menu-item
              >
            </el-menu>
          </va-card>
        </el-col>
        <el-col :span="18">
          <va-card> <router-view></router-view> </va-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'UserSetting';
export default { name };
</script>

<script setup lang="ts">
import VaCard from '@/components/Card/index.vue';
import { CreditCard, Connection, ChatDotRound, Coin } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const defaultActive = route.path;
</script>

<style lang="scss">
.page-user-setting {
  .el-menu {
    border-right: none;
  }
}
</style>
