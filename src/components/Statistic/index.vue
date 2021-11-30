<script lang="ts" setup>
import type { PropType } from 'vue';
import './style.scss';
const props = defineProps({
  value: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  }
});
</script>

<template>
  <div class="statistic">
    <div class="statistic-title">
      <slot name="title"></slot>
    </div>
    <div class="statistic-content">
      <span class="statistic-content-value"
        ><span class="statistic-content-value-int">{{ props.value }}</span></span
      ><span class="statistic-content-suffix"><slot name="suffix"></slot></span>
    </div>
  </div>
</template>
