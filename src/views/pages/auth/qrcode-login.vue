<template>
  <div class="qrcode">
    <div class="code-top">
      <h2>欢迎回来 📲</h2>
      <p>请用手机扫描二维码登录</p>
    </div>
    <div class="qrcode-ma">
      <img src="../img/二维码.png" alt="" />
      <p>扫码后点击 '确认'，即可完成登录</p>
    </div>
    <router-link to="/login"><button>返回</button></router-link>
  </div>
</template>

<script></script>

<style scoped>
.qrcode {
  width: 100%;
  height: 410px;
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
.qrcode-ma {
  width: 100%;
  height: 258px;
  /* border: 1px solid red; */
  text-align: center;
}
.qrcode-ma img {
  width: 222px;
  height: 222px;
}
.qrcode-ma p {
  font-size: 14px;
  /* margin-top: 16px; */
}
.qrcode button {
  width: 100%;
  height: 36px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 16px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.445);
  background-color: #fff;
  color: #333;
}
.qrcode button:hover{
    background-color: #d1cece;
}
</style>
