<template>
  <div class="page-md-editor">
    <div class="page-header">
      <div class="left">
        <h2>基础表单</h2>
        <p>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
      </div>
    </div>
    <div class="view-space">
      <Card>
        <div class="form-wrapper">
          <ElForm :model="form" label-width="90px">
            <ElFormItem label="项目名称：">
              <ElInput v-model="form.name" placeholder="输入项目名称"></ElInput>
            </ElFormItem>
            <ElFormItem label="项目地点：">
              <ElSelect v-model="form.region" placeholder="选择项目地点">
                <ElOption label="重庆" value="cq"></ElOption>
                <ElOption label="北京" value="bj"></ElOption>
              </ElSelect>
            </ElFormItem>
            <ElFormItem label="项目时间：">
              <ElDatePicker
                v-model="form.date"
                type="daterange"
                unlink-panels
                range-separator="到"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :shortcuts="shortcuts"
              >
              </ElDatePicker>
            </ElFormItem>
            <ElFormItem label="项目类型：">
              <ElCheckboxGroup v-model="form.type">
                <ElCheckbox label="标准项目" name="type"></ElCheckbox>
                <ElCheckbox label="文本项目" name="type"></ElCheckbox>
                <ElCheckbox label="数值项目" name="type"></ElCheckbox>
                <ElCheckbox label="包装项目" name="type"></ElCheckbox>
              </ElCheckboxGroup>
            </ElFormItem>
            <ElFormItem label="项目状态：">
              <el-radio-group v-model="form.resource">
                <el-radio label="关闭"></el-radio>
                <el-radio label="启用"></el-radio>
              </el-radio-group>
            </ElFormItem>
            <ElFormItem label="项目评级：">
              <div class="form-rate">
                <ElRate
                  v-model="form.rate"
                  show-score
                  allow-half
                  text-color="#ff9900"
                  score-template="{value} 分"
                >
                </ElRate>
              </div>
            </ElFormItem>
            <ElFormItem label="项目描述：">
              <ElInput :rows="5" v-model="form.desc" type="textarea"></ElInput>
            </ElFormItem>

            <ElFormItem label="">
              <el-button type="primary">保存</el-button>
              <el-button>取消</el-button>
            </ElFormItem>
          </ElForm>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Card from '@/components/Card/index.vue';
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElSwitch,
  ElCheckboxGroup,
  ElCheckbox,
  ElRadio,
  ElRadioGroup,
  ElButton,
  ElRate
} from 'element-plus';

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
    text: 'Last week',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    }
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    }
  },
  {
    text: 'Last 3 months',
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
