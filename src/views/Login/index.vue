<template>
  <div></div>
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
