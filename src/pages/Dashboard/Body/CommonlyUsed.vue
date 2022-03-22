<script setup lang="ts">
import VaCard from '@/components/Card/index.vue';
import IconFont from '@/components/IconFont/index.vue';
</script>

<template>
  <va-card border class="va-mb">
    <template #title>
      <icon-font type="icon-changyongfenlei" class="title-icon" />
      常用功能
    </template>
    <el-row class="used-list">
      <el-col :span="8">
        <div class="used-item">
          <span class="used-item-icon"> <icon-font type="icon-liebiao" /></span>
          <span>列表</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <icon-font type="icon-dingdan" />
          </span>
          <span>表单</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <icon-font type="icon-icon_A" />
          </span>

          <span>设置</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <icon-font type="icon-sousuo" />
          </span>

          <span>搜索</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <icon-font type="icon-yibiaopan" />
          </span>

          <span>监控台</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="used-item">
          <span class="used-item-icon">
            <icon-font type="icon-gongju" />
          </span>
          <span>工具</span>
        </div>
      </el-col>
    </el-row>
  </va-card>
</template>
