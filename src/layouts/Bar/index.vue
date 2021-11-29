<template>
  <div class="layout-bar">
    <span class="tag-item" v-for="item of 12"
      >Medium
      <ElIcon><Close /></ElIcon>
    </span>

    <span class="layout-bar-action">
      <ElDropdown size="mini" placement="bottom-end">
        <ElIcon>
          <ArrowDown />
        </ElIcon>

        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>刷新</ElDropdownItem>
            <ElDropdownItem>关闭</ElDropdownItem>
            <ElDropdownItem>关闭其他</ElDropdownItem>
            <ElDropdownItem>关闭所有</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown></span
    >
  </div>
</template>

<script setup lang="ts">
import { Close, ArrowDown } from '@element-plus/icons';
</script>

<style lang="scss">
.layout-bar {
  padding: 6px 14px;
  border-bottom: 1px solid #ddd;
  position: relative;

  &-action {
    position: absolute;
    right: 14px;
    display: inline-block;
    line-height: 28px;
    width: 30px;
    text-align: center;
  }

  .tag-item {
    background-color: #ffffff;
    border: 1px solid #e9e9eb;
    color: #909399;
    padding: 0 8px;
    line-height: 24px;
    border-radius: 2px;
    font-size: 12px;
    display: inline-block;
    cursor: pointer;

    .el-icon {
      border-radius: 50%;
      text-align: center;
      position: relative;
      line-height: 16px;
      vertical-align: middle;
      transform: scale(0.83);
      top: -1px;
      right: -5px;

      &:hover {
        background-color: #dbdbdb;
      }
    }
  }

  .tag-item + .tag-item {
    margin-left: 6px;
  }
}
</style>
