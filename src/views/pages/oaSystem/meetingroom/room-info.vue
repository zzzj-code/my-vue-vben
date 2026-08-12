<template>
  <div class="page-wrapper">
    <div class="app">
      <!-- top -->
      <div class="app-top">
        <form @submit.prevent="handleSearch">
          <div class="top-tab">
            <div class="top-row">
              <div class="tab-a">
                <span>会议室名称</span>
                <input type="text" placeholder="请输入会议室名称" v-model="searchForm.roomName" />
              </div>
              <div class="tab-a">
                <span>会议室位置</span>
                <input type="text" placeholder="请输入会议室位置" v-model="searchForm.roomLocation" />
              </div>
              <div class="tab-a">
                <span>会议室类型</span>
                <input type="text" placeholder="请输入会议室类型" v-model="searchForm.roomType" />
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
          <div class="main-title">会议室信息列表</div>
          <div class="main-buttons">
            <button class="btn btn-primary" @click="handleAdd">+新增会议室信息</button>
            <button class="btn btn-primary">导出</button>
            <button class="btn">批量删除</button>
            <button class="icon-btn" @click="handleSearch">🔍</button>
            <button class="icon-btn" @click="loadRoomList">⟳</button>
            <button class="icon-btn">⛶</button>
            <button class="icon-btn">☷</button>
          </div>
        </div>
        <div class="table-box">
          <table class="manage-table">
            <thead>
              <tr>
                <th class="sticky-col first-col">会议室名称</th>
                <th class="sticky-col second-col">会议室位置</th>
                <th>会议室类型</th>
                <th>管理员</th>
                <th>管理员电话</th>
                <th>可用状态</th>
                <th>座位数</th>
                <th>设备</th>
                <th>创建时间</th>
                <th class="operation-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in rows" :key="item.id">
                <td class="sticky-col first-col">{{ item.roomName }}</td>
                <td class="sticky-col second-col">{{ item.roomLocation }}</td>
                <td>{{ item.roomTypeText }}</td>
                <td>{{ item.managerName }}</td>
                <td>{{ item.managerPhone }}</td>
                <td><span :class="['status-tag', item.statusClass]">{{ item.status }}</span></td>
                <td>{{ item.seatCount }}</td>
                <td>{{ item.equipmentText }}</td>
                <td>{{ item.createTime }}</td>
                <td class="operation-col">
                  <a href="#" class="op-link" @click.prevent="handleDetail(item)">详情</a>
                  <a href="#" class="op-link" @click.prevent="handleEdit(item)">编辑</a>
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
// ========== 导入会议室信息相关API ==========
// getMeetingRoomPage: 分页查询会议室列表
// getMeetingRoom: 获取单条会议室详情
// createMeetingRoom: 新增会议室
// updateMeetingRoom: 更新会议室
// deleteMeetingRoom: 删除会议室
import { getMeetingRoomPage, deleteMeetingRoom } from '#/api/oa/meetingroom/roominfo';

export default {
  data() {
    return {
      // ========== 搜索表单数据 ==========
      searchForm: {
        roomName: "",      // 会议室名称
        roomLocation: "",  // 会议室位置
        roomType: "",      // 会议室类型
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
    this.loadRoomList();
  },

  methods: {
    // ========== 接口对接方法：获取会议室列表 ==========
    async loadRoomList() {
      try {
        // 调用分页查询接口，传入页码、每页条数和搜索条件
        const data = await getMeetingRoomPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          roomName: this.searchForm.roomName,
          roomLocation: this.searchForm.roomLocation,
          roomType: this.searchForm.roomType,
        });

        // 将接口返回的数据转换为页面需要的格式
        // 接口字段 -> 页面字段映射：
        // id -> id（会议室ID）
        // roomName -> roomName（会议室名称）
        // roomLocation -> roomLocation（会议室位置）
        // roomType -> roomTypeText（会议室类型：1=小会议室，2=中会议室，3=大会议室，4=多功能厅）
        // managerName -> managerName（管理员姓名）
        // managerPhone -> managerPhone（管理员电话）
        // availableStatus -> status（可用状态：0=可用，1=不可用）
        // seatCount -> seatCount（座位数）
        // equipment -> equipmentText（设备列表，数组转字符串）
        // allowBooking -> allowBookingText（是否允许预订）
        // createTime -> createTime（创建时间）
        this.rows = data.list.map((item) => ({
          id: item.id,
          roomName: item.roomName || "",
          roomLocation: item.roomLocation || "",
          roomTypeText: this.getRoomTypeText(item.roomType),
          managerName: item.managerName || "",
          managerPhone: item.managerPhone || "",
          status: item.availableStatus === 0 ? "可用" : "不可用",
          statusClass: item.availableStatus === 0 ? "status-green" : "status-red",
          seatCount: item.seatCount || 0,
          equipmentText: this.getEquipmentText(item.equipment),
          allowBookingText: item.allowBooking ? "允许" : "不允许",
          createTime: this.formatTimestamp(item.createTime),
        }));

        // 更新总记录数
        this.pagination.total = data.total;
      } catch (err) {
        // 接口调用失败时打印错误信息
        console.error("获取会议室列表失败", err);
      }
    },

    // ========== 工具方法：会议室类型编码转中文文本 ==========
    getRoomTypeText(roomType) {
      const map = { 1: "小会议室", 2: "中会议室", 3: "大会议室", 4: "多功能厅" };
      return map[roomType] || "其他";
    },

    // ========== 工具方法：设备列表转中文文本 ==========
    // 接口返回的equipment是英文标识数组，需要转换为中文显示
    getEquipmentText(equipment) {
      if (!equipment || !Array.isArray(equipment)) return "";
      const map = {
        tv: "电视",
        computer: "电脑",
        remote: "遥控器",
        projector: "投影仪",
        water_dispenser: "饮水机",
        locker: "储物柜",
      };
      return equipment.map((e) => map[e] || e).join("、");
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
      this.loadRoomList();
    },

    // ========== 重置按钮 ==========
    handleReset() {
      // 清空搜索条件
      this.searchForm = { roomName: "", roomLocation: "", roomType: "" };
      // 重置到第一页
      this.pagination.pageNo = 1;
      this.loadRoomList();
    },

    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadRoomList();
    },

    // ========== 新增会议室 ==========
    handleAdd() {
      // TODO: 打开新增会议室弹窗
      alert("新增会议室功能待实现");
    },

    // ========== 查看详情 ==========
    handleDetail(row) {
      // TODO: 打开会议室详情弹窗
      alert(`会议室详情：${row.roomName}`);
    },

    // ========== 编辑会议室 ==========
    handleEdit(row) {
      // TODO: 打开编辑会议室弹窗
      alert(`编辑会议室：${row.roomName}`);
    },

    // ========== 删除会议室 ==========
    async handleDelete(row) {
      // 弹出确认框，防止误删
      if (!confirm(`确定要删除会议室「${row.roomName}」吗？`)) return;
      try {
        // 调用删除接口
        await deleteMeetingRoom(row.id);
        alert("删除成功");
        // 删除成功后重新加载列表
        this.loadRoomList();
      } catch (err) {
        console.error("删除会议室失败", err);
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
