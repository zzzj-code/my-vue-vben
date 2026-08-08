<template>
    <div class="page-wrapper">

        <div class="app">
            <!-- 左侧设置面板 -->
            <div class="left-panel">
                <!-- 顶部模式切换 -->
                <div class="mode-tabs">
                    <div class="mode-tab">描述模式</div>
                    <div class="mode-tab active">歌词模式</div>
                </div>

                <!-- 歌词 -->
                <div class="form-section">
                    <div class="section-title">歌词</div>
                    <div class="section-tip">自己编写歌词或使用Ai生成歌词，两节/8行效果最佳</div>
                    <div class="textarea-box">
                        <textarea class="lyric-textarea" placeholder="请输入您自己的歌词"></textarea>
                        <div class="char-count">0 / 1200</div>
                    </div>
                </div>

                <!-- 音乐风格 -->
                <div class="form-section">
                    <div class="section-title">音乐风格</div>
                    <div class="style-tags">
                        <span class="style-tag">rock</span>
                        <span class="style-tag">punk</span>
                        <span class="style-tag">jazz</span>
                        <span class="style-tag">soul</span>
                        <span class="style-tag">country</span>
                        <span class="style-tag">kidsmusic</span>
                        <span class="style-tag">pop</span>
                        <span class="style-tag custom">自定义风格</span>
                    </div>
                </div>

                <!-- 音乐/歌曲名称 -->
                <div class="form-section">
                    <div class="section-title">音乐/歌曲名称</div>
                    <input type="text" class="text-input" placeholder="请输入音乐/歌曲名称" />
                </div>

                <!-- 版本 -->
                <div class="form-section">
                    <div class="section-title">版本</div>
                    <div class="select-box">
                        <span class="select-text"></span>
                        <svg class="select-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#999" stroke-width="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </div>

                <!-- 创作按钮 -->
                <button class="create-btn">创作音乐</button>
            </div>

            <!-- 中间主区域 -->
            <div class="main-panel">
                <!-- 空状态 -->
                <div class="empty-state">
                    <div class="empty-icon">
                        
                    </div>
                    <div class="empty-text">暂无音乐</div>
                </div>

                <!-- 底部标签栏 -->
                <div class="bottom-tabs">
                    <div class="bottom-tab active">我的创作</div>
                    <div class="bottom-tab">试听广场</div>
                </div>

                <!-- 播放栏 -->
                <div class="player-bar">
                    <div class="player-left">
                        <div class="player-avatar">
                            <img src="" alt="" />
                        </div>
                        <span class="player-title">暂无音乐</span>
                    </div>
                    <div class="player-center">
                        <div class="player-controls">
                            <button class="control-btn">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#999" stroke-width="2">
                                    <polygon points="19 20 9 12 19 4 19 20" />
                                    <line x1="5" y1="19" x2="5" y2="5" />
                                </svg>
                            </button>
                            <button class="control-btn play-btn">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="none">
                                    <rect x="6" y="4" width="4" height="16" />
                                    <rect x="14" y="4" width="4" height="16" />
                                </svg>
                            </button>
                            <button class="control-btn">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#999" stroke-width="2">
                                    <polygon points="5 4 15 12 5 20 5 4" />
                                    <line x1="19" y1="5" x2="19" y2="19" />
                                </svg>
                            </button>
                        </div>
                        <div class="progress-bar">
                            <span class="time-text">00:00</span>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: 0%"></div>
                                <div class="progress-thumb" style="left: 0%"></div>
                            </div>
                            <span class="time-text">00:00</span>
                        </div>
                    </div>
                    <div class="player-right">
                        <div class="volume-control">
                            <svg class="volume-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#666" stroke-width="2">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                            </svg>
                            <div class="volume-track">
                                <div class="volume-fill" style="width: 50%"></div>
                                <div class="volume-thumb" style="left: 50%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 右侧面板 -->
            <div class="right-panel">
                <button class="reuse-btn">信息复用</button>
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

/* ===== 左侧设置面板 ===== */
.left-panel {
  width: 320px;
  background: #fff;
  border-radius: 12px;
  padding: 18px 20px;
  overflow-y: auto;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

/* 模式切换标签 */
.mode-tabs {
  display: flex;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 4px;
  margin-bottom: 20px;
}

.mode-tab {
  flex: 1;
  text-align: center;
  padding: 7px 0;
  font-size: 14px;
  color: #666;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
}

.mode-tab.active {
  background: #fff;
  color: #3366ff;
  border: 1.5px solid #3366ff;
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
  font-size: 12px;
  color: #888;
  margin-bottom: 10px;
  line-height: 1.4;
}

/* 歌词文本域 */
.textarea-box {
  position: relative;
}

.lyric-textarea {
  width: 100%;
  height: 140px;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 13px;
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1.5;
  color: #333;
}

.lyric-textarea::placeholder {
  color: #ccc;
}

.char-count {
  position: absolute;
  right: 10px;
  bottom: 8px;
  font-size: 12px;
  color: #999;
}

/* 音乐风格标签 */
.style-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.style-tag {
  padding: 4px 10px;
  background: #f5f5f5;
  border-radius: 14px;
  font-size: 13px;
  color: #555;
  cursor: pointer;
}

.style-tag.custom {
  background: #fff;
  border: 1px solid #ddd;
}

/* 文本输入框 */
.text-input {
  width: 100%;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 13px;
  outline: none;
  box-sizing: border-box;
  color: #333;
}

.text-input::placeholder {
  color: #ccc;
}

/* 下拉选择框 */
.select-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 13px;
  color: #555;
  cursor: pointer;
  background: #fff;
}

.select-arrow {
  flex-shrink: 0;
}

/* 创作按钮 */
.create-btn {
  width: 100%;
  padding: 10px 0;
  background: #3366ff;
  color: #fff;
  border: none;
  border-radius: 24px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  margin-top: auto;
}

/* ===== 中间主区域 ===== */
.main-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f2f3f5;
  min-width: 0;
  position: relative;
}

/* 空状态 */
.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.empty-icon {
  opacity: 0.6;
}

.empty-text {
  font-size: 16px;
  color: #666;
  font-weight: 500;
}

/* 底部标签栏 */
.bottom-tabs {
  display: flex;
  gap: 28px;
  padding: 0 20px;
  border-top: 1px solid #e5e5e5;
  flex-shrink: 0;
}

.bottom-tab {
  padding: 10px 0;
  font-size: 15px;
  color: #666;
  cursor: pointer;
  position: relative;
}

.bottom-tab.active {
  color: #333;
  font-weight: 600;
}

.bottom-tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #3366ff;
}

/* 播放栏 */
.player-bar {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background: #fff;
  border-top: 1px solid #e5e5e5;
  flex-shrink: 0;
  gap: 20px;
  /* border: 1px solid; */
  width: 665px;
}

.player-left {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 160px;
}

.player-avatar {
  width: 44px;
  height: 44px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
}

.player-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.player-title {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.player-center {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.player-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.control-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: #666;
}

.control-btn.play-btn {
  width: 36px;
  height: 36px;
  background: #333;
  color: #fff;
  border-radius: 50%;
}

.progress-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 400px;
}

.time-text {
  font-size: 12px;
  color: #666;
  min-width: 36px;
  text-align: center;
}

.progress-track {
  flex: 1;
  height: 4px;
  background: #eee;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
}

.progress-fill {
  height: 100%;
  background: #3366ff;
  border-radius: 2px;
}

.progress-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background: #fff;
  border: 2px solid #3366ff;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

.player-right {
  min-width: 140px;
  display: flex;
  justify-content: flex-end;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 130px;
}

.volume-icon {
  flex-shrink: 0;
}

.volume-track {
  flex: 1;
  height: 4px;
  background: #eee;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
}

.volume-fill {
  height: 100%;
  background: #66b1ff;
  border-radius: 2px;
}

.volume-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: #fff;
  border: 2px solid #66b1ff;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

/* ===== 右侧面板 ===== */
.right-panel {
  width: 180px;
  background: #fff;
  border-radius: 12px;
  padding: 20px 16px;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 490px;
}

.reuse-btn {
  width: 100%;
  padding: 7px 0;
  background: #fff;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
}
</style>