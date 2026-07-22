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
          <div class="main-title">首页管理</div>
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
                <th style="width:80px">首页编号</th>
                <th style="width:180px">首页名称</th>
                <th style="width:180px">首页编码</th>
                <th style="width:260px">首页描述</th>
                <th style="width:120px">使用状态</th>
                <th style="width:120px">启用状态</th>
                <th style="width:120px">显示顺序</th>
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
                <td>{{ item.desc }}</td>
                <td>
                  <span class="status-tag status-green">{{ item.useStatus }}</span>
                </td>
                <td>
                  <span class="status-tag status-blue">{{ item.enableStatus }}</span>
                </td>
                <td>{{ item.order }}</td>
                <td>{{ item.createTime }}</td>
                <td class="operation-cell">
                  <a href="#" class="op-link">编辑</a>
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
          id: 1,
          name: '默认工作台',
          code: 'default_workspace',
          desc: '系统默认首页',
          useStatus: '使用中',
          enableStatus: '开启',
          order: 0,
          createTime: '2026-01-02 07:49:34',
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
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
  text-align: right;
}
.tab-a input {
  width: 221px;
  height: 34px;
  padding: 10px;
  border-radius: 10px;
  border: 0.5px solid #ccc;
}
.tab-a input:focus {
  outline: none;
  border: 0.5px solid #409eff;
}
.tab-a input:hover {
  border: 0.5px solid #409eff;
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
  font-size: 18px;
  font-weight: 700;
  color: #303133;
}
.main-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
}
.btn {
  padding: 8px 18px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
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
    overflow: auto; /* 改为可滚动，超出显示滚动条 */
    max-width: 100%;
    border: 1px solid #e4e7ed; /* 外边框 */
    border-radius: 6px;
    background: #fff;
  }
  .manage-table {
    width: 100%;
    border-collapse: collapse;
    min-width: max-content; /* 当列过多时允许表格超出父宽度并触发横向滚动 */
    table-layout: auto;
  }
.manage-table th,
.manage-table td {
  padding: 16px 12px;
  text-align: left;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
}

/* 固定最后一列到容器右侧（在可滚动容器中使用 sticky） */
.manage-table th:last-child,
.manage-table td:last-child {
  position: sticky;
  right: 0;
  background: #fff;
  z-index: 3;
  box-shadow: -6px 0 8px -6px rgba(0, 0, 0, 0.08);
}

.manage-table thead th:last-child {
  z-index: 4; /* 表头优先级更高，避免被遮挡 */
}
.manage-table thead {
  background: #f8f9fb;
}
.manage-table th:first-child,
.manage-table td:first-child {
  width: 60px;
}
.manage-table th:last-child,
.manage-table td:last-child {
  width: 120px;
}
.status-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  background: #f0f9eb;
  color: #67c23a;
  font-size: 12px;
}
.operation-cell {
  color: #909399;
}
.status-green{
  background: #f0f9eb;
  color: #67c23a;
}
.status-blue{
  background: #f0f6ff;
  color: #409eff;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
}
.op-btn{
  margin-right: 8px;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #dcdfe6;
  background: #fff;
  cursor: pointer;
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
  padding: 6px 12px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background: #fafbfc;
}
.pager {
  display: flex;
  gap: 8px;
}
.pager button {
  width: 32px;
  height: 32px;
  border: 1px solid #dcdfe6;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.pager button.active {
  background: #409eff;
  color: #fff;
  border-color: #409eff;
}
/* —————————————— */
</style>
