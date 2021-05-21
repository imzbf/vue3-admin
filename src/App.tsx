import { defineComponent } from 'vue';
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { ConfigProvider } from 'ant-design-vue';
import darkVars from '@/config/dark.json';
import lightVars from '@/config/light.json';
import { key } from '@/store';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const local = zhCN;
    const store = useStore(key);

    switch (store.state.setting.theme) {
      case 'dark': {
        (window as any).less.modifyVars(darkVars);
        break;
      }
      case 'light': {
        (window as any).less.modifyVars(lightVars);
      }
    }

    return () => (
      <ConfigProvider locale={local}>
        <div class={`theme-wrapper theme-${store.state.setting.theme}`}>
          <router-view />
        </div>
      </ConfigProvider>
    );
  }
});
