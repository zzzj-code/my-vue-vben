<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-box">
          <div>
            <span>合同编号</span>
            <input type="text" placeholder="请输入合同编号" v-model="searchForm.no" />
          </div>
          <div>
            <span>合同名称</span>
            <input type="text" placeholder="请输入合同名称" v-model="searchForm.name" />
          </div>
          <div>
            <span>客户</span>
            <input type="text" placeholder="请输入客户" v-model="searchForm.customerName" />
          </div>
          <div>
          </div>
          <div></div>
          <div>
            <button @click="handleReset">重置</button>
            <button @click="handleSearch">搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">
            <div class="top-tab">
              <div
                :class="{ active: activeTab === 'mine' }"
                @click="activeTab = 'mine'"
              >
                我负责的
              </div>
              <div
                :class="{ active: activeTab === 'participate' }"
                @click="activeTab = 'participate'"
              >
                我参与的
              </div>
              <div
                :class="{ active: activeTab === 'subordinate' }"
                @click="activeTab = 'subordinate'"
              >
                下属负责的
              </div>
            </div>
          </div>
          <div class="top-2">
            <button @click="handleAdd">+新增合同</button>
            <button>导出</button>
            <button @click="handleSearch">🔍</button>
          </div>
          <div class="top-3">
            <button @click="loadContractList">⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th class="col-name">
                  <div class="th-inner">线索名称</div>
                </th>
                <th><div class="th-inner">线索来源</div></th>
                <th><div class="th-inner">手机</div></th>
                <th><div class="th-inner">电话</div></th>
                <th><div class="th-inner">邮箱</div></th>
                <th><div class="th-inner">地址</div></th>
                <th><div class="th-inner">客户行业</div></th>
                <th><div class="th-inner">客户级别</div></th>
                <th><div class="th-inner">下次联系时间</div></th>
                <th><div class="th-inner">备注</div></th>
                <th><div class="th-inner">最后跟进时间</div></th>
                <th><div class="th-inner">最后跟进记录</div></th>
                <th><div class="th-inner">负责人</div></th>
                <th><div class="th-inner">所属部门</div></th>
                <th><div class="th-inner">更新时间</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col">
                  <div class="th-inner no-border">操作</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in rows" :key="item.id">
                <td class="col-name">{{ item.name }}</td>
                <td>{{ item.source }}</td>
                <td>{{ item.mobile }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.industry }}</td>
                <td>{{ item.level }}</td>
                <td>{{ item.nextContact }}</td>
                <td>{{ item.remark }}</td>
                <td>{{ item.lastFollowTime }}</td>
                <td>{{ item.lastFollowRecord }}</td>
                <td>{{ item.owner }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.updateTime }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <a href="#" @click.prevent="handleEdit(item)">编辑</a>&nbsp;&nbsp;
                  <a href="#" @click.prevent="handleDelete(item)" style="color: red;">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          共{{ pagination.total }}条记录<span>{{ pagination.pageSize }}条/页</span>
          <div style="float: right;">
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
// ========== 导入合同管理相关API ==========
import { getContractPage, deleteContract } from '#/api/crm/contract';

export default {
  data() {
    return {
      activeTab: "mine",
      searchForm: {
        no: "",          // 合同编号
        name: "",        // 合同名称
        customerName: "", // 客户名称
      },
      pagination: { pageNo: 1, pageSize: 10, total: 0 },
      rows: [],
    };
  },
  mounted() {
    this.loadContractList();
  },
  methods: {
    async loadContractList() {
      try {
        const data = await getContractPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          no: this.searchForm.no,
          name: this.searchForm.name,
          customerName: this.searchForm.customerName,
        });
        this.rows = data.list.map((item) => ({
          id: item.id,
          name: item.name || "",
          source: item.no || "",
          mobile: item.customerName || "",
          phone: item.totalPrice || "",
          email: item.startTime || "",
          address: item.endTime || "",
          industry: item.statusName || "",
          level: item.ownerUserName || "",
          nextContact: "",
          remark: item.remark || "",
          lastFollowTime: this.formatTimestamp(item.updateTime),
          lastFollowRecord: "",
          owner: item.ownerUserName || "",
          department: item.ownerDeptName || "",
          updateTime: this.formatTimestamp(item.updateTime),
          createTime: this.formatTimestamp(item.createTime),
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取合同列表失败", err);
      }
    },
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
    },
    handleSearch() { this.pagination.pageNo = 1; this.loadContractList(); },
    handleReset() { this.searchForm = { no: "", name: "", customerName: "" }; this.pagination.pageNo = 1; this.loadContractList(); },
    handlePageChange(page) { this.pagination.pageNo = page; this.loadContractList(); },
    handleAdd() { alert("新增合同功能待实现"); },
    handleEdit(row) { alert(`编辑合同：${row.name}`); },
    async handleDelete(row) {
      if (!confirm(`确定要删除合同「${row.name}」吗？`)) return;
      try { await deleteContract(row.id); alert("删除成功"); this.loadContractList(); }
      catch (err) { console.error("删除合同失败", err); }
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
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 128px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.top-box {
  width: 100%;
  height: 84px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.top-box div {
  flex: 0 0 calc(33.333% - 10px);
  height: 42px;
}
.top-box div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  font-size: 14px;
  margin-right: 8px;
}
.top-box div input {
  width: 200px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-box div:last-child {
  display: flex;
  justify-content: space-between;
  padding-left: 130px;
  font-size: 14px;
  color: #006be6;
  align-items: center;
}
.top-box div:last-child button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
}
.top-box div:last-child button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-box div:last-child button:last-child {
  border: 0;
  background-color: #006be6;
  color: #fff;
}
.app-main {
  width: 100%;
  height: 452px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 77px;
  display: flex;
  align-items: center;
}
.top-1 {
  width: 65%;
  height: 46px;
  border-bottom: 1px solid #ccc;
}
.top-tab {
  width: 246px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.top-tab div {
  width: 76px;
  height: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.active {
  color: black;
  font-weight: 500;
  border-bottom: 1px solid #006be6;
}
.top-2 {
  width: 25%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button {
  height: 32px;
  border-radius: 10px;
  background-color: #006be6;
  color: #fff;
  border: 0;
}
.top-2 button:first-child {
  width: 106px;
}
.top-2 button:nth-child(2) {
  width: 78px;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.top-3 {
  width: 10%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
}

.main-tab {
  width: 100%;
  height: 331px;
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
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #e6e1e1;
  border-right: none;
  min-width: 60px;
  max-width: 200px;
  white-space: nowrap;
  padding: 0;
}

/* ===== 表头内部 div：承载右边框 ===== */
.th-inner {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

/* 操作列不显示右边框 */
.th-inner.no-border {
  border-right: none;
}

.main-tab td {
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  text-align: center;
  padding: 0 8px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

/* 固定列：左侧固定（线索名称） */
.col-name {
  position: sticky;
  left: 0;
  z-index: 2;
  background-color: #e6e1e1;
}
/* 固定列：右侧固定（操作） */
.ol-col {
  position: sticky;
  right: 0;
  z-index: 2;
  background-color: #fff;
}
.ol-col a{
  text-decoration: none;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 26px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 3px;
  margin-left: 3px;
  text-align: center;
}
</style>
