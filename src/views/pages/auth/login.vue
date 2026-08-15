<template>
  <!-- 头部标题 -->
  <div class="login-top">
    <h2>欢迎回来 👋🏻</h2>
    <p>请输入您的帐户信息开始高效办公吧！</p>
  </div>
  <!--  -->
  <!-- 主体 -->
  <form action="#" @submit.prevent="handleLogin">
    <div class="login-inp">
      <div class="inp-select" ref="selectContainer">
        <div class="select">
          <button type="button" @click="toggleDropdown">{{ userName }}<span>▼</span></button>
          <ul v-show="showDropdown">
            <li @click="selectOption('宇擎源码')">宇擎源码</li>
            <li @click="selectOption('111')">111</li>
            <li @click="selectOption('222')">222</li>
          </ul>
        </div>
      </div>
      <div class="inp-verify">
        <input
          v-model="login.username"
          type="text"
          placeholder="请输入用户名"
        />
      </div>
      <div class="inp-verify password-box">
        <input
          v-model="login.password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="请输入密码"
        />
        <button type="button" class="eye-btn" @click="showPassword = !showPassword">
          {{ showPassword ? '🙈' : '👁️' }}
        </button>
      </div>
    </div>
    <!-- ___________ -->
    <!-- 复选框 -->
    <div class="login-chenck">
      <div class="chenck">
        <input type="checkbox" id="agree" v-model="login.remember" />
        <label for="agree">记住账号</label>
      </div>
      <router-link to="/forgetPassword" class="aa">忘记密码?</router-link>
    </div>
    <!-- ________ -->
    <!-- 登录按钮 -->
    <button class="btn" type="submit" :disabled="loading">
      {{ loading ? "登录..." : "登录" }}
    </button>
    <!-- —————————— -->
  </form>

  <div class="login-btn2">
    <router-link to="/codeLogin"><button>手机号登录</button></router-link>
    <router-link to="/qrcodeLogin"><button>扫码登录</button></router-link>
  </div>
  <div class="hr1">
    <span></span>
    <span>其他登录方式</span>
    <span></span>
  </div>
  <div class="login-method">
    <button></button>
    <button></button>
    <button></button>
    <button></button>
  </div>
  <div class="login-create">
    还没有账号？<router-link to="/register" class="link-create"
      >创建账号</router-link
    >
  </div>
  <div class="hr1">
    <span></span>
    <span>萌新必读</span>
    <span></span>
  </div>
  <div class="login-tutorial">
    <a href="http://ruoyioffice.com/"> 📚 开发指南 </a>
    <a href="http://ruoyioffice.com/video/"> 🔥 视频教程 </a>
    <a href="https://www.iocoder.cn/Interview/good-collection/">
      ⚡ 面试手册
    </a>
    <a href="http://static.yudao.iocoder.cn/mp/xinyu370.jpeg"> 🤝 外包咨询 </a>
  </div>
</template>

<script>
import { loginApi } from '#/api/core/auth';

export default {
  data() {
    return {
      //下拉菜单
      userName: "宇擎源码",
      showDropdown: false,
      // 用户名和密码验证
      login: {
        username: "",
        password: "",
        remember: false,
      },
      loading: false, //登录加载
      showPassword: false, //密码显示切换
    };
  },
  methods: {
    // 选择下拉菜单
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectOption(name) {
      this.userName = name;
      this.showDropdown = false;
    },
    // 点击外部关闭下拉菜单
    handleClickOutside(event) {
      if (
        this.$refs.selectContainer &&
        !this.$refs.selectContainer.contains(event.target)
      ) {
        this.showDropdown = false;
      }
    },
    async handleLogin() {
      // 简单判断用户和密码的非空
      if (!this.login.username.trim()) {
        alert("请输入用户名");
        return;
      }
      if (!this.login.password.trim()) {
        alert("请输入密码");
        return;
      }

      this.loading = true;

      try {
        // 调用 ruoyi-office 登录接口
        const res = await loginApi({
          tenantId: 1,
          username: this.login.username,
          password: this.login.password,
        });

        // 登录成功，存储 token
        if (res) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          localStorage.setItem("username", this.login.username);

          // 记住账号
          if (this.login.remember) {
            localStorage.setItem("rememberUsername", this.login.username);
          } else {
            localStorage.removeItem("rememberUsername");
          }

          // 跳转到首页
          this.$router.push("/home");
        }
      } catch (err) {
        console.error("登录失败", err);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    // 添加全局点击事件监听
    document.addEventListener("click", this.handleClickOutside);
    // 回显记住的账号
    const rememberUsername = localStorage.getItem("rememberUsername");
    if (rememberUsername) {
      this.login.username = rememberUsername;
      this.login.remember = true;
    }
  },
  beforeDestroy() {
    // 组件销毁前移除事件监听
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
/* top */
.login-top {
  width: 100%;
  height: 80px;
  /* border: 1px solid red; */
  margin-bottom: 28px;
}
.login-top h2 {
  font-size: 36px;
}
.login-top p {
  font-size: 14px;
  color: #71717a;
}
/* ______ */

/* Verify */
.login-inp {
  width: 100%;
  height: 170px;
}
.login-inp .inp-select {
  width: 100%;
  height: 54px;
  /* border: 1px solid red; */
}
.inp-select .select {
  width: 100%;
  height: 36px;
  /* border: 1px solid red; */
  position: relative; /* ✅ 添加相对定位，让下拉菜单正确定位 */
}
.select button {
  width: 100%;
  height: 100%;
  border: 0.5px solid rgb(185, 185, 185);
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #fff;
}
.select ul {
  list-style: none; /* ✅ 取消项目符号 */
  width: 100%;
  border: 0.5px solid rgb(185, 185, 185);
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-top: 3px;
  padding: 8px;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  /* display: none; */
}
.select ul li {
  width: 100%;
  padding: 10px 10px;
  list-style: none;
  transition: background-color 0.2s;
  box-sizing: border-box;
}
.select ul li:hover {
  border-radius: 5px;
  background-color: #f0f0f0;
  color: #333;
}
/* 或者点击显示（需要 JS，这里用 hover 演示） */
/* 如果需要点击切换，可以添加一个 active 类 */

.login-inp .inp-verify {
  width: 100%;
  height: 58px;
  /* border: 1px solid black; */
}
.inp-verify input {
  width: 100%;
  height: 40px;
  border: 0.5px solid rgb(185, 185, 185);
  border-radius: 5px;
  /* cursor: pointer; */
  padding: 12px 16px;
}
.inp-verify input:focus {
  border: 0.5px solid rgb(79, 104, 247);
  outline: none;
}
/* 密码框小眼睛 */
.password-box {
  position: relative;
}
.password-box input {
  padding-right: 44px;
}
.eye-btn {
  position: absolute;
  right: 8px;
  top: 35%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 4px;
  line-height: 1;
}
/* __________ */

/* chenck */
.login-chenck {
  width: 100%;
  height: 20px;
  margin-bottom: 24px;
  /* border: 1px solid red; */
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-chenck .aa {
  text-decoration: none;
}
.chenck {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chenck label {
  margin-left: 5px;
}
/* ________ */
/* 按钮 */
.btn {
  width: 100%;
  height: 36px;
  border: 0;
  background-color: blue;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}
.btn:hover {
  background-color: rgb(118, 118, 241);
}
/* ———————————————— */
/* 扫码和手机登录 */
.login-btn2 {
  width: 100%;
  height: 36px;
  margin-top: 16px;
  margin-bottom: 8px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-btn2 button {
  width: 214px;
  height: 36px;
  border: 0.5px solid rgb(185, 185, 185);
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.login-btn2 button:hover {
  background-color: #dddddd;
}
/* _______ */

/* 下划线 */
.hr1 {
  width: 100%;
  height: 16px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #71717a;
}
.hr1 span:nth-child(odd) {
  width: 35%;
  height: 1px;
  background-color: #71717a;
}
/* _____ */

/* 其他登录方式 */
.login-method {
  width: 100%;
  height: 44px;
  margin-top: 16px;
  text-align: center;
}
.login-method button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
}
.login-method button:hover {
  background-color: #71717a;
}
/* _________ */
/* 创建账号 */
.login-create {
  width: 100%;
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
}
.login-create .link-create {
  text-decoration: none;
}
/* ———————————————— */

/* 教程 */
.login-tutorial {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.login-tutorial a {
  text-decoration: none;
}

.btn:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
  opacity: 0.6;
}
.btn:disabled:hover {
  background-color: #a0a0a0;
}
</style>
