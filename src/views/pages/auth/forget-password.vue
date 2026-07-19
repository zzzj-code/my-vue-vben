<template>
  <!-- 头部标题 -->
  <div class="forget-top">
    <h2>忘记密码? 🤦🏻‍♂️</h2>
    <p>输入您的电子邮件，我们将向您发送重置密码的连接</p>
  </div>
  <!--  -->
  <!-- 主体 -->
  <form action="">
    <div class="forget-inp">
      <!--  -->
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
      <!--  -->
      <div class="inp-pwd">
        <input type="text" value="[object Object]" />
        <span class="msg"></span>
      </div>
      <!-- 获取验证码 -->
      <div class="inp-verification">
        <div>
          <input type="text" placeholder="验证码" /><button>获取验证码</button>
        </div>
        <span class="msg"></span>
      </div>
      <!--  -->
      <!-- 密码 -->
      <div class="inp-pwd1">
        <input type="password" placeholder="请输入密码" />
        <div class="pwd1-1"></div>
        <p>使用 8 个或更多字符，混合字母、数字和符号</p>
        <span class="msg"></span>
      </div>
      <!-- —————— -->
       <!-- 确认密码 -->
      <div class="inp-pwd"><input type="password"><span class="msg"></span></div>
      <!-- _____ -->
    </div>
  </form>
  <div class="forget-btn">
    <button>重置密码</button>
    <router-link to="/login"><button>返回</button></router-link>
  </div>
  <!-- ___________ -->
</template>

<script>
export default {};
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
