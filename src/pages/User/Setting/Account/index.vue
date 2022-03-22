<template>
  <el-form :model="form" label-width="90px">
    <el-row>
      <el-col :span="12">
        <el-form-item label="昵称：">
          <el-input v-model="form.nickname" placeholder="2-16个字符"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" placeholder="example@mail.com"></el-input>
        </el-form-item>
        <el-form-item label="兴趣爱好：">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="加班" name="type"></el-checkbox>
            <el-checkbox label="晚上加班" name="type"></el-checkbox>
            <el-checkbox label="周末加班" name="type"></el-checkbox>
            <el-checkbox label="节假日加班" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="城市：">
          <el-select v-model="form.region" placeholder="选择工作地点">
            <el-option label="重庆" value="cq"></el-option>
            <el-option label="北京" value="bj"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="个人简介：">
          <el-input :rows="4" v-model="form.desc" type="textarea"></el-input>
        </el-form-item>

        <el-form-item label="">
          <el-button type="primary">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item></el-col
      >
      <el-col :span="12">
        <el-form-item label="头像：">
          <div class="avatar-preview">
            <el-avatar :src="avatarUrl" :size="150" />
          </div>
          <el-button size="small" style="margin-left: 25px" :icon="CameraFilled"
            >更新头像</el-button
          >
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

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
