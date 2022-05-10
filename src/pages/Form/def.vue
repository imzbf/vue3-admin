<template>
  <div class="page-def-form">
    <div class="page-header">
      <div class="left">
        <h2>md-editor-v3</h2>
        <p>在线文档：<a href="https://imzbf.github.io/md-editor-v3">md-editor-v3</a></p>
      </div>
    </div>
    <div class="view-space">
      <va-card>
        <el-form label-width="90px">
          <el-row :gutter="14">
            <el-col :span="16">
              <va-card border :shadow="false">
                <template #title>
                  <span>文章属性</span>
                </template>
                <el-form-item label="文章标题">
                  <el-input v-model="article.title" />
                </el-form-item>
                <div class="inline-form-items">
                  <el-form-item label="文章状态">
                    <el-select v-model="article.status" placeholder="选择项目地点">
                      <el-option label="不显示" :value="0"></el-option>
                      <el-option label="显示" :value="1"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="创建时间">
                    <el-date-picker
                      v-model="article.createdTime"
                      type="datetime"
                      placeholder="选择时间"
                    ></el-date-picker>
                  </el-form-item>
                </div>
                <el-form-item label="预览图片">
                  <el-input v-model="article.previewImage">
                    <template #append>
                      <input ref="uploadSynopsis" type="file" style="display: none" />
                      <el-button :icon="UploadFilled" @click="handleUploadSynopsis"></el-button>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item label="文章摘要">
                  <el-input
                    v-model="article.synopsis"
                    type="textarea"
                    rows="5"
                    maxlength="1000"
                    show-word-limit
                  ></el-input>
                </el-form-item>
                <el-form-item label="">
                  <el-button type="primary">保存发布</el-button>
                  <el-button>缓存草稿</el-button>
                </el-form-item>
              </va-card>
            </el-col>
            <el-col :span="8">
              <va-card border :shadow="false">
                <template #title>
                  <span>文章标签</span>
                </template>
                <el-checkbox-group v-model="tag.tagsSelected">
                  <el-checkbox
                    v-for="item of tag.list"
                    :key="item.tagId"
                    :class="tag.colors[Math.floor(Math.random() * tag.colors.length)]"
                    :label="item.tagId"
                    >{{ item.tagName }}</el-checkbox
                  >
                </el-checkbox-group>
              </va-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <md-editor
                :theme="store.state.setting.theme"
                editor-id="def-form"
                v-model="article.content"
                :screenfull="screenfull"
                @onUploadImg="uploadImg"
              />
            </el-col>
          </el-row>
        </el-form>
      </va-card>
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
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import screenfull from 'screenfull';
import { useStore } from 'vuex';
import { key } from '@/store';
import VaCard from '@/components/Card/index.vue';
import { UploadFilled } from '@element-plus/icons-vue';
import { tags } from './data';

// MdEditor.config({
//   markedRenderer(renderer) {
//     renderer.link = (href, title, text) => {
//       return `<a href="${href}" title="${title}" target="_blank">${text}</a>`;
//     };

//     renderer.image = (href: string, _: string, desc: string) => {
//       return `<img src="${href}" alt="${desc}">`;
//     };

//     return renderer;
//   }
// });

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

const handleUploadSynopsis = () => {};

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
