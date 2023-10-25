<template>
  <div class="login-form">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
      <div class="title">
        <!-- <img
          class="logo"
          src="https://files.worldwildlife.org/wwfcmsprod/images/Arctic_Fox/hero_full/4uwavwouy9_shutterstock_103864847.jpg"
        /> -->
        <span class="name">{{ systemName }}</span>
      </div>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          clearable
          placeholder="账号"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          clearable
          @keyup.enter.native="handleLogin"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="captchaCode" v-if="captchaOnOff">
        <el-input
          v-model="loginForm.captchaCode"
          auto-complete="off"
          placeholder="请输入验证码"
          style="width: 63%"
          clearable
          @keyup.enter.native="handleLogin"
        >
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" @click="getCode" class="login-code-img" />
        </div>
      </el-form-item>
      <el-checkbox
        v-model="loginForm.rememberMe"
        style="margin: 0px 0px 25px 0px"
        >记住密码</el-checkbox
      >
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width: 100%; line-height: 24px; font-size: 16px"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">立即登录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getCodeImg } from '@/api/login'
export default {
  data () {
    return {
      codeUrl: "",
      systemName: '',
      loginForm: {
        username: "fuint",
        password: "123456",
        rememberMe: false,
        captchaCode: "",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        captchaCode: [{ required: true, trigger: "change", message: "请输入验证码" }, { min: 4, max: 6, message: '请输入验证码', trigger: 'blur' }]
      },
      loading: false,
      // 验证码开关
      captchaOnOff: true,
      // 注册开关
      register: false,
      redirect: undefined
    };
  },
  created () {
    this.getCode()
  },
  methods: {
    getCode () {
      const app = this
      getCodeImg()
      // getCodeImg().then(response => {
      //   app.codeUrl = response.data.captcha
      //   app.loginForm.uuid = response.data.uuid
      //   console.log('res', response);
      // })
    },
    handleLogin () {
      const app = this
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          app.$store.dispatch('Login', this.loginForm)
            .then(() => app.$router.push({ path: '/test' }))
            .catch(() => { })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  width: 500px;
  height: 100%;
  float: right;
  padding: 80px 60px;
  background: #fff;
  .title {
    text-align: left;
    font-size: 24px;
    color: #707070;
    padding: 20px 20px 40px 0px;
    .logo {
      height: 24px;
      width: 24px;
      vertical-align: middle;
    }
    .name {
      margin-left: 5px;
    }
  }
  .login-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
  }
  .login-code {
    width: 33%;
    height: 38px;
    float: right;
    img {
      cursor: pointer;
      vertical-align: middle;
    }
  }
  .login-code-img {
    height: 45px;
  }
  .el-input {
    height: 45px;
    input {
      height: 45px;
    }
  }
  .input-icon {
    height: 45px;
    width: 14px;
    margin-left: 2px;
  }
  .copy-right {
    color: #888888;
    text-align: center;
    font-size: 12px;
    .link {
      color: #ff5b57;
      font-weight: bold;
    }
  }
}
</style>