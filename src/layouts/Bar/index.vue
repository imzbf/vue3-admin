<template>
  <div class="layout-bar">
    <el-tag
      class="cper"
      :closable="!isFixedTag(item) && menuTagNotSingle"
      :effect="item.curr ? 'dark' : 'plain'"
      :type="item.curr ? 'success' : 'info'"
      v-for="item of store.state.setting.menuTags"
      @click="tagClick(item)"
      @close="tagClose(item)"
      >{{ item.title }}</el-tag
    >

    <span class="layout-bar-action cper">
      <el-dropdown :show-timeout="0" size="mini" placement="bottom-end">
        <el-tag type="info">
          <el-icon>
            <arrow-down />
          </el-icon>
        </el-tag>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="refreshRoute">刷新当前</el-dropdown-item>
            <el-dropdown-item v-if="menuTagNotSingle" @click="barMenuClose(menuTagActions.rmCurr)"
              >关闭当前</el-dropdown-item
            >
            <el-dropdown-item v-if="menuTagNotSingle" @click="barMenuClose(menuTagActions.rmOther)"
              >关闭其他</el-dropdown-item
            >
            <el-dropdown-item v-if="menuTagNotSingle" @click="barMenuClose(menuTagActions.rmAll)"
              >关闭所有</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown></span
    >
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { key } from '@/store';
import type { MenuTag, MenuTagActions } from '@/store/modules/setting';
import { fixedTags } from '@/config/setting';
import { menuTagActions } from '@/config/static';

const store = useStore(key);
const router = useRouter();
const route = useRoute();

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
