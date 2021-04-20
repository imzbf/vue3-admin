import { reactive, defineComponent } from 'vue';
import { Button, ConfigProvider } from 'ant-design-vue';

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
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <ConfigProvider autoInsertSpaceInButton={false}>
            <Button type="primary">按钮</Button>
          </ConfigProvider>
          <Button type="primary">按钮</Button>
          <Button type="link">Link</Button>
        </div>
        {data.msg}
        <Button onClick={handleClick}>点击</Button>
      </>
    );
  }
});
