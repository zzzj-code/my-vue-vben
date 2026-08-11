<template>
  <div class="code">
    <div class="code-top">
      <h2>欢迎回来 📲</h2>
      <p>请输入您的手机号码以开始管理您的项目</p>
    </div>
    <!-- 表单，@submit.prevent 阻止默认提交行为，调用 handleLogin 方法 -->
    <form @submit.prevent="handleLogin">
      <div class="code-main">
        <div class="login-inp">
          <!-- 租户选择下拉（暂未对接，保持原样） -->
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
          <div class="inp-verify">
            <!-- v-model 把输入框的值和 form.mobile 双向绑定 -->
            <input type="text" v-model="form.mobile" placeholder="请输入手机号" />
            <!-- 错误提示 -->
            <span class="msg">{{ errors.mobile }}</span>
          </div>
          <!-- 获取验证码 -->
          <div class="inp-verification">
            <div>
              <!-- 验证码输入框，和 form.code 双向绑定 -->
              <input type="text" v-model="form.code" placeholder="验证码" />
              <!-- 获取验证码按钮，点击调用 getCode 方法 -->
              <!-- 倒计时期间禁用按钮，显示剩余秒数 -->
              <button type="button" @click="getCode" :disabled="countdown > 0">
                {{ countdown > 0 ? countdown + '秒后重发' : '获取验证码' }}
              </button>
            </div>
            <span class="msg">{{ errors.code }}</span>
          </div>
          <!--  -->
        </div>
      </div>
    </form>

    <!-- 按钮 -->
    <div class="forget-btn">
      <!-- 登录按钮，点击调用 handleLogin -->
      <!-- loading 时禁用，防止重复提交 -->
      <button @click="handleLogin" :disabled="loading">
        {{ loading ? '登录中...' : '登录' }}
      </button>
      <router-link to="/login"><button type="button">返回</button></router-link>
    </div>
    <!-- ___________ -->
  </div>
</template>

<script>
// 导入需要的接口函数
// sendSmsCode: 发送短信验证码
// smsLogin: 短信验证码登录
import { sendSmsCode, smsLogin } from '#/api/core/auth';

export default {
  // 组件数据
  data() {
    return {
      // 表单数据
      form: {
        mobile: '',  // 手机号
        code: ''     // 短信验证码
      },
      // 错误提示信息
      errors: {
        mobile: '',
        code: ''
      },
      // 验证码倒计时秒数，0 表示可以重新获取
      countdown: 0,
      // 定时器 ID，组件销毁时需要清除
      timer: null,
      // 登录 loading 状态
      loading: false
    };
  },
  // 组件方法
  methods: {
    // 获取短信验证码
    async getCode() {
      // 清空之前的错误提示
      this.errors.mobile = '';
      this.errors.code = '';

      // 验证手机号是否为空
      if (!this.form.mobile.trim()) {
        this.errors.mobile = '请输入手机号';
        return;
      }

      // 验证手机号格式（1开头，11位数字）
      // 正则表达式 /^1[3-9]\d{9}$/ 的含义：
      // ^ 表示开头，1 表示第一位是1，[3-9] 表示第二位是3-9，
      // \d{9} 表示后面9位都是数字，$ 表示结尾
      if (!/^1[3-9]\d{9}$/.test(this.form.mobile)) {
        this.errors.mobile = '请输入正确的手机号';
        return;
      }

      try {
        // 调用发送短信验证码接口
        // scene: 1 表示登录场景（1=登录, 2=注册, 3=重置密码）
        await sendSmsCode({
          mobile: this.form.mobile,
          scene: 1
        });

        // 发送成功提示
        alert('验证码已发送，请注意查收');

        // 开始 60 秒倒计时
        this.countdown = 60;
        // setInterval 每隔 1000 毫秒（1秒）执行一次回调函数
        this.timer = setInterval(() => {
          this.countdown--;
          // 倒计时结束，清除定时器
          if (this.countdown <= 0) {
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      } catch (err) {
        // 接口调用失败，错误信息已在 request.js 里弹窗
        console.error('发送验证码失败', err);
      }
    },

    // 短信登录
    async handleLogin() {
      // 清空所有错误提示
      this.errors.mobile = '';
      this.errors.code = '';

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

      // 验证通过，开始登录
      this.loading = true;

      try {
        // 调用短信登录接口
        // 参数：手机号、验证码
        const res = await smsLogin({
          mobile: this.form.mobile,
          code: this.form.code
        });

        // 登录成功，res 就是接口返回的 data 字段
        // 包含 accessToken、refreshToken、userId、expiresTime
        if (res) {
          // 把 token 存到 localStorage，后续请求会自动带上
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          localStorage.setItem('username', this.form.mobile);

          // 跳转到首页
          this.$router.push('/home');
        }
      } catch (err) {
        // 登录失败
        console.error('登录失败', err);
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
.code {
  width: 100%;
  height: 358px;
  /* border: 1px solid red; */
  position: absolute;
  top: 10%;
}
.code-top {
  width: 100%;
  height: 72px;
  margin-bottom: 28px;
}
.code-top h2 {
  font-size: 36px;
}
.code-top p {
  font-size: 14px;
  color: #71717a;
}
.code-main {
  width: 100%;
  height: 170px;
}

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
/* __________ */

/* 按钮 */
.forget-btn {
  width: 100%;
  height: 96px;
  /* border: 1px solid red; */
}
.forget-btn button {
  width: 100%;
  height: 36px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
}
.forget-btn button:first-child {
  background-color: blue;
  color: #fff;
}
.forget-btn button:first-child:hover {
  background-color: rgb(67, 67, 250);
}
.forget-btn button:last-child {
  margin-top: 22px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  background-color: #fff;
  color: #333;
}
.forget-btn button:last-child:hover {
  background-color: #dfdddd;
}
</style>
