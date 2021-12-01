<template>
  <div class="page-button">
    <div class="view-space">
      <ElRow>
        <Card>
          <el-row>
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
            <el-button>中文</el-button>
          </el-row>

          <el-row>
            <el-button plain>Plain</el-button>
            <el-button type="primary" plain>Primary</el-button>
            <el-button type="success" plain>Success</el-button>
            <el-button type="info" plain>Info</el-button>
            <el-button type="warning" plain>Warning</el-button>
            <el-button type="danger" plain>Danger</el-button>
          </el-row>

          <el-row>
            <el-button round>Round</el-button>
            <el-button type="primary" round>Primary</el-button>
            <el-button type="success" round>Success</el-button>
            <el-button type="info" round>Info</el-button>
            <el-button type="warning" round>Warning</el-button>
            <el-button type="danger" round>Danger</el-button>
          </el-row>

          <el-row>
            <el-button :icon="Search" circle></el-button>
            <el-button type="primary" :icon="Edit" circle></el-button>
            <el-button type="success" :icon="Check" circle></el-button>
            <el-button type="info" :icon="Message" circle></el-button>
            <el-button type="warning" :icon="Star" circle></el-button>
            <el-button type="danger" :icon="Delete" circle></el-button>
          </el-row>
        </Card>
      </ElRow>
      <ElRow>
        <Card>
          <el-row>
            <el-button disabled>Default</el-button>
            <el-button type="primary" disabled>Primary</el-button>
            <el-button type="success" disabled>Success</el-button>
            <el-button type="info" disabled>Info</el-button>
            <el-button type="warning" disabled>Warning</el-button>
            <el-button type="danger" disabled>Danger</el-button>
          </el-row>

          <el-row>
            <el-button plain disabled>Plain</el-button>
            <el-button type="primary" plain disabled>Primary</el-button>
            <el-button type="success" plain disabled>Success</el-button>
            <el-button type="info" plain disabled>Info</el-button>
            <el-button type="warning" plain disabled>Warning</el-button>
            <el-button type="danger" plain disabled>Danger</el-button>
          </el-row>
        </Card>
      </ElRow>
    </div>
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Button';
export default { name };
</script>

<script setup lang="ts">
import Card from '@/components/Card/index.vue';
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons';
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
</style>
