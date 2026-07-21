<template>
  <div class="app">
    <!-- 顶部导航栏 -->
    <div class="home-top">
      <!-- 头部导航栏 -->
      <div class="top-headr">
        <!-- login -->
        <div class="headr-title">
          <img src="../img/logo.png" alt="" />
          <span>宇擎源码一体化平台</span>
        </div>
        <!-- ———————————————————————— -->
        <button class="refresh">⟳</button>
        <!-- nav导航 -->
        <div class="headr-nav">
          <ul class="nav-ul">
            <li class="a">
              <router-link to="/home" active-class="nav-active"
                >工作台</router-link
              >
            </li>
            <li class="a">流程中心</li>
            <li class="a">OA</li>
            <li class="a">人力</li>
            <li class="a">合同</li>
            <li class="a">CRM</li>
            <li
              class="nav-trigger a"
              @mouseenter="showMenu = true"
              @mouseleave="hideMenuDelayed"
            >
              ···
              <ul
                class="nav-tab"
                @mouseenter="cancelHide"
                :class="{ active: showMenu }"
              >
                <li><a href="javascript:void(0)">ERP</a></li>
                <li><a href="javascript:void(0)">项目</a></li>
                <li><a href="javascript:void(0)">资产</a></li>
                <li><a href="javascript:void(0)">MES</a></li>
                <li><a href="javascript:void(0)">财富</a></li>
                <li><a href="javascript:void(0)">WMS</a></li>
                <li><a href="javascript:void(0)">系统管理</a></li>
                <li><a href="javascript:void(0)">基础设施</a></li>
                <li><a href="javascript:void(0)">支付管理</a></li>
                <li><a href="javascript:void(0)">报表管理</a></li>
                <li><a href="javascript:void(0)">主数据</a></li>
                <li><a href="javascript:void(0)">工单管理</a></li>
                <li><a href="javascript:void(0)">公众号管理</a></li>
                <li><a href="javascript:void(0)">AI 大模型</a></li>
                <li><a href="javascript:void(0)">IM 即时通讯</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- ———————————————— -->
        <!-- 个人信息 -->
        <div class="headr-info">
          <div class="info-search" @click="openModal">
            <span>🔍</span>
            <span>搜索</span>
            <span>Ctrl+k</span>
          </div>
          <div class="info-settings">⚙️</div>
          <div class="info-message">💬</div>
          <div class="info-notice">🔔</div>
          <div class="info-chat">💬</div>
          <div class="info-chat" @click.stop="showMe" ref="chatRef">
            源码
            <div v-show="showInd" class="chat-ind">
              <div class="ind-tou"></div>
              <div class="ind-zi">深圳总公司/研发部门</div>
              <div
                style="width: 100%; height: 1px; background-color: #ccc"
              ></div>
              <div class="ind-neirong">个人中心</div>
              <div class="ind-neirong">文档</div>
              <div class="ind-neirong">GitHub</div>
              <div class="ind-neirong">问题&帮助</div>
              <div
                style="width: 100%; height: 1px; background-color: #ccc"
              ></div>
              <div class="ind-neirong">锁定屏幕</div>
              <div
                style="width: 100%; height: 1px; background-color: #ccc"
              ></div>
              <div class="ind-neirong" @click="exit">退出登录</div>
            </div>
          </div>
        </div>
        <!-- —————————————— -->
      </div>
      <!-- 导航栏2 -->
      <div class="top-headr2">
        <div class="headr2-nav"></div>
        <div class="headr2-nav2">
          <div>⊞</div>
          <div>⟳</div>
          <div>⛶</div>
        </div>
      </div>
    </div>
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
    <!-- ———————————————————————— -->
    <!-- 搜索模态框 -->
    <div class="modal-overlay" v-if="showModal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-icon">🔍</span>
          <input
            type="text"
            class="modal-input"
            placeholder="搜索导航菜单"
            v-model="searchKeyword"
            ref="searchInput"
            @keydown.esc="closeModal"
          />
          <button class="modal-close" @click="closeModal">✕</button>
        </div>
        <div class="modal-body" v-if="searchResults.length > 0">
          <div
            class="search-item"
            v-for="item in searchResults"
            :key="item.name"
            @click="handleSelect(item)"
          >
            <span class="item-icon">{{ item.icon }}</span>
            <span class="item-name">{{ item.name }}</span>
            <span class="item-path">{{ item.path }}</span>
          </div>
        </div>
        <div
          class="modal-body"
          v-else-if="searchKeyword && searchResults.length === 0"
        >
          <div class="empty-result">未找到相关结果</div>
        </div>
        <div class="modal-footer" v-else>
          <span class="tip">没有搜索历史</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      timer: null,
      showInd: false,
      showModal: false,
      searchKeyword: "",
      menuList: [
        { name: "工作台", icon: "📊", path: "/dashboard" },
        { name: "流程中心", icon: "📋", path: "/process" },
        { name: "OA", icon: "📄", path: "/oa" },
        { name: "人力", icon: "👤", path: "/hr" },
        { name: "合同", icon: "📝", path: "/contract" },
        { name: "CRM", icon: "🤝", path: "/crm" },
        { name: "ERP", icon: "🏢", path: "/erp" },
        { name: "项目", icon: "📁", path: "/project" },
        { name: "资产", icon: "💼", path: "/asset" },
        { name: "MES", icon: "🏭", path: "/mes" },
        { name: "财富", icon: "💰", path: "/wealth" },
        { name: "WMS", icon: "📦", path: "/wms" },
        { name: "系统管理", icon: "⚙️", path: "/system" },
        { name: "基础设施", icon: "🖥️", path: "/infra" },
        { name: "支付管理", icon: "💳", path: "/payment" },
        { name: "报表管理", icon: "📊", path: "/report" },
        { name: "主数据", icon: "🗂️", path: "/master" },
        { name: "工单管理", icon: "🎫", path: "/ticket" },
        { name: "公众号管理", icon: "📱", path: "/wechat" },
        { name: "AI 大模型", icon: "🤖", path: "/ai" },
        { name: "IM 即时通讯", icon: "💬", path: "/im" },
      ],
    };
  },
  computed: {
    searchResults() {
      if (!this.searchKeyword.trim()) return [];
      const keyword = this.searchKeyword.trim().toLowerCase();
      return this.menuList.filter(
        (item) =>
          item.name.includes(keyword) ||
          item.path.toLowerCase().includes(keyword),
      );
    },
  },
  methods: {
    exit() {
      this.$router.push("/login");
    },
    showMe() {
      this.showInd = !this.showInd;
    },
    closeChat() {
      this.showInd = false;
    },
    handleClickOutside(event) {
      if (!this.showInd) return;
      const el = this.$refs.chatRef;
      if (el && !el.contains(event.target)) {
        this.closeChat();
      }
    },
    hideMenuDelayed() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.showMenu = false;
      }, 200);
    },
    cancelHide() {
      clearTimeout(this.timer);
    },
    openModal() {
      this.showModal = true;
      this.searchKeyword = "";
      this.$nextTick(() => {
        this.$refs.searchInput?.focus();
      });
    },
    closeModal() {
      this.showModal = false;
      this.searchKeyword = "";
    },
    handleSelect(item) {
      console.log("跳转到:", item.path, item.name);
      this.closeModal();
    },
  },
  watch: {
    showModal(val) {
      if (val) {
        document.body.style.overflow = "hidden";
        this.$nextTick(() => {
          this.$refs.searchInput?.focus();
        });
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        this.openModal();
      }
    });
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleKeydown);
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
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

.chat-ind {
  position: absolute;
  top: 41px;
  right: -18px;
  width: 228px;
  height: 355px;
  /* border: 1px solid red; */
  background-color: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  z-index: 222;
}
.ind-tou {
  width: 100%;
  height: 72px;
  border: 1px solid red;
}
.ind-zi {
  width: 100%;
  text-align: center;
  font-size: 12px;
  margin-bottom: 2px;
}
.ind-neirong {
  width: 220px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 40px;
  margin: 2px 7px;
  border-radius: 5px;
}
.ind-neirong:hover {
  background-color: #eeecec;
}

.nav-active {
  text-decoration: none;
  width: 90px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(176, 211, 245);
  color: #0c70f3;
  border-radius: 5px;
}
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

body {
  background-color: #ecebeb;
}
.app {
  width: 1270px;
  /* min-width: 100vh; */
  /* height: 800px; */
  min-height: 100vh;
  background-color: #ecebeb;
  position: relative;
  overflow-x: hidden;
}
.home-top {
  width: 100%;
  height: 88px;
  position: sticky; /*sticky，固定在顶部 */
  top: 0;
  z-index: 100;
  background-color: #ecebeb;
}
.top-headr {
  width: 100%;
  height: 50px;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  background-color: #fff;
}
/* 头部标题 */
.headr-title {
  width: 226px;
  height: 32px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 0px 12px;
}
.headr-title img {
  width: 32px;
  height: 32px;
  margin-right: 6px;
}
.headr-title span {
  font-size: 18px;
  font-weight: 600;
}
/* —————————————————————————————— */
/* 刷新图标 */
.refresh {
  width: 32px;
  height: 32px;
  border: 0;
  background-color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-right: 5px;
}
.refresh:hover {
  border-radius: 5px;
  background-color: #e6e3e3;
}
/* —————————————— */
/* 中间选项栏 */
.headr-nav {
  width: 652px;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  /* margin-right: 10px; */
}
.nav-ul {
  height: 40px;
  list-style: none;
  display: flex;
  position: relative;
}
.nav-ul .a {
  width: 90px;
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
}
.nav-ul .a:hover {
  background-color: #ccc;
}
/* —————————————— */
/* 隐藏的菜单 */
.nav-trigger {
  font-size: 14px;
  letter-spacing: -10px;
  transition: background 0.2s ease;
}
.nav-tab {
  letter-spacing: 0px;
  list-style: none;
  margin-top: 10px;
  padding: 10px 8px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(36, 35, 35, 0.2);
  background: #fff;
  width: 220px;
  /* display: none; */
  opacity: 0;
  transform: translateX(-50%) translateY(10px) scale(0.98);
  visibility: hidden;
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0s linear 1s;
  position: absolute;
  top: 38px;
  left: 95%;
  z-index: 10;
}
.nav-tab.active {
  /* display: block; */
  opacity: 1;
  visibility: inherit;
  transform: translateX(-50%) translateY(0) scale(1);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0s linear 0s;
}
.nav-tab a {
  display: block;
  padding: 10px 15px;
  color: #424242;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
  line-height: 1.4;
}
.nav-tab a:hover {
  background-color: rgb(241, 239, 239);
}
/* —————————————— */
/* 个人信息 */
.headr-info {
  width: 350px;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.info-search {
  width: 121px;
  height: 32px;
  /* border: 1px solid red; */
  background-color: #f1efef;
  border-radius: 50px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
}
.info-search span {
  margin: 0 5px;
  color: #525151;
}
.info-search span:hover {
  color: #2e2d2d;
}
.info-settings {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 4px;
}
.info-settings:hover {
  background-color: #f4eeee;
}
.info-message {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 8px;
}
.info-message:hover {
  background-color: #f4eeee;
}
.info-notice {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
}
.info-notice:hover {
  background-color: #f4eeee;
}
.info-chat {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
  font-size: 14px;
  position: relative;
}
.info-chat:hover {
  background-color: #f4eeee;
}
/* ———————————— */
/* 模态框样式（新增）*/
/* 遮罩层：覆盖全屏，背景半透明 + 毛玻璃效果 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.1px); /* 毛玻璃模糊背景 */
  display: flex;
  align-items: flex-start; /* 从顶部开始排列 */
  justify-content: center;
  z-index: 99999; /* 确保在最上层 */
  padding-top: 15vh; /* 距离顶部 15% 视口高度 */
  animation: fadeIn 0.25s ease; /* 淡入动画 */
}
/* 遮罩淡入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* 模态框主体：白色卡片 */
.modal-content {
  background: #fff;
  border-radius: 16px;
  width: 640px;
  max-height: 60vh; /* 最大高度 60% 视口高度 */
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden; /* 圆角裁剪 */
  /* 从上方滑入的弹性动画 */
  animation: slideDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
/* 模态框滑入动画 */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
/* 模态框头部：图标 + 输入框 + 关闭按钮 横向排列 */
.modal-header {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #eee;
}
/* 搜索图标 */
.modal-icon {
  font-size: 20px;
  margin-right: 12px;
  color: #999;
}
/* 搜索输入框 */
.modal-input {
  flex: 1; /* 占据剩余宽度 */
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  color: #333;
}
.modal-input::placeholder {
  color: #bbb;
}
/* 关闭按钮 ✕ */
.modal-close {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.modal-close:hover {
  background: #f0f0f0;
  color: #333;
}
/* 模态框主体：搜索结果列表区域 */
.modal-body {
  padding: 8px 0;
  max-height: 40vh; /* 超出滚动 */
  overflow-y: auto;
}
/* 单个搜索结果项 */
.search-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.15s;
}
.search-item:hover {
  background: #f5f7fa;
}
/* 结果项：图标 */
.item-icon {
  font-size: 18px;
  margin-right: 12px;
}
/* 结果项：名称 */
.item-name {
  font-size: 14px;
  color: #333;
  flex: 1;
}
/* 结果项：路径（灰色小字） */
.item-path {
  font-size: 12px;
  color: #bbb;
}
/* 空状态：未找到结果 */
.empty-result {
  padding: 40px 20px;
  text-align: center;
  color: #bbb;
  font-size: 14px;
}
/* 模态框底部：提示文字 */
.modal-footer {
  padding: 12px 20px;
  border-top: 1px solid #eee;
  text-align: center;
}
.tip {
  font-size: 12px;
  color: #bbb;
}
/* 自定义滚动条样式（仅对 .modal-body 生效） */
.modal-body::-webkit-scrollbar {
  width: 4px;
}
.modal-body::-webkit-scrollbar-track {
  background: transparent;
}
.modal-body::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 4px;
}
/* —————————————————————————————————————— */

/* 导航栏二 */
.top-headr2 {
  width: 1046px;
  height: 38px;
  /* border: 1px solid red; */
  margin-top: 1px;
  position: absolute;
  left: 18%;
  display: flex;
}
.headr2-nav {
  width: 935px;
  margin-left: 3px;
  height: 37px;
  background-color: #fff;
}
.headr2-nav2 {
  width: 99px;
  height: 37px;
  /* background-color: #fff; */
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.headr2-nav2 div {
  width: 33px;
  height: 100%;
  margin-left: 1px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headr2-nav2 div:hover {
  background-color: #ccc;
}
/* ———————————————— */

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
