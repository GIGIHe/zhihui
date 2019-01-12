<template>
  <div class="register_wraper bgc_w">
    <header class="head font-16">
      <img
        src="../image/back.svg"
        class="back"
        @click="$router.back()"
      >
      <span class="head_tilte">注册</span></header>
    <!-- 注册框 -->
    <div class="register_box bgc_w">
      <h1>欢迎注册智慧扶贫!</h1>
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
    <!-- 注册按钮 -->
    <Button
      :title="title"
      class="submit"
      @click.native="register"
    ></Button>
    <div class="login">
      <span class="color_6">已有账号,</span>
      <router-link
        to="/login"
        class="register_color"
      >立即登录</router-link>
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
      title: "确认注册"
    };
  },
  methods: {
    register() {}
  }
};
</script>

<style scoped lang = "scss">
.register_wraper {
  height: 100vh;
  height: calc(100vh - 46px);
}
/* header样式 */
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
/* 注册框 */
.register_box {
  margin-top: 45px;
  margin-bottom: 30px;
  padding-top: 15px;
  padding-left: 14px;
  h1 {
    /* text-align: center; */
    font-weight: 500;
    padding: 10px;
  }
}
/* 注册按钮样式 */
.submit {
  /* margin-top: 30px; */
}
/* 登录样式 */
.login {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 50px;
  /* top: 420px; */
  .register_color {
    /* outline: none; */
    color: #409eff;
  }
}
</style>
