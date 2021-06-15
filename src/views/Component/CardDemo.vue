<template>
  <vra-card border headerStyle="font-weight: bold; font-size: 16px;">
    <template v-slot:title> 这是使用vue模块开发的 </template>
    <p>标题使用props.title或title插槽</p>
    <p>内容默认插槽</p>
    <p>样式：headerStyle="font-weight: bold; font-size: 16px;"</p>
  </vra-card>
</template>

<script lang="ts">
import VraCard from '@/components/Card';

export default {
  name: 'CardDemo',
  components: {
    'vra-card': VraCard
  }
};
</script>
