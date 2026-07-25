<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="chat-left">
        <div class="left-header">
          <div>
            <div class="title">聊天</div>
            <div class="subtitle">14 个会话，0 条未读</div>
          </div>
          <div class="status-pill online">在线</div>
        </div>
        <div class="left-search">
          <input type="text" placeholder="搜索会话" />
          <span class="search-icon">🔍</span>
        </div>
        <div class="left-actions">
          <button class="action-btn primary">发起单聊</button>
          <button class="action-btn">创建群聊</button>
        </div>
        <div class="conversation-list">
          <div
            v-for="item in conversations"
            :key="item.id"
            class="conversation-item"
            :class="{ active: item.id === activeConversationId }"
            @click="selectConversation(item.id)"
          >
            <div class="avatar">{{ item.avatar }}</div>
            <div class="conversation-content">
              <div class="conversation-title">
                <span>{{ item.name }}</span>
                <span class="conversation-time">{{ item.time }}</span>
              </div>
              <div class="conversation-subtitle">
                <span>{{ item.message }}</span>
                <span class="conversation-tag">{{ item.tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-right">
        <div class="chat-header">
          <div class="chat-profile">
            <div class="header-avatar">H</div>
            <div>
              <div class="chat-name">hr 小姐姐</div>
              <div class="chat-status">离线</div>
            </div>
          </div>
          <div class="chat-actions">
            <button class="icon-btn">🔇</button>
            <button class="icon-btn">🔕</button>
            <button class="sync-btn">消息实时同步中</button>
          </div>
        </div>
        <div class="chat-body">
          <div class="chat-date">2026-07-24</div>
          <div
            v-for="msg in activeMessages"
            :key="msg.id"
            :class="['chat-message', msg.direction]"
          >
            <div class="message-inner">
              <div class="message-bubble">
                <div class="message-meta">{{ msg.sender }} {{ msg.time }}</div>
                <div class="message-text">{{ msg.text }}</div>
              </div>
              <div class="message-avatar">宇</div>
            </div>
          </div>
        </div>
        <div class="chat-footer">
          <div class="input-area">
            <textarea placeholder="输入消息，支持粘贴图片发送..."></textarea>
          </div>
          <div class="footer-actions">
            <button class="footer-icon">🖼</button>
            <button class="footer-icon">📎</button>
            <button class="status-hint">连接正常</button>
            <button class="send-btn">发送</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeConversationId: 1,
      conversations: [
        {
          id: 1,
          avatar: 'H',
          name: 'hr 小姐姐',
          time: '2026-07-24 18:58:04',
          message: '11111',
          tag: '离线'
        },
        {
          id: 2,
          avatar: '宇',
          name: '宇擎',
          time: '2026-07-24 18:58:55',
          message: '11111',
          tag: '离线'
        },
        {
          id: 3,
          avatar: '小',
          name: '小蜜蜂',
          time: '2026-07-24 09:50:17',
          message: '[图片]',
          tag: '群聊'
        },
        {
          id: 4,
          avatar: '阿',
          name: '阿呆',
          time: '2026-07-24 09:20:07',
          message: '8989898989898...',
          tag: '离线'
        },
        {
          id: 5,
          avatar: '宇',
          name: '宇擎源码1',
          time: '2026-07-23 13:38:25',
          message: '1212121221',
          tag: '离线'
        }
      ],
      conversationsMap: {
        1: [
          { id: 'm1', sender: '宇擎源码', time: '2026-07-24 11:13:41', text: '聊天图片', direction: 'right' },
          { id: 'm2', sender: '宇擎源码', time: '2026-07-24 14:48:02', text: '12312', direction: 'right' },
          { id: 'm3', sender: '宇擎源码', time: '2026-07-24 18:58:04', text: '11111', direction: 'right' }
        ]
      }
    }
  },
  computed: {
    activeMessages() {
      return this.conversationsMap[this.activeConversationId] || []
    }
  },
  methods: {
    selectConversation(id) {
      this.activeConversationId = id
    }
  }
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
  height: 580px;
  background-color: #ecebeb;
  position: absolute;
  top: -375px;
  display: flex;
  padding: 10px;
  /* box-sizing: border-box; */
}
.chat-left,
.chat-right {
  background: #fff;
  border-radius: 20px;
}
.chat-left {
  width: 320px;
  min-width: 320px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
}
.left-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
.title {
  font-size: 20px;
  font-weight: 700;
  color: #1f2d3d;
}
.subtitle {
  margin-top: 4px;
  font-size: 12px;
  color: #8f9bb3;
}
.status-pill {
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}
.status-pill.online {
  color: #3b8f53;
  background: #ecf9ee;
}
.left-search {
  position: relative;
  margin-bottom: 16px;
}
.left-search input {
  width: 100%;
  height: 40px;
  padding: 0 40px 0 14px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #f7f9fc;
  color: #324057;
}
.left-search input::placeholder {
  color: #a6b0c3;
}
.search-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #718096;
  font-size: 16px;
}
.left-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}
.action-btn {
  flex: 1;
  height: 40px;
  border: 1px solid #dbe2ee;
  border-radius: 10px;
  background: #fff;
  color: #324057;
  font-size: 14px;
  cursor: pointer;
}
.action-btn.primary {
  background: #246bfe;
  color: #fff;
  border-color: #246bfe;
}
.conversation-list {
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
}
.conversation-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background 0.2s;
}
.conversation-item.active,
.conversation-item:hover {
  background: #eef4ff;
}
.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #d9e1f8;
  color: #3b4f86;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
.conversation-content {
  flex: 1;
  overflow: hidden;
}
.conversation-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #1f2d3d;
  margin-bottom: 6px;
}
.conversation-time {
  font-size: 12px;
  color: #a6b0c3;
  white-space: nowrap;
}
.conversation-subtitle {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #7f8ba4;
  overflow: hidden;
}
.conversation-subtitle span:first-child {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.conversation-tag {
  padding: 0 8px;
  border-radius: 10px;
  background: #eef4ff;
  color: #246bfe;
  font-size: 12px;
}
.chat-right {
  flex: 1;
  margin-left: 16px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 72px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eef2f7;
}
.chat-profile {
  display: flex;
  align-items: center;
  gap: 12px;
}
.header-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #d9d9d9;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
}
.chat-name {
  font-size: 16px;
  font-weight: 700;
  color: #1f2d3d;
}
.chat-status {
  margin-top: 4px;
  font-size: 12px;
  color: #8f9bb3;
}
.chat-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon-btn,
.sync-btn,
.status-hint,
.send-btn {
  border: none;
  cursor: pointer;
}
.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.04);
  color: #4b5b74;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
.sync-btn {
  min-width: 160px;
  height: 36px;
  padding: 0 14px;
  border-radius: 18px;
  background: #f9fafc;
  color: #4b5b74;
  font-size: 13px;
}
.chat-body {
  flex: 1;
  background: #f8fbff;
  border-radius: 20px;
  margin: 18px 0;
  padding: 20px;
  overflow-y: auto;
}
.chat-date {
  margin-bottom: 18px;
  text-align: center;
  color: #8f9bb3;
  font-size: 12px;
}
.chat-message {
  display: flex;
  margin-bottom: 14px;
}
.chat-message.right {
  justify-content: flex-end;
}
.chat-message.left {
  justify-content: flex-start;
}
.message-inner {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}
.message-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #d9d9d9;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
}
.message-bubble {
  max-width: 64%;
  background: #eaf0ff;
  border-radius: 18px;
  padding: 12px 14px;
  box-shadow: 0 8px 16px rgba(92, 115, 190, 0.06);
}
.chat-message.right .message-bubble {
  background: #d8e6ff;
}
.message-meta {
  font-size: 12px;
  color: #8e9ab3;
  margin-bottom: 6px;
}
.message-text {
  font-size: 14px;
  color: #1f2d3d;
  white-space: pre-wrap;
}
.chat-footer {
  padding-top: 10px;
  border-top: 1px solid #eef2f7;
}
.input-area {
  width: 100%;
  background: #fff;
  border: 1px solid #e5e9f2;
  border-radius: 18px;
  padding: 10px 14px;
  margin-bottom: 12px;
}
.input-area textarea {
  width: 100%;
  min-height: 84px;
  border: none;
  resize: none;
  outline: none;
  font-size: 14px;
  color: #50657c;
  background: transparent;
}
.footer-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.footer-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #f6f8ff;
  color: #324057;
  font-size: 18px;
}
.status-hint {
  flex: 1;
  height: 36px;
  padding: 0 14px;
  border-radius: 18px;
  background: #ebf8f1;
  color: #36a56f;
  font-size: 13px;
  text-align: center;
}
.send-btn {
  min-width: 100px;
  height: 40px;
  border-radius: 12px;
  background: #246bfe;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}
</style>
