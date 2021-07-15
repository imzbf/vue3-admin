import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import MdEditor from 'md-editor-v3';

export default defineComponent({
  name: 'MdEditor',
  setup() {
    const text = ref('');
    const store = useStore(key);
    const theme = computed<'dark' | 'light'>(() => {
      return store.state.setting.theme === 'dark' ? 'dark' : 'light';
    });

    return () => (
      <div style={{ padding: '14px' }}>
        <h1>tsx中使用</h1>
        <br />
        <MdEditor
          modelValue={text.value}
          onChange={(v: string) => (text.value = v)}
          theme={theme.value}
          editorName="editor-tsx"
        />
      </div>
    );
  }
});
