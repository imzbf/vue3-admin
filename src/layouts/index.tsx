import { computed, defineComponent, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

import Menu from './Menu';
import NavBar from './NavBar';
import LogoImg from '@/assets/logo.png';

import style from './index.module.scss';

export default defineComponent({
  setup() {
    const store = useStore(key);

    // BUG 登录后触发生成菜单
    onBeforeMount(() => {
      store.commit('menu/routeChanged');
    });

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
            <NavBar />
          </header>
          <main class={style.layoutMain}>
            <router-view />
          </main>
        </div>
      </section>
    );
  },
  components: { Menu, NavBar }
});
