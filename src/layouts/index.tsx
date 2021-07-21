import { computed, defineComponent, KeepAlive, reactive } from 'vue';
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';
import { key } from '@/store';

import Menu from './Menu';
import NavBar from './NavBar';
import LogoImg from '@/assets/logo.png';

import './index.less';

import Setting from './Setting';

export default defineComponent({
  setup() {
    const store = useStore(key);

    // 侧边栏展开状态
    const asideOpen = computed(() => {
      return store.state.setting.aside === 'open';
    });

    // 侧边栏样式
    const layoutAsideClass = computed(() => {
      return store.state.setting.aside === 'open'
        ? 'layout-aside'
        : 'layout-aside layout-aside-close';
    });

    const data = reactive({
      settingVisible: false
    });

    return () => (
      <section class="wrapper">
        <div class={layoutAsideClass.value}>
          <header class="logo">
            <img src={LogoImg} />
            {asideOpen.value && <span>Vue3-Admin</span>}
          </header>
          <div class="menu-container">
            <Menu />
          </div>
          {asideOpen.value && (
            <footer class="copyright">
              <span>@2020 imbf.cc</span>
            </footer>
          )}
        </div>
        <div class="layout">
          <header class="layout-header">
            <NavBar
              setSettingVisible={(val: boolean) => {
                data.settingVisible = val;
              }}
            />
          </header>
          <main class="layout-main">
            {/* https://github.com/vuejs/vue-router-next/issues/716#issuecomment-759521287 */}
            <RouterView>
              {({ Component }: any) => {
                return (
                  <KeepAlive include={store.state.setting.cacheList}>
                    <Component />
                  </KeepAlive>
                );
              }}
            </RouterView>
          </main>
        </div>
        <div class="drawer">
          <Setting
            visible={data.settingVisible}
            setVisible={() => {
              data.settingVisible = false;
            }}
          />
        </div>
      </section>
    );
  }
});
