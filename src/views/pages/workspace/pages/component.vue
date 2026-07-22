<template>
  <div class="page-wrapper">
    <div class="app">
      <!-- top -->
      <div class="app-top">
        <form action="">
          <div class="top-tab">
            <div class="tab-a">
              <span>首页名称</span>
              <input type="text" placeholder="请输入首页名称" />
            </div>
            <div class="tab-a">
              <span>首页编码</span>
              <input type="text" placeholder="请输入首页编码" />
            </div>
            <div class="tab-a">
              <span>首页状态</span>
              <input type="text" placeholder="请选择首页状态" />
            </div>
            <div class="tab-a tab-c">
                <span>组件状态</span>
                <input type="text" placeholder="请选择组件状态" />
            </div>
            <div class="tab-b">
              <button>重置</button>
              <button>搜索</button>
              <span>收起^</span>
            </div>
          </div>
        </form>
      </div>
      <!-- ———————————————————————————————————————— -->
       <!-- 表格 -->
      <div class="app-main">
        <div class="main-header">
          <div class="main-title">组件管理</div>
          <div class="main-buttons">
            <button class="btn btn-primary">+ 新增</button>
            <button class="icon-btn">🔍</button>
            <button class="icon-btn">⟳</button>
            <button class="icon-btn">⛶</button>
            <button class="icon-btn">☷</button>
          </div>
        </div>
        <div class="table-box">
          <table class="manage-table">
            <thead>
              <tr>
                <th style="width:60px"><input type="checkbox" /></th>
                <th style="width:80px">组件编号</th>
                <th style="width:180px">组件名称</th>
                <th style="width:180px">组件编码</th>
                <th style="width:100px">组件分类</th>
                <th style="width:260px">组件描述</th>
                <th style="width:100px">默认宽度</th>
                <th style="width:100px">默认高度</th>
                <th style="width:120px">组件状态</th>
                <th style="width:100px">显示顺序</th>
                <th style="width:180px">创建时间</th>
                <th style="width:160px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in rows" :key="item.id">
                <td><input type="checkbox" /></td>
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.desc }}</td>
                <td>{{ item.defaultWidth }}</td>
                <td>{{ item.defaultHeight }}</td>
                <td><span class="status-tag status-blue">{{ item.status }}</span></td>
                <td>{{ item.order }}</td>
                <td>{{ item.createTime }}</td>
                <td class="operation-cell">
                  <a href="#" class="op-link">编辑</a>
                  <a href="#" class="op-link">预览</a>
                  <a href="#" class="op-link op-del">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-footer">
          <div class="footer-left">共 {{ rows.length }} 条记录</div>
          <div class="footer-right">
            <span class="page-size">10条/页</span>
            <div class="pager">
              <button>&lt;&lt;</button>
              <button>&lt;</button>
              <button class="active">1</button>
              <button>&gt;</button>
              <button>&gt;&gt;</button>
            </div>
          </div>
        </div>
      </div>
      <!-- ———————————————————————— -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        {
          id: 4,
          name: '快捷导航',
          code: 'workbench_quick_nav',
          category: 4,
          desc: '展示快捷导航入口',
          defaultWidth: 12,
          defaultHeight: 3,
          status: '开启',
          order: 1,
          createTime: '2026-01-02 08:01:53',
        },
        {
          id: 3,
          name: '项目列表',
          code: 'workbench_project',
          category: 3,
          desc: '展示项目卡片列表',
          defaultWidth: 12,
          defaultHeight: 6,
          status: '开启',
          order: 1,
          createTime: '2026-01-02 08:01:53',
        },
        {
          id: 2,
          name: '访问来源图表',
          code: 'analytics_visits_source',
          category: 2,
          desc: '展示访问来源的饼图分析',
          defaultWidth: 12,
          defaultHeight: 4,
          status: '开启',
          order: 1,
          createTime: '2026-01-02 08:01:53',
        },
        {
          id: 1,
          name: '访问统计',
          code: 'analytics_visits',
          category: 1,
          desc: '展示网站访问数据统计卡片',
          defaultWidth: 6,
          defaultHeight: 2,
          status: '开启',
          order: 1,
          createTime: '2026-01-02 08:01:52',
        },
        {
          id: 5,
          name: '动态列表',
          code: 'workbench_trends',
          category: 3,
          desc: '展示最新动态列表',
          defaultWidth: 12,
          defaultHeight: 6,
          status: '开启',
          order: 2,
          createTime: '2026-01-02 08:01:53',
        },
        {
          id: 20,
          name: '欢迎组件',
          code: 'workbench_welcome',
          category: 2,
          desc: '展示欢迎信息、用户信息和天气...',
          defaultWidth: 24,
          defaultHeight: 4,
          status: '开启',
          order: 5,
          createTime: '2026-01-09 16:00:00',
        },
        {
          id: 21,
          name: '通知公告',
          code: 'workbench_notice',
          category: 2,
          desc: '展示系统通知公告列表，支持徽标提醒',
          defaultWidth: 12,
          defaultHeight: 8,
          status: '开启',
          order: 6,
          createTime: '2026-01-09 16:00:00',
        },
        {
          id: 30,
          name: '我的日程',
          code: 'workbench_schedule',
          category: 3,
          desc: '展示日程日历和待办事项，支持拖曳',
          defaultWidth: 12,
          defaultHeight: 10,
          status: '开启',
          order: 7,
          createTime: '2026-01-14 05:51:56',
        },
        {
          id: 22,
          name: '应用中心',
          code: 'workbench_app_center',
          category: 2,
          desc: '展示常用应用，支持拖拽排序和自定义',
          defaultWidth: 12,
          defaultHeight: 8,
          status: '开启',
          order: 7,
          createTime: '2026-01-09 16:00:00',
        },
        {
          id: 10,
          name: '任务列表',
          code: 'workbench_task_list',
          category: 1,
          desc: '展示我的单据、待办任务、已办任务',
          defaultWidth: 24,
          defaultHeight: 8,
          status: '开启',
          order: 10,
          createTime: '2026-01-08 10:00:00',
        },
      ],
    }
  },
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
  height: 760px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
/* top */
.app-top {
  width: 100%;
  height: 128px;
  background-color: #fff;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-tab {
  width: 986px;
  height: 100px;
  display: flex;
  position: relative;
  /* border: 1px solid red; */
}
.tab-a {
  width: 331px;
  height: 42px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tab-a span {
  width: 100px;
  font-size: 13px;
  font-weight: 500;
  margin-right: 8px;
  text-align: right;
}
.tab-a input {
  width: 221px;
  height: 30px;
  padding: 8px;
  border-radius: 8px;
  border: 0.5px solid #ccc;
}
.tab-a input:focus {
  outline: none;
  border: 0.5px solid #409eff;
}
.tab-a input:hover {
  border: 0.5px solid #409eff;
}
.tab-c{
    position: absolute;
    left: 0;
    bottom: 0;
}
.tab-b {
  width: 331px;
  height: 40px;
  /* border: 1px solid red; */
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: right;
}
.tab-b button {
  width: 64px;
  height: 32px;
  border-radius: 10px;
  border: none;
  margin-right: 10px;
}
.tab-b button:nth-child(1){
    background-color: #fff;
    color: black;
    border: 1px solid #ccc;
}
.tab-b button:nth-child(1):hover{
    border: 1px solid #409eff;
    color: #409eff;
    cursor: pointer;
}
.tab-b button:nth-child(2){
    background-color: #409eff;
    color: white;
}
.tab-b button:nth-child(2):hover{
    background-color: #66b1ff;
    cursor: pointer;
}
.tab-b span {
  font-size: 14px;
  font-weight: 500;
  color: #409eff;
  cursor: pointer;
}
/* ———————————————————————— */
/* 表格 */
.app-main {
  margin-top: 10px;
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
.main-title {
  font-size: 16px;
  font-weight: 700;
  color: #303133;
}
.main-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
}
.btn {
  padding: 6px 14px;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  font-size: 12px;
}
.btn-primary {
  background-color: #409eff;
  color: #fff;
}
.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #dcdfe6;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.table-box {
  flex: 1;
  overflow: auto;
  max-width: 100%;
  border: 1px solid #e4e7ed; /* 外边框 */
  border-radius: 6px;
  background: #fff;
}
.manage-table {
  width: 100%;
  border-collapse: collapse;
  min-width: max-content;
  table-layout: auto;
}
.manage-table th,
.manage-table td {
  padding: 12px 10px;
  text-align: left;
  font-size: 12px;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
}
.manage-table thead {
  background: #f8f9fb;
}
.manage-table th:first-child,
.manage-table td:first-child {
  width: 60px;
}

/* 固定最后一列 */
.manage-table th:last-child,
.manage-table td:last-child {
  position: sticky;
  right: 0;
  background: #fff;
  z-index: 3;
  box-shadow: -6px 0 8px -6px rgba(0,0,0,0.06);
}
.manage-table thead th:last-child {
  z-index: 4;
}
.status-tag {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 8px;
  background: #f0f9eb;
  color: #67c23a;
  font-size: 11px;
}
.operation-cell {
  color: #909399;
}
.status-blue{
  background: #f0f6ff;
  color: #409eff;
  padding: 3px 6px;
  border-radius: 8px;
  font-size: 11px;
}
.op-btn{
  margin-right: 6px;
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid #dcdfe6;
  background: #fff;
  cursor: pointer;
  font-size: 12px;
}
.op-del{
  color: #f56c6c;
  border-color: #f2cccc;
}
.op-link{
  margin-right: 12px;
  color: #409eff;
  text-decoration: none;
  font-size: 12px;
}
.op-link:hover{
  text-decoration: underline;
}
.operation-cell a.op-del{
  color: #f56c6c;
}
.table-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  color: #666;
  font-size: 14px;
}
.footer-right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.page-size {
  padding: 4px 10px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background: #fafbfc;
  font-size: 12px;
}
.pager {
  display: flex;
  gap: 8px;
}
.pager button {
  width: 28px;
  height: 28px;
  border: 1px solid #dcdfe6;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}
.pager button.active {
  background: #409eff;
  color: #fff;
  border-color: #409eff;
}
/* —————————————— */
</style>
