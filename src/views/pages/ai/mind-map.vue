<template>
    <div class="page-wrapper">

        <div class="app">
            <!-- 左侧创作面板 -->
            <div class="left-panel">
                <div class="panel-title">思维导图创作中心</div>

                <div class="input-section">
                    <div class="section-title">您的需求？</div>
                    <div class="textarea-box">
                        <textarea class="input-textarea" placeholder="请输入提示词，让AI帮你完善"></textarea>
                        <div class="char-count">0 / 1024</div>
                    </div>
                    <button class="generate-btn">智能生成思维导图</button>
                </div>

                <div class="content-section">
                    <div class="section-title">使用已有内容生成？</div>
                    <div class="content-box">
                        <div class="md-content">
                            <div class="md-h1"># Java 技术栈</div>
                            <div class="md-h2">## 核心技术</div>
                            <div class="md-h3">### Java SE</div>
                            <div class="md-h3">### Java EE</div>
                            <div class="md-h2">## 框架</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 右侧预览面板 -->
            <div class="right-panel">
                <div class="panel-header">
                    <span class="panel-title-text">思维导图预览</span>
                    <button class="download-btn">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        下载图片
                    </button>
                </div>

                <div class="mindmap-area">
                    <div ref="chartRef" class="chart-container"></div>

                    <!-- 右下角控制按钮 -->
                    <div class="zoom-controls">
                        <button class="zoom-btn">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#666" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>
                        <button class="zoom-btn">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#666" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>
                        <button class="zoom-btn">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#666" stroke-width="2">
                                <line x1="12" y1="3" x2="12" y2="21" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="5" y1="5" x2="19" y2="19" />
                                <line x1="5" y1="19" x2="19" y2="5" />
                            </svg>
                        </button>
                        <button class="zoom-btn">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#666" stroke-width="2">
                                <path d="M3 7V3h4" />
                                <path d="M21 7V3h-4" />
                                <path d="M3 17v4h4" />
                                <path d="M21 17v4h-4" />
                            </svg>
                        </button>
                        <button class="zoom-btn">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#666" stroke-width="2">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7v5l3 3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import * as echarts from 'echarts'
// ========== 导入AI思维导图相关API ==========
import { generateMindMap, getMindMapPage } from '#/api/ai/mindmap';

export default {
  data() {
    return {
      chart: null,
      // 输入内容
      inputText: '',
      // 加载状态
      loading: false,
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chartRef)

      const data = {
        name: 'Java 技术栈',
        itemStyle: { color: '#4472c4' },
        children: [
          {
            name: '核心技术',
            itemStyle: { color: '#ed7d31' },
            children: [
              { name: 'Java SE', itemStyle: { color: '#70ad47' } },
              { name: 'Java EE', itemStyle: { color: '#c0504d' } }
            ]
          },
          {
            name: '框架',
            itemStyle: { color: '#7030a0' },
            children: [
              {
                name: 'Spring',
                itemStyle: { color: '#7030a0' },
                children: [
                  { name: 'Spring Boot', itemStyle: { color: '#e066a0' } },
                  { name: 'Spring MVC', itemStyle: { color: '#888' } },
                  { name: 'Spring Data', itemStyle: { color: '#a9c455' } }
                ]
              },
              { name: 'Hibernate', itemStyle: { color: '#5b9bd5' } },
              { name: 'MyBatis', itemStyle: { color: '#5b9bd5' } }
            ]
          },
          {
            name: '构建工具',
            itemStyle: { color: '#ed7d31' },
            children: [
              { name: 'Maven', itemStyle: { color: '#70ad47' } },
              { name: 'Gradle', itemStyle: { color: '#c0504d' } }
            ]
          },
          {
            name: '版本控制',
            itemStyle: { color: '#7030a0' },
            children: [
              { name: 'Git', itemStyle: { color: '#c55a11' } },
              { name: 'SVN', itemStyle: { color: '#e066a0' } }
            ]
          },
          {
            name: '测试工具',
            itemStyle: { color: '#595959' },
            children: [
              { name: 'JUnit', itemStyle: { color: '#ffc000' } },
              { name: 'Mockito', itemStyle: { color: '#70ad47' } },
              { name: 'Selenium', itemStyle: { color: '#5b9bd5' } }
            ]
          },
          {
            name: '应用服务器',
            itemStyle: { color: '#ed7d31' },
            children: [
              { name: 'Tomcat', itemStyle: { color: '#70ad47' } },
              { name: 'Jetty', itemStyle: { color: '#c0504d' } },
              { name: 'WildFly', itemStyle: { color: '#c55a11' } }
            ]
          },
          {
            name: '数据库',
            itemStyle: { color: '#4472c4' },
            children: [
              { name: 'MySQL', itemStyle: { color: '#e066a0' } },
              { name: 'PostgreSQL', itemStyle: { color: '#5b9bd5' } },
              { name: 'Oracle', itemStyle: { color: '#a9c455' } },
              { name: 'MongoDB', itemStyle: { color: '#5bc0de' } }
            ]
          },
          {
            name: '消息队列',
            itemStyle: { color: '#2e75b6' },
            children: [
              { name: 'Kafka', itemStyle: { color: '#ed7d31' } },
              { name: 'RabbitMQ', itemStyle: { color: '#70ad47' } },
              { name: 'ActiveMQ', itemStyle: { color: '#c0504d' } }
            ]
          },
          {
            name: '微服务',
            itemStyle: { color: '#7030a0' },
            children: [
              { name: 'Spring Cloud', itemStyle: { color: '#c55a11' } },
              { name: 'Dubbo', itemStyle: { color: '#e066a0' } }
            ]
          },
          {
            name: '容器化',
            itemStyle: { color: '#595959' },
            children: [
              { name: 'Docker', itemStyle: { color: '#ffc000' } },
              { name: 'Kubernetes', itemStyle: { color: '#5bc0de' } }
            ]
          },
          {
            name: '云服务',
            itemStyle: { color: '#2e75b6' },
            children: [
              { name: 'AWS', itemStyle: { color: '#ed7d31' } },
              { name: 'Azure', itemStyle: { color: '#5b9bd5' } },
              { name: 'Google Cloud', itemStyle: { color: '#c0504d' } }
            ]
          },
          {
            name: '开发工具',
            itemStyle: { color: '#7030a0' },
            children: [
              { name: 'IntelliJ IDEA', itemStyle: { color: '#c55a11' } },
              { name: 'Eclipse', itemStyle: { color: '#e066a0' } },
              { name: 'Visual Studio Code', itemStyle: { color: '#888' } }
            ]
          }
        ]
      }

      const option = {
        series: [
          {
            type: 'tree',
            data: [data],
            top: '2%',
            left: '8%',
            bottom: '2%',
            right: '15%',
            orient: 'LR',
            symbol: 'circle',
            symbolSize: 8,
            initialTreeDepth: -1,
            expandAndCollapse: false,
            roam: true,
            lineStyle: {
              width: 1.5,
              curveness: 0.5
            },
            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 12,
              color: '#333'
            },
            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left',
                fontSize: 11,
                color: '#333'
              }
            },
            emphasis: {
              focus: 'none'
            }
          }
        ]
      }

      this.chart.setOption(option)
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
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

/* ===== 左侧创作面板 ===== */
.left-panel {
  width: 320px;
  background: #fff;
  border-radius: 12px;
  padding: 16px 20px;
  overflow-y: auto;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.panel-title {
  font-size: 22px;
  font-weight: 600;
  color: #3366ff;
  text-align: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

/* 输入区域 */
.input-section {
  margin-bottom: 24px;
}

.textarea-box {
  position: relative;
  margin-bottom: 16px;
}

.input-textarea {
  width: 100%;
  height: 140px;
  padding: 12px;
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

.input-textarea::placeholder {
  color: #ccc;
}

.char-count {
  position: absolute;
  right: 10px;
  bottom: 8px;
  font-size: 13px;
  color: #999;
}

.generate-btn {
  width: 100%;
  padding: 12px 0;
  background: #3366ff;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

/* 内容区域 */
.content-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content-box {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 12px;
  overflow-y: auto;
  min-height: 150px;
}

.md-content {
  font-size: 14px;
  line-height: 2;
  color: #333;
}

.md-h1 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.md-h2 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  padding-left: 8px;
}

.md-h3 {
  font-size: 14px;
  margin-bottom: 2px;
  padding-left: 16px;
}

/* ===== 右侧预览面板 ===== */
.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  min-width: 0;
  overflow: hidden;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #eee;
  flex-shrink: 0;
}

.panel-title-text {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #3366ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}

/* 思维导图区域 */
.mindmap-area {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.chart-container {
  width: 100%;
  height: 100%;
}

/* 缩放控制按钮 */
.zoom-controls {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  gap: 4px;
}

.zoom-btn {
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
</style>