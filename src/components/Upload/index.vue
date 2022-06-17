<template>
  <div class="iz-upload" @click="selectFile">
    <slot />
  </div>
  <input
    ref="uploadRef"
    :multiple="false"
    type="file"
    style="display: none"
    @change="fileSelected"
  />
</template>

<script lang="ts">
export default {
  name: 'IzUpload'
};
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { PropType } from 'vue';
import axios from '@/utils/request';

interface StateType {
  btn: string;
  status: 'uploading' | 'pausing' | 'done';
  slicedFileCount: number;
  uploadSuccessFileCount: number;
  uploadUtil: number;
  chunkList: Array<Blob>;
  chunkUploadStatus: Array<boolean>;
}

const props = defineProps({
  url: {
    type: String as PropType<string>,
    default: null
  },
  // 大小高于此数值的文章会采用分片上传的方式
  minSize: {
    type: Number as PropType<number>,
    default: 10 * 1024 * 1024
  },
  // 分割的片数，auto会进行自动调整分割数量
  slicePart: {
    type: [Number, String] as PropType<number | 'auto'>,
    default: 'auto'
  }
});

const state = reactive<StateType>({
  btn: '上传',
  status: 'done', // uploading, pausing, done
  slicedFileCount: 1,
  uploadSuccessFileCount: 0,
  // 已上传到的位置，只允许同时上传10个切片
  uploadUtil: 0,
  // 分片列表
  chunkList: [],
  // 分片上传状态，用于最后判断是否重新上传
  chunkUploadStatus: []
});

const uploadRef = ref<HTMLInputElement>();

const selectFile = () => {
  uploadRef.value?.click();
};

const emitUpload = (file: Blob, index: number) => {
  const form = new FormData();
  form.append('file', file);

  // new Promise((rev) => {
  //   setTimeout(rev, Math.floor(Math.random() * 30));
  // })
  //   .then(() => {
  //     state.uploadSuccessFileCount++;
  //     state.chunkUploadStatus[index] = true;
  //     console.log(index + '上传成功!');
  //   })
  //   .finally(() => {
  //     if (state.uploadUtil + 1 < state.chunkList.length) {
  //       emitUpload(state.chunkList[++state.uploadUtil], state.uploadUtil);
  //     }
  //   });

  axios
    .post(props.url)
    .then(() => {
      state.uploadSuccessFileCount++;
      state.chunkUploadStatus[index] = true;
    })
    .finally(() => {
      if (state.uploadUtil + 1 < state.chunkList.length) {
        emitUpload(state.chunkList[++state.uploadUtil], state.uploadUtil);
      }
    });
};

const fileSelected = () => {
  const file = uploadRef.value?.files?.[0] as File;
  const size = 1024 * 10240;

  const chunkList = [];
  const chunkUploadStatus = [];

  for (let length = 0; length * size < file.size; ) {
    chunkList.push(file.slice(length * size, ++length * size));
    chunkUploadStatus.push(false);
  }

  state.chunkList = chunkList;
  state.chunkUploadStatus = chunkUploadStatus;

  state.uploadUtil = 9;
  for (let i = 0; i < 10; i++) {
    emitUpload(state.chunkList[i], i);
  }
};
</script>

<style lang="scss">
.iz-upload {
  display: inline-block;
}
</style>
