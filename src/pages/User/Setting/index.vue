<template>
  <div class="page-user-setting">
    <div class="view-space">
      <ElRow :gutter="20">
        <ElCol :span="6">
          <VaCard>
            <ElMenu router :defaultActive="defaultActive">
              <ElMenuItem index="/user/setting/account">
                <ElIcon><CreditCard /></ElIcon>
                {{ $t('资料设置') }}</ElMenuItem
              >
              <ElMenuItem index="/user/setting/security">
                <ElIcon><Coin /></ElIcon>
                {{ $t('安全设置') }}</ElMenuItem
              >
              <ElMenuItem index="/user/setting/binding">
                <ElIcon><Connection /></ElIcon>
                {{ $t('账号绑定') }}</ElMenuItem
              >
              <ElMenuItem index="/user/setting/message">
                <ElIcon><ChatDotRound /></ElIcon>
                {{ $t('消息通知') }}</ElMenuItem
              >
            </ElMenu>
          </VaCard>
        </ElCol>
        <ElCol :span="18">
          <VaCard> <RouterView></RouterView> </VaCard>
        </ElCol>
      </ElRow>
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
