<template>
    <div class="page-wrapper">

        <div class="app">
            <!-- 左侧面板 -->
            <div class="left-panel">
                <!-- 顶部标签 -->
                <div class="top-tabs">
                    <div class="top-tab active">撰写</div>
                    <div class="top-tab">回复</div>
                </div>

                <!-- 写作内容 -->
                <div class="form-section">
                    <div class="section-header">
                        <span class="section-title">写作内容</span>
                        <span class="example-link">
                            <svg class="q-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            示例
                        </span>
                    </div>
                    <div class="textarea-box">
                        <textarea class="desc-textarea" placeholder="请输入写作内容"></textarea>
                        <div class="char-count">0 / 500</div>
                    </div>
                </div>

                <!-- 长度 -->
                <div class="form-section">
                    <div class="section-title">长度</div>
                    <div class="option-group">
                        <button class="option-btn active">自动</button>
                        <button class="option-btn">短</button>
                        <button class="option-btn">中等</button>
                        <button class="option-btn">长</button>
                        <button class="option-btn">长</button>
                    </div>
                </div>

                <!-- 格式 -->
                <div class="form-section">
                    <div class="section-title">格式</div>
                    <div class="option-group">
                        <button class="option-btn active">自动</button>
                        <button class="option-btn">电子邮件</button>
                        <button class="option-btn">消息</button>
                        <button class="option-btn">评论</button>
                        <button class="option-btn">段落</button>
                        <button class="option-btn">段落</button>
                    </div>
                    <div class="option-group">
                        <button class="option-btn">文章</button>
                        <button class="option-btn">博客文章</button>
                        <button class="option-btn">想法</button>
                        <button class="option-btn">大纲</button>
                    </div>
                </div>

                <!-- 语气 -->
                <div class="form-section">
                    <div class="section-title">语气</div>
                    <div class="option-group">
                        <button class="option-btn active">自动</button>
                        <button class="option-btn">友善</button>
                        <button class="option-btn">随意</button>
                        <button class="option-btn">友好</button>
                        <button class="option-btn">专业</button>
                        <button class="option-btn">诙谐</button>
                        <button class="option-btn">有趣</button>
                    </div>
                    <div class="option-group">
                        <button class="option-btn">正式</button>
                    </div>
                </div>
            </div>

            <!-- 右侧预览面板 -->
            <div class="right-panel">
                <div class="panel-header">预览</div>
                <div class="preview-content">
                    <span class="placeholder-text">生成的内容......</span>
                </div>
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
  width: 1014px;
  height: 590px;
  padding: 10px;
  position: absolute;
  top: -380px;
  display: flex;
  gap: 12px;
  box-sizing: border-box;
  background: #f2f3f5;
  border-radius: 8px;
  overflow: hidden;
}

/* ===== 左侧面板 ===== */
.left-panel {
  width: 380px;
  background: #fff;
  border-radius: 10px;
  padding: 16px 20px;
  overflow-y: auto;
  flex-shrink: 0;
  box-sizing: border-box;
}

/* 顶部标签 */
.top-tabs {
  display: flex;
  border-radius: 24px;
  padding: 4px;
  margin-bottom: 24px;
  width: fit-content;
  padding-left: 60px;
}

.top-tab {
  padding: 8px 36px;
  font-size: 16px;
  color: #666;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
}

.top-tab.active {
  background: #3366ff;
  color: #fff;
  box-shadow: 0 2px 8px rgba(51, 102, 255, 0.3);
}

/* 表单区域 */
.form-section {
  margin-bottom: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.example-link {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #3366ff;
  cursor: pointer;
}

.q-icon {
  flex-shrink: 0;
}

/* 文本域 */
.textarea-box {
  position: relative;
}

.desc-textarea {
  width: 100%;
  height: 140px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1.5;
  color: #333;
}

.desc-textarea::placeholder {
  color: #ccc;
}

.char-count {
  position: absolute;
  right: 10px;
  bottom: 8px;
  font-size: 13px;
  color: #999;
}

/* 选项按钮组 */
.option-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.option-group:last-child {
  margin-bottom: 0;
}

.option-btn {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  font-size: 14px;
  color: #555;
  cursor: pointer;
}

.option-btn.active {
  border-color: #3366ff;
  color: #3366ff;
  font-weight: 500;
}

/* ===== 右侧预览面板 ===== */
.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  min-width: 0;
  overflow: hidden;
}

.panel-header {
  padding: 14px 20px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #eee;
  flex-shrink: 0;
}

.preview-content {
  flex: 1;
  padding: 24px 20px;
  overflow-y: auto;
}

.placeholder-text {
  font-size: 16px;
  color: #ccc;
}
</style>