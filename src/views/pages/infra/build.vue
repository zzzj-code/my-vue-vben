<template>
  <div class="page-wrapper">
    <div class="app">
      <!-- 左侧图标栏 -->
      <div class="icon-sidebar">
        <div class="icon-item active" title="组件">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
        </div>
        <div class="icon-item" title="大纲">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        </div>
        <div class="icon-item" title="数据">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          </svg>
        </div>
        <div class="icon-item" title="国际化">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
        <div class="icon-item" title="代码">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        <div class="icon-item ai-item" title="AI">
          <span class="ai-text">AI</span>
        </div>
      </div>

      <!-- 左侧组件面板 -->
      <div class="panel-left">
        <!-- 标签页 -->
        <div class="tabs">
          <div class="tab active">组件</div>
          <div class="tab">大纲</div>
        </div>

        <!-- 搜索框 -->
        <div class="search-box">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" placeholder="输入关键字搜索" />
        </div>

        <!-- 模板区域 -->
        <div class="section">
          <div class="section-header">
            <span class="section-title">模板</span>
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
          <div class="template-grid">
            <div class="template-btn">三列栅格</div>
            <div class="template-btn">四列栅格</div>
            <div class="template-btn">4x3表格</div>
            <div class="template-btn">金额</div>
            <div class="template-btn">时长</div>
          </div>
        </div>

        <!-- 基础组件区域 -->
        <div class="section">
          <div class="section-header">
            <span class="section-title">基础组件</span>
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
          <div class="component-grid">
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <line x1="7" y1="9" x2="7" y2="9"/>
                  <line x1="7" y1="12" x2="17" y2="12" stroke-width="1.2"/>
                </svg>
              </div>
              <span class="comp-name">输入框</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                  <line x1="8" y1="9" x2="8" y2="9"/>
                  <line x1="8" y1="13" x2="16" y2="13" stroke-width="1.2"/>
                  <line x1="8" y1="16" x2="14" y2="16" stroke-width="1.2"/>
                </svg>
              </div>
              <span class="comp-name">多行输入框</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <circle cx="16.5" cy="12" r="1.5" fill="currentColor" stroke="none"/>
                  <line x1="7" y1="12" x2="13" y2="12" stroke-width="1.2"/>
                </svg>
              </div>
              <span class="comp-name">密码输入框</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <circle cx="12" cy="12" r="8"/>
                  <text x="12" y="16" text-anchor="middle" font-size="9" fill="currentColor" stroke="none">@</text>
                </svg>
              </div>
              <span class="comp-name">提及</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="3" y="7" width="18" height="10" rx="2"/>
                  <line x1="10" y1="7" x2="10" y2="17"/>
                  <line x1="14" y1="7" x2="14" y2="17"/>
                  <text x="6.5" y="14" text-anchor="middle" font-size="6" fill="currentColor" stroke="none">1</text>
                  <text x="12" y="14" text-anchor="middle" font-size="6" fill="currentColor" stroke="none">2</text>
                  <text x="17.5" y="14" text-anchor="middle" font-size="6" fill="currentColor" stroke="none">3</text>
                </svg>
              </div>
              <span class="comp-name">分段控制器</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <text x="7" y="15" text-anchor="middle" font-size="8" fill="currentColor" stroke="none">123</text>
                  <line x1="12" y1="8" x2="12" y2="8"/>
                  <line x1="12" y1="16" x2="12" y2="16"/>
                </svg>
              </div>
              <span class="comp-name">数字输入框</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <circle cx="12" cy="12" r="8"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <span class="comp-name">单选框</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                  <polyline points="8 12 11 15 16 9" stroke-width="2.2"/>
                </svg>
              </div>
              <span class="comp-name">多选框</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <polyline points="8 10 12 14 16 10" stroke-width="1.5"/>
                </svg>
              </div>
              <span class="comp-name">选择器</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="2" y="9" width="20" height="6" rx="3"/>
                  <circle cx="17" cy="12" r="2.5" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <span class="comp-name">开关</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <span class="comp-name">评分</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <circle cx="12" cy="12" r="8"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <span class="comp-name">时间</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <circle cx="12" cy="12" r="8"/>
                  <polyline points="12 6 12 12 16 14"/>
                  <circle cx="12" cy="6" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <span class="comp-name">时间范围</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <line x1="4" y1="6" x2="20" y2="6" stroke-width="1.5"/>
                  <line x1="4" y1="12" x2="20" y2="12" stroke-width="1.5"/>
                  <line x1="4" y1="18" x2="20" y2="18" stroke-width="1.5"/>
                  <circle cx="8" cy="6" r="1.5" fill="currentColor" stroke="none"/>
                  <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none"/>
                  <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <span class="comp-name">滑块</span>
            </div>
            <div class="comp-item">
              <div class="comp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <line x1="8" y1="3" x2="8" y2="7"/>
                  <line x1="16" y1="3" x2="16" y2="7"/>
                </svg>
              </div>
              <span class="comp-name">日期</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 中间画布区域 -->
      <div class="canvas-container">
        <!-- 工具栏 -->
        <div class="toolbar">
          <div class="toolbar-left">
            <div class="toolbar-item dropdown-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M7 10h10M7 14h10"/>
              </svg>
              <span>自适应</span>
              <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
            <div class="toolbar-divider"></div>
            <div class="toolbar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="4" y1="7" x2="20" y2="7"/>
                <line x1="4" y1="12" x2="20" y2="12"/>
                <line x1="4" y1="17" x2="20" y2="17"/>
                <line x1="10" y1="4" x2="10" y2="20"/>
              </svg>
            </div>
            <div class="toolbar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </div>
            <div class="toolbar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="8" y1="13" x2="16" y2="13"/>
                <line x1="8" y1="17" x2="16" y2="17"/>
              </svg>
            </div>
            <div class="toolbar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 6 2 18 2 18 9"/>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
            </div>
            <div class="toolbar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="2" width="6" height="20" rx="1"/>
                <path d="M9 8h6M9 16h6"/>
              </svg>
            </div>
            <div class="toolbar-divider"></div>
            <div class="toolbar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="1 4 1 10 7 10"/>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
              </svg>
            </div>
            <div class="toolbar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"/>
                <path d="M20.49 15a9 9 0 1 1-2.13-9.36L23 10"/>
              </svg>
            </div>
          </div>
          <div class="toolbar-right">
            <div class="generate-btn">生成JSON</div>
          </div>
        </div>

        <!-- 画布区域 -->
        <div class="canvas-wrapper">
          <div class="collapse-btn left-collapse">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </div>
          <div class="canvas">
            <div class="canvas-placeholder">
              <span>拖拽左侧列表中的组件到此处</span>
            </div>
          </div>
          <div class="collapse-btn right-collapse">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- 右侧配置面板 -->
      <div class="panel-right">
        <div class="tabs">
          <div class="tab active">表单配置</div>
        </div>

        <div class="form-config">
          <div class="form-item">
            <label class="form-label">表单名称</label>
            <input type="text" class="form-input" />
          </div>

          <div class="form-item">
            <label class="form-label">表单布局</label>
            <div class="form-select">
              <span>横向</span>
              <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>

          <div class="form-item">
            <label class="form-label">表单布局</label>
            <div class="form-select">
              <span>右对齐</span>
              <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>

          <div class="form-item">
            <label class="form-label">表单的尺寸</label>
            <div class="form-select">
              <span>中</span>
              <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>

          <div class="form-item">
            <label class="form-label">标签的宽度</label>
            <div class="input-with-suffix">
              <input type="text" class="form-input" value="125" />
              <span class="suffix">px</span>
            </div>
          </div>

          <div class="form-item">
            <label class="form-label">地图组件 API Key</label>
            <input type="text" class="form-input" />
          </div>

          <div class="form-item switch-item">
            <label class="form-label">允许标签换行</label>
            <div class="switch">
              <div class="switch-handle"></div>
            </div>
          </div>

          <div class="form-item switch-item">
            <label class="form-label">是否显示标签后面的冒号</label>
            <div class="switch">
              <div class="switch-handle"></div>
            </div>
          </div>

          <div class="form-item switch-item">
            <label class="form-label">隐藏必填字段的标签旁边的红色星号</label>
            <div class="switch">
              <div class="switch-handle"></div>
            </div>
          </div>

          <div class="form-item switch-item">
            <label class="form-label">是否显示表单提交按钮</label>
            <div class="switch active">
              <div class="switch-handle"></div>
            </div>
          </div>

          <div class="form-item switch-item">
            <label class="form-label">是否显示表单重置按钮</label>
            <div class="switch">
              <div class="switch-handle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormDesigner'
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
  height: 590px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  color: #333;
  overflow: hidden;
}

/* 左侧图标栏 */
.icon-sidebar {
  width: 48px;
  background: #fff;
  border-right: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  flex-shrink: 0;
}
.icon-item {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  border-radius: 4px;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;
}
.icon-item svg {
  width: 22px;
  height: 22px;
}
.icon-item:hover {
  background: #f0f0f0;
}
.icon-item.active {
  color: #3b7dff;
  background: #e8f0ff;
}
.icon-item.ai-item {
  margin-top: auto;
  margin-bottom: 16px;
}
.ai-text {
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 左侧组件面板 */
.panel-left {
  width: 240px;
  background: #fff;
  border-right: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow-y: auto;
}

/* 标签页 */
.tabs {
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 12px;
  flex-shrink: 0;
}
.tab {
  padding: 12px 16px;
  cursor: pointer;
  color: #666;
  font-size: 15px;
  position: relative;
  font-weight: 500;
}
.tab.active {
  color: #3b7dff;
}
.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 16px;
  right: 16px;
  height: 2px;
  background: #3b7dff;
  border-radius: 1px;
}

/* 搜索框 */
.search-box {
  position: relative;
  padding: 12px;
  flex-shrink: 0;
}
.search-box input {
  width: 100%;
  height: 34px;
  padding: 0 12px 0 34px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.search-box input:focus {
  border-color: #3b7dff;
}
.search-icon {
  position: absolute;
  left: 22px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #999;
}

/* 区域 */
.section {
  padding: 0 12px 16px;
  border-bottom: 1px solid #f0f0f0;
}
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  cursor: pointer;
}
.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
}
.arrow-icon {
  width: 16px;
  height: 16px;
  color: #999;
}

/* 模板网格 */
.template-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.template-btn {
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
}
.template-btn:hover {
  background: #e8f0ff;
  color: #3b7dff;
}
.template-btn:last-child {
  grid-column: span 1;
}

/* 组件网格 */
.component-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.comp-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 4px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.comp-item:hover {
  background: #f5f5f5;
}
.comp-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  margin-bottom: 6px;
}
.comp-icon svg {
  width: 28px;
  height: 28px;
}
.comp-name {
  font-size: 12px;
  color: #555;
  text-align: center;
  line-height: 1.3;
}

/* 中间画布容器 */
.canvas-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  min-width: 0;
}

/* 工具栏 */
.toolbar {
  height: 48px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  flex-shrink: 0;
}
.toolbar-left {
  display: flex;
  align-items: center;
  gap: 4px;
}
.toolbar-item {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  color: #555;
  transition: all 0.2s;
}
.toolbar-item svg {
  width: 18px;
  height: 18px;
}
.toolbar-item:hover {
  background: #f0f0f0;
  color: #3b7dff;
}
.toolbar-item.dropdown-item {
  width: auto;
  padding: 0 10px;
  gap: 6px;
  font-size: 13px;
}
.dropdown-arrow {
  width: 14px !important;
  height: 14px !important;
}
.toolbar-divider {
  width: 1px;
  height: 20px;
  background: #e8e8e8;
  margin: 0 6px;
}
.generate-btn {
  height: 32px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3b7dff;
  border-radius: 4px;
  color: #3b7dff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}
.generate-btn:hover {
  background: #3b7dff;
  color: #fff;
}

/* 画布包装 */
.canvas-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
}
.canvas {
  flex: 1;
  height: 100%;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
}
.canvas-placeholder {
  color: #bbb;
  font-size: 20px;
  user-select: none;
}
.collapse-btn {
  width: 24px;
  height: 48px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #999;
  border-radius: 0 4px 4px 0;
  box-shadow: 1px 0 3px rgba(0,0,0,0.05);
  flex-shrink: 0;
  transition: all 0.2s;
}
.collapse-btn:hover {
  color: #3b7dff;
}
.collapse-btn svg {
  width: 16px;
  height: 16px;
}
.left-collapse {
  border-radius: 0 4px 4px 0;
  margin-right: -1px;
}
.right-collapse {
  border-radius: 4px 0 0 4px;
  margin-left: -1px;
}

/* 右侧配置面板 */
.panel-right {
  width: 280px;
  background: #fff;
  border-left: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow-y: auto;
}

/* 表单配置 */
.form-config {
  padding: 16px;
  flex: 1;
}
.form-item {
  margin-bottom: 18px;
}
.form-label {
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
  font-weight: 500;
}
.form-input {
  width: 100%;
  height: 34px;
  padding: 0 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.form-input:focus {
  border-color: #3b7dff;
}
.form-select {
  width: 100%;
  height: 34px;
  padding: 0 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-sizing: border-box;
  color: #333;
  transition: border-color 0.2s;
}
.form-select:hover {
  border-color: #3b7dff;
}
.select-arrow {
  width: 14px;
  height: 14px;
  color: #999;
}

/* 带后缀的输入框 */
.input-with-suffix {
  position: relative;
  display: flex;
  align-items: center;
}
.input-with-suffix .form-input {
  padding-right: 40px;
}
.suffix {
  position: absolute;
  right: 12px;
  font-size: 13px;
  color: #999;
  pointer-events: none;
}

/* 开关 */
.switch-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.switch-item .form-label {
  margin-bottom: 0;
  flex: 1;
  padding-right: 12px;
}
.switch {
  width: 40px;
  height: 22px;
  background: #ccc;
  border-radius: 11px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
}
.switch-handle {
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
.switch.active {
  background: #3b7dff;
}
.switch.active .switch-handle {
  left: 20px;
}
</style>