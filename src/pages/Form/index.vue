<template>
  <div class="page-md-editor">
    <div class="page-header">
      <div class="left">
        <h2>基础表单</h2>
        <p>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
      </div>
    </div>
    <div class="view-space">
      <VaCard>
        <div class="form-wrapper">
          <ElForm :model="form" labelWidth="90px">
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
                unlinkPanels
                rangeSeparator="到"
                startPlaceholder="开始日期"
                endPlaceholder="结束日期"
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
              <ElRadioGroup v-model="form.resource">
                <ElRadio label="关闭"></ElRadio>
                <ElRadio label="启用"></ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem label="项目评级：">
              <div class="form-rate">
                <ElRate
                  v-model="form.rate"
                  showScore
                  allowHalf
                  textColor="#ff9900"
                  scoreTemplate="{value} 分"
                >
                </ElRate>
              </div>
            </ElFormItem>
            <ElFormItem label="项目描述：">
              <ElInput v-model="form.desc" :rows="5" type="textarea"></ElInput>
            </ElFormItem>

            <ElFormItem label="">
              <ElButton type="primary">保存</ElButton>
              <ElButton>取消</ElButton>
            </ElFormItem>
          </ElForm>
        </div>
      </VaCard>
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
