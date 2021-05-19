import { Input, Button } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'ViewForm',
  setup() {
    const data = reactive({
      number: 1
    });

    return () => (
      <>
        <Input value={data.number} />
        <Button
          onClick={() => {
            data.number = Math.random();
          }}
        >
          随机
        </Button>
      </>
    );
  }
});
