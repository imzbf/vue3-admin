import { defineComponent, computed, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
import { key } from '@/store';
import screenfull from 'screenfull';
// import HeadImg from '@/assets/head02.gif';
import {
  Tabs,
  Badge,
  Breadcrumb,
  message,
  Avatar,
  Dropdown,
  Menu,
  notification
} from 'ant-design-vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  BellOutlined,
  SkinOutlined,
  SettingOutlined,
  PoweroffOutlined,
  UserOutlined,
  createFromIconfontCN
} from '@ant-design/icons-vue';

import style from './index.module.scss';

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2365632_9x17rvubrqj.js' // 在 iconfont.cn 上生成
});

// 同时设置props的vue属性和ts类型，setup会报错
// interface NavBarPropsType {
//   setSettingVisible: (val: boolean) => void;
// }

export default defineComponent({
  props: {
    setSettingVisible: {
      type: Function,
      default: (val: boolean) => {
        return val;
      }
    }
  },
  setup(props) {
    const store = useStore(key);

    const data = reactive({
      // 全屏状态
      isFullscreen: false,
      // 通知内容显示
      bellContent: false
    });

    const breadcrumbs = computed(() => store.state.setting.breadcrumbs);

    // 隐藏显示菜单图标样式，watch写法
    const menuSwitch = computed(() => store.state.setting.aside);

    const adjustMenu = () => {
      store.commit('setting/asideState', {
        aside: store.state.setting.aside === 'open' ? 'close' : 'open'
      });
    };

    // 调整主题
    const adjustTheme = ({ key }: any) => {
      store.commit('setting/themeChanged', {
        theme: key
      });
    };

    const fullScreen = () => {
      if (screenfull.isEnabled) {
        if (screenfull.isFullscreen) {
          screenfull.exit();
        } else screenfull.request();
      } else {
        message.error('浏览器不支持全屏');
      }
    };

    // 退出登录
    const logout = () => {
      store.dispatch('user/logout').catch((error: any) => {
        notification.error({
          message: '操作失败！',
          description: error?.msg || '未知的异常！'
        });
      });
    };

    if (screenfull.isEnabled) {
      screenfull.on('change', () => {
        data.isFullscreen = !data.isFullscreen;
      });
    }

    return () => (
      <div class={style['layout-bar']}>
        <ul class={style['layout-bar-left']}>
          <li onClick={adjustMenu} class={style['cper']}>
            {menuSwitch.value === 'open' ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          </li>
          <li class={style['breadcrumb-help']}>
            <Breadcrumb separator="/">
              {breadcrumbs.value.map((breadcrumb, index) => (
                <Breadcrumb.Item key={breadcrumb + index}>{breadcrumb}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </li>
        </ul>
        <ul class={style['layout-bar-right']}>
          <Dropdown
            overlayClassName={style.notice}
            trigger={['click']}
            placement="bottomCenter"
            overlay={
              <>
                <div class={style['notice-content']}>
                  <Tabs defaultActiveKey={1}>
                    <Tabs.TabPane key={1} tab="通知">
                      通知内容
                    </Tabs.TabPane>
                    <Tabs.TabPane key={2} tab="消息">
                      消息内容
                    </Tabs.TabPane>
                    <Tabs.TabPane key={3} tab="邮件">
                      邮件内容
                    </Tabs.TabPane>
                  </Tabs>
                </div>
              </>
            }
          >
            <li>
              <Badge dot class={style['item']}>
                <BellOutlined />
              </Badge>
            </li>
          </Dropdown>
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu onClick={adjustTheme}>
                <Menu.Item key="dark">
                  <MyIcon type="icon-ditu_diqiu" />
                  黑白主题
                </Menu.Item>
                <Menu.Item key="light">
                  <MyIcon type="icon-taiyang" />
                  白色主题
                </Menu.Item>
                <Menu.Item key="deepDark" disabled>
                  <MyIcon type="icon-yueliang" />
                  暗黑主题
                </Menu.Item>
              </Menu>
            }
          >
            <li>
              <SkinOutlined />
            </li>
          </Dropdown>

          <li onClick={fullScreen}>
            {data.isFullscreen ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
          </li>
          <li
            onClick={() => {
              props.setSettingVisible(true);
            }}
          >
            <SettingOutlined />
          </li>
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu>
                <Menu.Item>
                  <RouterLink to="/user">
                    <UserOutlined /> 个人中心
                  </RouterLink>
                </Menu.Item>
                <Menu.Item>
                  <RouterLink to="/user/setting">
                    <SettingOutlined /> 个人设置
                  </RouterLink>
                </Menu.Item>
                {
                  // TODO antd-vue Property 'onClick' does not exist
                }
                <Menu.Item onClick={logout}>
                  <PoweroffOutlined />
                  退出登录
                </Menu.Item>
              </Menu>
            }
            // v-slots={{
            //   overlay:
            // }}
          >
            <li>
              <Avatar size="small" src="/static/img/head02.gif" />
            </li>
          </Dropdown>
        </ul>
      </div>
    );
  }
});
