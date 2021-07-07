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
        {menu.children.length > 1 ? (
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
                {menuChild.children.length === 0 ? (
                  menuItemRender(menuChild)
                ) : (
                  <Menu.SubMenu
                    key={menuChild.path}
                    title={
                      <>
                        {menuChild.iconName && h(Icon[menuChild.iconName])}
                        <span>{menuChild.title}</span>
                      </>
                    }
                  >
                    {menuChildRender(menuChild.children)}
                  </Menu.SubMenu>
                )}
              </>
            ))}
          </Menu.SubMenu>
        ) : (
          menuItemRender(menu.children[0] || menu)
        )}
      </>
    );
  });
};

export default defineComponent({
  // 组件需要申明props，setup方法中才能正确接收到props
  props: {},
  setup() {
    const store = useStore(key);
    const aside = computed(() => store.state.setting.aside === 'close');

    return () => (
      <Menu
        mode="inline"
        inlineCollapsed={aside.value}
        // class="skin-dark"
        theme={store.state.setting.theme === 'light' ? 'light' : 'dark'}
        defaultSelectedKeys={store.state.setting.selectedKeys}
        defaultOpenKeys={store.state.setting.openKeys}
        // background-color="#1d1e23"
        // text-color="#eee"
        // collapse-transition={false}
      >
        {menuChildRender(store.state.menu.menuList)}
      </Menu>
    );
  }
});
