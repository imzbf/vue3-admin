<template>
  <ElDropdown :size="props.size">
    <li v-if="props.wrapper">
      <span>{{ store.state.setting.localeLabel }}</span>
    </li>
    <span v-else>{{ store.state.setting.localeLabel }}</span>
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
import { useStore } from 'vuex';
import { key } from '@/store';
import { localeMap } from '@/config/locale';

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

const store = useStore(key);

const localeOptions = computed(() => {
  return Reflect.ownKeys(localeMap).map((key) => {
    return {
      key: key as string,
      value: Reflect.get(localeMap, key)
    };
  });
});

// 调整语言
const adjustLocale = (locale: string) => {
  store.commit('setting/localeChanged', {
    locale
  });
};
</script>
