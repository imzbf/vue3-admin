<template>
  <div class="page-md-editor">
    <div class="page-header">
      <div class="left">
        <h2>{{ $t('基础表单') }}</h2>
        <p>{{ $t('表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。') }}</p>
      </div>
    </div>
    <div class="view-space">
      <VaCard>
        <div class="form-wrapper">
          <ElForm :model="form" labelWidth="120px">
            <ElFormItem :label="$t('项目名称')">
              <ElInput v-model="form.name" placeholder="输入项目名称"></ElInput>
            </ElFormItem>
            <ElFormItem :label="$t('项目地点')">
              <ElSelect v-model="form.region" :placeholder="$t('请选择') + $t('项目地点')">
                <ElOption :label="$t('重庆')" value="cq"></ElOption>
                <ElOption :label="$t('北京')" value="bj"></ElOption>
              </ElSelect>
            </ElFormItem>
            <ElFormItem :label="$t('项目时间')">
              <ElDatePicker
                v-model="form.date"
                type="daterange"
                unlinkPanels
                :startPlaceholder="$t('开始日期')"
                :endPlaceholder="$t('结束日期')"
                :shortcuts="shortcuts"
              >
              </ElDatePicker>
            </ElFormItem>
            <ElFormItem :label="$t('项目类型')">
              <ElCheckboxGroup v-model="form.type">
                <ElCheckbox :label="$t('标准项目')" name="type"></ElCheckbox>
                <ElCheckbox :label="$t('文本项目')" name="type"></ElCheckbox>
                <ElCheckbox :label="$t('数值项目')" name="type"></ElCheckbox>
              </ElCheckboxGroup>
            </ElFormItem>
            <ElFormItem :label="$t('项目状态')">
              <ElRadioGroup v-model="form.resource">
                <ElRadio :label="$t('禁用')"></ElRadio>
                <ElRadio :label="$t('启用')"></ElRadio>
              </ElRadioGroup>
            </ElFormItem>
            <ElFormItem :label="$t('项目评级')">
              <div class="form-rate">
                <ElRate
                  v-model="form.rate"
                  showScore
                  allowHalf
                  textColor="#ff9900"
                  :scoreTemplate="`{value} ${$t('分')}`"
                >
                </ElRate>
              </div>
            </ElFormItem>
            <ElFormItem :label="$t('项目描述')">
              <ElInput v-model="form.desc" :rows="5" type="textarea"></ElInput>
            </ElFormItem>

            <ElFormItem label="">
              <ElButton type="primary">{{ $t('保存') }}</ElButton>
              <ElButton>{{ $t('取消') }}</ElButton>
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
import { reactive, ref, watch } from 'vue';
import { t } from 'i18next';
import { useSettingStore } from '@/stores';
import VaCard from '@/components/Card/index.vue';

const settingStore = useSettingStore();

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

const translateShortcuts = () => {
  return [
    {
      text: t('前一周'),
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        return [start, end];
      }
    },
    {
      text: t('前一个月'),
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        return [start, end];
      }
    },
    {
      text: t('前三个月'),
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        return [start, end];
      }
    }
  ];
};

const shortcuts = ref(translateShortcuts());

watch(
  () => settingStore.state.locale,
  () => {
    shortcuts.value = translateShortcuts();
  }
);
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
