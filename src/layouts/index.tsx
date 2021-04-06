import { computed, defineComponent, onBeforeMount, reactive } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

import Menu from './Menu';
import NavBar from './NavBar';
import LogoImg from '@/assets/logo.png';

import style from './index.module.scss';

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
        ? style['layout-aside']
        : `${style['layout-aside']} ${style['layout-aside-close']}`;
    });

    const data = reactive({
      settingVisible: false
    });

    return () => (
      <section class={`${style.wrapper} ${style[`${store.state.setting.theme}-theme`]}`}>
        <div class={layoutAsideClass.value}>
          <header class={style.logo}>
            <img src={LogoImg} />
            {asideOpen.value && <span>Vue3-Admin</span>}
          </header>
          <div class={style['menu-container']}>
            <Menu />
          </div>
          {asideOpen.value && (
            <footer class={style.copyright}>
              <span>@2020 zhoubangfu</span>
            </footer>
          )}
        </div>
        <div class={style.layout}>
          <header class={style.layoutHeader}>
            <NavBar
              setSettingVisible={(val: boolean) => {
                data.settingVisible = val;
              }}
            />
          </header>
          <main class={style.layoutMain}>
            <router-view />
          </main>
        </div>
        <div class={style.drawer}>
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
