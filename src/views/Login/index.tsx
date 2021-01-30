import { reactive, defineComponent } from 'vue';
import { ElMessageBox } from 'element-plus';
import '@/assets/iconfonts/login/iconfont.css';
import style from './index.module.scss';

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
      ElMessageBox.alert('这个我也不知道咋办！');
    };
    return () => (
      <div class={style['login']} id="login">
        <div class={style['login-container']}>
          <div class={style['login-form']}>
            <h1 class={style['form-title']}>Vue3-admin</h1>
            <p class="text-help">这里不知道写点什么，多几个文字比较好看吧</p>
            <div class={style['form-item']}>
              <el-input
                prefix-icon="el-icon-s-custom"
                type="text"
                v-model={data.info.username}
                autocomplete="off"
                placeholder="用户名：随便"
              ></el-input>
            </div>
            <div class={style['form-item']}>
              <el-input
                prefix-icon="el-icon-lock"
                type="password"
                v-model={data.info.password}
                autocomplete="off"
                show-password
                placeholder="密码：随便"
              ></el-input>
            </div>
            <div class={style['form-item']} style="margin-bottom: 14px">
              <el-checkbox v-model={data.remembered}>记住我</el-checkbox>
              <span class={`${style['forget-p-help']} cper`} onClick={forgetHelp}>
                忘记密码？
              </span>
            </div>
            <div class={style['form-item']}>
              <el-button type="primary" onClick={login} style="width: 100%">
                登录
              </el-button>
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
