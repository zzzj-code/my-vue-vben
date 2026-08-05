<template>
  <div class="page-wrapper">
    <div class="app">
      <header class="top-nav">
        <div class="nav-left">
          <div class="logo">
            <span class="logo-text">积木报表</span>
          </div>
          <span class="welcome-text">欢迎进入积木报表工作台</span>
        </div>
      </header>

      <div class="main-container">
        <!-- 左侧边栏 -->
        <aside class="sidebar">
          <div class="search-box">
            <input type="text" placeholder="报表名称，回车搜索" class="search-input" />
          </div>

          <nav class="menu-list">
            <div class="menu-item">
              <span>模板市场</span>
            </div>

            <div class="menu-group">
              <div class="menu-item menu-item-parent">
                <span>文件夹</span>
              </div>
              <div class="submenu">
                <div class="menu-item submenu-item">
                  <span>数据报表</span>
                </div>
                <div class="menu-item submenu-item">
                  <span>打印设计</span>
                </div>
                <div class="menu-item submenu-item">
                  <span>图形报表</span>
                </div>
                <div class="menu-item submenu-item">
                  <span>填报报表</span>
                </div>
              </div>
            </div>

            <div class="menu-item">
              <span>分享记录</span>
            </div>

            <div class="menu-item">
              <span>定时导出</span>
            </div>

            <div class="menu-item">
              <span>报表组合</span>
            </div>

            <div class="menu-item">
              <span>共享数据集</span>
            </div>

            <div class="menu-item">
              <span>回收站</span>
            </div>
          </nav>
        </aside>

        <main class="content">
          <div class="tabs-bar">
            <div class="tab-item active">
              <span>报表设计</span>
            </div>
          </div>
          <div class="action-bar">
            <div class="action-left">
              <button class="btn-import">
                导入报表
              </button>
            </div>
            <div class="action-right">
              <span class="total-count">共 11 条</span>
              <div class="pagination">
                <button class="page-btn">&lt;</button>
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">&gt;</button>
              </div>
              <select class="page-size-select">
                <option>10条/页</option>
                <option>20条/页</option>
                <option>50条/页</option>
              </select>
              <span class="jump-text">跳至</span>
              <input type="text" class="jump-input" value="1" />
              <span class="jump-text">页</span>
              <button class="btn-view">
                <svg class="view-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" fill="none" stroke="#666" stroke-width="1.2"/>
                  <rect x="9" y="2" width="5" height="5" rx="1" fill="none" stroke="#666" stroke-width="1.2"/>
                  <rect x="2" y="9" width="5" height="5" rx="1" fill="none" stroke="#666" stroke-width="1.2"/>
                  <rect x="9" y="9" width="5" height="5" rx="1" fill="none" stroke="#666" stroke-width="1.2"/>
                </svg>
                视图
                <svg class="arrow-down" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 5l3 3 3-3" stroke="#666" stroke-width="1.2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="card-grid">
            <div class="card card-new">
              <div class="card-new-content">
                <svg class="plus-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="none" stroke="#1890ff" stroke-width="2"/>
                  <path d="M24 14v20M14 24h20" stroke="#1890ff" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <span class="new-text">新建报表</span>
              </div>
            </div>
            <div class="card card-excel">
              <div class="card-preview">
                <div class="excel-icon-wrapper">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="4" y="4" width="32" height="32" rx="4" fill="#217346"/>
                    <text x="20" y="25" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Excel</text>
                  </svg>
                </div>
              </div>
              <div class="card-footer">
                <span class="card-name">123</span>
                <div class="card-actions">
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="none" stroke="#fff" stroke-width="1.2"/>
                    <circle cx="8" cy="8" r="1" fill="#fff"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="3" width="10" height="10" rx="2" fill="none" stroke="#fff" stroke-width="1.2"/>
                    <path d="M6 6h4M6 8h3" stroke="#fff" stroke-width="1" stroke-linecap="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="card card-excel">
              <div class="card-preview">
                <div class="excel-icon-wrapper">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="4" y="4" width="32" height="32" rx="4" fill="#217346"/>
                    <text x="20" y="25" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Excel</text>
                  </svg>
                </div>
              </div>
              <div class="card-footer">
                <span class="card-name">测试填报11</span>
                <div class="card-actions">
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="none" stroke="#fff" stroke-width="1.2"/>
                    <circle cx="8" cy="8" r="1" fill="#fff"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="3" width="10" height="10" rx="2" fill="none" stroke="#fff" stroke-width="1.2"/>
                    <path d="M6 6h4M6 8h3" stroke="#fff" stroke-width="1" stroke-linecap="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="card card-excel">
              <div class="card-preview">
                <div class="excel-icon-wrapper">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="4" y="4" width="32" height="32" rx="4" fill="#217346"/>
                    <text x="20" y="25" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">Excel</text>
                  </svg>
                </div>
              </div>
              <div class="card-footer">
                <span class="card-name">在线填报-员工...</span>
                <div class="card-actions">
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="none" stroke="#fff" stroke-width="1.2"/>
                    <circle cx="8" cy="8" r="1" fill="#fff"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="3" width="10" height="10" rx="2" fill="none" stroke="#fff" stroke-width="1.2"/>
                    <path d="M6 6h4M6 8h3" stroke="#fff" stroke-width="1" stroke-linecap="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="card card-cert">
              <div class="cert-preview">
                <div class="cert-content">
                  <div class="cert-header">实习证明</div>
                  <div class="cert-line"></div>
                  <div class="cert-line short"></div>
                </div>
              </div>
              <div class="card-footer">
                <span class="card-name">实习证明副本</span>
                <div class="card-actions">
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="none" stroke="#fff" stroke-width="1.2"/>
                    <circle cx="8" cy="8" r="1" fill="#fff"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="3" width="10" height="10" rx="2" fill="none" stroke="#fff" stroke-width="1.2"/>
                    <path d="M6 6h4M6 8h3" stroke="#fff" stroke-width="1" stroke-linecap="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- 图表卡片 -->
            <div class="card card-chart">
              <div class="chart-preview">
                <div class="chart-content">
                  <div class="chart-title">乡村振兴普惠...</div>
                  <div class="chart-bars">
                    <div class="bar" style="height: 60%"></div>
                    <div class="bar" style="height: 80%"></div>
                    <div class="bar" style="height: 45%"></div>
                    <div class="bar" style="height: 70%"></div>
                    <div class="bar" style="height: 55%"></div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <span class="card-name">乡村振兴普惠...</span>
                <div class="card-actions">
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="none" stroke="#fff" stroke-width="1.2"/>
                    <circle cx="8" cy="8" r="1" fill="#fff"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="3" width="10" height="10" rx="2" fill="none" stroke="#fff" stroke-width="1.2"/>
                    <path d="M6 6h4M6 8h3" stroke="#fff" stroke-width="1" stroke-linecap="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- 页脚 -->
          <footer class="page-footer">
            <div class="footer-links">
              <a href="#" class="footer-link">积木官网</a>
              <span class="footer-divider">📖</span>
              <a href="#" class="footer-link">文档</a>
            </div>
            <div class="footer-copyright">Copyright ©2024 北京敲敲云科技 出品</div>
          </footer>
        </main>
      </div>

      <!-- 浮动按钮 -->
      <div class="floating-btns">
        <button class="float-btn float-btn-home">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 10l7-7 7 7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 8v8h10v-8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="float-btn float-btn-more">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="5" r="1.5" fill="#fff"/>
            <circle cx="10" cy="10" r="1.5" fill="#fff"/>
            <circle cx="10" cy="15" r="1.5" fill="#fff"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.page-wrapper {
  width: 1030px;
  display: grid;
  place-items: center;
  background-color: #ecebeb;
  position: relative;
  min-height: 100vh;
}

.app {
  width: 1006px;
  height: 590px;
  background-color: #ecebeb;
  position: absolute;
  top: 1px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 顶部导航栏 */
.top-nav {
  height: 60px;
  background: linear-gradient(135deg, #1E88E5 0%, #42A5F5 100%);
  display: flex;
  align-items: center;
  padding: 0 24px;
  flex-shrink: 0;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: black;
}

.welcome-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
}

/* 主容器 */
.main-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* 左侧边栏 */
.sidebar {
  width: 240px;
  background: #ffffff;
  border-right: 1px solid #e8e8e8;
  padding: 16px 0;
  flex-shrink: 0;
  overflow-y: auto;
}

.search-box {
  margin: 0 16px 16px 16px;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.search-input {
  width: 100%;
  height: 36px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 0 12px 0 36px;
  font-size: 14px;
  color: #333;
  outline: none;
  box-sizing: border-box;
}

.search-input::placeholder {
  color: #bfbfbf;
}

.menu-list {
  display: flex;
  flex-direction: column;
}

.menu-item {
  height: 40px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #333333;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.menu-item:hover {
  background: #e6f7ff;
}

.menu-item.active {
  background: #e6f7ff;
  border-left: 3px solid #1890ff;
}

.menu-icon {
  flex-shrink: 0;
}

.arrow-icon {
  margin-left: auto;
}

.menu-group {
  display: flex;
  flex-direction: column;
}

.menu-item-parent {
  cursor: pointer;
}

.submenu {
  display: flex;
  flex-direction: column;
}

.submenu-item {
  padding-left: 48px;
}

/* 主内容区 */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 标签页栏 */
.tabs-bar {
  height: 48px;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 24px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-right: 24px;
}

.tab-item.active {
  color: #1890ff;
  border-bottom-color: #1890ff;
}

/* 操作栏 */
.action-bar {
  height: 56px;
  background: #ffffff;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.action-left {
  display: flex;
  align-items: center;
}

.btn-import {
  height: 32px;
  padding: 0 16px;
  background: #1890ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-import:hover {
  background: #40a9ff;
}

.action-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.total-count {
  font-size: 14px;
  color: #666;
}

.pagination {
  display: flex;
  gap: 4px;
}

.page-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-btn.active {
  background: #1890ff;
  color: #fff;
  border-color: #1890ff;
}

.page-size-select {
  width: 100px;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  padding: 0 8px;
  outline: none;
}

.jump-text {
  font-size: 14px;
  color: #666;
}

.jump-input {
  width: 50px;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  outline: none;
}

.btn-view {
  width: 80px;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

/* 卡片网格区域 */
.card-grid {
  flex: 1;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  overflow-y: auto;
}

.card {
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

/* 新建报表卡片 */
.card-new {
  background: linear-gradient(135deg, #e6f7ff 0%, #f0f9ff 100%);
  border: 2px dashed #1890ff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
}

.card-new:hover {
  border-color: #40a9ff;
  background: linear-gradient(135deg, #d6efff 0%, #e0f0ff 100%);
}

.card-new-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.new-text {
  font-size: 14px;
  color: #1890ff;
  font-weight: 500;
}

/* Excel卡片 */
.card-excel .card-preview {
  flex: 1;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.excel-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-footer {
  height: 40px;
  background: #1a1a1a;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-name {
  font-size: 14px;
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-actions {
  display: flex;
  gap: 12px;
}

.action-icon {
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.action-icon:hover {
  opacity: 1;
}

/* 证书卡片 */
.card-cert .cert-preview {
  flex: 1;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.cert-content {
  width: 80%;
  text-align: center;
}

.cert-header {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
}

.cert-line {
  height: 2px;
  background: #ddd;
  margin: 8px 0;
  border-radius: 1px;
}

.cert-line.short {
  width: 60%;
  margin: 8px auto;
}

/* 图表卡片 */
.card-chart .chart-preview {
  flex: 1;
  background: #0a1628;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.chart-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chart-title {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.chart-bars {
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 0 8px;
}

.bar {
  flex: 1;
  background: linear-gradient(to top, #1890ff, #40a9ff);
  border-radius: 2px 2px 0 0;
  min-height: 20px;
}

/* 页脚 */
.page-footer {
  padding: 24px;
  text-align: center;
  flex-shrink: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 8px;
}

.footer-link {
  font-size: 12px;
  color: #1890ff;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

.footer-divider {
  font-size: 12px;
  color: #bfbfbf;
}

.footer-copyright {
  font-size: 12px;
  color: #bfbfbf;
}

/* 浮动按钮 */
.floating-btns {
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 100;
}

.float-btn {
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;
}

.float-btn:hover {
  transform: scale(1.05);
}

.float-btn-home {
  background: #1890ff;
}

.float-btn-more {
  background: #666;
}
</style>