<template>
  <div class="page-alert">
    <div class="view-space">
      <el-row :gutter="20">
        <el-col :span="12">
          <va-card>
            <el-alert title="success alert" type="success" />
            <el-alert title="info alert" type="info" />
            <el-alert title="warning alert" type="warning" />
            <el-alert title="error alert" type="error" /> </va-card
        ></el-col>
        <el-col :span="12">
          <va-card>
            <el-alert title="success alert" type="success" effect="dark"> </el-alert>
            <el-alert title="info alert" type="info" effect="dark"> </el-alert>
            <el-alert title="warning alert" type="warning" effect="dark"> </el-alert>
            <el-alert title="error alert" type="error" effect="dark"> </el-alert
          ></va-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <va-card>
            <el-alert
              title="success alert"
              type="success"
              description="more text description"
              show-icon
            >
            </el-alert>
            <el-alert title="info alert" type="info" description="more text description" show-icon>
            </el-alert>
            <el-alert
              title="warning alert"
              type="warning"
              description="more text description"
              show-icon
            >
            </el-alert>
            <el-alert
              title="error alert"
              type="error"
              description="more text description"
              show-icon
            >
            </el-alert>
          </va-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'Alert';
export default { name };
</script>

<script setup lang="ts">
import VaCard from '@/components/Card/index.vue';
</script>

<style lang="scss">
.page-alert {
  .el-alert {
    margin-top: 20px;
  }

  .el-row {
    margin-bottom: 20px;
  }
}
</style>
