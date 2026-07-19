<template>
  <div class="general">
    <!-- 左边 -->
    <div class="box-left">
      <!-- 标题 -->
      <div class="left-title">
        <div class="title">
          <img src="../assets/img/logo.png" alt="" />
          <p>宇擎源码一体化平台</p>
        </div>
      </div>
      <!-- 中间图 -->
      <div class="left-text">
        <img src="../assets/img/titleImg.png" alt="" />
        <div class="text1">开箱即用的大型中后台管理系统</div>
        <div class="text2">工程化、高性能、跨组件库的前端模版</div>
      </div>
    </div>
    <!-- 右边 -->
    <div class="box-right">
      <!-- 中间验证 -->
      <div class="rigth-content">
          <router-view />
      </div>
      <!-- 商标 -->
      <div class="rigth-floot">
        Copyright © 2024
        <a href="https://gitee.com/yqzy1688/ruoyi-office">宇擎源码一体化平台</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.general {
  display: flex;
  /* gap: 1px; */
}
/* 左边 */
.box-left {
  width: 762px;
  height: 698px;
  /* border: 1px solid red; */
  background: linear-gradient(-45deg, #e7eaeb, #d6f3ff, #e7eaeb);
  position: relative;
}
.box-left .left-title {
  width: 248px;
  height: 60px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
.left-title .title {
  width: 232px;
  height: 44px;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
}
.title img {
  width: 44px;
  height: 44px;
  margin-right: 8px;
}
.title p {
  font-size: 20px;
  font-family: "黑体";
  /* font-weight: bold; */
}
.left-text {
  width: 100%;
  height: 360px;
  /* border: 1px solid red; */
  position: absolute;
  top: 200px;
  text-align: center;
}
.left-text img {
  width: 273px;
  height: 256px;
  /* 让图片上下浮动 */
  animation: float 3s ease-in-out infinite;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px); /* 向上浮动 5px */
  }
}
.left-text .text1 {
  font-size: 24px;
  margin-top: 24px;
}
.left-text .text2 {
  font-size: 14px;
  margin-top: 8px;
}
/* ________ */

/* 右边 */
.box-right {
  width: 508px;
  height: 698px;
  /* border: 1px solid black; */
  position: relative;
}
.box-right .rigth-content {
  width: 444px;
  height: 594px;
  position: absolute;
  top: 70px;
  left: 40px;
  /* border: 1px solid black; */
}
/* 商标 - 固定在底部 */
.box-right .rigth-floot {
  position: absolute;
  bottom: 8px; /* 距离底部 20px */
  left: 50%; /* 水平居中 */
  transform: translateX(-50%); /* 水平居中 */
  width: 100%; /* 或 auto */
  text-align: center;
  color: #666;
  font-size: 12px;
}

.rigth-floot a {
  color: blue;
  text-decoration: none;
}

.rigth-floot a:hover {
  text-decoration: underline;
}
</style>
