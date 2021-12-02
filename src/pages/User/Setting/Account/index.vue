<template>
  <ElForm :model="form" label-width="90px">
    <ElRow>
      <ElCol :span="12">
        <ElFormItem label="昵称：">
          <ElInput v-model="form.nickname" placeholder="2-16个字符"></ElInput>
        </ElFormItem>
        <ElFormItem label="邮箱">
          <ElInput v-model="form.email" placeholder="example@mail.com"></ElInput>
        </ElFormItem>
        <ElFormItem label="兴趣爱好：">
          <ElCheckboxGroup v-model="form.type">
            <ElCheckbox label="加班" name="type"></ElCheckbox>
            <ElCheckbox label="晚上加班" name="type"></ElCheckbox>
            <ElCheckbox label="周末加班" name="type"></ElCheckbox>
            <ElCheckbox label="节假日加班" name="type"></ElCheckbox>
          </ElCheckboxGroup>
        </ElFormItem>
        <ElFormItem label="城市：">
          <ElSelect v-model="form.region" placeholder="选择工作地点">
            <ElOption label="重庆" value="cq"></ElOption>
            <ElOption label="北京" value="bj"></ElOption>
          </ElSelect>
        </ElFormItem>

        <ElFormItem label="个人简介：">
          <ElInput :rows="4" v-model="form.desc" type="textarea"></ElInput>
        </ElFormItem>

        <ElFormItem label="">
          <ElButton type="primary">保存</ElButton>
          <ElButton>取消</ElButton>
        </ElFormItem></ElCol
      >
      <ElCol :span="12">
        <ElFormItem label="头像：">
          <div class="avatar-preview">
            <ElAvatar :src="avatarUrl" :size="150" />
          </div>
          <ElButton size="small" style="margin-left: 25px" :icon="CameraFilled">更新头像</ElButton>
        </ElFormItem>
      </ElCol>
    </ElRow>
  </ElForm>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { CameraFilled } from '@element-plus/icons';

const avatarUrl = `${import.meta.env.VITE_BASE}/static/img/boy01.jpg`;

const form = reactive({
  nickname: '',
  email: '',
  address: '',
  region: '',
  date: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  rate: 3
});
</script>

<style lang="scss" scoped>
.avatar-preview {
  margin-bottom: 10px;
}
</style>
