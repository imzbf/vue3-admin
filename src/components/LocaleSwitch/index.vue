<template>
  <ElDropdown :size="props.size">
    <li v-if="props.wrapper">
      <span>{{ settingStore.state.localeLabel }}</span>
    </li>
    <span v-else>{{ settingStore.state.localeLabel }}</span>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem
          v-for="o of localeOptions"
          :key="o.key"
          @click="() => adjustLocale(o.key)"
          >{{ o.value }}</ElDropdownItem
        >
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script lang="ts">
export default { name: 'LocaleSwitch' };
</script>

<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import { useSettingStore } from '@/stores';
import { Locale, localeMap } from '@/config/locale';

const props = defineProps({
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'default'
  },
  wrapper: {
    type: Boolean as PropType<boolean>,
    default: false
  }
});

const settingStore = useSettingStore();

const localeOptions = computed(() => {
  return Reflect.ownKeys(localeMap).map((key) => {
    return {
      key: key as Locale,
      value: Reflect.get(localeMap, key)
    };
  });
});

// 调整语言
const adjustLocale = (locale: Locale) => {
  settingStore.localeChanged(locale);
};
</script>
