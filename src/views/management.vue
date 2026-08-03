<template>
  <!-- 侧边导航栏 -->
  <div class="sidebar-left">
    <ul class="sidebar-menu">
      <li :class="{ open: isExpanded('tenant') }">
        <div class="menu-toggle" @click="toggle('tenant')">
          <span class="menu-label">租户管理</span>
          <span class="menu-arrow">{{ isExpanded("tenant") ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/tenant/list"
              active-class="sub-active"
              class="sub-item"
            >
              <span>租户列表</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/tenant/package"
              active-class="sub-active"
              class="sub-item"
            >
              <span>租户套餐</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <router-link to="/management/dept" active-class="sub-active" class="sub-item">
          <span class="menu-label">组织管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/management/user" active-class="sub-active" class="sub-item">
          <span class="menu-label">用户管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/management/role" active-class="sub-active" class="sub-item">
          <span class="menu-label">角色管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/management/post" active-class="sub-active" class="sub-item">
          <span class="menu-label">岗位管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/management/menu" active-class="sub-active" class="sub-item">
          <span class="menu-label">菜单管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/management/dict" active-class="sub-active" class="sub-item">
          <span class="menu-label">字典管理</span>
        </router-link>
      </li>

      <li :class="{ open: isExpanded('messages') }">
        <div class="menu-toggle" @click="toggle('messages')">
          <span class="menu-label">消息中心</span>
          <span class="menu-arrow">{{
            isExpanded("messages") ? "▾" : "▸"
          }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/messages/scene"
              active-class="sub-active"
              class="sub-item"
            >
              <span>消息定义</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/messages/route"
              active-class="sub-active"
              class="sub-item"
            >
              <span>跳转路由</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/messages/instance"
              active-class="sub-active"
              class="sub-item"
            >
              <span>消息实例</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/messages/log"
              active-class="sub-active"
              class="sub-item"
            >
              <span>发送日志</span>
            </router-link>
          </li>
          <li :class="{ open: isExpanded('sms') }">
            <div class="menu-toggle" @click="toggle('sms')">
              <span class="menu-label">短信管理</span>
              <span class="menu-arrow">{{
                isExpanded("sms") ? "▾" : "▸"
              }}</span>
            </div>
            <ul class="submenu">
              <li>
                <router-link
                  to="/sms-channel"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>短信渠道</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/sms-template"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>短信模板</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/sms-log"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>短信日志</span>
                </router-link>
              </li>
            </ul>
          </li>

          <li :class="{ open: isExpanded('mail') }">
            <div class="menu-toggle" @click="toggle('mail')">
              <span class="menu-label">邮箱管理</span>
              <span class="menu-arrow">{{
                isExpanded("mail") ? "▾" : "▸"
              }}</span>
            </div>
            <ul class="submenu">
              <li>
                <router-link
                  to="/mail-account"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>邮箱账号</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/mail-template"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>邮箱模板</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/mail-log"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>邮件记录</span>
                </router-link>
              </li>
            </ul>
          </li>

          <li :class="{ open: isExpanded('notify') }">
            <div class="menu-toggle" @click="toggle('notify')">
              <span class="menu-label">站内信管理</span>
              <span class="menu-arrow">{{
                isExpanded("notify") ? "▾" : "▸"
              }}</span>
            </div>
            <ul class="submenu">
              <li>
                <router-link
                  to="/notify-template"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>模板管理</span>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/notify-message"
                  active-class="sub-active"
                  class="sub-item"
                >
                  <span>消息记录</span>
                </router-link>
              </li>
            </ul>
          </li>

          <li>
            <router-link
              to="/messages/notice"
              active-class="sub-active"
              class="sub-item"
            >
              <span>通知公告</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <router-link to="/bill-type" active-class="sub-active" class="sub-item">
          <span class="menu-label">单据类型字典</span>
        </router-link>
      </li>

      <li :class="{ open: isExpanded('log') }">
        <div class="menu-toggle" @click="toggle('log')">
          <span class="menu-label">审计日志</span>
          <span class="menu-arrow">{{ isExpanded("log") ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/log/operate-log"
              active-class="sub-active"
              class="sub-item"
            >
              <span>操作日志</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/log/login-log"
              active-class="sub-active"
              class="sub-item"
            >
              <span>登录日志</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="{ open: isExpanded('oauth2') }">
        <div class="menu-toggle" @click="toggle('oauth2')">
          <span class="menu-label">OAuth 2.0</span>
          <span class="menu-arrow">{{ isExpanded("oauth2") ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/oauth2/application"
              active-class="sub-active"
              class="sub-item"
            >
              <span>应用管理</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/oauth2/token"
              active-class="sub-active"
              class="sub-item"
            >
              <span>令牌管理</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="{ open: isExpanded('social') }">
        <div class="menu-toggle" @click="toggle('social')">
          <span class="menu-label">三方登录</span>
          <span class="menu-arrow">{{ isExpanded("social") ? "▾" : "▸" }}</span>
        </div>
        <ul class="submenu">
          <li>
            <router-link
              to="/social/client"
              active-class="sub-active"
              class="sub-item"
            >
              <span>三方应用</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/social/user"
              active-class="sub-active"
              class="sub-item"
            >
              <span>三方用户</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <router-link to="/management/area" active-class="sub-active" class="sub-item">
          <span class="menu-label">地区管理</span>
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

const expanded = ref(["tenant"]);

const toggle = (name) => {
  const index = expanded.value.indexOf(name);
  if (index > -1) {
    expanded.value.splice(index, 1);
  } else {
    expanded.value.push(name);
  }
};

const isExpanded = (name) => {
  return expanded.value.includes(name);
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
