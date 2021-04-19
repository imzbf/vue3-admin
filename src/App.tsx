import { defineComponent } from 'vue';
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { ConfigProvider } from 'ant-design-vue';

export default defineComponent({
  setup() {
    const local = zhCN;
    return () => (
      <ConfigProvider locale={local}>
        <router-view />;
      </ConfigProvider>
    );
  }
});
