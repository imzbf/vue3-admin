<template>
  <div class="iz-upload">
    <div :style="triggerStyle" class="iz-upload-trigger" @click="selectFile">
      <slot />
    </div>
    <div v-if="status === 'uploading'" class="iz-upload-progress">{{ progress }}</div>
    <input
      ref="uploadRef"
      :multiple="false"
      type="file"
      style="display: none"
      @change="fileSelected"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'IzUploadChunk'
};
</script>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { PropType } from 'vue';

interface StateType {
  chunkFileCount: number;
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
  headers: {
    type: Object as PropType<any>,
    default: () => ({})
  },
  size: {
    type: Number as PropType<number>,
    default: 5 * 1024 * 1024
  }
});

const state = reactive<StateType>({
  chunkFileCount: 0,
  uploadSuccessFileCount: 0,
  // 已上传到的位置，只允许同时上传10个切片
  uploadUtil: 0,
  // 分片列表
  chunkList: [],
  // 分片上传状态，用于最后判断是否重新上传
  chunkUploadStatus: []
});

// 进度
const progress = computed(() => {
  if (state.chunkFileCount === 0) {
    return '0%';
  } else {
    return ((100 * state.uploadSuccessFileCount) / state.chunkFileCount).toFixed(2) + '%';
  }
});

// 上传状态
const status = computed(() => {
  return state.chunkFileCount === state.uploadSuccessFileCount ? 'done' : 'uploading';
});

const triggerStyle = computed(() => {
  return status.value === 'uploading' ? `visibility: hidden` : '';
});

const uploadRef = ref<HTMLInputElement>();

const selectFile = () => {
  uploadRef.value?.click();
};

const emitUpload = (file: Blob, index: number) => {
  const form = new FormData();
  form.append('file', file);

  fetch(props.url, { method: 'post', headers: props.headers, body: form })
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

const resetData = () => {
  state.chunkFileCount = 1;
  state.uploadSuccessFileCount = 0;
};

const fileSelected = () => {
  resetData();

  const file = uploadRef.value?.files?.[0] as File;
  const size = props.size;

  const chunkList = [];
  const chunkUploadStatus = [];

  for (let length = 0; length * size < file.size; ) {
    chunkList.push(file.slice(length * size, ++length * size));
    chunkUploadStatus.push(false);
  }

  state.chunkList = chunkList;
  state.chunkUploadStatus = chunkUploadStatus;
  state.chunkFileCount = chunkList.length;

  // 队列大小限制，最大30
  state.uploadUtil = chunkList.length >= 30 ? 29 : chunkList.length - 1;

  console.log(state.uploadUtil);
  for (let i = 0; i < state.uploadUtil + 1; i++) {
    emitUpload(state.chunkList[i], i);
  }
};
</script>

<style lang="scss">
.iz-upload {
  display: inline-block;
  position: relative;

  &-progress {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
  }
}
</style>
