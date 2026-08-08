<template>
    <div class="page-wrapper">

        <div class="app">
            <!-- 左侧面板 -->
            <div class="left-panel">
                <!-- 顶部标签 -->
                <div class="top-tabs">
                    <div class="top-tab active">通用</div>
                    <div class="top-tab">DALL3 绘画</div>
                    <div class="top-tab">MJ 绘画</div>
                    <div class="top-tab">SD 绘图</div>
                </div>

                <!-- 画面描述 -->
                <div class="form-section">
                    <div class="section-title">画面描述</div>
                    <div class="section-tip">建议使用"形容词 + 动词 + 风格"的格式，使用"，"隔开</div>
                    <div class="textarea-box">
                        <textarea class="desc-textarea" placeholder="例如：童话里的小屋应该是什么样子？"></textarea>
                        <div class="char-count">0 / 1024</div>
                    </div>
                </div>

                <!-- 随机热词 -->
                <div class="form-section">
                    <div class="section-title">随机热词</div>
                    <div class="hot-tags">
                        <span class="hot-tag">中国旗袍</span>
                        <span class="hot-tag">古装美女</span>
                        <span class="hot-tag">卡通头像</span>
                        <span class="hot-tag">机甲战士</span>
                        <span class="hot-tag">童话小屋</span>
                        <span class="hot-tag">中国长城</span>
                    </div>
                </div>

                <!-- 平台 -->
                <div class="form-section">
                    <div class="section-title">平台</div>
                    <div class="select-box">
                        <span class="select-text">通义万相</span>
                        <svg class="select-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#999" stroke-width="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </div>

                <!-- 模型 -->
                <div class="form-section">
                    <div class="section-title">模型</div>
                    <div class="select-box">
                        <span class="select-text">wanx-v1</span>
                        <svg class="select-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#999" stroke-width="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- 右侧主区域 -->
            <div class="right-panel">
                <!-- 面板标签 -->
                <div class="panel-tabs">
                    <div class="panel-tab active">绘画任务</div>
                    <div style="border: 1px solid #ddd; border-radius: 10px; margin-top: 5px; padding-top: 3px; font-size: 14px; height: 30px;">绘画作品</div>
                </div>

                <!-- 任务列表 -->
                <div class="task-list">
                    <!-- 任务卡片 1 -->
                    <div class="task-card">
                        <div class="card-header">
                            <span class="status-badge error">异常</span>
                            <div class="card-actions">
                                <button class="action-btn">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#666" stroke-width="1.8">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                </button>
                                <button class="action-btn">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#666" stroke-width="1.8">
                                        <polyline points="23 4 23 10 17 10" />
                                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                                    </svg>
                                </button>
                                <button class="action-btn">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#666" stroke-width="1.8">
                                        <path d="M3 6h18" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </button>
                                <button class="action-btn">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#666" stroke-width="2">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="19" cy="12" r="1" />
                                        <circle cx="5" cy="12" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="error-title">401 -</div>
                            <div class="error-json">{"code":"InvalidApiKey","message":"Invalid API-key provided.","request_id":"8a2e33f9-60ea-9dfb-b396-7153991acba2"}</div>
                        </div>
                    </div>

                    <!-- 任务卡片 2 -->
                    <div class="task-card">
                        <div class="card-header">
                            <span class="status-badge error">异常</span>
                            <div class="card-actions">
                                <button class="action-btn">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#666" stroke-width="1.8">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                </button>
                                <button class="action-btn">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#666" stroke-width="1.8">
                                        <polyline points="23 4 23 10 17 10" />
                                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                                    </svg>
                                </button>
                                <button class="action-btn">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#666" stroke-width="1.8">
                                        <path d="M3 6h18" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </button>
                                <button class="action-btn">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#666" stroke-width="2">
                                        <circle cx="12" cy="12" r="1" />
                                        <circle cx="19" cy="12" r="1" />
                                        <circle cx="5" cy="12" r="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                        </div>
                    </div>
                </div>

                <!-- 分页 -->
                <div class="pagination">
                    <span class="total-text">共 19 条</span>
                    <button class="page-btn arrow-btn">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#666" stroke-width="2">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <button class="page-btn active">1</button>
                    <button class="page-btn">2</button>
                    <button class="page-btn arrow-btn">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#666" stroke-width="2">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                    <div class="page-size-select">
                        <span>10 条/页</span>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#999" stroke-width="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                    <div class="jump-box">
                        <span>跳至</span>
                        <input type="text" class="jump-input" />
                        <span>页</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
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
  gap: 12px;
  box-sizing: border-box;
  background: #f2f3f5;
  border-radius: 8px;
  overflow: hidden;
}

/* ===== 左侧面板 ===== */
.left-panel {
  width: 340px;
  background: #fff;
  border-radius: 10px;
  padding: 14px 18px;
  overflow-y: auto;
  flex-shrink: 0;
  box-sizing: border-box;
}

/* 顶部标签 */
.top-tabs {
  display: flex;
  background: #f0f0f0;
  border-radius: 10px;
  padding: 3px;
  margin-bottom: 20px;
}

.top-tab {
  flex: 1;
  text-align: center;
  padding: 7px 0;
  font-size: 14px;
  color: #666;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
}

.top-tab.active {
  background: #fff;
  color: #333;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* 表单区域 */
.form-section {
  margin-bottom: 18px;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
}

.section-tip {
  font-size: 13px;
  color: #666;
  margin-bottom: 10px;
  line-height: 1.4;
}

/* 文本域 */
.textarea-box {
  position: relative;
}

.desc-textarea {
  width: 100%;
  height: 110px;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1.5;
  color: #333;
}

.desc-textarea::placeholder {
  color: #bbb;
}

.char-count {
  position: absolute;
  right: 10px;
  bottom: 8px;
  font-size: 12px;
  color: #999;
}

/* 随机热词 */
.hot-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hot-tag {
  padding: 6px 14px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  background: #fff;
}

/* 下拉选择框 */
.select-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  background: #fff;
}

.select-arrow {
  flex-shrink: 0;
}

/* ===== 右侧主区域 ===== */
.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  min-width: 0;
  overflow: hidden;
}

/* 面板标签 */
.panel-tabs {
  display: flex;
  padding: 10px 20px 0;
  border-bottom: 1px solid #e8e8e8;
  flex-shrink: 0;
  height: 56px;
}

.panel-tab {
  padding: 7px 14px;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  margin-right: 4px;
  border-radius: 8px 8px 0 0;
}

.panel-tab.active {
  color: #333;
  font-weight: 600;
  border-color: #e8e8e8;
  background: #fff;
}

/* 任务列表 */
.task-list {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.task-card {
  width: 300px;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  flex-shrink: 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border-bottom: 1px solid #eee;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
}

.status-badge.error {
  border: 1.5px solid #ff4d4f;
  color: #ff4d4f;
  background: #fff;
}

.card-actions {
  display: flex;
  gap: 4px;
}

.action-btn {
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0;
}

.card-body {
  padding: 14px;
  min-height: 100px;
}

.error-title {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
}

.error-json {
  font-size: 13px;
  color: #555;
  line-height: 1.6;
  font-family: monospace;
  word-break: break-all;
}

/* 分页 */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 20px;
  border-top: 1px solid #eee;
  flex-shrink: 0;
}

.total-text {
  font-size: 14px;
  color: #666;
  margin-right: 10px;
}

.page-btn {
  min-width: 32px;
  height: 32px;
  padding: 0 6px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-btn.active {
  border-color: #3366ff;
  color: #3366ff;
  font-weight: 500;
}

.page-btn.arrow-btn {
  padding: 0;
}

.page-size-select {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  margin-left: 10px;
}

.jump-box {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #666;
  margin-left: 10px;
}

.jump-input {
  width: 46px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  font-size: 13px;
  outline: none;
}
</style>