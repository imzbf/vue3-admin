<template>
  <div class="page-md-editor">
    <div class="page-header">
      <div class="left">
        <h2>分片上传</h2>
        <p>演示分片上传功能，只支持本地运行，服务端在mock中实现。</p>
      </div>
    </div>
    <div class="view-space">
      <iz-card>
        <iz-upload>
          <el-button>上传</el-button>
        </iz-upload>
      </iz-card>
    </div>
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'UploadSlice';
export default { name };
</script>

<script setup lang="ts">
import IzCard from '@/components/Card/index.vue';
import IzUpload from '@/components/Upload/index.vue';
</script>
