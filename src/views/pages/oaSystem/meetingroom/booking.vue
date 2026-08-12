<template>
  <div class="page-wrapper">
    <div class="app">
      <!-- top -->
      <div class="app-top">
        <form @submit.prevent="handleSearch">
          <div class="top-tab">
            <div class="top-row">
              <div class="tab-a">
                <span>单据编号</span>
                <input type="text" placeholder="请输入单据编号" v-model="searchForm.billCode" />
              </div>
              <div class="tab-a">
                <span>单据状态</span>
                <input type="text" placeholder="请输入单据状态" v-model="searchForm.processStatus" />
              </div>
              <div class="tab-a">
                <span>会议室名称</span>
                <input type="text" placeholder="请输入会议室名称" v-model="searchForm.roomName" />
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
          <div class="main-title">会议室预定申请单列表</div>
          <div class="main-buttons">
            <button class="btn btn-primary" @click="handleAdd">+新增</button>
            <button class="btn btn-primary">导出</button>
            <button class="btn">批量删除</button>
            <button class="icon-btn" @click="handleSearch">🔍</button>
            <button class="icon-btn" @click="loadBookingList">⟳</button>
            <button class="icon-btn">⛶</button>
            <button class="icon-btn">☷</button>
          </div>
        </div>
        <div class="table-box">
          <table class="manage-table">
            <thead>
              <tr>
                <th class="sticky-col first-col">单据类型</th>
                <th class="sticky-col second-col">单据编号</th>
                <th>摘要</th>
                <th>所属公司</th>
                <th>所属部门</th>
                <th>流程状态</th>
                <th>发起时间</th>
                <th>结束时间</th>
                <th class="operation-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in rows" :key="item.id">
                <td class="sticky-col first-col">{{ item.type }}</td>
                <td class="sticky-col second-col"><a class="link-number" href="#">{{ item.number }}</a></td>
                <td>{{ item.summary }}</td>
                <td>{{ item.company }}</td>
                <td>{{ item.department }}</td>
                <td><span :class="['status-tag', item.statusClass]">{{ item.processStatus }}</span></td>
                <td>{{ item.startTime }}</td>
                <td>{{ item.endTime }}</td>
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
// ========== 导入会议室预订相关API ==========
// getMeetingRoomBookingPage: 分页查询会议室预订列表
// getMeetingRoomBooking: 获取单条预订详情
// saveMeetingRoomBooking: 保存预订（草稿）
// submitMeetingRoomBooking: 提交预订
// deleteMeetingRoomBooking: 删除预订
import { getMeetingRoomBookingPage, deleteMeetingRoomBooking } from '#/api/oa/meetingroom/booking';

export default {
  data() {
    return {
      // ========== 搜索表单数据 ==========
      searchForm: {
        billCode: "",        // 单据编号
        processStatus: "",   // 单据状态
        roomName: "",        // 会议室名称
      },

      // ========== 分页数据 ==========
      pagination: {
        pageNo: 1,        // 当前页码
        pageSize: 10,     // 每页条数
        total: 0,         // 总记录数
      },

      // ========== 表格数据（从接口获取，初始为空） ==========
      rows: [],
    };
  },

  // ========== 页面挂载后自动加载列表 ==========
  mounted() {
    this.loadBookingList();
  },

  methods: {
    // ========== 接口对接方法：获取会议室预订列表 ==========
    async loadBookingList() {
      try {
        // 调用分页查询接口，传入页码、每页条数和搜索条件
        const data = await getMeetingRoomBookingPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          billCode: this.searchForm.billCode,
          processStatus: this.searchForm.processStatus,
          roomName: this.searchForm.roomName,
        });

        // 将接口返回的数据转换为页面需要的格式
        // 接口字段 -> 页面字段映射：
        // id -> id（预订ID）
        // billCode -> number（单据编号）
        // meetingTitle -> summary（会议主题，作为摘要显示）
        // companyName -> company（所属公司）
        // deptName -> department（所属部门）
        // processStatus -> processStatus（流程状态：1=审批中，2=已完成，3=已取消，4=已驳回，10=已完成）
        // createTime -> startTime（创建时间，注意：接口返回的是字符串格式）
        // meetingEndTime -> endTime（会议结束时间，时间戳格式）
        this.rows = data.list.map((item) => ({
          id: item.id,
          type: "会议室预订",
          number: item.billCode || "",
          summary: item.meetingTitle || "",
          company: item.companyName || "",
          department: item.deptName || "",
          processStatus: this.getStatusText(item.processStatus),
          statusClass: this.getStatusClass(item.processStatus),
          startTime: item.createTime || "",
          endTime: this.formatTimestamp(item.meetingEndTime),
        }));

        // 更新总记录数
        this.pagination.total = data.total;
      } catch (err) {
        // 接口调用失败时打印错误信息
        console.error("获取会议室预订列表失败", err);
      }
    },

    // ========== 工具方法：流程状态编码转中文文本 ==========
    getStatusText(status) {
      const map = { 1: "审批中", 2: "已完成", 3: "已取消", 4: "已驳回", 10: "已完成" };
      return map[status] || "未知";
    },

    // ========== 工具方法：流程状态对应样式类名 ==========
    // 不同状态显示不同颜色：审批中=蓝色，已完成=绿色，已取消=灰色，已驳回=红色
    getStatusClass(status) {
      const map = { 1: "status-blue", 2: "status-green", 3: "status-gray", 4: "status-red", 10: "status-green" };
      return map[status] || "status-gray";
    },

    // ========== 工具方法：时间戳格式化 ==========
    // 将后端返回的毫秒时间戳转换为 "YYYY-MM-DD HH:mm:ss" 格式
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

    // ========== 搜索按钮 ==========
    handleSearch() {
      // 搜索时重置到第一页
      this.pagination.pageNo = 1;
      this.loadBookingList();
    },

    // ========== 重置按钮 ==========
    handleReset() {
      // 清空搜索条件
      this.searchForm = { billCode: "", processStatus: "", roomName: "" };
      // 重置到第一页
      this.pagination.pageNo = 1;
      this.loadBookingList();
    },

    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadBookingList();
    },

    // ========== 新增预订 ==========
    handleAdd() {
      // TODO: 打开新增会议室预订弹窗
      alert("新增会议室预订功能待实现");
    },

    // ========== 查看详情 ==========
    handleDetail(row) {
      // TODO: 打开预订详情弹窗
      alert(`会议室预订详情：${row.number}`);
    },

    // ========== 删除预订 ==========
    async handleDelete(row) {
      // 弹出确认框，防止误删
      if (!confirm(`确定要删除会议室预订「${row.number}」吗？`)) return;
      try {
        // 调用删除接口
        await deleteMeetingRoomBooking(row.id);
        alert("删除成功");
        // 删除成功后重新加载列表
        this.loadBookingList();
      } catch (err) {
        console.error("删除会议室预订失败", err);
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
  flex: 0 0 238px;
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
