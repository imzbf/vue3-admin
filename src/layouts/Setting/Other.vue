<template>
  <div class="other-setting">
    <div class="other-setting-item">
      <label for="setting-tag">头部菜单</label>
      <el-switch id="setting-tag" v-model="setting.header" />
    </div>
    <div class="other-setting-item">
      <label for="setting-tag">标签导航</label>
      <el-switch id="setting-tag" v-model="setting.bar" />
    </div>
    <div class="other-setting-item">
      <label for="setting-tag">标签导航</label>
      <el-switch id="setting-tag" v-model="setting.bar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const setting = reactive({
  header: true,
  bar: true
});
</script>

<style lang="scss">
.other-setting {
  color: var(--el-text-color-regular);

  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }
}
</style>
