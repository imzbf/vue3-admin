<script setup lang="ts">
import FeCard from '@/components/Card/index.vue';
import IconFont from '@/components/IconFont/index.vue';
</script>

<template>
  <FeCard :border="true" class="va-mb">
    <template #title>
      <IconFont type="icon-changyongfenlei" class="title-icon" />
      常用功能
    </template>
    <ElRow class="used-list">
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon"> <IconFont type="icon-liebiao" /></span>
          <span>列表</span>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <IconFont type="icon-dingdan" />
          </span>
          <span>表单</span>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <IconFont type="icon-icon_A" />
          </span>

          <span>设置</span>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <IconFont type="icon-sousuo" />
          </span>

          <span>搜索</span>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <IconFont type="icon-yibiaopan" />
          </span>

          <span>监控台</span>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <IconFont type="icon-gongju" />
          </span>
          <span>工具</span>
        </div>
      </ElCol>
    </ElRow>
  </FeCard>
</template>
