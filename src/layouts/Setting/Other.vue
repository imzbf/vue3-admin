<template>
  <div class="other-setting">
    <div class="other-setting-item">
      <label for="setting-tag">头部菜单</label>
      <ElSwitch id="setting-tag" v-model="setting.header" />
    </div>
    <div class="other-setting-item">
      <label for="setting-tag">标签导航</label>
      <ElSwitch id="setting-tag" v-model="setting.bar" />
    </div>
    <div class="other-setting-item">
      <label for="setting-tag">标签导航</label>
      <ElSwitch id="setting-tag" v-model="setting.bar" />
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'IzOther' };
</script>

<script setup lang="ts">
import { reactive } from 'vue';

const setting = reactive({
  header: true,
  bar: true
});
</script>

<style lang="scss">
.other-setting {
  color: var(--el-text-color-primary);

  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }
}
</style>
