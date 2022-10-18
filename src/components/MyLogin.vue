<template>
  <link rel="stylesheet" href="../assets/css/login.css" />
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <form action="#" class="sign-in-form">
          <h2 class="title">登录</h2>
          <div class="input-field">
            <i class="fas fa-user"></i
            ><input
              type="text"
              placeholder="用户名"
              v-model="username_login"
              @keyup.esc="username_login = ''"
              required
            />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i
            ><input
              type="password"
              placeholder="密码"
              v-model="pwd_login"
              @keyup.esc="pwd_login = ''"
              required
            />
          </div>
          <button type="submit" class="btn-login btn-login-primary mb-2" @click="login">
            Login
          </button>
        </form>
        <form action="#" class="sign-up-form">
          <h2 class="title">注册</h2>
          <div class="input-field">
            <i class="fas fa-user"></i
            ><input
              type="text"
              placeholder="用户名"
              v-model="username_reg"
              @keyup.esc="username_reg = ''"
              required
            />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i
            ><input
              type="email"
              placeholder="Email"
              v-model="mail_reg"
              @keyup.esc="mail_reg = ''"
              required
            />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i
            ><input
              type="password"
              placeholder="密码"
              v-model="pwd_reg"
              @keyup.esc="pwd_reg = ''"
              required
            />
          </div>
          <button type="submit" class="btn-login btn-primary mb-2" @click="adduser">
            注册
          </button>
        </form>
      </div>
    </div>
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>还没有账号 ?</h3>
          <p>点击下方按钮进行注册</p>
          <button class="btn-login transparent" id="sign-up-btn" @click="sign_up">
            注册
          </button>
        </div>
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>已有账号 ?</h3>
          <p>快快登陆吧 !</p>
          <button
            class="btn-login transparent"
            id="sign-in-btn"
            href="./dashboard.html"
            @click="sign_in"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLogin",
  data() {
    return {
      nextId: 2,
      pwd_login: "",
      username_login: "",
      pwd_reg: "",
      username_reg: "",
      mail_reg: "",
      Users: [{ id: 1, name: "admin", pw: "123", mail: "admin@qq.com" }],
    };
  },
  methods: {
    login() {
      this.Users.forEach((element) => {
        if (
          this.username_login == element.name &&
          this.pwd_login == element.pw
        ) {
          this.$router.push("/home");
          localStorage.setItem("token", "Bearer xxx");
        } else {
          localStorage.removeItem("token");
        }
      });
    },
    adduser() {
      this.Users.push({
        id: this.nextId,
        name: this.username_reg,
        pw: this.pwd_reg,
        mail: this.mail_reg,
      });
      this.nextId++;
      this.$options.methods.sign_in();
    },
    sign_up() {
      const sign_in_btn = document.querySelector("#sign-up-btn");
      const container = document.querySelector(".container");
      container.classList.add("sign-up-mode");
    },
    sign_in() {
      const sign_in_btn = document.querySelector("#sign-in-btn");
      const container = document.querySelector(".container");
      container.classList.remove("sign-up-mode");
    },
  },
};
</script>

<style lang="less" scoped></style>
