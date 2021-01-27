<template>
  <!-- `checked` 为 true 或 false -->
  <el-checkbox v-model="data.checked">备选项</el-checkbox>
</template>
<script>
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  setup() {
    const data = reactive({
      checked: true
    });
    return {
      data
    };
  }
});
</script>
