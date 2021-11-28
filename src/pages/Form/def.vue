<template>
  <div class="page-md-editor">
    <div class="page-header">
      <div class="left">
        <h2>md-editor-v3</h2>
        <p>在线文档：<a href="https://imzbf.github.io/md-editor-v3">md-editor-v3</a></p>
      </div>
    </div>
    <div class="view-space">
      <Card>
        <Editor editor-id="def-form" v-model="text" :screenfull="screenfull" />
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

const text = ref('');
</script>

<style>
.md-content .md-preview,
.md-content .md-html {
  font-size: 14px;
}
</style>
