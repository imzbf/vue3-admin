<template>
  <fe-card>
    <template #title>
      <span>这里标题</span>
    </template>
    <template #func>
      <info-circle-outlined />
    </template>
    <span>这里是使用的vue模板组件！</span>
  </fe-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import FeCard from '@/components/Card';

export default defineComponent({
  components: {
    'fe-card': FeCard,
    'info-circle-outlined': InfoCircleOutlined
  }
});
</script>
