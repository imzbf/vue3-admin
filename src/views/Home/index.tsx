import { reactive, defineComponent } from 'vue';

export interface DataType {
  msg: string;
  time: number;
}

export default defineComponent({
  setup() {
    const data = reactive<DataType>({
      msg: '123',
      time: 123
    });

    const handleClick = () => {
      data.msg = Math.random() + '';
    };

    return () => (
      <>
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
        {data.msg}
        <el-button onClick="handleClick">点击</el-button>
      </>
    );
  }
});
