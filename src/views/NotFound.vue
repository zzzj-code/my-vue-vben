<!-- src/views/NotFound.vue -->
<template>
  <div class="not-found">
    <div class="content">
      <h1>404</h1>
      <h2>页面不见了</h2>
      <p>抱歉，你访问的页面不存在</p>
      <router-link to="/home" class="back-btn">返回首页</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}
.content {
  text-align: center;
}
.content h1 {
  font-size: 120px;
  color: #409eff;
  margin: 0;
}
.content h2 {
  font-size: 32px;
  color: #333;
}
.content p {
  color: #999;
  font-size: 16px;
}
.back-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #409eff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}
.back-btn:hover {
  background-color: #337ecc;
}
</style>