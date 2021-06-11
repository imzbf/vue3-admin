import { defineComponent } from 'vue';

import MdEditor from '@/components/MdEditor';

export default defineComponent({
  name: 'MdEditor',
  setup() {
    return () => (
      <div style={{ padding: '14px' }}>
        <MdEditor theme="light" />
      </div>
    );
  }
});
