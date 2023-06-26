<template>
  <div class="page-alert">
    <div class="view-space">
      <ElRow :gutter="20">
        <ElCol :span="12">
          <VaCard>
            <ElAlert title="success alert" type="success" />
            <ElAlert title="info alert" type="info" />
            <ElAlert title="warning alert" type="warning" />
            <ElAlert title="error alert" type="error" /> </VaCard
        ></ElCol>
        <ElCol :span="12">
          <VaCard>
            <ElAlert title="success alert" type="success" effect="dark"> </ElAlert>
            <ElAlert title="info alert" type="info" effect="dark"> </ElAlert>
            <ElAlert title="warning alert" type="warning" effect="dark"> </ElAlert>
            <ElAlert title="error alert" type="error" effect="dark"> </ElAlert
          ></VaCard>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="24">
          <VaCard>
            <ElAlert
              title="success alert"
              type="success"
              description="more text description"
              showIcon
            >
            </ElAlert>
            <ElAlert title="info alert" type="info" description="more text description" showIcon>
            </ElAlert>
            <ElAlert
              title="warning alert"
              type="warning"
              description="more text description"
              showIcon
            >
            </ElAlert>
            <ElAlert title="error alert" type="error" description="more text description" showIcon>
            </ElAlert>
          </VaCard>
        </ElCol>
      </ElRow>
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
