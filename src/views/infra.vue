<template>
  <!-- 侧边导航栏 -->
  <div class="sidebar-left">
    <ul class="sidebar-menu">
      <li>
        <router-link
          @click="toggle('infra')"
          to="/infra/codegen"
          active-class="sidebar-active"
          class="menu-item"
        >
          <span class="menu-label">代码生成</span>
        </router-link>
      </li>

      <li :class="{ open: expanded === 'demo' }">
        <div class="menu-toggle" @click="toggle('demo')">
          <span class="menu-label">代码生成案例</span>
          <span class="menu-arrow">{{ expanded === "demo" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/demo01-contact"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">单表(增删改查)</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/demo02-category"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">树表(增删改查)</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/demo03-normal"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">主子表(标准)</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/demo03-erp"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">主子表(ERP)</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/demo03-inner"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">主子表(内嵌)</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <router-link to="/data-source-config" active-class="sub-active" class="sub-item">
          <span class="menu-label">数据源配置</span>
        </router-link>
      </li>
      <li>
        <router-link to="/build" active-class="sub-active" class="sub-item">
          <span class="menu-label">表单构建</span>
        </router-link>
      </li>
      <li>
        <router-link to="/swagger" active-class="sub-active" class="sub-item">
          <span class="menu-label">API接口</span>
        </router-link>
      </li>

      <li :class="{ open: expanded === 'log' }">
        <div class="menu-toggle" @click="toggle('log')">
          <span class="menu-label">API日志</span>
          <span class="menu-arrow">{{ expanded === "log" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/api-access-log"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">访问日志</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/api-error-log"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">错误日志</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/websocket" active-class="sub-active" class="sub-item">
          <span class="menu-label">WebSocket</span>
        </router-link>
      </li>
      <li :class="{ open: expanded === 'file' }">
        <div class="menu-toggle" @click="toggle('file')">
          <span class="menu-label">文件管理</span>
          <span class="menu-arrow">{{ expanded === "file" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/file-config"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">文件配置</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/file/file"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">文件列表</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/infra/config" active-class="sub-active" class="sub-item">
          <span class="menu-label">配置管理</span>
        </router-link>
      </li>

      <li :class="{ open: expanded === 'monitors' }">
        <div class="menu-toggle" @click="toggle('monitors')">
          <span class="menu-label">监控中心</span>
          <span class="menu-arrow">{{ expanded === "monitors" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/monitors/druid"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">MySQL监控</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/monitors/redis"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">Redis监控</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin-server"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">java监控</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/skywalking"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">链路监控</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="{ open: expanded === 'operation' }">
        <div class="menu-toggle" @click="toggle('operation')">
          <span class="menu-label">系统运维</span>
          <span class="menu-arrow">{{ expanded === "operation" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/job-ops"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">定时任务运维</span>
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
import { ref } from "vue";

const expanded = ref("infra");
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
