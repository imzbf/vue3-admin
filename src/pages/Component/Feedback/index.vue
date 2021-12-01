<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive :include="store.state.setting.cacheList">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { key } from '@/store';

const store = useStore(key);
</script>
