import { reactive, defineComponent } from 'vue';
import '@/assets/iconfonts/login/iconfont.css';
import style from './index.module.scss';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { Input, Checkbox, Button, Popconfirm } from 'ant-design-vue';

export default defineComponent({
  setup() {
    const data = reactive({
      info: {
        username: '',
        password: ''
      },
      remembered: true
    });

    const login = () => {
      //
      console.log(data.info);
    };

    const forgetHelp = () => {
      // ElMessageBox.alert('这个我也不知道咋办！');
    };
    return () => (
      <div class={style['login']} id="login">
        <div class={style['login-container']}>
          <div class={style['login-form']}>
            <h1 class={style['form-title']}>Vue3-admin</h1>
            <p class="text-help">这里不知道写点什么，多几个文字比较好看吧</p>
            <div class={style['form-item']}>
              <Input
                size="large"
                type="text"
                v-model={data.info.username}
                placeholder="username: 1"
                prefix={<UserOutlined />}
              ></Input>
            </div>
            <div class={style['form-item']}>
              <Input
                size="large"
                type="password"
                v-model={data.info.password}
                show-password
                placeholder="password: 1"
                prefix={<LockOutlined />}
              ></Input>
            </div>
            <div class={style['form-item']} style="margin-bottom: 14px">
              <Checkbox v-model={data.remembered}>记住我</Checkbox>
              <Popconfirm
                title="Are you sure delete this task?"
                ok-text="Yes"
                cancel-text="No"
              >
                <span class={`${style['forget-p-help']} cper`} onClick={forgetHelp}>
                  忘记密码？
                </span>
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
                  <span class={`iconfont icon-icon-test1 ${style['login-icon']}`}></span>
                </li>
                <li class="cper">
                  <span class={`iconfont icon-icon-test2 ${style['login-icon']}`}></span>
                </li>
              </ul>
            </div>
          </div>
          <div class={style['login-welcome']}>
            <p>树叶的一生</p>
            <p>只是为了归根吗</p>
          </div>
        </div>
      </div>
    );
  }
});
