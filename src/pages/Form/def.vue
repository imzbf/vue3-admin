<template>
  <div class="page-def-form">
    <div class="view-space">
      <VaCard>
        <ElForm labelWidth="150px">
          <ElRow :gutter="14">
            <ElCol :span="16">
              <VaCard border :shadow="false">
                <template #title>
                  <span>{{ $t('属性') }}</span>
                </template>
                <ElFormItem :label="$t('标题')">
                  <ElInput v-model="article.title" />
                </ElFormItem>
                <div class="inline-form-items">
                  <ElFormItem :label="$t('状态')">
                    <ElSelect v-model="article.status">
                      <ElOption :label="$t('不显示')" :value="0"></ElOption>
                      <ElOption :label="$t('显示')" :value="1"></ElOption>
                    </ElSelect>
                  </ElFormItem>
                  <ElFormItem :label="$t('创建时间')">
                    <ElDatePicker v-model="article.createdTime" type="datetime"></ElDatePicker>
                  </ElFormItem>
                </div>
                <ElFormItem :label="$t('预览图片')">
                  <ElInput v-model="article.previewImage">
                    <template #append>
                      <input ref="uploadSynopsis" type="file" style="display: none" />
                      <ElButton :icon="UploadFilled" @click="handleUploadSynopsis"></ElButton>
                    </template>
                  </ElInput>
                </ElFormItem>
                <ElFormItem :label="$t('摘要')">
                  <ElInput
                    v-model="article.synopsis"
                    type="textarea"
                    rows="5"
                    maxlength="1000"
                    showWordLimit
                  ></ElInput>
                </ElFormItem>
                <ElFormItem label="">
                  <ElButton type="primary">{{ $t('保存') }}</ElButton>
                  <ElButton>{{ $t('保存') }} {{ $t('草稿') }}</ElButton>
                </ElFormItem>
              </VaCard>
            </ElCol>
            <ElCol :span="8">
              <VaCard border :shadow="false">
                <template #title>
                  <span>{{ $t('标签') }}</span>
                </template>
                <ElCheckboxGroup v-model="tag.tagsSelected">
                  <ElCheckbox
                    v-for="item of tag.list"
                    :key="item.tagId"
                    :class="tag.colors[Math.floor(Math.random() * tag.colors.length)]"
                    :label="item.tagId"
                    >{{ item.tagName }}</ElCheckbox
                  >
                </ElCheckboxGroup>
              </VaCard>
            </ElCol>
          </ElRow>
          <ElRow>
            <ElCol :span="24">
              <MdEditor
                v-model="article.content"
                :language="settingStore.state.locale"
                :theme="settingStore.state.theme"
                editorId="def-form"
                @onUploadImg="uploadImg"
              />
            </ElCol>
          </ElRow>
        </ElForm>
      </VaCard>
    </div>
  </div>
</template>

<script lang="ts">
import type { ViewList } from '@/router/dynamic';
// 规范组件名
const name: keyof ViewList = 'DefForm';
export default { name };
</script>

<script setup lang="ts">
import { reactive } from 'vue';
import { MdEditor, config } from 'md-editor-v3';
import screenfull from 'screenfull';
import { useSettingStore } from '@/stores';
import VaCard from '@/components/Card/index.vue';
import { UploadFilled } from '@element-plus/icons-vue';
import { tags } from './data';

import 'md-editor-v3/lib/style.css';

config({
  editorExtensions: {
    screenfull: {
      instance: screenfull
    }
  }
});

const settingStore = useSettingStore();

const article = reactive({
  title: '',
  status: 0,
  createdTime: '',
  previewImage: '',
  synopsis: '',
  content: ''
});

const tag = reactive<{
  colors: string[];
  list: Array<{
    tagId: number;
    tagName: string;
  }>;
  tagsSelected: Array<number | string>;
}>({
  colors: [
    'color-orange',
    'color-gray',
    'color-green',
    'color-blue',
    'color-red',
    'color-purple',
    'color-white'
  ],
  list: tags,
  tagsSelected: []
});

const handleUploadSynopsis = () => {
  //
};

const uploadImg = console.log;
</script>

<style lang="scss">
.md-editor,
.md-editor-dark {
  --md-border-color: var(--el-border-color);
}

.md-content .md-preview,
.md-content .md-html {
  font-size: 14px;
}

.page-def-form {
  .inline-form-items {
    display: flex;

    .el-form-item + .el-form-item {
      padding-left: 1em;
    }
  }

  .el-checkbox {
    height: 24px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .color-orange {
    color: #e6a23c;
  }
  .color-gray {
    color: #909399 !important;
  }
  .color-green {
    color: #67c23a !important;
  }
  .color-blue {
    color: #63a7fd !important;
  }
  .color-red {
    color: #ff6169 !important;
  }
  .color-purple {
    color: #ab8adc !important;
  }
  .color-white {
    color: #988c8c !important;
  }
}
</style>
