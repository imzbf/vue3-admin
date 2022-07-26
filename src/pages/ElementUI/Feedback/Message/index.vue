<template>
  <div class="page-message">
    <div class="view-space">
      <el-row :gutter="20">
        <el-col :span="12">
          <va-card>
            <template #title> Notification </template>
            <el-button plain @click="open1"> Success </el-button>
            <el-button plain @click="open2"> Warning </el-button>
            <el-button plain @click="open3"> Info </el-button>
            <el-button plain @click="open4"> Error </el-button></va-card
          >
        </el-col>
        <el-col :span="12">
          <va-card>
            <template #title> Notification </template>

            <el-button plain @click="open11"> Top Right </el-button>
            <el-button plain @click="open22"> Bottom Right </el-button>
            <el-button plain @click="open33"> Bottom Left </el-button>
            <el-button plain @click="open44"> Top Left </el-button>
          </va-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <va-card>
            <template #title> Popover </template>
            <el-popover
              placement="top-start"
              title="Title"
              :width="200"
              trigger="hover"
              content="this is content, this is content, this is content"
            >
              <template #reference>
                <el-button>Hover to activate</el-button>
              </template>
            </el-popover>

            <el-popover
              placement="bottom"
              title="Title"
              :width="200"
              trigger="click"
              content="this is content, this is content, this is content"
            >
              <template #reference>
                <el-button>Click to activate</el-button>
              </template>
            </el-popover>

            <el-popover
              ref="popover"
              placement="right"
              title="Title"
              :width="200"
              trigger="focus"
              content="this is content, this is content, this is content"
            >
              <template #reference>
                <el-button>Focus to activate</el-button>
              </template>
            </el-popover>
          </va-card>
        </el-col>
      </el-row>
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
