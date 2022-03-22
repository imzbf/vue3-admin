<template>
  <div class="page-md-editor">
    <div class="page-header">
      <div class="left">
        <h2>基础表单</h2>
        <p>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
      </div>
    </div>
    <div class="view-space">
      <va-card>
        <div class="form-wrapper">
          <el-form :model="form" label-width="90px">
            <el-form-item label="项目名称：">
              <el-input v-model="form.name" placeholder="输入项目名称"></el-input>
            </el-form-item>
            <el-form-item label="项目地点：">
              <el-select v-model="form.region" placeholder="选择项目地点">
                <el-option label="重庆" value="cq"></el-option>
                <el-option label="北京" value="bj"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="项目时间：">
              <el-date-picker
                v-model="form.date"
                type="daterange"
                unlink-panels
                range-separator="到"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :shortcuts="shortcuts"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="项目类型：">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="标准项目" name="type"></el-checkbox>
                <el-checkbox label="文本项目" name="type"></el-checkbox>
                <el-checkbox label="数值项目" name="type"></el-checkbox>
                <el-checkbox label="包装项目" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="项目状态：">
              <el-radio-group v-model="form.resource">
                <el-radio label="关闭"></el-radio>
                <el-radio label="启用"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="项目评级：">
              <div class="form-rate">
                <el-rate
                  v-model="form.rate"
                  show-score
                  allow-half
                  text-color="#ff9900"
                  score-template="{value} 分"
                >
                </el-rate>
              </div>
            </el-form-item>
            <el-form-item label="项目描述：">
              <el-input :rows="5" v-model="form.desc" type="textarea"></el-input>
            </el-form-item>

            <el-form-item label="">
              <el-button type="primary">保存</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'BaseForm';
export default { name };
</script>

<script setup lang="ts">
import { reactive } from 'vue';
import VaCard from '@/components/Card/index.vue';

const form = reactive({
  name: '',
  region: '',
  date: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  rate: 3
});

const shortcuts = [
  {
    text: '前一周',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    }
  },
  {
    text: '前一个月',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    }
  },
  {
    text: '前三个月',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    }
  }
];
</script>

<style lang="scss">
.form-wrapper {
  display: flex;
  justify-content: center;

  .form-rate {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
