<template>
    <div class="page-wrapper">

        <div class="app">
            <!-- 左侧边栏 -->
            <div class="sidebar">
                <button class="new-chat-btn">
                    新建对话
                </button>

                <div class="search-wrap">
                    <input type="text" class="search-input" placeholder="搜索历史记录" />
                </div>

                <div class="history-scroll">
                    <div class="history-group">
                        <div class="group-label">今天</div>
                        <div class="chat-item active">
                            <span class="chat-name">新对话</span>
                        </div>
                        <div class="chat-item">
                            <span class="chat-name">新对话</span>
                        </div>
                    </div>

                    <div class="history-group">
                        <div class="group-label">一天前</div>
                        <div class="chat-item">
                            <span class="chat-name">新对话</span>
                        </div>
                        <div class="chat-item">
                            <span class="chat-name">新对话</span>
                        </div>
                        <div class="chat-item">
                            <span class="chat-name">新对话</span>
                        </div>
                    </div>

                    <div class="history-group">
                        <div class="group-label">三天前</div>
                        <div class="chat-item">
                            <span class="chat-name">新对话</span>
                        </div>
                    </div>

                    <div class="history-group">
                        <div class="group-label">七天前</div>
                        <div class="chat-item">
                            <span class="chat-name">新对话</span>
                        </div>
                    </div>
                </div>

                <div class="sidebar-bottom">
                    <div class="bottom-item">
                        角色仓库
                    </div>
                    <div class="bottom-item">
                        清空未置顶对话
                    </div>
                </div>
            </div>

            <!-- 右侧主区域 -->
            <div class="main">
                <!-- 顶部栏 -->
                <div class="top-bar">
                    <div class="top-title">新对话</div>
                    <div class="top-actions">
                        <button class="model-btn">
                            gpt-5.6-sol
                        </button>
                        <button class="icon-btn">删除</button>
                        <button class="icon-btn">下载</button>
                        <button class="icon-btn">分享</button>
                    </div>
                </div>

                <!-- 欢迎区域 -->
                <div class="welcome">
                    <div class="welcome-title">宇擎 AI</div>
                    <div class="suggestions">
                        <button class="suggestion-item">今天天气怎么样？</button>
                        <button class="suggestion-item">写一首好听的诗歌？</button>
                    </div>
                </div>

                <!-- 输入区域 -->
                <div class="input-section">
                    <div class="input-box">
                        <textarea class="textarea" placeholder="问我任何问题...（Shift+Enter 换行，按下 Enter 发送）"></textarea>
                        <div class="input-bar">
                            <div class="input-bar-left">
                                <button class="attach-btn">附件</button>
                                <div class="switch on">
                                    <div class="switch-dot"></div>
                                </div>
                                <span class="switch-text">上下文</span>
                                <div class="switch off">
                                    <div class="switch-dot"></div>
                                </div>
                                <span class="switch-text">联网搜索</span>
                            </div>
                            <button class="send-btn">
                                发送
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
// ========== 导入AI聊天相关API ==========
import { getChatConversationMyList } from '#/api/ai/chat/conversation';

export default {
  data() {
    return {
      // 输入内容
      inputText: '',
      // 生成结果
      result: null,
      // 加载状态
      loading: false,
    };
  },
  methods: {
    // 生成聊天
    async handleGenerate() {
      if (!this.inputText) { alert('请输入内容'); return; }
      this.loading = true;
      try {
        // 调用API生成
        const data = await getChatConversationMyList({ prompt: this.inputText });
        this.result = data;
        alert('生成成功');
      } catch (err) {
        console.error('生成失败', err);
        alert('生成失败');
      } finally {
        this.loading = false;
      }
    },
  },
};
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
  width: 1014px;
  height: 590px;
  padding: 10px;
  position: absolute;
  top: -380px;
  display: flex;
  box-sizing: border-box;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}

/* ===== 左侧边栏 ===== */
.sidebar {
  width: 270px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e8e8e8;
  padding: 8px 10px 0;
  flex-shrink: 0;
}

.new-chat-btn {
  width: 100%;
  padding: 11px 0;
  background: #3366ff;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;
}

.search-wrap {
  margin-bottom: 14px;
}

.search-input {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  background: #fff;
}

.search-input::placeholder {
  color: #bbb;
}

.history-scroll {
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
}

.history-group {
  margin-bottom: 6px;
}

.group-label {
  font-size: 13px;
  color: #555;
  padding: 8px 8px 6px;
  font-weight: 500;
}

.chat-item {
  padding: 9px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #333;
  margin-bottom: 2px;
}

.chat-item.active {
  background: #eaf0fc;
}

.sidebar-bottom {
  display: flex;
  justify-content: space-between;
  padding: 12px 8px;
  border-top: 1px solid #eee;
  margin-top: auto;
}

.bottom-item {
  font-size: 13px;
  color: #888;
  cursor: pointer;
}

/* ===== 右侧主区域 ===== */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f2f3f5;
  min-width: 0;
}

/* 顶部栏 */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  flex-shrink: 0;
}

.top-title {
  font-size: 22px;
  font-weight: 600;
  color: #333;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.model-btn {
  padding: 5px 12px;
  border: 1px solid #3366ff;
  border-radius: 8px;
  background: #fff;
  color: #3366ff;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
}

.icon-btn {
  height: 34px;
  padding: 0 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-size: 13px;
  color: #666;
}

/* 欢迎区域 */
.welcome {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
}

.welcome-title {
  font-size: 46px;
  font-weight: 700;
  color: #444;
  letter-spacing: 2px;
}

.suggestions {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.suggestion-item {
  padding: 14px 36px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 18px;
  color: #444;
  cursor: pointer;
  min-width: 220px;
  text-align: center;
}

/* 输入区域 */
.input-section {
  padding: 14px 20px 18px;
  background: #fff;
  flex-shrink: 0;
}

.input-box {
  border: 1px solid #dcdcdc;
  border-radius: 16px;
  padding: 16px 18px 12px;
  background: #fff;
}

.textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
  color: #333;
  min-height: 70px;
  box-sizing: border-box;
  font-family: inherit;
  background: transparent;
  line-height: 1.5;
}

.textarea::placeholder {
  color: #aaa;
}

.input-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.input-bar-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.attach-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  padding: 0;
}

.switch {
  width: 38px;
  height: 22px;
  border-radius: 11px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
}

.switch.on {
  background: #3366ff;
}

.switch.off {
  background: #ccc;
}

.switch-dot {
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.switch.on .switch-dot {
  right: 2px;
}

.switch.off .switch-dot {
  left: 2px;
}

.switch-text {
  font-size: 14px;
  color: #888;
  margin-right: 2px;
}

.send-btn {
  padding: 9px 20px;
  background: #3366ff;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
</style>
