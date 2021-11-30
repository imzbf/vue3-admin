<template>
  <div class="layout-bar">
    <ElTag
      class="cper"
      :closable="!isFixedTag(item) && menuTagNotSingle"
      :effect="item.curr ? 'dark' : 'plain'"
      size="small"
      :type="item.curr ? 'success' : 'info'"
      v-for="item of store.state.setting.menuTags"
      @click="tagClick(item)"
      @close="tagClose(item)"
      >{{ item.title }}</ElTag
    >

    <span class="layout-bar-action cper">
      <ElDropdown size="mini" placement="bottom-end">
        <ElIcon>
          <ArrowDown />
        </ElIcon>

        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>刷新当前</ElDropdownItem>
            <ElDropdownItem v-if="menuTagNotSingle" @click="barMenuClose(menuTagActions.rmCurr)"
              >关闭当前</ElDropdownItem
            >
            <ElDropdownItem v-if="menuTagNotSingle" @click="barMenuClose(menuTagActions.rmOther)"
              >关闭其他</ElDropdownItem
            >
            <ElDropdownItem v-if="menuTagNotSingle" @click="barMenuClose(menuTagActions.rmAll)"
              >关闭所有</ElDropdownItem
            >
          </ElDropdownMenu>
        </template>
      </ElDropdown></span
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ArrowDown } from '@element-plus/icons';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { key } from '@/store';
import { MenuTag, MenuTagActions } from '@/store/modules/setting';
import { fixedTags } from '@/config/setting';
import { menuTagActions } from '@/config/static';

const store = useStore(key);
const router = useRouter();

// 菜单不是单数，单数时不允许显示移除其他等
const menuTagNotSingle = computed(() => {
  return store.state.setting.menuTags.length > 1;
});

// 判断是否是固定标签
const isFixedTag = (tag: MenuTag) => {
  return fixedTags.find((item) => item.path === tag.path) !== undefined;
};

const tagClick = (tag: MenuTag) => {
  router.push(tag.path);
};

const tagClose = (tag: MenuTag) => {
  store.commit('setting/removeMenuTag', {
    type: menuTagActions.rmTarget,
    route: tag
  });
};

const barMenuClose = (type: MenuTagActions) => {
  store.commit('setting/removeMenuTag', {
    type
  });
};
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

  .el-tag + .el-tag {
    margin-left: 6px;
  }
}
</style>
