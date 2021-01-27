<template>
  <div class="login" id="login">
    <div class="login-container">
      <div class="login-form">
        <h1 class="form-title">Vue3-admin</h1>
        <p class="text-help">这里不知道写点什么，多几个文字比较好看吧</p>
        <div class="form-item">
          <el-input
            prefix-icon="el-icon-s-custom"
            type="text"
            v-model="data.info.username"
            autocomplete="off"
            placeholder="用户名：随便"
          ></el-input>
        </div>
        <div class="form-item">
          <el-input
            prefix-icon="el-icon-lock"
            type="password"
            v-model="data.info.password"
            autocomplete="off"
            show-password
            placeholder="密码：随便"
          ></el-input>
        </div>
        <div class="form-item" style="margin-bottom: 14px">
          <el-checkbox v-model="data.remembered">记住我</el-checkbox>
          <span class="forget-p-help cper" @click="forgetHelp">忘记密码？</span>
        </div>
        <div class="form-item">
          <el-button type="primary" @click="login" style="width: 100%">登录</el-button>
        </div>
        <div class="form-item">
          <div class="oauth-title">其他方式登录：</div>
          <ul class="oauth">
            <li class="cper">
              <span class="iconfont icon-qq login-icon"></span>
            </li>
            <li class="cper">
              <span class="iconfont icon-icon-test login-icon"></span>
            </li>
            <li class="cper">
              <span class="iconfont icon-icon-test1 login-icon"></span>
            </li>
            <li class="cper">
              <span class="iconfont icon-icon-test2 login-icon"></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="login-welcome">
        <p>树叶的一生</p>
        <p>只是为了归根吗</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue';
import { ElMessageBox } from 'element-plus';
import '@/assets/iconfonts/login/iconfont.css';

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
    return {
      data,
      login,
      forgetHelp
    };
  }
});
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  .login-container {
    width: 760px;
    // TODO 这个我也不知道咋调好看
    box-shadow: 0px 14px 20px #c0c4cc;
    // filter: drop-shadow(0px 14px 20px #c0c4cc);
    background-color: unset;
    display: flex;

    .login-form,
    .login-welcome {
      width: 50%;
      height: 480px;
      box-sizing: border-box;
    }

    .login-form {
      background-color: rgb(255, 255, 255);
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .form-title {
        font-size: 32px;
        font-weight: 600;
        margin-top: 14px;
        margin-bottom: 14px;
      }

      p {
        margin-bottom: 40px;
      }

      .form-item {
        width: 280px;
        margin-bottom: 22px;
      }

      .forget-p-help {
        font-size: 14px;
        float: right;
      }

      .oauth-title {
        margin-bottom: 5px;
      }

      ul.oauth {
        li {
          padding: 0 3px;
          float: left;

          .login-icon {
            color: rgb(129, 129, 129);
            font-size: 26px;
            transition: all 0.2s;
          }

          &:first-of-type {
            padding-left: 0;
          }

          &:hover {
            .login-icon {
              color: #000;
            }
          }
        }

        &::after {
          content: '';
          display: block;
          clear: left;
        }
      }
    }

    .login-welcome {
      background-color: #607d8b;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 28px;
        font-weight: 600;
        line-height: 200%;
      }
    }
  }
}
</style>
