import { defineComponent } from 'vue';
import { Result } from 'ant-design-vue';

export default defineComponent({
  name: 'ViewError404',
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
          status="404"
          title="404"
          sub-title="Sorry, the page you visited does not exist."
        />
      </div>
    );
  }
});
