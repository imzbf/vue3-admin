<template>
  <div class="about">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
  {{ data.msg }}
  <el-button @click="handleClick">点击</el-button>
</template>

<script lang="ts">
import { reactive, watchEffect, defineComponent } from 'vue';

export interface DataType {
  msg: string;
  time: number;
}

export interface SetUpReturn {
  data?: any;
  handleClick: () => void;
}

export default defineComponent({
  setup(): SetUpReturn {
    const data = reactive<DataType>({
      msg: '123',
      time: 123
    });

    watchEffect(() => {
      console.log(data.msg);
    });

    watchEffect(() => {
      console.log(data.time);
    });

    setTimeout(() => {
      data.msg = '456';
    }, 3000);

    setTimeout(() => {
      data.time = new Date().getTime();
    }, 5000);

    const handleClick = () => {
      data.msg = Math.random() + '';
    };

    return {
      data,
      handleClick
    };
  }
});
</script>
