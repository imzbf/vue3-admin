<script setup lang="ts">
import VaCard from '@/components/Card/index.vue';
import IconFont from '@/components/IconFont/index.vue';
</script>

<template>
  <VaCard border class="va-mb">
    <template #title>
      <IconFont type="icon-changyongfenlei" class="title-icon" />
      {{ $t('常用功能') }}
    </template>
    <ElRow class="used-list">
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon"> <IconFont type="icon-liebiao" /></span>
          <span>{{ $t('列表') }}</span>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <IconFont type="icon-dingdan" />
          </span>
          <span>{{ $t('表单') }}</span>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <IconFont type="icon-icon_A" />
          </span>

          <span>{{ $t('设置') }}</span>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <IconFont type="icon-sousuo" />
          </span>

          <span>{{ $t('搜索') }}</span>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <IconFont type="icon-yibiaopan" />
          </span>

          <span>{{ $t('监控台') }}</span>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <IconFont type="icon-gongju" />
          </span>
          <span>{{ $t('工具') }}</span>
        </div>
      </ElCol>
    </ElRow>
  </VaCard>
</template>
