import { defineComponent } from 'vue';
import { Result } from 'ant-design-vue';

export default defineComponent({
  setup() {
    return () => (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Result status="500" title="500" sub-title="Sorry, the server is wrong." />
      </div>
    );
  }
});
