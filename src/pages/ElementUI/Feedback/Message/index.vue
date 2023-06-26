<template>
  <div class="page-message">
    <div class="view-space">
      <ElRow :gutter="20">
        <ElCol :span="12">
          <VaCard>
            <template #title> Notification </template>
            <ElButton plain @click="open1"> Success </ElButton>
            <ElButton plain @click="open2"> Warning </ElButton>
            <ElButton plain @click="open3"> Info </ElButton>
            <ElButton plain @click="open4"> Error </ElButton></VaCard
          >
        </ElCol>
        <ElCol :span="12">
          <VaCard>
            <template #title> Notification </template>

            <ElButton plain @click="open11"> Top Right </ElButton>
            <ElButton plain @click="open22"> Bottom Right </ElButton>
            <ElButton plain @click="open33"> Bottom Left </ElButton>
            <ElButton plain @click="open44"> Top Left </ElButton>
          </VaCard>
        </ElCol>
      </ElRow>
      <ElRow :gutter="20">
        <ElCol :span="12">
          <VaCard>
            <template #title> Popover </template>
            <ElPopover
              placement="top-start"
              title="Title"
              :width="200"
              trigger="hover"
              content="this is content, this is content, this is content"
            >
              <template #reference>
                <ElButton>Hover to activate</ElButton>
              </template>
            </ElPopover>

            <ElPopover
              placement="bottom"
              title="Title"
              :width="200"
              trigger="click"
              content="this is content, this is content, this is content"
            >
              <template #reference>
                <ElButton>Click to activate</ElButton>
              </template>
            </ElPopover>

            <ElPopover
              ref="popover"
              placement="right"
              title="Title"
              :width="200"
              trigger="focus"
              content="this is content, this is content, this is content"
            >
              <template #reference>
                <ElButton>Focus to activate</ElButton>
              </template>
            </ElPopover>
          </VaCard>
        </ElCol>
      </ElRow>
    </div>
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Message';
export default { name };
</script>

<script setup lang="ts">
import VaCard from '@/components/Card/index.vue';
import { ElNotification } from 'element-plus';

const open1 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success'
  });
};

const open2 = () => {
  ElNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning'
  });
};

const open3 = () => {
  ElNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info'
  });
};

const open4 = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error'
  });
};

const open11 = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the top right corner"
  });
};

const open22 = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right'
  });
};

const open33 = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left'
  });
};

const open44 = () => {
  ElNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left'
  });
};
</script>

<style lang="scss">
.page-message {
  .el-row {
    margin-bottom: 20px;
  }
}
</style>
