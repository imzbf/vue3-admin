<template>
  <div class="page-def-form">
    <div class="page-header">
      <div class="left">
        <h2>md-editor-v3</h2>
        <p>在线文档：<a href="https://imzbf.github.io/md-editor-v3">md-editor-v3</a></p>
      </div>
    </div>
    <div class="view-space">
      <Card>
        <ElForm size="small" label-width="90px">
          <ElRow :gutter="14">
            <ElCol :span="16">
              <Card border :shadow="false">
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
                    show-word-limit
                  ></ElInput>
                </ElFormItem>
                <ElFormItem label="">
                  <ElButton type="primary">保存发布</ElButton>
                  <ElButton>缓存草稿</ElButton>
                </ElFormItem>
              </Card>
            </ElCol>
            <ElCol :span="8">
              <Card border :shadow="false">
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
              </Card>
            </ElCol>
          </ElRow>
          <ElRow>
            <ElCol :span="24">
              <Editor editor-id="def-form" v-model="article.content" :screenfull="screenfull" />
            </ElCol>
          </ElRow>
        </ElForm>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Editor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import screenfull from 'screenfull';
import Card from '@/components/Card/index.vue';
import { UploadFilled } from '@element-plus/icons';
import { tags } from './data';

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
  tagsSelected: Array<{
    tagId: number;
    tagName: string;
  }>;
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

const handleUploadSynopsis = () => {};
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
    height: auto;
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
