import { defineComponent } from 'vue';
import { Result } from 'ant-design-vue';

export default defineComponent({
  name: 'ViewError403',
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
        <Result
          status="403"
          title="403"
          sub-title="Sorry, you are not authorized to access this page."
        />
      </div>
    );
  }
});
