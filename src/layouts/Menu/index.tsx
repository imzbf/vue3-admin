import { defineComponent, computed, h } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { Menu } from 'ant-design-vue';
import { MenuType } from '@/store/modules/menu';
import { RouterLink } from 'vue-router';

import * as Icon from '@ant-design/icons-vue';

const menuItemRender = (menu: MenuType) => {
  return menu.outLink ? (
    <li key={`__outlink-${menu.path}`} class="ant-menu-item" style="padding-left: 24px;">
      <a href={menu.outLink} target="_blank">
        {menu.iconName && h(Icon[menu.iconName])}
        <span>{menu.title}</span>
      </a>
    </li>
  ) : (
    <Menu.Item key={menu.path}>
      <RouterLink to={menu.path}>
        {menu.iconName && h(Icon[menu.iconName])}
        <span>{menu.title}</span>
      </RouterLink>
    </Menu.Item>
  );
};

const menuChildRender = (menuList: MenuType[]) => {
  return menuList.map((menu: MenuType) => {
    return (
      <>
        {menu.children.length > 0 ? (
          <Menu.SubMenu
            key={menu.path}
            title={
              <>
                {menu.iconName && h(Icon[menu.iconName])}
                <span>{menu.title}</span>
              </>
            }
          >
            {menu.children.map((menuChild: MenuType) => (
              <>
                {menuChild.children.length === 0
                  ? menuItemRender(menuChild)
                  : menuChildRender(menuChild.children)}
              </>
            ))}
          </Menu.SubMenu>
        ) : (
          menuItemRender(menu)
        )}
      </>
    );
  });
};

export default defineComponent({
  // 组件需要申明props，setup方法中才能正确接收到props
  props: {},
  setup(props) {
    const { state } = useStore(key);

    const aside = computed(() => state.setting.aside === 'close');
    const defaultActive = computed(() => {
      const path = state.setting.activeMenu;

      return {
        menuItem: path,
        subMenu: path.replace(/\/[a-zA-Z-\d]*$/, '')
      };
    });

    return () => (
      <Menu
        onClick={(ddd) => console.log(ddd, defaultActive.value.menuItem)}
        mode="inline"
        inlineCollapsed={aside.value}
        // class="skin-dark"
        theme={state.setting.theme === 'light' ? 'light' : 'dark'}
        defaultSelectedKeys={[defaultActive.value.menuItem]}
        defaultOpenKeys={[defaultActive.value.subMenu]}
        // background-color="#1d1e23"
        // text-color="#eee"
        // collapse-transition={false}
      >
        {menuChildRender(state.menu.menuList)}
      </Menu>
    );
  }
});
