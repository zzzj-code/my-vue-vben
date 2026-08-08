<template>
  <!-- 侧边导航栏 -->
  <div class="sidebar-left">
    <ul class="sidebar-menu">
      <li>
        <router-link
          @click="toggle('ai')"
          to="/ai/chat"
          active-class="sidebar-active"
          class="menu-item"
        >
          <span class="menu-label">AI对话</span>
        </router-link>
      </li>

      <li>
        <router-link to="/ai/image" active-class="sub-active" class="sub-item">
          <span class="menu-label">AI绘画</span>
        </router-link>
      </li>
      <li>
        <router-link to="/ai/write" active-class="sub-active" class="sub-item">
          <span class="menu-label">AI写作</span>
        </router-link>
      </li>
      <li>
        <router-link to="/ai/music" active-class="sub-active" class="sub-item">
          <span class="menu-label">AI音乐</span>
        </router-link>
      </li>
      <li>
        <router-link to="/ai/knowledge" active-class="sub-active" class="sub-item">
          <span class="menu-label">AI知识库</span>
        </router-link>
      </li>
      <li>
        <router-link to="/ai/workflow" active-class="sub-active" class="sub-item">
          <span class="menu-label">AI工作流</span>
        </router-link>
      </li>
      <li>
        <router-link to="/ai/mind-map" active-class="sub-active" class="sub-item">
          <span class="menu-label">AI思维导图</span>
        </router-link>
      </li>

      <li :class="{ open: expanded === 'console' }">
        <div class="menu-toggle" @click="toggle('console')">
          <span class="menu-label">控制台</span>
          <span class="menu-arrow">{{ expanded === "console" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/api-key"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">API密钥</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/console/model"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">模型配置</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/console/chat-role"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">聊天角色</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/console/tool"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">工具管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/chat-conversation"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">聊天管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/console/image"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">绘画管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/console/music"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">音乐管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/console/write"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">写作管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/console/mind-map"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">导图管理</span>
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

const expanded = ref("ai");
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
