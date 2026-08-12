<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>单据编号</span>
          <input type="text" placeholder="请输入单据编号" v-model="searchForm.billCode" />
        </div>
        <div>
          <span>单据状态</span>
          <input type="text" placeholder="请输入单据状态" v-model="searchForm.processStatus" />
        </div>
        <div>
          <span>请假类型</span>
          <input type="text" placeholder="请输入请假类型" v-model="searchForm.leaveType" />
        </div>
        <div>
          <button class="btn1" @click="handleReset">重置</button>
          <button class="btn2" @click="handleSearch">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>请假销假申请单列表</div>
          <div>
            <button @click="handleAdd">+新增</button>
            <button>导出</button>
            <button>批量删除</button>
            <button @click="handleSearch">🔍</button>
          </div>
          <div>
            <button @click="loadLeaveCancelList">⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th class="col-check" style="width: 50px">
                  <input type="checkbox" name="" id="" />
                </th>
                <th class="col-id" style="width: 120px">单据编号</th>
                <th class="col-name" style="width: 100px">单据状态</th>
                <th style="width: 80px">姓名</th>
                <th style="width: 150px">手机号</th>
                <th style="width: 120px">邮箱</th>
                <th style="width: 120px">员工所属部门</th>
                <th style="width: 100px">职位</th>
                <th style="width: 120px">职务</th>
                <th style="width: 120px">人员状态</th>
                <th style="width: 180px">入职日期</th>
                <th style="width: 120px">预计转正日期</th>
                <th style="width: 180px">申请人</th>
                <th style="width: 100px">员工所属公司</th>
                <th style="width: 160px">创建时间</th>
                <th class="oc-col" style="width: 220px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in rows" :key="item.id">
                <td class="col-check">
                  <input type="checkbox" name="" id="" />
                </td>
                <td class="col-id">{{ item.billCode }}</td>
                <td class="col-name">{{ item.processStatusText }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.mobile }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.empDeptName }}</td>
                <td>{{ item.jobPost }}</td>
                <td>{{ item.jobPosition }}</td>
                <td>{{ item.employeeStatusText }}</td>
                <td>{{ item.entryDate }}</td>
                <td>{{ item.expectedFormalDate }}</td>
                <td>{{ item.creatorName }}</td>
                <td>{{ item.empCompanyName }}</td>
                <td>{{ item.createTimeText }}</td>
                <td class="oc-col">
                  <a href="#" @click.prevent="handleDetail(item)">详情</a>
                  <a href="#" @click.prevent="handleDelete(item)" style="color: red;">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div>共{{ pagination.total }}条记录<span>{{ pagination.pageSize }}条/页</span></div>
          <div>
            <button @click="handlePageChange(1)">&lt;&lt;</button>
            <button @click="handlePageChange(Math.max(1, pagination.pageNo - 1))" :disabled="pagination.pageNo <= 1">&lt;</button>
            <button class="active">{{ pagination.pageNo }}</button>
            <button @click="handlePageChange(pagination.pageNo + 1)">&gt;</button>
            <button @click="handlePageChange(Math.ceil(pagination.total / pagination.pageSize))">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入请假销假申请相关API ==========
// getLeaveCancelBillPage: 分页查询请假销假申请列表
// getLeaveCancelBill: 获取单条请假销假申请详情
// saveLeaveCancelBill: 保存请假销假申请（草稿）
// submitLeaveCancelBill: 提交请假销假申请
// deleteLeaveCancelBill: 删除请假销假申请
import { getLeaveCancelBillPage, deleteLeaveCancelBill } from '#/api/hrm/leave-cancel';

export default {
  data() {
    return {
      // ========== 搜索表单数据 ==========
      searchForm: {
        billCode: "",        // 单据编号
        processStatus: "",   // 单据状态
        leaveType: "",       // 请假类型
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
    this.loadLeaveCancelList();
  },

  methods: {
    // ========== 接口对接方法：获取请假销假申请列表 ==========
    async loadLeaveCancelList() {
      try {
        const data = await getLeaveCancelBillPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          billCode: this.searchForm.billCode,
          processStatus: this.searchForm.processStatus,
          leaveType: this.searchForm.leaveType,
        });

        this.rows = data.list.map((item) => ({
          id: item.id,
          billCode: item.billCode || "",
          processStatusText: this.getProcessStatusText(item.processStatus),
          name: item.name || "",
          mobile: item.mobile || "",
          email: item.email || "",
          empDeptName: item.empDeptName || item.deptName || "",
          jobPost: item.jobPost || "",
          jobPosition: item.jobPosition || "",
          employeeStatusText: this.getEmployeeStatusText(item.employeeStatus),
          entryDate: item.entryDate || "",
          expectedFormalDate: item.expectedFormalDate || "",
          creatorName: item.creatorName || "",
          empCompanyName: item.empCompanyName || item.companyName || "",
          createTimeText: this.formatTimestamp(item.createTime),
        }));

        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取请假销假申请列表失败", err);
      }
    },

    // ========== 工具方法：流程状态编码转中文文本 ==========
    getProcessStatusText(status) {
      const map = { 1: "草稿", 10: "审批中", 20: "已通过", 30: "已驳回", 40: "已取消" };
      return map[status] || "未知";
    },

    // ========== 工具方法：员工状态编码转中文文本 ==========
    getEmployeeStatusText(status) {
      const map = { 1: "在职", 2: "离职", 3: "试用期", 4: "待入职", 5: "待离职", 6: "其他" };
      return map[status] || "未知";
    },

    // ========== 工具方法：时间戳格式化 ==========
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
      this.pagination.pageNo = 1;
      this.loadLeaveCancelList();
    },

    // ========== 重置按钮 ==========
    handleReset() {
      this.searchForm = { billCode: "", processStatus: "", leaveType: "" };
      this.pagination.pageNo = 1;
      this.loadLeaveCancelList();
    },

    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadLeaveCancelList();
    },

    // ========== 新增请假销假申请 ==========
    handleAdd() {
      alert("新增请假销假申请功能待实现");
    },

    // ========== 查看详情 ==========
    handleDetail(row) {
      alert(`请假销假申请详情：${row.billCode}`);
    },

    // ========== 删除请假销假申请 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除请假销假申请「${row.billCode}」吗？`)) return;
      try {
        await deleteLeaveCancelBill(row.id);
        alert("删除成功");
        this.loadLeaveCancelList();
      } catch (err) {
        console.error("删除请假销假申请失败", err);
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
  height: 590px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 86px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.app-top div {
  width: 246px;
  height: 42px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.app-top div span {
  display: inline-block;
  width: 100px;
  text-align: right;
  font-size: 14px;
  margin-right: 8px;
  font-weight: 500;
}
.app-top div input {
  width: 136px;
  height: 32px;
  border: 0.5px solid #ccc;
  padding: 12px;
  border-radius: 10px;
}
.app-top div input:hover {
  border: 0.5px solid #35bbfa;
}
.app-top div input:focus {
  outline: none;
  border: 0.5px solid #35bbfa;
}
.app-top div:last-child {
  display: flex;
  padding-left: 50px;
  color: #35bbfa;
  font-size: 14px;
}
.app-top div button {
  width: 64px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.app-top div button:first-child {
  border: 0.5px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}
.app-top .btn1:hover {
  border: 0.5px solid #35bbfa;
  color: #35bbfa;
}
.app-top .btn2 {
  border: 0;
  background-color: #35bbfa;
  color: #fff;
}
.app-top .btn2:hover {
  background-color: #76d2fd;
}

.app-main {
  width: 100%;
  height: 494px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-title {
  width: 100%;
  height: 48px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.main-title div:first-child {
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-title div:nth-child(2) {
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-title div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
}
.main-title div:nth-child(2) button {
  width: 78px;
  height: 32px;
  color: #fff;
  border: 0;
  background-color: #0a33e7;
  border-radius: 10px;
}
.main-title div:nth-child(2) button:nth-child(3) {
  width: 134px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #ccc;
}
.main-title div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.main-title div:last-child button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
  /* margin-right: 5px; */
}

.main-tab {
  width: 100%;
  height: 385px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1100px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
}
.main-tab table th {
  border-right: 1px solid #ccc;
  text-align: center;
  background-color: #e9e6e6;
  height: 40px;
}
.main-tab table td {
  height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  background-color: #fff;
}
.col-check {
  position: sticky;
  left: 0;
}
.col-id {
  position: sticky;
  left: 50px;
}
.col-name {
  position: sticky;
  left: 170px;
}
.oc-col {
  position: sticky;
  right: 0;
}
.main-floot {
  width: 100%;
  height: 36px;
  /* border: 1px solid red; */
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
}
.main-floot div span {
  display: inline-block;
  width: 100px;
  height: 26px;
  margin-left: 5px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 5px;
  padding-top: 3px;
}
</style>
