<template>
  <div class="page-def-form">
    <div class="view-space">
      <VaCard>
        <ElForm labelWidth="90px">
          <ElRow :gutter="14">
            <ElCol :span="16">
              <VaCard border :shadow="false">
                <template #title>
                  <span>文章属性</span>
                </template>
                <ElFormItem label="文章标题">
                  <ElInput v-model="article.title" />
                </ElFormItem>
                <div class="inline-form-items">
                  <ElFormItem label="文章状态">
                    <ElSelect v-model="article.status" placeholder="选择项目地点">
                      <ElOption label="不显示" :value="0"></ElOption>
                      <ElOption label="显示" :value="1"></ElOption>
                    </ElSelect>
                  </ElFormItem>
                  <ElFormItem label="创建时间">
                    <ElDatePicker
                      v-model="article.createdTime"
                      type="datetime"
                      placeholder="选择时间"
                    ></ElDatePicker>
                  </ElFormItem>
                </div>
                <ElFormItem label="预览图片">
                  <ElInput v-model="article.previewImage">
                    <template #append>
                      <input ref="uploadSynopsis" type="file" style="display: none" />
                      <ElButton :icon="UploadFilled" @click="handleUploadSynopsis"></ElButton>
                    </template>
                  </ElInput>
                </ElFormItem>
                <ElFormItem label="文章摘要">
                  <ElInput
                    v-model="article.synopsis"
                    type="textarea"
                    rows="5"
                    maxlength="1000"
                    showWordLimit
                  ></ElInput>
                </ElFormItem>
                <ElFormItem label="">
                  <ElButton type="primary">保存发布</ElButton>
                  <ElButton>缓存草稿</ElButton>
                </ElFormItem>
              </VaCard>
            </ElCol>
            <ElCol :span="8">
              <VaCard border :shadow="false">
                <template #title>
                  <span>文章标签</span>
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
                :theme="store.state.setting.theme"
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
import { useStore } from 'vuex';
import { key } from '@/store';
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

const store = useStore(key);

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
