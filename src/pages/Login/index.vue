<script setup lang="ts">
import { reactive } from 'vue';
import { ElInput } from 'element-plus';

const form = reactive({
  username: '',
  password: ''
});
</script>

<template>
  <div class="page-login">
    <div class="form">
      <div>Login</div>
      <ElInput v-model="form.username" />
      <ElInput v-model="form.password" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-login {
  background-color: #fff;

  .form {
    width: 300px;
    height: 400px;
  }
}
</style>
