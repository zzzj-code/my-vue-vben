<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>员工工号</span>
          <input type="text" placeholder="请输入员工工号" v-model="searchForm.employeeNo" />
        </div>
        <div>
          <span>姓名</span>
          <input type="text" placeholder="请输入姓名" v-model="searchForm.name" />
        </div>
        <div>
          <span>所属部门</span>
          <input type="text" placeholder="请输入所属部门" v-model="searchForm.deptName" />
        </div>
        <div>
          <button class="btn1" @click="handleReset">重置</button>
          <button class="btn2" @click="handleSearch">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>员工档案列表</div>
          <div>
            <button @click="handleAdd">+新增</button>
            <button>导出</button>
            <button>导入员工</button>
            <button>+批量生成用户</button>
            <button>批量删除</button>
            <button @click="handleSearch">🔍</button>
          </div>
          <div>
            <button @click="loadEmployeeList">⟳</button>
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
                <th class="col-id" style="width: 120px">员工工号</th>
                <th class="col-name" style="width: 100px">姓名</th>
                <th style="width: 80px">性别</th>
                <th style="width: 150px">所属部门</th>
                <th style="width: 120px">职位</th>
                <th style="width: 120px">职务</th>
                <th style="width: 100px">人员状态</th>
                <th style="width: 120px">入职日期</th>
                <th style="width: 120px">转正日期</th>
                <th style="width: 180px">所属单位</th>
                <th style="width: 120px">手机号</th>
                <th style="width: 180px">邮箱</th>
                <th style="width: 100px">用户状态</th>
                <th style="width: 160px">创建时间</th>
                <th class="oc-col" style="width: 220px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in rows" :key="item.id">
                <td class="col-check">
                  <input type="checkbox" name="" id="" />
                </td>
                <td class="col-id">{{ item.employeeNo }}</td>
                <td class="col-name">{{ item.name }}</td>
                <td>{{ item.genderText }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.position }}</td>
                <td>{{ item.pos }}</td>
                <td>{{ item.statusText }}</td>
                <td>{{ item.entryDate }}</td>
                <td>{{ item.formalDate }}</td>
                <td>{{ item.unit }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.emit }}</td>
                <td>{{ item.userStatusText }}</td>
                <td>{{ item.createTimeText }}</td>
                <td class="oc-col">
                  <a href="#" @click.prevent="handleEdit(item)">修改</a>
                  <a href="#" @click.prevent="handleGenerateUser(item)">+生成用户</a>
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
// ========== 导入员工档案相关API ==========
// getEmployeeArchivePage: 分页查询员工档案列表
// getEmployeeArchive: 获取单条员工档案详情
// createEmployeeArchive: 新增员工档案
// updateEmployeeArchive: 更新员工档案
// deleteEmployeeArchive: 删除员工档案
// generateUserForEmployee: 为员工生成系统用户
import { getEmployeeArchivePage, deleteEmployeeArchive, generateUserForEmployee } from '#/api/hrm/employee';

export default {
  data() {
    return {
      // ========== 搜索表单数据 ==========
      searchForm: {
        employeeNo: "",   // 员工工号
        name: "",         // 姓名
        deptName: "",     // 所属部门
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
    this.loadEmployeeList();
  },

  methods: {
    // ========== 接口对接方法：获取员工档案列表 ==========
    async loadEmployeeList() {
      try {
        // 调用分页查询接口，传入页码、每页条数和搜索条件
        const data = await getEmployeeArchivePage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          employeeNo: this.searchForm.employeeNo,
          name: this.searchForm.name,
          deptName: this.searchForm.deptName,
        });

        // 将接口返回的数据转换为页面需要的格式
        // 接口字段 -> 页面字段映射：
        // id -> id（员工ID）
        // employeeNo -> employeeNo（员工工号）
        // name -> name（姓名）
        // sex -> genderText（性别：1=男，2=女）
        // deptName -> department（所属部门）
        // jobPost -> position（职位/岗位）
        // jobPosition -> pos（职务）
        // employeeStatus -> statusText（人员状态：1=在职，2=离职，3=试用期，4=待入职，5=待离职，6=其他）
        // entryDate -> entryDate（入职日期，接口返回字符串）
        // formalDate -> formalDate（转正日期，接口返回字符串）
        // companyName -> unit（所属单位/公司）
        // mobile -> phone（手机号）
        // email -> emit（邮箱）
        // userGenerated -> userStatusText（用户状态：是否已生成系统用户）
        // createTime -> createTimeText（创建时间，时间戳转字符串）
        this.rows = data.list.map((item) => ({
          id: item.id,
          employeeNo: item.employeeNo || "",
          name: item.name || "",
          genderText: this.getSexText(item.sex),
          department: item.deptName || "",
          position: item.jobPost || "",
          pos: item.jobPosition || "",
          statusText: this.getEmployeeStatusText(item.employeeStatus),
          entryDate: item.entryDate || "",
          formalDate: item.formalDate || "",
          unit: item.companyName || "",
          phone: item.mobile || "",
          emit: item.email || "",
          userStatusText: item.userGenerated ? "已生成" : "未生成",
          createTimeText: this.formatTimestamp(item.createTime),
        }));

        // 更新总记录数
        this.pagination.total = data.total;
      } catch (err) {
        // 接口调用失败时打印错误信息
        console.error("获取员工档案列表失败", err);
      }
    },

    // ========== 工具方法：性别编码转中文文本 ==========
    getSexText(sex) {
      const map = { 1: "男", 2: "女" };
      return map[sex] || "未知";
    },

    // ========== 工具方法：员工状态编码转中文文本 ==========
    getEmployeeStatusText(status) {
      const map = { 1: "在职", 2: "离职", 3: "试用期", 4: "待入职", 5: "待离职", 6: "其他" };
      return map[status] || "未知";
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
      this.loadEmployeeList();
    },

    // ========== 重置按钮 ==========
    handleReset() {
      // 清空搜索条件
      this.searchForm = { employeeNo: "", name: "", deptName: "" };
      // 重置到第一页
      this.pagination.pageNo = 1;
      this.loadEmployeeList();
    },

    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadEmployeeList();
    },

    // ========== 新增员工档案 ==========
    handleAdd() {
      // TODO: 打开新增员工档案弹窗
      alert("新增员工档案功能待实现");
    },

    // ========== 修改员工档案 ==========
    handleEdit(row) {
      // TODO: 打开编辑员工档案弹窗
      alert(`修改员工档案：${row.name}`);
    },

    // ========== 为员工生成系统用户 ==========
    async handleGenerateUser(row) {
      if (row.userStatusText === "已生成") {
        alert("该员工已生成系统用户");
        return;
      }
      try {
        await generateUserForEmployee(row.id);
        alert("生成用户成功");
        this.loadEmployeeList();
      } catch (err) {
        console.error("生成用户失败", err);
      }
    },

    // ========== 删除员工档案 ==========
    async handleDelete(row) {
      // 弹出确认框，防止误删
      if (!confirm(`确定要删除员工「${row.name}」吗？`)) return;
      try {
        // 调用删除接口
        await deleteEmployeeArchive(row.id);
        alert("删除成功");
        // 删除成功后重新加载列表
        this.loadEmployeeList();
      } catch (err) {
        console.error("删除员工档案失败", err);
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
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-title div:nth-child(2) {
  width: 60%;
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
  width: 106px;
}
.main-title div:nth-child(2) button:nth-child(4) {
  width: 134px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #ccc;
}
.main-title div:nth-child(2) button:nth-child(5) {
  width: 106px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #ccc;
}
.main-title div:nth-child(2) button:nth-child(6) {
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
.oc-col a{
  text-decoration: none;
  margin-left: 10px;
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
