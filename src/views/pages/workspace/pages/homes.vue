<template>
  <!-- 侧边导航栏 -->
  <div class="sidebar-left">
    <ul>
      <li>
        <router-link to="/workbench" active-class="sidebar-active" class="rou"
          ><span></span>我都首页</router-link
        >
      </li>
      <li>
        <router-link to="/analytics" active-class="sidebar-active" class="rou"
          ><span></span>数据分析</router-link
        >
      </li>
      <li>
        <router-link to="/manage" active-class="sidebar-active" class="rou"
          ><span></span>首页管理</router-link
        >
      </li>
      <li>
        <router-link to="/component" active-class="sidebar-active" class="rou"
          ><span></span>组件管理</router-link
        >
      </li>
    </ul>
  </div>
  <!-- 主体部分 -->
  <div class="home-main">
    <router-view />
  </div>
</template>

<script></script>

<style scoped>
.rou {
  position: absolute;
  width: 207px;
  height: 42px;
  /* border: 1px solid red; */
  margin-top: 2px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}
.sidebar-active {
  color: #0c70f3;
  background-color: rgb(176, 211, 245);
}
/* 主体 */
.home-main {
  width: 1040px;
  height: 790px;
  position: absolute;
  left: 228px;
  background-color: #ecebeb;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ———————————— */

/* 侧边导航栏 */
.sidebar-left {
  flex: 0 0 227px;
  width: 227px;
  height: calc(100vh - 51px); /* 占满剩余高度 */
  background-color: #fff;
  position: fixed; /* 固定定位 */
  top: 51px;
  left: 0;
  overflow-y: auto;
  z-index: 202;
  background-color: #fff;
}
.sidebar-left ul {
  width: 100%;
  height: 174px;
  list-style: none;
  /* border: 1px solid red; */
  padding: 3px 10px;
}
.sidebar-left ul li {
  width: 207px;
  height: 42px;
  /* border: 1px solid red; */
  margin-top: 2px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  /* padding-left: 16px; */
  cursor: pointer;
  font-size: 14px;
}
.sidebar-left ul li span {
  width: 16px;
}
.sidebar-left ul li:hover {
  background-color: #ccc;
}
/* —————————————— */
</style>
