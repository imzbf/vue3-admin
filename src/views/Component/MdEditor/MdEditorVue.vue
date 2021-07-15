<template>
  <div style="padding: 14px">
    <h1>vue模板中使用</h1>
    <br />
    <md-editor v-model="text" :theme="theme" editorName="editor-vue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MdEditor from 'md-editor-v3';

export default defineComponent({
  components: {
    MdEditor
  },
  data() {
    return {
      text: ''
    };
  },
  computed: {
    theme() {
      return this.$store.state.setting.theme === 'dark' ? 'dark' : 'light';
    }
  }
});
</script>
