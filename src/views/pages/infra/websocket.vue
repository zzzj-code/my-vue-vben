<template>
  <div class="page-wrapper">
    <div class="app">
      <!-- 左侧：连接管理 -->
      <div class="panel left-panel">
        <div class="panel-header">
          <span class="status-dot"></span>
          <span class="panel-title">连接管理</span>
        </div>
        <div class="panel-body">
          <!-- 连接状态 -->
          <div class="conn-status-row">
            <span class="status-label">连接状态:</span>
            <span class="status-tag connected">已连接</span>
          </div>

          <!-- 服务地址 -->
          <div class="addr-row">
            <div class="addr-input-group">
              <span class="addr-label">服务地址</span>
              <input type="text" class="addr-input" value="ws://ruoyioffice.com/infra/ws?token=(" readonly />
            </div>
            <button class="btn-close">关闭连接</button>
          </div>

          <!-- 消息发送分隔 -->
          <div class="divider-row">
            <div class="divider-line"></div>
            <span class="divider-text">消息发送</span>
            <div class="divider-line"></div>
          </div>

          <!-- 接收人选择 -->
          <div class="receiver-select">
            <div class="receiver-inner">
              <span class="receiver-avatar">全</span>
              <span class="receiver-text">所有人</span>
            </div>
            <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>

          <!-- 消息输入框 -->
          <textarea class="msg-input" placeholder="请输入你要发送的消息..."></textarea>

          <!-- 发送按钮 -->
          <button class="btn-send">
            <svg class="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            发送消息
          </button>
        </div>
      </div>

      <!-- 右侧：消息记录 -->
      <div class="panel right-panel">
        <div class="panel-header">
          <svg class="header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span class="panel-title">消息记录</span>
        </div>
        <div class="panel-body">
          <div class="empty-state">
            <div class="empty-icon-wrap">
              <svg class="empty-icon" viewBox="0 0 120 120" fill="none">
                <!-- 收件箱底座 -->
                <rect x="20" y="60" width="80" height="40" rx="4" fill="#e0e4eb"/>
                <rect x="20" y="60" width="80" height="8" fill="#d0d5dd"/>
                <!-- 信件 -->
                <rect x="35" y="30" width="50" height="40" rx="3" fill="#fff" stroke="#d0d5dd" stroke-width="1.5"/>
                <rect x="42" y="40" width="36" height="5" rx="2" fill="#e0e4eb"/>
                <rect x="42" y="50" width="28" height="4" rx="2" fill="#e8ebf0"/>
                <rect x="42" y="58" width="32" height="4" rx="2" fill="#e8ebf0"/>
                <!-- 气泡 -->
                <ellipse cx="90" cy="30" rx="16" ry="12" fill="#e0e4eb"/>
                <circle cx="84" cy="30" r="2" fill="#fff"/>
                <circle cx="90" cy="30" r="2" fill="#fff"/>
                <circle cx="96" cy="30" r="2" fill="#fff"/>
              </svg>
            </div>
            <p class="empty-text">暂无消息记录</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WsConnectionManager'
}
</script>

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
  height: 450px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
  display: flex;
  gap: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

/* 面板通用 */
.panel {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}
.panel-header {
  height: 60px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #e8e8e8;
  flex-shrink: 0;
}
.panel-title {
  font-size: 22px;
  font-weight: 600;
  color: #444;
}
.header-icon {
  width: 24px;
  height: 24px;
  color: #666;
}
.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #52c41a;
  flex-shrink: 0;
}
.panel-body {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 左侧面板 */
.left-panel .panel-body {
  gap: 20px;
}

/* 连接状态行 */
.conn-status-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.status-label {
  font-size: 18px;
  color: #333;
  font-weight: 500;
}
.status-tag {
  padding: 3px 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
}
.status-tag.connected {
  background: #f0f9eb;
  color: #67c23a;
  border: 1px solid #c2e7b0;
}

/* 服务地址行 */
.addr-row {
  display: flex;
  align-items: stretch;
  gap: 12px;
}
.addr-input-group {
  flex: 1;
  display: flex;
  align-items: stretch;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
}
.addr-label {
  padding: 0 16px;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-right: 1px solid #d9d9d9;
  font-size: 18px;
  color: #333;
  font-weight: 500;
  white-space: nowrap;
}
.addr-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0 14px;
  font-size: 18px;
  color: #333;
  background: #fff;
  font-family: inherit;
}
.btn-close {
  padding: 0 24px;
  border: 2px solid #f56c6c;
  background: #fff;
  color: #f56c6c;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.btn-close:hover {
  background: #fef0f0;
}

/* 分隔行 */
.divider-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 4px 0;
}
.divider-line {
  flex: 1;
  height: 1px;
  background: #e0e0e0;
}
.divider-text {
  font-size: 20px;
  color: #666;
  font-weight: 500;
  white-space: nowrap;
}

/* 接收人选择 */
.receiver-select {
  height: 48px;
  border: 1px solid #d9d9d9;
  border-radius: 10px 10px 0 0;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: border-color 0.2s;
}
.receiver-select:hover {
  border-color: #409eff;
}
.receiver-inner {
  display: flex;
  align-items: center;
  gap: 10px;
}
.receiver-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #d0d5dd;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
}
.receiver-text {
  font-size: 20px;
  color: #333;
  font-weight: 500;
}
.select-arrow {
  width: 20px;
  height: 20px;
  color: #999;
}

/* 消息输入框 */
.msg-input {
  flex: 1;
  min-height: 80px;
  border: 1px solid #d9d9d9;
  border-top: none;
  border-radius: 0 0 10px 10px;
  padding: 12px 14px;
  font-size: 16px;
  color: #333;
  resize: none;
  outline: none;
  font-family: inherit;
  line-height: 1.5;
}
.msg-input::placeholder {
  color: #bbb;
}
.msg-input:focus {
  border-color: #409eff;
}

/* 发送按钮 */
.btn-send {
  height: 52px;
  background: #3366ff;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.2s;
  box-shadow: 0 2px 6px rgba(51, 102, 255, 0.2);
}
.btn-send:hover {
  background: #2952cc;
}
.send-icon {
  width: 22px;
  height: 22px;
}

/* 右侧面板 - 空状态 */
.right-panel .panel-body {
  align-items: center;
  justify-content: center;
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.empty-icon-wrap {
  opacity: 0.9;
}
.empty-icon {
  width: 120px;
  height: 120px;
}
.empty-text {
  font-size: 18px;
  color: #666;
  margin: 0;
}
</style>