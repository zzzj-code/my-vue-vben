<template>
  <div class="register-top">
    <h2>创建一个账号 🚀</h2>
    <p>让您的应用程序管理变得简单而有趣</p>
  </div>
  <!-- 表单，@submit.prevent 阻止默认提交，调用 handleRegister -->
  <form @submit.prevent="handleRegister">
    <div class="register-main">
      <!-- 租户选择下拉 -->
      <div class="inp-select" ref="selectContainer">
        <div class="select">
          <button type="button" @click="toggleDropdown">
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
      <!-- 用户名输入框，v-model 双向绑定 -->
      <div class="inp-verify">
        <input type="text" placeholder="请输入用户名" v-model="form.username" />
        <!-- 错误提示 -->
        <span class="msg">{{ errors.username }}</span>
      </div>
      <!-- 昵称输入框 -->
      <div class="inp-verify">
        <input type="text" placeholder="请输入昵称" v-model="form.nickname" />
        <span class="msg">{{ errors.nickname }}</span>
      </div>
      <!-- 密码输入框 -->
      <div class="inp-pwd1">
        <input type="password" placeholder="请输入密码" v-model="form.password" />
        <div class="pwd1-1"></div>
        <p>使用 8 个或更多字符，混合字母、数字和符号</p>
        <span class="msg">{{ errors.password }}</span>
      </div>
      <!-- 确认密码 -->
      <div class="inp-pwd">
        <input
          type="password"
          placeholder="确认密码"
          v-model="form.confirmPassword"
        />
        <span class="msg">{{ errors.confirmPassword }}</span>
      </div>
      <!-- _____ -->
      <!-- 同意协议复选框 -->
      <div class="register-check">
        <div class="chenck">
          <input type="checkbox" id="agree" v-model="form.agree" />
          <label for="agree"
            >我同意
            <router-link to="/login" class="aa"
              >隐私政策 & 条款</router-link
            ></label
          >
        </div>
      </div>
    </div>
    <!-- 注册按钮，loading 时禁用 -->
    <button class="register-btn" type="submit" :disabled="loading">
      {{ loading ? '注册中...' : '注册' }}
    </button>
  </form>
  <div class="floot">
    已经有账号了？<router-link to="/login" class="aa">去登录</router-link>
  </div>
</template>

<script>
// 导入注册接口函数
import { register } from '#/api/core/auth';

export default {
  // 组件数据
  data() {
    return {
      // 租户下拉相关
      userName: "宇擎源码",
      showDropdown: false,
      // 表单数据，统一放在 form 对象里，方便管理
      form: {
        username: "",        // 用户名
        nickname: "",        // 昵称
        password: "",        // 密码
        confirmPassword: "", // 确认密码
        agree: false         // 是否同意协议
      },
      // 错误提示信息，对应每个输入框下面的文字
      errors: {
        username: "",
        nickname: "",
        password: "",
        confirmPassword: ""
      },
      // 提交 loading 状态，防止重复点击
      loading: false
    };
  },
  // 组件方法
  methods: {
    // 切换下拉菜单显示/隐藏
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    // 选择下拉选项
    selectOption(name) {
      this.userName = name;
      this.showDropdown = false;
    },
    // 点击页面外部时关闭下拉菜单
    handleClickOutside(event) {
      // 判断点击的目标是否在 selectContainer 外部
      if (
        this.$refs.selectContainer &&
        !this.$refs.selectContainer.contains(event.target)
      ) {
        this.showDropdown = false;
      }
    },
    // 注册方法
    async handleRegister() {
      // 先清空所有错误提示
      this.errors = {
        username: "",
        nickname: "",
        password: "",
        confirmPassword: ""
      };

      // ========== 表单验证 ==========
      // 验证用户名
      if (!this.form.username.trim()) {
        this.errors.username = "请输入用户名";
        return;
      }
      // 用户名长度至少3位
      if (this.form.username.trim().length < 3) {
        this.errors.username = "用户名至少3位";
        return;
      }

      // 验证昵称
      if (!this.form.nickname.trim()) {
        this.errors.nickname = "请输入昵称";
        return;
      }

      // 验证密码
      if (!this.form.password) {
        this.errors.password = "请输入密码";
        return;
      }
      // 密码长度至少8位（和页面提示一致）
      if (this.form.password.length < 8) {
        this.errors.password = "密码至少8位";
        return;
      }

      // 验证确认密码
      if (!this.form.confirmPassword) {
        this.errors.confirmPassword = "请确认密码";
        return;
      }
      // 两次密码必须一致
      if (this.form.password !== this.form.confirmPassword) {
        this.errors.confirmPassword = "两次输入的密码不一致";
        return;
      }

      // 验证是否同意协议
      if (!this.form.agree) {
        alert("请先同意隐私政策和条款");
        return;
      }

      // 验证通过，开始提交
      this.loading = true;

      try {
        // 调用注册接口
        // 参数：用户名、密码、昵称
        const res = await register({
          username: this.form.username.trim(),
          password: this.form.password,
          nickname: this.form.nickname.trim()
        });

        // 注册成功，res 包含 userId、accessToken、refreshToken
        if (res) {
          alert("注册成功，请使用新账号登录");
          // 跳转到登录页
          this.$router.push("/login");
        }
      } catch (err) {
        // 注册失败，错误信息已在 request.js 里弹窗
        console.error("注册失败", err);
      } finally {
        // 无论成功失败，都关闭 loading
        this.loading = false;
      }
    }
  },
  // 组件挂载时添加全局点击事件监听
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  // 组件销毁前移除事件监听，防止内存泄漏
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  }
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
