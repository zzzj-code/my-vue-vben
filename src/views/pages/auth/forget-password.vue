<template>
  <!-- 头部标题 -->
  <div class="forget-top">
    <h2>忘记密码? 🤦🏻‍♂️</h2>
    <p>输入您的手机号，我们将向您发送验证码</p>
  </div>
  <!--  -->
  <!-- 主体 -->
  <form @submit.prevent="handleReset">
    <div class="forget-inp">
      <!--  -->
      <div class="inp-select">
        <div class="select">
          <button type="button"><span>宇擎源码</span>▼</button>
          <ul>
            <li>宇擎源码</li>
            <li>111</li>
            <li>222</li>
          </ul>
        </div>
      </div>
      <!-- 手机号输入框 -->
      <div class="inp-pwd">
        <!-- v-model 把输入框的值和 data 里的 mobile 双向绑定 -->
        <input type="text" v-model="form.mobile" placeholder="请输入手机号" />
        <!-- 错误提示信息，验证不通过时显示 -->
        <span class="msg">{{ errors.mobile }}</span>
      </div>
      <!-- 获取验证码 -->
      <div class="inp-verification">
        <div>
          <!-- 验证码输入框，和 form.code 双向绑定 -->
          <input type="text" v-model="form.code" placeholder="验证码" />
          <!-- 获取验证码按钮，点击调用 getCode 方法 -->
          <!-- 倒计时期间按钮禁用，显示剩余秒数 -->
          <button type="button" @click="getCode" :disabled="countdown > 0">
            {{ countdown > 0 ? countdown + '秒后重发' : '获取验证码' }}
          </button>
        </div>
        <span class="msg">{{ errors.code }}</span>
      </div>
      <!--  -->
      <!-- 新密码 -->
      <div class="inp-pwd1">
        <!-- 新密码输入框，和 form.password 双向绑定 -->
        <input type="password" v-model="form.password" placeholder="请输入密码" />
        <div class="pwd1-1"></div>
        <p>使用 8 个或更多字符，混合字母、数字和符号</p>
        <span class="msg">{{ errors.password }}</span>
      </div>
      <!-- —————— -->
       <!-- 确认密码 -->
      <div class="inp-pwd">
        <!-- 确认密码输入框，和 form.confirmPassword 双向绑定 -->
        <input type="password" v-model="form.confirmPassword" placeholder="确认密码">
        <span class="msg">{{ errors.confirmPassword }}</span>
      </div>
      <!-- _____ -->
    </div>
  </form>
  <div class="forget-btn">
    <!-- 重置密码按钮，点击调用 handleReset 方法 -->
    <!-- loading 时禁用按钮，防止重复提交 -->
    <button @click="handleReset" :disabled="loading">
      {{ loading ? '提交中...' : '重置密码' }}
    </button>
    <router-link to="/login"><button type="button">返回</button></router-link>
  </div>
  <!-- ___________ -->
</template>

<script>
// 导入需要的接口函数
// sendSmsCode: 发送短信验证码
// smsResetPassword: 短信重置密码
import { sendSmsCode, smsResetPassword } from '#/api/core/auth';

export default {
  // data 是组件的数据，所有页面上用到的变量都在这里定义
  data() {
    return {
      // 表单数据，收集用户输入的内容
      form: {
        mobile: '',        // 手机号
        code: '',          // 短信验证码
        password: '',      // 新密码
        confirmPassword: '' // 确认密码
      },
      // 错误提示信息，对应每个输入框下面的红色文字
      errors: {
        mobile: '',
        code: '',
        password: '',
        confirmPassword: ''
      },
      // 倒计时秒数，0 表示可以重新获取验证码
      countdown: 0,
      // 定时器 ID，用来清除倒计时
      timer: null,
      // 提交 loading 状态，防止用户重复点击
      loading: false
    };
  },
  // methods 是组件的方法，所有事件处理函数都在这里
  methods: {
    // 获取短信验证码
    async getCode() {
      // 先清空之前的错误提示
      this.errors.mobile = '';
      this.errors.code = '';

      // 验证手机号是否为空
      if (!this.form.mobile.trim()) {
        this.errors.mobile = '请输入手机号';
        return;
      }

      // 简单验证手机号格式（1开头，11位数字）
      // test() 是正则表达式的方法，用来判断字符串是否匹配规则
      if (!/^1[3-9]\d{9}$/.test(this.form.mobile)) {
        this.errors.mobile = '请输入正确的手机号';
        return;
      }

      try {
        // 调用发送短信验证码接口
        // scene: 3 表示重置密码场景（1=登录, 2=注册, 3=重置密码）
        await sendSmsCode({
          mobile: this.form.mobile,
          scene: 3
        });

        // 发送成功提示
        alert('验证码已发送，请注意查收');

        // 开始 60 秒倒计时
        this.countdown = 60;
        // setInterval 每隔 1 秒执行一次
        this.timer = setInterval(() => {
          this.countdown--;
          // 倒计时结束，清除定时器
          if (this.countdown <= 0) {
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      } catch (err) {
        // 接口调用失败，错误信息已经在 request.js 里弹窗了
        console.error('发送验证码失败', err);
      }
    },

    // 重置密码
    async handleReset() {
      // 先清空所有错误提示
      this.errors = {
        mobile: '',
        code: '',
        password: '',
        confirmPassword: ''
      };

      // ========== 表单验证 ==========
      // 验证手机号
      if (!this.form.mobile.trim()) {
        this.errors.mobile = '请输入手机号';
        return;
      }
      if (!/^1[3-9]\d{9}$/.test(this.form.mobile)) {
        this.errors.mobile = '请输入正确的手机号';
        return;
      }

      // 验证验证码
      if (!this.form.code.trim()) {
        this.errors.code = '请输入验证码';
        return;
      }

      // 验证新密码
      if (!this.form.password) {
        this.errors.password = '请输入新密码';
        return;
      }
      if (this.form.password.length < 8) {
        this.errors.password = '密码长度不能少于8位';
        return;
      }

      // 验证确认密码
      if (!this.form.confirmPassword) {
        this.errors.confirmPassword = '请确认密码';
        return;
      }
      if (this.form.password !== this.form.confirmPassword) {
        this.errors.confirmPassword = '两次输入的密码不一致';
        return;
      }

      // 验证通过，开始提交
      this.loading = true;

      try {
        // 调用重置密码接口
        // 参数：手机号、验证码、新密码
        await smsResetPassword({
          mobile: this.form.mobile,
          code: this.form.code,
          password: this.form.password
        });

        // 重置成功提示
        alert('密码重置成功，请使用新密码登录');

        // 跳转到登录页
        this.$router.push('/login');
      } catch (err) {
        // 接口调用失败
        console.error('重置密码失败', err);
      } finally {
        // 无论成功失败，都关闭 loading
        this.loading = false;
      }
    }
  },
  // 组件销毁时清除定时器，防止内存泄漏
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style scoped>
input:focus {
  border: 0.5px solid rgb(79, 104, 247);
  outline: none;
}

/* top */
.forget-top {
  width: 100%;
  height: 80px;
  /* border: 1px solid red; */
  margin-bottom: 28px;
}
.forget-top h2 {
  font-size: 36px;
}
.forget-top p {
  font-size: 14px;
  color: #71717a;
}
/* ______ */

/* 选择用户 */
.forget-inp {
  width: 100%;
  height: 322px;
}
.forget-inp .inp-select {
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
  display: none;
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
/* —————————————— */

/* 验证 */
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

.inp-verification {
  width: 100%;
  height: 58px;
  /* border: 1px solid red; */
}
.inp-verification input {
  width: 144px;
  height: 38px;
  padding: 12px 16px;
  margin-right: 8px;
  border: 0.5px solid rgb(185, 185, 185);
  border-radius: 5px;
}
.inp-verification button {
  width: 290px;
  height: 40px;
  border: 0.5px solid rgb(185, 185, 185);
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}
.inp-verification button:hover {
  background-color: #e9e9e9;
}
/* ___ */
/* 密码 */
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
.inp-pwd1 .pwd1-1{
  width: 100%;
  height: 4px;
  background-color: #cbcbd2;
  margin-bottom: 6px;
}
.inp-pwd1 p{
  font-size: 12px;
  color: #71717a;
}
/* —————— */

/* 按钮 */
.forget-btn{
  width: 100%;
  height: 96px;
  /* border: 1px solid red; */
}
.forget-btn button{
  width: 100%;
  height: 36px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
}
.forget-btn button:first-child{
  background-color: blue;
  color: #fff;
}
.forget-btn button:first-child:hover{
  background-color: rgb(67, 67, 250);
}
.forget-btn button:last-child{
  margin-top: 22px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  background-color: #fff;
  color: #333;
}
.forget-btn button:last-child:hover{
  background-color: #dfdddd;
}
</style>
