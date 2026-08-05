<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="main-container">
        <!-- 左侧边栏 -->
        <aside class="sidebar">
          <!-- 新建按钮 -->
          <div class="sidebar-new">
            <button class="btn-new">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="12" height="12" rx="2" fill="none" stroke="#00b96b" stroke-width="1.3"/>
                <path d="M8 5v6M5 8h6" stroke="#00b96b" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span>新建</span>
            </button>
          </div>

          <!-- 菜单列表 -->
          <nav class="menu-list">
            <!-- 项目 -->
            <div class="menu-group-title">
              <svg class="group-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12v8H2z" fill="none" stroke="#00b96b" stroke-width="1.2"/>
                <path d="M2 4l3-2h4l1 2" fill="none" stroke="#00b96b" stroke-width="1.2"/>
              </svg>
              <span>项目</span>
              <svg class="arrow-up" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 8l3-3 3 3" stroke="#00b96b" stroke-width="1.3" stroke-linecap="round"/>
              </svg>
            </div>

            <!-- 我的 -->
            <div class="menu-sub">
              <span>我的</span>
            </div>

            <!-- 全部项目（选中） -->
            <div class="menu-item active">
              <span>全部项目</span>
            </div>

            <!-- 我的模板 -->
            <div class="menu-sub">
              <svg class="menu-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1.5" y="1.5" width="4.5" height="4.5" rx="0.8" fill="none" stroke="#666" stroke-width="1"/>
                <rect x="8" y="1.5" width="4.5" height="4.5" rx="0.8" fill="none" stroke="#666" stroke-width="1"/>
                <rect x="1.5" y="8" width="4.5" height="4.5" rx="0.8" fill="none" stroke="#666" stroke-width="1"/>
                <rect x="8" y="8" width="4.5" height="4.5" rx="0.8" fill="none" stroke="#666" stroke-width="1"/>
              </svg>
              <span>我的模板</span>
            </div>

            <div class="menu-divider"></div>

            <!-- 模板市场 -->
            <div class="menu-sub">
              <svg class="menu-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 5h12l-1 7H2L1 5z" fill="none" stroke="#00b96b" stroke-width="1.1"/>
                <path d="M4 5V3.5a3 3 0 016 0V5" fill="none" stroke="#00b96b" stroke-width="1.1"/>
                <circle cx="7" cy="8.5" r="1.2" fill="#00b96b"/>
              </svg>
              <span class="green-text">模板市场</span>
            </div>
          </nav>

          <!-- 底部按钮（水平并排） -->
          <div class="sidebar-bottom">
            <button class="bottom-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="2" y="1" width="10" height="12" rx="1.5" fill="none" stroke="#999" stroke-width="1.1"/>
                <path d="M5 4h4M5 6.5h3M5 9h4" stroke="#999" stroke-width="0.9" stroke-linecap="round"/>
              </svg>
              <span>说明文档</span>
            </button>
            <button class="bottom-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 2.5L1.5 7 4 11.5M10 2.5l2.5 4.5L10 11.5" fill="none" stroke="#999" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 2.5L5 11.5" stroke="#999" stroke-width="1.1" stroke-linecap="round"/>
              </svg>
              <span>仓库地址</span>
            </button>
          </div>
        </aside>

        <!-- 主内容区 -->
        <main class="content">
          <!-- 操作栏 -->
          <div class="action-bar">
            <div class="action-left">
              <button class="btn-circle-add">
                
              </button>
            </div>
            <div class="action-right">
              
              <svg class="top-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2l1.5 3.5L15 7l-3.5 1.5L10 12 8.5 8.5 5 7l3.5-1.5L10 2z" fill="none" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/>
                <path d="M3 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="none" stroke="#fff" stroke-width="1"/>
                <path d="M15 13l0.8 1.8 1.8 0.5-1.8 0.5-0.8 1.8-0.8-1.8L12.4 15.3l1.8-0.5 0.8-1.8z" fill="none" stroke="#fff" stroke-width="1"/>
              </svg>
              <svg class="top-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 10a5 5 0 01-7 4.5A6 6 0 0110 4a5 5 0 015 6z" fill="none" stroke="#fff" stroke-width="1.3"/>
              </svg>
              <div class="user-avatar">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="8" r="3.5" fill="none" stroke="#aaa" stroke-width="1.3"/>
                  <path d="M4 18c0-3.5 3.1-5.5 7-5.5s7 2 7 5.5" fill="none" stroke="#aaa" stroke-width="1.3"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- 卡片网格区域 -->
          <div class="card-grid">
            <!-- 卡片 1 -->
            <div class="card">
              <div class="card-top">
                <span class="dot red"></span>
                <span class="dot green"></span>
                <span class="card-id">id_56m0zp35m3w000</span>
              </div>
              <div class="card-preview">
                <div class="dot-matrix"></div>
              </div>
              <div class="card-bottom">
                <div class="card-info">
                  <span class="card-name">i...</span>
                  <span class="publish-tag">
                    <span class="publish-dot"></span>
                    未发布
                  </span>
                </div>
                <div class="card-actions">
                  <button class="icon-btn">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M11 2l3 3-8 8H3v-3l8-8z" fill="none" stroke="#999" stroke-width="1.2" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <button class="icon-btn">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="3.5" r="1.2" fill="#999"/>
                      <circle cx="8" cy="8" r="1.2" fill="#999"/>
                      <circle cx="8" cy="12.5" r="1.2" fill="#999"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- 卡片 2 -->
            <div class="card">
              <div class="card-top">
                <span class="dot red"></span>
                <span class="dot green"></span>
                <span class="card-id">id_56m0zp35m3w000</span>
              </div>
              <div class="card-preview">
                <div class="dot-matrix"></div>
              </div>
              <div class="card-bottom">
                <div class="card-info">
                  <span class="card-name">i...</span>
                  <span class="publish-tag">
                    <span class="publish-dot"></span>
                    未发布
                  </span>
                </div>
                <div class="card-actions">
                  <button class="icon-btn">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M11 2l3 3-8 8H3v-3l8-8z" fill="none" stroke="#999" stroke-width="1.2" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <button class="icon-btn">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="3.5" r="1.2" fill="#999"/>
                      <circle cx="8" cy="8" r="1.2" fill="#999"/>
                      <circle cx="8" cy="12.5" r="1.2" fill="#999"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- 卡片 3 -->
            <div class="card">
              <div class="card-top">
                <span class="dot red"></span>
                <span class="dot green"></span>
                <span class="card-id">id_56m0zp35m3w000</span>
              </div>
              <div class="card-preview">
                <div class="dot-matrix"></div>
              </div>
              <div class="card-bottom">
                <div class="card-info">
                  <span class="card-name">i...</span>
                  <span class="publish-tag">
                    <span class="publish-dot"></span>
                    未发布
                  </span>
                </div>
                <div class="card-actions">
                  <button class="icon-btn">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M11 2l3 3-8 8H3v-3l8-8z" fill="none" stroke="#999" stroke-width="1.2" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <button class="icon-btn">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="3.5" r="1.2" fill="#999"/>
                      <circle cx="8" cy="8" r="1.2" fill="#999"/>
                      <circle cx="8" cy="12.5" r="1.2" fill="#999"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
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

/* 主容器 */
.main-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* ========== 左侧边栏 ========== */
.sidebar {
  width: 220px;
  background: #1a1a1a;
  padding: 16px 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

/* 新建按钮 */
.sidebar-new {
  padding: 0 16px 16px;
}

.btn-new {
  width: 100%;
  height: 40px;
  border: 1px dashed #00b96b;
  border-radius: 6px;
  background: transparent;
  color: #00b96b;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.2s;
}

.btn-new:hover {
  background: rgba(0, 185, 107, 0.08);
}

/* 菜单 */
.menu-list {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.menu-group-title {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  color: #00b96b;
  cursor: pointer;
}

.group-icon { flex-shrink: 0; }
.arrow-up { margin-left: auto; }

.menu-sub {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px 8px 28px;
  font-size: 14px;
  color: #999;
  cursor: pointer;
  transition: background 0.15s;
}

.menu-sub:hover {
  background: rgba(255,255,255,0.04);
}

.menu-icon { flex-shrink: 0; }

.green-text { color: #00b96b; }

.menu-item {
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 28px;
  margin: 2px 12px;
  font-size: 14px;
  color: #eee;
  cursor: pointer;
  border-radius: 6px;
  background: #2a4a3e;
}

.menu-divider {
  height: 1px;
  background: #333;
  margin: 10px 16px;
}

/* 底部按钮 - 水平并排 */
.sidebar-bottom {
  margin-top: auto;
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 12px;
}

.bottom-btn {
  flex: 1;
  height: 36px;
  padding: 0 10px;
  background: #2a2a2a;
  border: none;
  border-radius: 4px;
  color: #999;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background 0.2s;
  white-space: nowrap;
}

.bottom-btn:hover {
  background: #333;
}

/* ========== 主内容区 ========== */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #121212;
}

/* 操作栏 */
.action-bar {
  height: 48px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.action-left {
  display: flex;
  align-items: center;
}

.btn-circle-add {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
}

.btn-circle-add:hover {
  background: rgba(255,255,255,0.1);
}

.action-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.top-icon {
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.2s;
}

.top-icon:hover {
  opacity: 1;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
}

/* ========== 卡片网格 ========== */
.card-grid {
  flex: 1;
  padding: 12px 20px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  overflow-y: auto;
}

.card {
  height: 160px;
  background: #1e1e1e;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s;
  cursor: pointer;
}

.card:hover {
  border-color: #3a3a3a;
}

/* 卡片顶部 */
.card-top {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.dot.red { background: #ff5722; }
.dot.green { background: #00b96b; }

.card-id {
  font-size: 12px;
  color: #ccc;
  margin-left: 6px;
}

/* 卡片预览 */
.card-preview {
  flex: 1;
  margin: 8px 0;
  border-radius: 4px;
  overflow: hidden;
  background: #1a1a1a;
}

.dot-matrix {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, #2a2a2a 1px, transparent 1px);
  background-size: 8px 8px;
}

/* 卡片底部 */
.card-bottom {
  flex-shrink: 0;
  border-top: 1px solid #2a2a2a;
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-name {
  font-size: 13px;
  color: #999;
}

.publish-tag {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #999;
}

.publish-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ffc107;
}

.card-actions {
  display: flex;
  gap: 6px;
}

.icon-btn {
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background 0.15s;
}

.icon-btn:hover {
  background: rgba(255,255,255,0.08);
}

.icon-btn svg {
  transition: stroke 0.15s, fill 0.15s;
}

.icon-btn:hover svg {
  stroke: #fff;
  fill: #fff;
}
</style>