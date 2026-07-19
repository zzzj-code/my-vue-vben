<template>
  <div class="register-top">
    <h2>创建一个账号 🚀</h2>
    <p>让您的应用程序管理变得简单而有趣</p>
  </div>
  <form @submit.prevent="handleRegister">
    <div class="register-main">
      <div class="inp-select" ref="selectContainer">
        <div class="select">
          <button @click="toggleDropdown">
            <span>{{ userName }}</span
            >▼
          </button>
          <ul v-show="showDropdown">
            <li @click="selectOption('宇擎源码')">宇擎源码</li>
            <li @click="selectOption('111')">111</li>
            <li @click="selectOption('222')">222</li>
          </ul>
        </div>
      </div>
      <div class="inp-verify">
        <input type="text" placeholder="请输入用户名" v-model="username" />
        <span class="msg"></span>
      </div>
      <div class="inp-verify">
        <input type="text" placeholder="请输入昵称" v-model="nickname" />
        <span class="msg"></span>
      </div>
      <div class="inp-pwd1">
        <input type="password" placeholder="请输入密码" v-model="password" />
        <div class="pwd1-1"></div>
        <p>使用 8 个或更多字符，混合字母、数字和符号</p>
        <span class="msg"></span>
      </div>
      <!-- 确认密码 -->
      <div class="inp-pwd">
        <input
          type="password"
          placeholder="确认密码"
          v-model="confirmPassword"
        />
        <span class="msg"></span>
      </div>
      <!-- _____ -->
      <div class="register-check">
        <div class="chenck">
          <input type="checkbox" id="agree" v-model="agree" />
          <label for="agree"
            >我同意
            <router-link to="/login" class="aa"
              >隐私政策 & 条款</router-link
            ></label
          >
        </div>
      </div>
    </div>
    <button class="register-btn" type="submit">
      注册
    </button>
  </form>
  <div class="floot">
    已经有账号了？<router-link to="/login" class="aa">去登录</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: "宇擎源码",
      showDropdown: false,
      // 注册表单数据
      username: "", //用户名
      nickname: "", //昵称
      password: "", //密码
      confirmPassword: "", //确认密码
      agree: false, //复选框
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
    // 注册方法
    async handleRegister() {
      // 1. 简单验证
      if (!this.username.trim()) {
        alert("请输入用户名");
        console.log("验证失败：用户名为空");
        return;
      }
      if (!this.password) {
        alert("请输入密码");
        console.log("验证失败：密码为空");
        return;
      }
      if (this.password.length < 6) {
        alert("密码至少6位");
        console.log("验证失败：密码少于6位");
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert("两次密码输入不一致");
        console.log("验证失败：两次密码不一致");
        return;
      }
      if (!this.agree) {
        alert("请勾选同意");
        return;
      }

      this.loading = true;

      try {
        console.log("发送注册请求:", {
          username: this.username.trim(),
          password: this.password,
        });

        const res = await axios.post(
          "https://hmajax.itheima.net/api/login",
          {
            username: this.username.trim(),
            password: this.password,
          },
        );

        console.log(res);
        
        console.log("注册响应:", res.data);

        // 处理响应
        if (res.status === 200) {
          console.log("注册成功");
          //注册成功跳转登录页
          this.$router.push("/login");
        } else {
          alert(res.data.message)
          console.log("注册失败:", msg);
        }
      } catch (err) {
        console.error("请求错误:", err);
        console.dir(err)
      }
    },
  },
  mounted() {
    // 添加全局点击事件监听
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    // 组件销毁前移除事件监听
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.register-top {
  width: 100%;
  height: 72px;
  margin-bottom: 28px;
}
.register-top h2 {
  font-size: 36px;
}
.register-top p {
  font-size: 14px;
  color: #71717a;
}
.register-main {
  width: 100%;
  height: 360px;
  /* border: 1px solid red; */
}

.register-main .inp-select {
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

.register-main .inp-verify {
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

.inp-pwd1 {
  width: 100%;
  height: 94px;
  /* border: 1px solid red; */
}
.inp-pwd1 input {
  width: 100%;
  height: 40px;
  padding: 12px 16px;
  border: 0.5px solid rgb(185, 185, 185);
  border-radius: 5px;
  margin-bottom: 8px;
}
.inp-pwd1 input:focus {
  border: 0.5px solid rgb(79, 104, 247);
  outline: none;
}
.inp-pwd1 .pwd1-1 {
  width: 100%;
  height: 4px;
  background-color: #cbcbd2;
  margin-bottom: 6px;
}
.inp-pwd1 p {
  font-size: 12px;
  color: #71717a;
}
.inp-pwd {
  width: 100%;
  height: 58px;
  /* border: 1px solid red; */
}
.inp-pwd input {
  width: 100%;
  height: 40px;
  border: 0.5px solid rgb(185, 185, 185);
  border-radius: 5px;
  padding: 12px 16px;
}
.inp-pwd input:focus {
  border: 0.5px solid rgb(79, 104, 247);
  outline: none;
}
.register-check {
  width: 100%;
  height: 38px;
}
.chenck {
  font-size: 14px;
}
.aa {
  text-decoration: none;
}
.register-btn {
  width: 100%;
  height: 36px;
  border: 0;
  background-color: blue;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.register-btn:hover {
  background-color: rgb(114, 114, 247);
}
.register-btn:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
}
.floot {
  font-size: 14px;
  width: 100%;
  text-align: center;
  margin-top: 16px;
}
</style>
