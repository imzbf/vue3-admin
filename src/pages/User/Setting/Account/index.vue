<template>
  <ElForm :model="form" labelWidth="130px">
    <ElRow>
      <ElCol :span="12">
        <ElFormItem :label="$t('昵称')">
          <ElInput v-model="form.nickname" :placeholder="$t('2-16个字符')"></ElInput>
        </ElFormItem>
        <ElFormItem :label="$t('邮箱')">
          <ElInput v-model="form.email" placeholder="example@mail.com"></ElInput>
        </ElFormItem>
        <ElFormItem :label="$t('兴趣爱好')">
          <ElCheckboxGroup v-model="form.type">
            <ElCheckbox :label="$t('加班')" name="type"></ElCheckbox>
            <ElCheckbox :label="$t('晚上加班')" name="type"></ElCheckbox>
            <ElCheckbox :label="$t('周末加班')" name="type"></ElCheckbox>
            <ElCheckbox :label="$t('节假日加班')" name="type"></ElCheckbox>
          </ElCheckboxGroup>
        </ElFormItem>
        <ElFormItem :label="$t('城市')">
          <ElSelect v-model="form.region" :placeholder="$t('请选择')">
            <ElOption :label="$t('重庆')" value="cq"></ElOption>
            <ElOption :label="$t('北京')" value="bj"></ElOption>
          </ElSelect>
        </ElFormItem>

        <ElFormItem :label="$t('个人简介')">
          <ElInput v-model="form.desc" :rows="4" type="textarea"></ElInput>
        </ElFormItem>

        <ElFormItem label="">
          <ElButton type="primary">{{ $t('保存') }}</ElButton>
          <ElButton>{{ $t('取消') }}</ElButton>
        </ElFormItem></ElCol
      >
      <ElCol :span="12">
        <ElFormItem :label="$t('头像')">
          <div class="avatar-preview">
            <ElAvatar :src="avatarUrl" :size="150" />
          </div>
          <ElButton size="small" style="margin-left: 25px" :icon="CameraFilled">{{
            $t('更新头像')
          }}</ElButton>
        </ElFormItem>
      </ElCol>
    </ElRow>
  </ElForm>
</template>

<script lang="ts">
export default {
  name: 'IzUserAccountSetting'
};
</script>

<script setup lang="ts">
import { reactive } from 'vue';
import { CameraFilled } from '@element-plus/icons-vue';

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
