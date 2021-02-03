import { defineComponent, computed, reactive } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import screenfull from 'screenfull';
import HeadImg from '@/assets/head02.gif';
import { Tabs, Badge, Breadcrumb, message, Avatar, Dropdown, Menu } from 'ant-design-vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  BellOutlined,
  SkinOutlined,
  SettingOutlined,
  PoweroffOutlined,
  UserOutlined
} from '@ant-design/icons-vue';
import style from './index.module.scss';

export default defineComponent({
  setup() {
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

    const fullScreen = () => {
      if (screenfull.isEnabled) {
        if (screenfull.isFullscreen) {
          screenfull.exit();
        } else screenfull.request();
      } else {
        message.error('浏览器不支持全屏');
      }
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
          <li>
            <SkinOutlined />
          </li>
          <li onClick={fullScreen}>
            {data.isFullscreen ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
          </li>
          <li>
            <SettingOutlined />
          </li>
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu>
                <Menu.Item>
                  <UserOutlined /> 个人中心
                </Menu.Item>
                <Menu.Item>
                  <SettingOutlined />
                  个人设置
                </Menu.Item>
                <Menu.Item>
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
              <Avatar size="small" src={HeadImg} />
            </li>
          </Dropdown>
        </ul>
      </div>
    );
  }
});
