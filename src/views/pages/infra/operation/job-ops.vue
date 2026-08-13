<template>
  <div class="title">定时任务运维</div>

  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <!-- 顶部工具栏 -->
        <div class="toolbar">
          <div class="filter-dropdown">
            <span>筛选模块</span>
            <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          <div class="search-box">
            <input type="text" placeholder="搜索任务名称 / Handler / 类名" v-model="searchForm.keyword" @keyup.enter="handleSearch" />
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <button class="btn-refresh" @click="loadTaskList">
            <svg class="refresh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 4 23 10 17 10"/>
              <polyline points="1 20 1 14 7 14"/>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
            </svg>
            刷新
          </button>
          <span class="task-count">显示 {{ taskList.length }} / {{ pagination.total }} 个任务</span>
        </div>

        <!-- 卡片网格 -->
        <div class="card-grid">
          <div
            v-for="task in taskList"
            :key="task.id"
            class="task-card"
          >
            <!-- 卡片头部 -->
            <div class="card-header">
              <div class="card-title-row">
                <span :class="['tag', task.tagClass]">{{ task.tag }}</span>
                <span class="task-name">{{ task.name }}</span>
              </div>
              <button class="param-btn" title="参数">参</button>
            </div>

            <!-- 卡片描述 -->
            <p class="task-desc">{{ task.desc }}</p>

            <!-- 卡片信息 -->
            <div class="task-info">
              <div class="info-row">
                <span class="info-label">Handler:</span>
                <span class="info-value handler-value">{{ task.handler }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">类名:</span>
                <span class="info-value">{{ task.className }}</span>
              </div>
            </div>

            <!-- 立即执行按钮 -->
            <div class="card-footer">
              <button class="btn-exec" @click="handleRun(task)">立即执行</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入定时任务API
import { getJobPage, runJob } from '#/api/infra/job';

export default {
  name: 'TaskOperation',
  data() {
    return {
      // 搜索表单
      searchForm: {
        keyword: ''
      },
      // 分页数据
      pagination: {
        pageNo: 1,
        pageSize: 40,
        total: 0
      },
      // 任务列表
      taskList: []
    }
  },
  mounted() {
    // 页面加载时获取任务列表
    this.loadTaskList();
  },
  methods: {
    // 加载任务列表
    async loadTaskList() {
      try {
        const res = await getJobPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          name: this.searchForm.keyword
        });
        // 将API返回的数据转换为卡片需要的格式
        this.taskList = res.list.map((item) => ({
          id: item.id,
          tag: item.status === 0 ? '运行中' : '已暂停',
          tagClass: item.status === 0 ? 'tag-purple' : 'tag-gray',
          name: item.name,
          desc: item.remark || '暂无描述',
          handler: item.handlerName,
          className: item.handlerName
        }));
        this.pagination.total = res.total;
      } catch (error) {
        console.error('加载任务列表失败:', error);
      }
    },
    // 搜索
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadTaskList();
    },
    // 立即执行任务
    async handleRun(task) {
      if (!confirm(`确定要立即执行任务【${task.name}】吗？`)) return;
      try {
        await runJob(task.id);
        alert('任务执行成功');
      } catch (error) {
        console.error('执行任务失败:', error);
        alert('任务执行失败');
      }
    }
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  top: 1px;
  left: -0.2px;
  width: 1030px;
  height: 69px;
  background-color: #fff;
  padding: 16px 24px;
  font-size: 18px;
  font-weight: 600;
}

.page-wrapper {
  width: 1030px;
  display: grid;
  place-items: center;
  background-color: #ecebeb;
  position: relative;
}

.app {
  width: 1006px;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}

.app-main {
  width: 100%;
  margin-top: 70px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

/* 工具栏 */
.toolbar {
  width: 70%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
  margin-bottom: 16px;
}
.filter-dropdown {
  height: 40px;
  padding: 0 16px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
  color: #999;
  min-width: 160px;
}
.dropdown-arrow {
  width: 16px;
  height: 16px;
  margin-left: auto;
  color: #999;
}
.search-box {
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  position: relative;
}
.search-box input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  color: #333;
  background: transparent;
}
.search-box input::placeholder {
  color: #bbb;
}
.search-icon {
  width: 20px;
  height: 20px;
  color: #999;
  margin-left: 8px;
}
.btn-refresh {
  height: 40px;
  padding: 0 20px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  transition: all 0.2s;
}
.btn-refresh:hover {
  border-color: #3366ff;
  color: #3366ff;
}
.refresh-icon {
  width: 18px;
  height: 18px;
}
.task-count {
  font-size: 16px;
  color: #999;
  margin-left: auto;
}

/* 卡片网格 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

/* 任务卡片 */
.task-card {
  background: #fff;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e8e8e8;
  transition: all 0.2s;
}
.task-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  border-color: #d0d0d0;
}

/* 卡片头部 */
.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
}
.card-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}
.tag {
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
}
.tag-purple {
  background: #f3e8ff;
  color: #9333ea;
  border: 1px solid #e9d5ff;
}
.tag-gray {
  background: #f5f5f5;
  color: #666;
  border: 1px solid #e8e8e8;
}
.task-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.param-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: #f0f0f0;
  color: #999;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s;
}
.param-btn:hover {
  background: #e0e0e0;
  color: #666;
}

/* 任务描述 */
.task-desc {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 20px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 任务信息 */
.task-info {
  margin-bottom: 16px;
}
.info-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
}
.info-row:last-child {
  margin-bottom: 0;
}
.info-label {
  color: #555;
  margin-right: 8px;
  font-weight: 500;
}
.info-value {
  color: #666;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 15px;
}
.handler-value {
  color: #3366ff;
  background: #eef2ff;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #c7d2fe;
  cursor: pointer;
}

/* 卡片底部 */
.card-footer {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
}
.btn-exec {
  padding: 8px 20px;
  background: #3366ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-exec:hover {
  background: #2952cc;
}
</style>