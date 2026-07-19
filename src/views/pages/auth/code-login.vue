<template>
  <div class="code">
    <div class="code-top">
      <h2>欢迎回来 📲</h2>
      <p>请输入您的手机号码以开始管理您的项目</p>
    </div>
    <form action="">
      <div class="code-main">
        <div class="login-inp">
          <div class="inp-select">
            <div class="select">
              <button><span>宇擎源码</span>▼</button>
              <ul>
                <li>宇擎源码</li>
                <li>111</li>
                <li>222</li>
              </ul>
            </div>
          </div>
          <div class="inp-verify">
            <input type="text" placeholder="请输入手机号" />
            <span class="msg"></span>
          </div>
          <!-- 获取验证码 -->
          <div class="inp-verification">
            <div>
              <input type="text" placeholder="验证码" /><button>
                获取验证码
              </button>
            </div>
            <span class="msg"></span>
          </div>
          <!--  -->
        </div>
      </div>
    </form>

    <!-- 按钮 -->
    <div class="forget-btn">
      <button>重置密码</button>
      <router-link to="/login"><button>返回</button></router-link>
    </div>
    <!-- ___________ -->
  </div>
</template>

<script>
    
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
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: #333;
}
.forget-btn button:last-child:hover {
  background-color: #dfdddd;
}
</style>
