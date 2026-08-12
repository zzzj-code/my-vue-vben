<template>
  <div class="page-wrapper">
    <div class="app">
      <!-- top -->
      <div class="app-top">
        <form @submit.prevent="handleSearch">
          <div class="top-tab">
            <div class="top-row">
              <div class="tab-a">
                <span>请假类型</span>
                <input type="text" placeholder="请输入请假类型" v-model="searchForm.type" />
              </div>
              <div class="tab-a">
                <span>创建时间</span>
                <input type="text" placeholder="请输入创建时间" />
              </div>
              <div class="tab-a">
                <span>审批结果</span>
                <input type="text" placeholder="请输入审批结果" v-model="searchForm.status" />
              </div>
            </div>
            <div class="top-row">
              <div class="tab-a">
                <span>原因</span>
                <input type="text" placeholder="请输入原因" />
              </div>
              <div class="tab-b">
                <button type="button" @click="handleReset">重置</button>
                <button type="submit">搜索</button>
                <span>收起^</span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- ———————————————————————————————————————— -->
       <!-- 表格 -->
      <div class="app-main">
        <div class="main-header">
          <div class="main-title">请假列表</div>
          <div class="main-buttons">
            <button class="btn btn-primary" @click="handleAdd">+ 发起请假</button>
            <button class="icon-btn">🔍</button>
            <button class="icon-btn" @click="loadLeaveList">⟳</button>
            <button class="icon-btn">⛶</button>
            <button class="icon-btn">☷</button>
          </div>
        </div>
        <div class="table-box">
          <table class="manage-table">
            <thead>
              <tr>
                <th>申请编号</th>
                <th>状态</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>请假类型</th>
                <th>原因</th>
                <th>申请时间</th>
                <th class="operation-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in rows" :key="item.id">
                <td>{{ item.applyNo }}</td>
                <td><span :class="['status-tag', item.statusClass]">{{ item.statusText }}</span></td>
                <td>{{ item.startTime }}</td>
                <td>{{ item.endTime }}</td>
                <td>{{ item.typeText }}</td>
                <td><a class="link-number" href="#" @click.prevent="handleDetail(item)">{{ item.reason }}</a></td>
                <td>{{ item.applyTime }}</td>
                <td class="operation-col">
                  <a href="#" class="op-link" @click.prevent="handleDetail(item)">详情</a>
                  <a href="#" class="op-link op-del" @click.prevent="handleDelete(item)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-footer">
          <div class="footer-left">共 {{ pagination.total }} 条记录</div>
          <div class="footer-right">
            <span class="page-size">{{ pagination.pageSize }}条/页</span>
            <div class="pager">
              <button @click="handlePageChange(1)">&lt;&lt;</button>
              <button @click="handlePageChange(Math.max(1, pagination.pageNo - 1))" :disabled="pagination.pageNo <= 1">&lt;</button>
              <button class="active">{{ pagination.pageNo }}</button>
              <button @click="handlePageChange(pagination.pageNo + 1)">&gt;</button>
              <button @click="handlePageChange(Math.ceil(pagination.total / pagination.pageSize))">&gt;&gt;</button>
            </div>
          </div>
        </div>
      </div>
      <!-- ———————————————————————— -->
    </div>
  </div>
</template>

<script>
// 导入请假流程相关API
import { getLeavePage } from '#/api/bpm/oa/leave';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        type: "",
        status: "",
      },
      // 分页
      pagination: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      // 表格数据
      rows: [],
    };
  },
  mounted() {
    this.loadLeaveList();
  },
  methods: {
    // 获取请假列表
    async loadLeaveList() {
      try {
        const data = await getLeavePage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          type: this.searchForm.type,
          status: this.searchForm.status,
        });
        // 将接口返回的数据转换为页面需要的格式
        this.rows = data.list.map((item) => ({
          id: item.id,
          applyNo: `QJ-${String(item.id).padStart(6, "0")}`,
          typeText: this.getTypeText(item.type),
          reason: item.reason || "",
          startTime: this.formatTimestamp(item.startTime),
          endTime: this.formatTimestamp(item.endTime),
          applyTime: this.formatTimestamp(item.createTime),
          statusText: this.getStatusText(item.status),
          statusClass: this.getStatusClass(item.status),
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取请假列表失败", err);
      }
    },
    // 请假类型文本
    getTypeText(type) {
      const map = { 1: "事假", 2: "病假", 3: "年假", 4: "婚假", 5: "产假", 6: "丧假" };
      return map[type] || `类型${type}`;
    },
    // 状态文本
    getStatusText(status) {
      const map = { 1: "审批中", 2: "已完成", 3: "已取消", 4: "已驳回" };
      return map[status] || "未知";
    },
    // 状态样式
    getStatusClass(status) {
      const map = { 1: "status-blue", 2: "status-green", 3: "status-gray", 4: "status-red" };
      return map[status] || "status-gray";
    },
    // 时间戳格式化
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
    // 搜索
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadLeaveList();
    },
    // 重置
    handleReset() {
      this.searchForm = { type: "", status: "" };
      this.pagination.pageNo = 1;
      this.loadLeaveList();
    },
    // 分页
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadLeaveList();
    },
    // 发起请假
    handleAdd() {
      alert("发起请假功能待实现");
    },
    // 详情
    handleDetail(row) {
      alert(`请假详情：${row.applyNo}`);
    },
    // 删除
    handleDelete(row) {
      alert(`删除请假：${row.applyNo}（功能待实现）`);
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
  padding: 18px 0;
  background-color: #fff;
  border-radius: 4px 4px 0 0;
}
.top-tab {
  width: 100%;
  max-width: 986px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.top-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.tab-a {
  flex: 0 0 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
}
.tab-a span {
  width: 88px;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  margin-right: 8px;
}
.tab-a input {
  flex: 1;
  min-width: 0;
  height: 34px;
  padding: 8px 10px;
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex: 1;
}
.tab-b button {
  width: 64px;
  height: 32px;
  border-radius: 10px;
  border: none;
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
  height: 600px;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
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
  border-radius: 10px;
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
    overflow-x: auto;
    overflow-y: auto;
    max-width: 100%;
    border: 1px solid #e4e7ed;
    border-radius: 6px;
    background: #fff;
  }
  .manage-table {
    width: max-content;
    min-width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
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
.manage-table th.first-col,
.manage-table td.first-col {
  width: 140px;
  position: sticky;
  left: 0;
  background: #fff;
  z-index: 4;
}
.manage-table th.second-col,
.manage-table td.second-col {
  width: 220px;
  position: sticky;
  left: 140px;
  background: #fff;
  z-index: 4;
}
.manage-table th.operation-col,
.manage-table td.operation-col {
  width: 160px;
  position: sticky;
  right: 0;
  background: #fff;
  z-index: 3;
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
