<template>
  <!-- 侧边导航栏 -->
  <div class="sidebar-left">
    <ul class="sidebar-menu">
      <li>
        <router-link @click="toggle('start')" to="/startProcess" active-class="sidebar-active" class="menu-item">
          <span class="menu-label">发起流程</span>
        </router-link>
      </li>
      <li :class="{ open: expanded === 'task' }">
        <div class="menu-toggle" @click="toggle('task')">
          <span class="menu-label">任务管理</span>
          <span class="menu-arrow">{{ expanded === 'task' ? '▾' : '▸' }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link to="/my" active-class="sub-active" class="sub-item">
              <span>我的流程</span>
            </router-link>
          </li>
          <li>
            <router-link to="/todo" active-class="sub-active" class="sub-item">
              <span>待办任务</span>
            </router-link>
          </li>
          <li>
            <router-link to="/done" active-class="sub-active" class="sub-item">
              <span>已办任务</span>
            </router-link>
          </li>
          <li>
            <router-link to="/copy" active-class="sub-active" class="sub-item">
              <span>抄送我的</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li :class="{ open: expanded === 'setting' }">
        <div class="menu-toggle" @click="toggle('setting')">
          <span class="menu-label">流程设置</span>
          <span class="menu-arrow">{{ expanded === 'setting' ? '▾' : '▸' }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link to="/model" active-class="sub-active" class="sub-item">
              <span>流程模型</span>
            </router-link>
          </li>
          <li>
            <router-link to="/form" active-class="sub-active" class="sub-item">
              <span>流程表单</span>
            </router-link>
          </li>
          <li>
            <router-link to="/category" active-class="sub-active" class="sub-item">
              <span>流程分类</span>
            </router-link>
          </li>
          <li>
            <router-link to="/userGroup" active-class="sub-active" class="sub-item">
              <span>用户分组</span>
            </router-link>
          </li>
          <li>
            <router-link to="/processListener" active-class="sub-active" class="sub-item">
              <span>流程监听器</span>
            </router-link>
          </li>
          <li>
            <router-link to="/processExpression" active-class="sub-active" class="sub-item">
              <span>流程表达式</span>
            </router-link>
          </li>
          <li>
            <router-link to="/instance" active-class="sub-active" class="sub-item">
              <span>流程实例</span>
            </router-link>
          </li>
          <li>
            <router-link to="/processTasnk" active-class="sub-active" class="sub-item">
              <span>流程任务</span>
            </router-link>
          </li>
          <li>
            <router-link to="/ops" active-class="sub-active" class="sub-item">
              <span>流程实例运维</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li :class="{ open: expanded === 'oa' }">
        <div class="menu-toggle" @click="toggle('oa')">
          <span class="menu-label">OA 示例</span>
          <span class="menu-arrow">{{ expanded === 'oa' ? '▾' : '▸' }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link to="/leave" active-class="sub-active" class="sub-item">
              <span>请假查询</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <!-- 主体部分 -->
  <div class="home-main">
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref('start')
const toggle = name => {
  expanded.value = expanded.value === name ? '' : name
}
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
