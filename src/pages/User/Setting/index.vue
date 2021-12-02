<template>
  <div class="page-user-setting">
    <div class="view-space">
      <ElRow :gutter="20">
        <ElCol :span="6">
          <Card>
            <ElMenu router>
              <ElMenuItem index="account">
                <ElIcon><CreditCard /></ElIcon>
                资料设置</ElMenuItem
              >
              <ElMenuItem index="security">
                <ElIcon><Coin /></ElIcon>
                安全设置</ElMenuItem
              >
              <ElMenuItem index="binding">
                <ElIcon><Connection /></ElIcon>
                账号绑定</ElMenuItem
              >
              <ElMenuItem index="message">
                <ElIcon><ChatDotRound /></ElIcon>
                消息通知</ElMenuItem
              >
            </ElMenu>
          </Card>
        </ElCol>
        <ElCol :span="18">
          <Card> <router-view></router-view> </Card>
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
import Card from '@/components/Card/index.vue';
import { CreditCard, Connection, ChatDotRound, Coin } from '@element-plus/icons';
</script>

<style lang="scss">
.page-user-setting {
  .el-menu {
    border-right: none;
  }
}
</style>
