<template>
  <span>消息</span>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface DataItem {
  avatar: string;
  title: string;
  desc: string;
  date: string;
}

const VITE_BASE = import.meta.env.VITE_BASE;

const data = reactive<{ list: DataItem[] }>({
  list: [
    {
      avatar: `${VITE_BASE}/static/img/boy01.jpg`,
      title: '小五郎 评论了你',
      desc: '柯南要请饭，收到请回话！',
      date: '两天前'
    },
    {
      avatar: `${VITE_BASE}/static/img/head02.gif`,
      title: '小五郎 评论了你',
      desc: '柯南要请饭，收到请回话！',
      date: '两天前'
    },
    {
      avatar: `${VITE_BASE}/static/img/boy01.jpg`,
      title: '小五郎 评论了你',
      desc: '柯南要请饭，收到请回话！',
      date: '两天前'
    },
    {
      avatar: `${VITE_BASE}/static/img/boy01.jpg`,
      title: '小五郎 评论了你',
      desc: '柯南要请饭，收到请回话！',
      date: '两天前'
    }
  ]
});
</script>
