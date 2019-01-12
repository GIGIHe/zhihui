<template>
  <div class="bgc_w login_wraper">
    <!-- header -->
    <header class="head font-16">
      <img
        src="../image/back.svg"
        class="back"
        @click="$router.back()"
      >
      <span class="head_tilte">登录</span></header>
    <!-- 登录框 -->
    <div class="login_box">
      <h1>欢迎登录智慧扶贫!</h1>
      <van-cell-group>
        <van-field
          v-model="username"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
      </van-cell-group>
    </div>
    <!-- 登录按钮 -->
    <Button
      :title="title"
      class="submit"
      @click.native="login"
    ></Button>
    <!-- 注册 -->
    <div class="register">
      <span class="color_6">还没有账号,</span>
      <router-link
        to="/register"
        class="register_color"
      >立即注册</router-link>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: {
    Button
  },
  data() {
    return {
      username: "",
      password: "",
      title: "立即登录"
    };
  },
  methods: {
    login() {}
  },
  created() {}
};
</script>

<style scoped lang = "scss">
.login_wraper {
  height: 100vh;
  height: calc(100vh - 46px);
}
.head {
  height: 44px;
  text-align: center;
  line-height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  .back {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 0.2rem;
  }
  .head_tilte {
    font-size: 20px;
    /* font-weight: bold; */
  }
}
.login_box {
  margin-top: 45px;
  padding-top: 15px;
  padding-left: 14px;
  h1 {
    /* text-align: center; */
    font-weight: 500;
    padding: 10px;
  }
}
.submit {
  /* position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  margin-top: 30px;
}
/* 注册样式 */
.register {
  position: fixed;
  left: 50%;
  transform: translate(-50%,0);
  bottom: 50px;
  /* top: 420px; */
  .register_color{
    /* outline: none; */
    color: #409eff;
  }
}
</style>
