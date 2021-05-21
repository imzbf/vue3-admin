import { defineComponent } from 'vue';
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { ConfigProvider } from 'ant-design-vue';

import { key } from '@/store';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const local = zhCN;
    const store = useStore(key);

    return () => (
      <ConfigProvider locale={local}>
        <div class={`theme-wrapper theme-${store.state.setting.theme}`}>
          <router-view />
        </div>
      </ConfigProvider>
    );
  }
});
