<template>
  <div class="message-item">
    <div class="message-label">
      <div>新任务</div>
      <span>将会通过Ele通知的方式提醒您！</span>
    </div>
    <div class="message-action"><el-switch v-model="data.m1"></el-switch></div>
  </div>

  <div class="message-item">
    <div class="message-label">
      <div>系统消息</div>
      <span>将展示在工具栏中！</span>
    </div>
    <div class="message-action"><el-switch v-model="data.m2"></el-switch></div>
  </div>

  <div class="message-item">
    <div class="message-label">
      <div>聊天消息</div>
      <span>将在聊天工具中展示！</span>
    </div>
    <div class="message-action"><el-switch v-model="data.m3"></el-switch></div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const data = reactive({
  m1: true,
  m2: true,
  m3: true
});
</script>

<style lang="scss">
.message-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #eee;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .message-label {
    div {
      font-size: 15px;
      margin-bottom: 6px;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
