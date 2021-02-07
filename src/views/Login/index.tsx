import { reactive, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import '@/assets/iconfonts/login/iconfont.css';
import style from './index.module.scss';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { Input, Checkbox, Button, Popconfirm, message, Spin } from 'ant-design-vue';
import { onBeforeRouteLeave } from 'vue-router';

export default defineComponent({
  setup() {
    const data = reactive({
      info: {
        username: 'admin',
        password: 'admin'
      },
      remembered: true,
      // 请求中状态
      spinning: false
    });

    const store = useStore(key);

    const login = () => {
      if (data.info.username !== '' && data.info.password !== '') {
        data.spinning = true;
        store
          .dispatch('user/login', {
            ...data.info,
            remembered: data.remembered
          })
          .catch((error: any) => {
            data.spinning = false;
            message.error(error?.msg || '未知的异常！');
          });
      } else {
        message.error('登录信息不能为空！');
      }
    };

    const keyUpHandler = (e: any) => {
      if (e.keyCode == 13) {
        login();
      }
    };

    onMounted(() => {
      document.addEventListener('keyup', keyUpHandler);
    });

    onBeforeRouteLeave((_to, _from, next) => {
      // 清除按键监控
      document.removeEventListener('keyup', keyUpHandler);
      next();
    });

    return () => (
      <div class={style['login']} id="login">
        <Spin spinning={data.spinning}>
          <div class={style['login-container']}>
            <div class={style['login-form']}>
              <h1 class={style['form-title']}>Vue3-admin</h1>
              <p class="text-help">这里不知道写点什么，多几个文字比较好看吧</p>
              <div class={style['form-item']}>
                <Input
                  size="large"
                  type="text"
                  value={data.info.username}
                  onChange={(e) => {
                    data.info.username = e.target.value;
                  }}
                  placeholder="username: 1"
                  prefix={<UserOutlined />}
                ></Input>
              </div>
              <div class={style['form-item']}>
                <Input
                  size="large"
                  type="password"
                  value={data.info.password}
                  onChange={(e) => {
                    data.info.password = e.target.value;
                  }}
                  show-password
                  placeholder="password: 1"
                  prefix={<LockOutlined />}
                ></Input>
              </div>
              <div class={style['form-item']} style="margin-bottom: 14px">
                <Checkbox
                  checked={data.remembered}
                  onChange={(e) => (data.remembered = e.target.value)}
                >
                  记住我
                </Checkbox>
                <Popconfirm
                  title="这个我也不知道咋办！"
                  okText="好的"
                  cancelText="被迫好的"
                >
                  <span class={`${style['forget-p-help']} cper`}>忘记密码？</span>
                </Popconfirm>
              </div>
              <div class={style['form-item']}>
                <Button type="primary" onClick={login} style="width: 100%" size="large">
                  登录
                </Button>
              </div>
              <div class={style['form-item']}>
                <div class={style['oauth-title']}>其他方式登录：</div>
                <ul class={style['oauth']}>
                  <li class="cper">
                    <span class={`iconfont icon-qq ${style['login-icon']}`}></span>
                  </li>
                  <li class="cper">
                    <span class={`iconfont icon-icon-test ${style['login-icon']}`}></span>
                  </li>
                  <li class="cper">
                    <span
                      class={`iconfont icon-icon-test1 ${style['login-icon']}`}
                    ></span>
                  </li>
                  <li class="cper">
                    <span
                      class={`iconfont icon-icon-test2 ${style['login-icon']}`}
                    ></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class={style['login-welcome']}>
              <p>树叶的一生</p>
              <p>只是为了归根吗</p>
            </div>
          </div>
        </Spin>
      </div>
    );
  }
});
