<template>
  <div :class="`va-title va-title-l${props.level}`"><slot /></div>
</template>

<script setup lang="ts">

const props = defineProps({
  level: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>,
    default: 1
  }
});
</script>

<style lang="scss">
.va-title {
  padding: 14px 0;

  &-l1 {
    font-size: 24px;
  }

  &-l2 {
    font-size: 22px;
  }

  &-l3 {
    font-size: 20px;
  }

  &-l4 {
    font-size: 18px;
  }

  &-l5 {
    font-size: 16px;
  }

  &-l6 {
    font-size: 14px;
  }
}
</style>
