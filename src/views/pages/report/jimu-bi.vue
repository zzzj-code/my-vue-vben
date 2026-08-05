<template>
  <div class="page-wrapper">
    <div class="app">
      <header class="top-nav">
        <div class="nav-left">
          <div class="logo">
            <span class="logo-text">积木BI</span>
          </div>
        </div>
        <div class="nav-tabs">
          <button class="nav-tab active">
            数据大屏
          </button>
          <button class="nav-tab">
            仪表盘
          </button>
        </div>
      </header>

      <div class="main-container">
        <aside class="sidebar">
          <div class="search-box">
            <input type="text" placeholder="搜索数据大屏名称" class="search-input" />
            <svg class="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="4.5" stroke="#C0C4CC" stroke-width="1.3"/>
              <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="#C0C4CC" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
          </div>

          <nav class="menu-list">
            <div class="menu-item">
              <svg class="menu-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <polygon points="9,2 11.5,6.5 16,7 12.5,10.5 13.5,15 9,13 4.5,15 5.5,10.5 2,7 6.5,6.5" fill="#FFB800"/>
              </svg>
              <span>模版市场</span>
            </div>

            <div class="menu-group">
              <div class="menu-item">
                <svg class="menu-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 5h14v9H2z" fill="none" stroke="#FFB800" stroke-width="1.3"/>
                  <path d="M2 5l3-2.5h4l1.5 2.5" fill="none" stroke="#FFB800" stroke-width="1.3"/>
                </svg>
                <span>文件夹</span>
                <svg class="arrow-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 5l2 2 2-2" stroke="#909399" stroke-width="1.2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="submenu">
                <div class="menu-item submenu-item">
                  <svg class="menu-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 5h14v9H2z" fill="none" stroke="#FFB800" stroke-width="1.3"/>
                    <path d="M2 5l3-2.5h4l1.5 2.5" fill="none" stroke="#FFB800" stroke-width="1.3"/>
                  </svg>
                  <span>测试大屏</span>
                </div>
              </div>
            </div>

            <div class="menu-divider"></div>

            <div class="menu-item">
              <svg class="menu-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3" y="2" width="12" height="14" rx="1.5" fill="none" stroke="#909399" stroke-width="1.3"/>
                <path d="M6 5h6M6 8h4M6 11h5" stroke="#909399" stroke-width="1" stroke-linecap="round"/>
              </svg>
              <span>字典配置</span>
            </div>

            <div class="menu-item">
              <svg class="menu-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="3" width="14" height="12" rx="1.5" fill="none" stroke="#909399" stroke-width="1.3"/>
                <circle cx="6" cy="7" r="1.5" fill="none" stroke="#909399" stroke-width="1"/>
                <path d="M2 12l4-3 3 2 3-4 4 5" stroke="#909399" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>图库配置</span>
            </div>

            <div class="menu-item">
              <svg class="menu-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" fill="none" stroke="#909399" stroke-width="1.3"/>
                <ellipse cx="9" cy="9" rx="3" ry="7" fill="none" stroke="#909399" stroke-width="1"/>
                <line x1="2" y1="9" x2="16" y2="9" stroke="#909399" stroke-width="1"/>
              </svg>
              <span>地图配置</span>
            </div>

            <div class="menu-item">
              <svg class="menu-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M5 4h8l-1 11H6L5 4z" fill="none" stroke="#909399" stroke-width="1.3"/>
                <path d="M3 4h12" stroke="#909399" stroke-width="1.3" stroke-linecap="round"/>
                <path d="M7 4V2.5h4V4" stroke="#909399" stroke-width="1.2"/>
                <path d="M8 7v6M10 7v6" stroke="#909399" stroke-width="1" stroke-linecap="round"/>
              </svg>
              <span>回收站</span>
            </div>
          </nav>
        </aside>

        <main class="content">
          <div class="action-bar">
            <div class="action-left">
              <button class="btn-import">
                <svg class="btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 10V2M8 10l-3-3M8 10l3-3" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12v2h12v-2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                导入
              </button>
            </div>
            <div class="action-right">
              <span class="total-count">共 3 条</span>
              <div class="pagination">
                <button class="page-btn disabled">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M8 2L4 6l4 4" stroke="#C0C4CC" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
                <span class="page-num">1</span>
                <button class="page-btn disabled">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2l4 4-4 4" stroke="#C0C4CC" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
              <select class="page-size-select">
                <option>10 条/页</option>
                <option>20 条/页</option>
                <option>50 条/页</option>
              </select>
              <span class="jump-text">跳至</span>
              <input type="text" class="jump-input" value="1" />
              <span class="jump-text">页</span>
              <button class="btn-view">
                视图
              </button>
            </div>
          </div>
          <div class="card-grid">
            <div class="card card-new">
              <div class="card-new-content">
                <svg class="plus-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="none" stroke="#409EFF" stroke-width="2" stroke-dasharray="4 3"/>
                  <path d="M24 14v20M14 24h20" stroke="#409EFF" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <span class="new-text">新建</span>
              </div>
            </div>
            <div class="card card-data">
              <div class="card-preview">
                <div class="chart-bars">
                  <div class="bar" style="height: 45%; background: #2B80FF;"></div>
                  <div class="bar" style="height: 70%; background: #4DACFF;"></div>
                  <div class="bar" style="height: 55%; background: #36D6B5;"></div>
                  <div class="bar" style="height: 85%; background: #2B80FF;"></div>
                  <div class="bar" style="height: 60%; background: #4DACFF;"></div>
                  <div class="bar" style="height: 40%; background: #36D6B5;"></div>
                  <div class="bar" style="height: 75%; background: #2B80FF;"></div>
                </div>
              </div>
              <div class="card-footer">
                <span class="card-name">数据大屏1</span>
                <div class="card-actions">
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
                    <circle cx="8" cy="8" r="1" fill="currentColor"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11 2l3 3-8 8H3v-3l8-8z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4h8l-0.7 9H4.7L4 4z" fill="none" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M2 4h12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M6 4V2.5h4V4" stroke="currentColor" stroke-width="1.1"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="3" r="1.2" fill="currentColor"/>
                    <circle cx="8" cy="8" r="1.2" fill="currentColor"/>
                    <circle cx="8" cy="13" r="1.2" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="card card-data">
              <div class="card-preview">
                <div class="chart-bars">
                  <div class="bar" style="height: 60%; background: #4DACFF;"></div>
                  <div class="bar" style="height: 40%; background: #2B80FF;"></div>
                  <div class="bar" style="height: 80%; background: #36D6B5;"></div>
                  <div class="bar" style="height: 50%; background: #4DACFF;"></div>
                  <div class="bar" style="height: 65%; background: #2B80FF;"></div>
                  <div class="bar" style="height: 45%; background: #36D6B5;"></div>
                  <div class="bar" style="height: 70%; background: #4DACFF;"></div>
                </div>
              </div>
              <div class="card-footer">
                <span class="card-name">数据大屏2</span>
                <div class="card-actions">
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
                    <circle cx="8" cy="8" r="1" fill="currentColor"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11 2l3 3-8 8H3v-3l8-8z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4h8l-0.7 9H4.7L4 4z" fill="none" stroke="currentColor" stroke-width="1.2"/>
                    <path d="M2 4h12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                    <path d="M6 4V2.5h4V4" stroke="currentColor" stroke-width="1.1"/>
                  </svg>
                  <svg class="action-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="3" r="1.2" fill="currentColor"/>
                    <circle cx="8" cy="8" r="1.2" fill="currentColor"/>
                    <circle cx="8" cy="13" r="1.2" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <footer class="page-footer">
            <div class="footer-links">
              <a href="#" class="footer-link">积木官网</a>
              <svg class="footer-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="2" width="10" height="10" rx="1" fill="none" stroke="#909399" stroke-width="1"/>
                <path d="M5 4h4M5 6h3M5 8h4" stroke="#909399" stroke-width="0.8" stroke-linecap="round"/>
              </svg>
              <a href="#" class="footer-link">文档</a>
            </div>
            <div class="footer-copyright">Copyright ©2024 北京敲敲云科技 出品</div>
          </footer>
        </main>
      </div>

      <div class="floating-btns">
        <button class="float-btn float-btn-home">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 10l7-7 7 7" stroke="#3B7BF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 8v8h10v-8" stroke="#3B7BF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="float-btn float-btn-more">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="5" r="1.5" fill="#909399"/>
            <circle cx="10" cy="10" r="1.5" fill="#909399"/>
            <circle cx="10" cy="15" r="1.5" fill="#909399"/>
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
}

.app {
  width: 1006px;
  height: 590px;
  background-color: #ecebeb;
  position: absolute;
  top: -375px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
}

/* 顶部导航栏 */
.top-nav {
  height: 56px;
  background: #3B7BF7;
  display: flex;
  align-items: center;
  padding: 0 20px;
  flex-shrink: 0;
}

.nav-left {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-text {
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-left: 50px;
}

.nav-tabs {
  display: flex;
  gap: 0;
  margin-left: 100px;
}

.nav-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 24px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-tab:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.nav-tab.active {
  background: #FFFFFF;
  color: #3B7BF7;
}

.tab-icon {
  flex-shrink: 0;
}

/* 主容器 */
.main-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* 左侧边栏 */
.sidebar {
  width: 220px;
  background: #FFFFFF;
  border-right: 1px solid #E4E7ED;
  padding: 16px 0;
  flex-shrink: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.search-box {
  margin: 0 16px 16px 16px;
  position: relative;
}

.search-input {
  width: 100%;
  height: 32px;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  padding: 0 36px 0 12px;
  font-size: 13px;
  color: #333;
  background: #F5F7FA;
  outline: none;
  box-sizing: border-box;
}

.search-input::placeholder {
  color: #C0C4CC;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.menu-list {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.menu-item {
  height: 44px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333333;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  flex-shrink: 0;
}

.menu-item:hover {
  background: #F5F7FA;
}

.menu-item.active {
  background: #ECF5FF;
  color: #409EFF;
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

.submenu {
  display: flex;
  flex-direction: column;
}

.submenu-item {
  padding-left: 44px;
}

.submenu-item span {
  color: #666666;
  font-size: 13px;
}

.menu-divider {
  height: 1px;
  background: #EBEEF5;
  margin: 8px 16px;
}

/* 主内容区 */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #F5F7FA;
}

/* 操作栏 */
.action-bar {
  height: 56px;
  background: #FFFFFF;
  border-bottom: 1px solid #EBEEF5;
  padding: 0 24px;
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
  background: #3B7BF7;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-import:hover {
  background: #5A93FF;
}

.action-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.total-count {
  font-size: 14px;
  color: #606266;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 0;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  overflow: hidden;
  height: 32px;
}

.page-btn {
  width: 32px;
  height: 100%;
  border: none;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-btn:not(:first-child) {
  border-left: 1px solid #DCDFE6;
}

.page-btn.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.page-num {
  width: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #606266;
  border-left: 1px solid #DCDFE6;
}

.page-size-select {
  width: 100px;
  height: 32px;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  font-size: 14px;
  color: #606266;
  padding: 0 8px;
  outline: none;
  background: #fff;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%23606266' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 24px;
}

.jump-text {
  font-size: 14px;
  color: #606266;
}

.jump-input {
  width: 40px;
  height: 32px;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  outline: none;
}

.btn-view {
  width: 80px;
  height: 32px;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%23606266' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 16px;
}

/* 卡片网格区域 */
.card-grid {
  flex: 1;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  overflow-y: auto;
}

.card {
  height: 220px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
}

/* 新建卡片 */
.card-new {
  background: linear-gradient(135deg, #EBF5FF 0%, #D6ECFF 100%);
  border: 2px dashed #409EFF;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-new:hover {
  border-color: #66B1FF;
  background: linear-gradient(135deg, #D6ECFF 0%, #C0E0FF 100%);
}

.card-new-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.new-text {
  font-size: 14px;
  color: #409EFF;
  font-weight: 500;
}

/* 数据卡片 */
.card-data {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.card-data:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.card-preview {
  flex: 1;
  background: linear-gradient(180deg, #0C213B 0%, #0A1830 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 100%;
  width: 100%;
  justify-content: center;
}

.bar {
  width: 14%;
  border-radius: 3px 3px 0 0;
  min-height: 20px;
  transition: height 0.3s;
}

.card-footer {
  height: 48px;
  background: #0D1F3C;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-name {
  font-size: 14px;
  color: #FFFFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: calc(100% - 120px);
}

.card-actions {
  display: flex;
  gap: 8px;
}

.action-icon {
  cursor: pointer;
  color: #909399;
  transition: color 0.2s;
}

.action-icon:hover {
  color: #FFFFFF;
}

.card-actions .action-icon:last-child:hover {
  color: #F56C6C;
}

/* 页脚 */
.page-footer {
  height: 60px;
  background: #FFFFFF;
  border-top: 1px solid #EBEEF5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-shrink: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-link {
  font-size: 13px;
  color: #909399;
  text-decoration: none;
}

.footer-link:hover {
  color: #409EFF;
}

.footer-icon {
  flex-shrink: 0;
}

.footer-copyright {
  font-size: 12px;
  color: #C0C4CC;
}

/* 浮动按钮 */
.floating-btns {
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  z-index: 100;
}

.float-btn {
  width: 48px;
  height: 48px;
  border: none;
  background: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.float-btn:hover {
  transform: scale(1.05);
}

.float-btn-home {
  border-radius: 8px 8px 0 0;
}

.float-btn-more {
  border-radius: 0 0 8px 8px;
  border-top: 1px solid #EBEEF5;
}
</style>