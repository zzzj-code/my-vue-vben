<template>
  <!-- 侧边导航栏 -->
  <div class="sidebar-left">
    <ul class="sidebar-menu">
      <li>
        <router-link
          @click="toggle('im')"
          to="/im/statistics"
          active-class="sidebar-active"
          class="menu-item"
        >
          <span class="menu-label">数据统计</span>
        </router-link>
      </li>

      <li :class="{ open: expanded === 'private' }">
        <div class="menu-toggle" @click="toggle('private')">
          <span class="menu-label">私聊管理</span>
          <span class="menu-arrow">{{ expanded === "private" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/private/friend"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">好友列表</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/private/friend-request"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">好友申请</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/private/message"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">好友消息</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="{ open: expanded === 'group' }">
        <div class="menu-toggle" @click="toggle('group')">
          <span class="menu-label">群聊管理</span>
          <span class="menu-arrow">{{ expanded === "group" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/group/list"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">群聊列表</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/group/request"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">群聊申请</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/group/message"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">群聊消息</span>
            </router-link>
          </li>
        </ul>
      </li>
      
      <li>
        <router-link to="/im/rtc" active-class="sub-active" class="sub-item">
          <span class="menu-label">通话记录</span>
        </router-link>
      </li>
      <li>
        <router-link to="/im/sensitive-word" active-class="sub-active" class="sub-item">
          <span class="menu-label">敏感词管理</span>
        </router-link>
      </li>

      <li :class="{ open: expanded === 'face' }">
        <div class="menu-toggle" @click="toggle('face')">
          <span class="menu-label">表情管理</span>
          <span class="menu-arrow">{{ expanded === "face" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/face/pack"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">系统表情</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/face/user-item"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">用户表情</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li :class="{ open: expanded === 'channel' }">
        <div class="menu-toggle" @click="toggle('channel')">
          <span class="menu-label">频道管理</span>
          <span class="menu-arrow">{{ expanded === "channel" ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/channel/list"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">频道列表</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/channel/material"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">频道素材</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/channel/message"
              active-class="sub-active"
              class="sub-item"
            >
              <span class="menu-label">频道消息</span>
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

const expanded = ref("im");
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
