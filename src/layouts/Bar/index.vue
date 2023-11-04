<template>
  <div class="layout-bar">
    <ElTag
      v-for="item of settingStore.state.menuTags"
      :key="item.title"
      class="cper"
      :closable="!isFixedTag(item) && menuTagNotSingle"
      :effect="item.curr ? 'dark' : 'plain'"
      :type="item.curr ? 'success' : 'info'"
      @click="() => tagClick(item)"
      @close="() => tagClose(item)"
      >{{ $t(item.title) }}</ElTag
    >

    <span class="layout-bar-action cper">
      <ElDropdown :showTimeout="0" size="mini" placement="bottom-end" trigger="click">
        <ElTag type="info">
          <ElIcon>
            <ArrowDown />
          </ElIcon>
        </ElTag>

        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem @click="refreshRoute">{{ $t('刷新当前') }}</ElDropdownItem>
            <ElDropdownItem
              v-if="menuTagNotSingle"
              @click="() => barMenuClose(menuTagActions.rmCurr)"
              >{{ $t('关闭当前') }}</ElDropdownItem
            >
            <ElDropdownItem
              v-if="menuTagNotSingle"
              @click="() => barMenuClose(menuTagActions.rmOther)"
              >{{ $t('关闭其他') }}</ElDropdownItem
            >
            <ElDropdownItem
              v-if="menuTagNotSingle"
              @click="() => barMenuClose(menuTagActions.rmAll)"
              >{{ $t('关闭所有') }}</ElDropdownItem
            >
          </ElDropdownMenu>
        </template>
      </ElDropdown></span
    >
  </div>
</template>

<script lang="ts">
export default { name: 'BarLayout' };
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue';
import { useRouter, useRoute } from 'vue-router';
import { useSettingStore } from '@/stores';
import type { MenuTag, MenuTagActions } from '@/stores';
import { fixedTags } from '@/config/setting';
import { menuTagActions } from '@/config/static';

const settingStore = useSettingStore();
const router = useRouter();
const route = useRoute();

// 菜单不是单数，单数时不允许显示移除其他等
const menuTagNotSingle = computed(() => {
  return settingStore.state.menuTags.length > 1;
});

// 判断是否是固定标签
const isFixedTag = (tag: MenuTag) => {
  return fixedTags.find((item) => item.path === tag.path) !== undefined;
};

const tagClick = (tag: MenuTag) => {
  router.push(tag.path);
};

const tagClose = (tag: MenuTag) => {
  settingStore.removeMenuTag({
    type: menuTagActions.rmTarget,
    route: tag
  });
};

const barMenuClose = (type: MenuTagActions) => {
  settingStore.removeMenuTag({
    type
  });
};

const refreshRoute = () => {
  router.replace(`/redirect${route.path}`);
};
</script>

<style lang="scss">
.layout-bar {
  padding: 6px 14px;
  border-bottom: 1px solid var(--el-border-color);
  position: relative;

  &-action {
    position: absolute;
    right: 14px;
    display: inline-block;
    line-height: 28px;
    width: 30px;
    text-align: center;
  }
}
</style>
