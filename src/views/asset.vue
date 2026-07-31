<template>
  <!-- 侧边导航栏 -->
  <div class="sidebar-left">
    <ul class="sidebar-menu">
      <li>
        <router-link
          @click="toggle('asset')"
          to="/dashboard"
          active-class="sidebar-active"
          class="menu-item"
        >
          <span class="menu-label">资产首页</span>
        </router-link>
      </li>
      <li :class="{ open: expanded === 'base' }">
        <div class="menu-toggle" @click="toggle('base')">
          <span class="menu-label">基础数据</span>
          <span class="menu-arrow">{{ expanded === "base" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/base/category"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">资产分类</span>
            </router-link>
          </li>
          <li>
            <router-link to="/base/location" active-class="sub-active" class="sub-item">
              <span class="menu-label">存放位置</span>
            </router-link>
          </li>
          <li>
            <router-link to="/base/config" active-class="sub-active" class="sub-item">
              <span class="menu-label">模块配置</span>
            </router-link>
          </li>
          <li>
            <router-link to="/label-template" active-class="sub-active" class="sub-item">
              <span class="menu-label">标签模板</span>
            </router-link>
          </li>
          <li>
            <router-link to="/custom-field" active-class="sub-active" class="sub-item">
              <span class="menu-label">自定义字段</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link
          to="/card"
          active-class="sub-active"
          class="sub-item"
        >
          <span class="menu-label">资产台账</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/asset/receive"
          active-class="sub-active"
          class="sub-item"
        >
          <span class="menu-label">资产入库</span>
        </router-link>
      </li>

      <li :class="{ open: expanded === 'change' }">
        <div class="menu-toggle" @click="toggle('change')">
          <span class="menu-label">资产变动</span>
          <span class="menu-arrow">{{
            expanded === "change" ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/allocate"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">领用/借用</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/transfer"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">资产调拨</span>
            </router-link>
          </li>
          <li>
            <router-link to="/repair" active-class="sub-active" class="sub-item">
              <span class="menu-label">资产维修</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link
          to="/stocktake"
          active-class="sub-active"
          class="sub-item"
        >
          <span class="menu-label">资产盘点</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/depreciation"
          active-class="sub-active"
          class="sub-item"
        >
          <span class="menu-label">资产折旧</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/dispose"
          active-class="sub-active"
          class="sub-item"
        >
          <span class="menu-label">资产处置</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/asset/stats"
          active-class="sub-active"
          class="sub-item"
        >
          <span class="menu-label">统计报表</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/label-print"
          active-class="sub-active"
          class="sub-item"
        >
          <span class="menu-label">标签打印</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/code-reserve"
          active-class="sub-active"
          class="sub-item"
        >
          <span class="menu-label">编号预分配</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/inspection"
          active-class="sub-active"
          class="sub-item"
        >
          <span class="menu-label">巡检保养</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/inspection-item"
          active-class="sub-active"
          class="sub-item"
        >
          <span class="menu-label">巡检记录</span>
        </router-link>
      </li>
    </ul>
  </div>
  <!-- 主体部分 -->
  <div class="home-main">
    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue";

const expanded = ref("asset");
const toggle = (name) => {
  expanded.value = expanded.value === name ? "" : name;
};
</script>

<style scoped>
.menu-item,
.menu-toggle,
.sub-item {
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
}
.menu-item {
  min-height: 42px;
  padding: 0 12px;
  border-radius: 10px;
  color: #1f2d3d;
  margin-bottom: 0;
  transition: background-color 0.2s ease;
}
.menu-toggle {
  min-height: 42px;
  padding: 0 12px;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 0;
  transition: background-color 0.2s ease;
}
.menu-toggle:hover,
.menu-item:hover,
.sub-item:hover {
  background-color: #f3f7ff;
}
.menu-label {
  font-size: 14px;
  font-weight: normal;
}
.menu-arrow {
  color: #9aa7bb;
  font-size: 14px;
}
.submenu {
  list-style: none;
  margin: 0;
  padding: 0 0 0 12px;
  display: none;
}
.open > .submenu {
  display: block;
}
.submenu li {
  margin-top: 2px;
}
.sub-item {
  min-height: 38px;
  padding: 0 12px;
  border-radius: 10px;
  color: #4c5a7a;
  transition: background-color 0.2s ease;
}
.sub-active {
  color: #409eff;
  background-color: rgba(64, 158, 255, 0.14);
}
.sidebar-active {
  color: #0c70f3;
  background-color: rgba(176, 211, 245, 0.7);
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
  list-style: none;
  margin: 0;
  padding: 8px 10px 10px;
}
.sidebar-left ul li {
  width: 100%;
  margin-bottom: 4px;
  list-style: none;
}
.sidebar-left ul li:last-child {
  margin-bottom: 0;
}
.sidebar-left ul li .menu-toggle,
.sidebar-left ul li .menu-item,
.sidebar-left ul li .sub-item {
  width: 100%;
}
.sidebar-left ul li .menu-toggle,
.sidebar-left ul li .menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar-left ul li .menu-item {
  justify-content: flex-start;
}
.sidebar-left ul li .menu-item .menu-label,
.sidebar-left ul li .menu-toggle .menu-label {
  flex: 1;
}
.sidebar-left ul li .sub-item {
  display: flex;
  align-items: center;
}
.sidebar-left ul li:hover {
  background: none;
}
/* —————————————— */
</style>
