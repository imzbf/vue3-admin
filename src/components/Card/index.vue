<template>
  <div :class="cardClass">
    <div v-if="slots.title" :class="headerClass" :style="props.headerStyle">
      <div class="vra-card-title">
        <slot name="title"></slot>
      </div>

      <div class="vra-card-func"><slot name="func"></slot></div>
    </div>
    <div :class="bodyClass" :style="props.bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { PropType, CSSProperties } from 'vue';
import './index.scss';

const props = defineProps({
  title: {
    type: [Object, String] as PropType<JSX.Element | string>,
    default: undefined
  },
  func: {
    type: [Object, String] as PropType<JSX.Element | string>,
    default: undefined
  },
  headerClass: {
    type: String,
    default: ''
  },
  headerStyle: {
    type: [Object, String] as PropType<CSSProperties | string>,
    default: ''
  },
  bodyClass: {
    type: String,
    default: ''
  },
  bodyStyle: {
    type: [Object, String] as PropType<CSSProperties | string>,
    default: ''
  },
  bodyPadding: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  border: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  shadow: {
    type: Boolean as PropType<boolean>,
    default: true
  }
});

const slots = useSlots();

const cardClass = computed(() => {
  return ['vra-card', props.shadow && 'vra-card-shadow', props.border && 'vra-card-border'];
});
const headerClass = computed(() => {
  return ['vra-card-header', props.headerClass];
});
const bodyClass = computed(() => {
  return ['vra-card-body', props.bodyClass, !props.bodyPadding && 'vra-card-body-nopadding'];
});
</script>
