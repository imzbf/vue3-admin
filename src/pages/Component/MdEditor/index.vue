<template>
  <div class="page-md-editor">
    <div class="page-header">
      <h1>md-editor-v3</h1>
      <p>在线文档：<a href="https://imzbf.github.io/md-editor-v3">md-editor-v3</a></p>
    </div>
    <div class="view-space">
      <Card>
        <Editor v-model="text" :screenfull="screenfull" />
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Editor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import screenfull from 'screenfull';
import Card from '@/components/Card/index.vue';
import { ElDescriptions, ElDescriptionsItem } from 'element-plus';

const text = ref<string>('');
</script>
