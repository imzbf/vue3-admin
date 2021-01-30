import { defineComponent, computed, reactive, watch } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import screenfull from 'screenfull';
import HeadImg from '@/assets/head02.gif';
import { ElMessage } from 'element-plus';

import style from './index.module.scss';

export default defineComponent({
  setup() {
    const store = useStore(key);

    const data = reactive({
      menuTouchClass: 'el-icon-s-fold',
      // 全屏状态
      isFullscreen: false
    });
    const breadcrumbs = computed(() => store.state.setting.breadcrumbs);

    // 隐藏显示菜单图标样式，watch写法
    watch(
      () => store.state.setting.aside === 'open',
      (state) => {
        data.menuTouchClass = state ? 'el-icon-s-fold' : 'el-icon-s-unfold';
      }
    );

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
        ElMessage({
          showClose: true,
          message: '浏览器不支持全屏',
          type: 'error'
        });
      }
    };

    if (screenfull.isEnabled) {
      screenfull.on('change', () => {
        data.isFullscreen = !data.isFullscreen;
      });
    }

    // return {
    //   data,
    //   breadcrumbs,
    //   HeadImg,
    //   adjustMenu,
    //   fullScreen
    // };

    return () => (
      <div class={style['layout-bar']}>
        <ul class={style['layout-bar-left']}>
          <li onClick={adjustMenu} class={style['cper']}>
            <i class={data.menuTouchClass} />
          </li>
          <li class={style['breadcrumb-help']}>
            <el-breadcrumb separator="/">
              {breadcrumbs.value.map((breadcrumb, index) => (
                <el-breadcrumb-item key={breadcrumb + index}>
                  {breadcrumb}
                </el-breadcrumb-item>
              ))}
            </el-breadcrumb>
          </li>
        </ul>
        <ul class={style['layout-bar-right']}>
          <el-popover
            placement="top-end"
            trigger="click"
            v-slots={{
              reference: (
                <li>
                  <el-badge value={12} class={style['item']}>
                    <i class="el-icon-bell" />
                  </el-badge>
                </li>
              )
            }}
          >
            <el-tabs value="first">
              <el-tab-pane label="通知" name="first">
                通知
              </el-tab-pane>
              <el-tab-pane label="消息" name="second">
                消息
              </el-tab-pane>
              <el-tab-pane label="邮件" name="third">
                邮件
              </el-tab-pane>
            </el-tabs>
          </el-popover>
          <li>
            <i class="el-icon-table-lamp" />
          </li>
          <li onClick={fullScreen}>
            <i class={data.isFullscreen ? 'el-icon-aim' : 'el-icon-full-screen'} />
          </li>
          <li>
            <i class="el-icon-setting" />
          </li>
          <el-dropdown
            v-slots={{
              dropdown: (
                <el-dropdown-menu>
                  <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-switch-button" divided>
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              )
            }}
          >
            <li>
              <el-avatar size="small" src={HeadImg} />
            </li>
          </el-dropdown>
        </ul>
      </div>
    );
  }
});
