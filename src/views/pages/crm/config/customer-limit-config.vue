<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-a">
          <div class="nav">
            <div class="nav-1">
              <div
                :class="{ active: activeTab === 'customer' }"
                @click="switchTab('customer')"
              >
                拥有客户数限制
              </div>
              <div
                :class="{ active: activeTab === 'locked' }"
                @click="switchTab('locked')"
              >
                锁定客户数限制
              </div>
            </div>
          </div>
        </div>
        <div class="top-b">
          <button @click="handleAdd">+新增规则</button>
        </div>
        <div class="top-c">
          <button @click="loadList">⟳</button>
          <button>⛶</button>
          <button>⊞</button>
        </div>
      </div>
      <div class="app-main">
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>规则适用人群</th>
                    <th>规则适用部门</th>
                    <th>拥有客户数上限</th>
                    <th>成交客户是否占用拥有客户数</th>
                    <th>创建时间</th>
                    <th style="width: 180px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in rows" :key="item.id">
                    <td>{{ item.no }}</td>
                    <td>{{ item.userNames }}</td>
                    <td>{{ item.deptNames }}</td>
                    <td>{{ item.maxCount }}</td>
                    <td>{{ item.dealCountEnabled }}</td>
                    <td>{{ item.createTime }}</td>
                    <td>
                      <a href="#" @click.prevent="handleEdit(item)">编辑</a>&nbsp;&nbsp;
                      <a href="#" @click.prevent="handleDelete(item)" style="color: red;">删除</a>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
      <div class="app-floot">
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
</template>

<script>
// ========== 导入客户限制配置相关API ==========
import { getCustomerLimitConfigPage, deleteCustomerLimitConfig } from '#/api/crm/customer/limitConfig';

export default {
  data() {
    return {
      activeTab: "customer",
      pagination: { pageNo: 1, pageSize: 10, total: 0 },
      rows: [],
    };
  },
  mounted() {
    this.loadList();
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
      this.loadList();
    },
    async loadList() {
      try {
        const data = await getCustomerLimitConfigPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          type: this.activeTab === 'customer' ? 1 : 2,
        });
        this.rows = data.list.map((item) => ({
          id: item.id,
          no: item.id,
          userNames: item.userNames || "",
          deptNames: item.deptNames || "",
          maxCount: item.maxCount || 0,
          dealCountEnabled: item.dealCountEnabled ? "是" : "否",
          createTime: this.formatTimestamp(item.createTime),
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取客户限制配置列表失败", err);
      }
    },
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
    },
    handleAdd() { alert("新增规则功能待实现"); },
    handleEdit(row) { alert(`编辑规则：${row.no}`); },
    async handleDelete(row) {
      if (!confirm(`确定要删除规则「${row.no}」吗？`)) return;
      try { await deleteCustomerLimitConfig(row.id); alert("删除成功"); this.loadList(); }
      catch (err) { console.error("删除失败", err); }
    },
    handlePageChange(page) { this.pagination.pageNo = page; this.loadList(); },
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
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: -375px;
  padding: 0 10px;
}
.app-top {
  width: 100%;
  height: 77px;
  display: flex;
  align-items: center;
}
.app-top .top-a {
  width: 75%;
  height: 62px;
}
.nav {
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #ccc;
}
.nav-1 {
  width: 228px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.nav-1 div {
  width: 98px;
  height: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer; /* 添加鼠标指针样式 */
  transition: all 0.3s ease; /* 平滑过渡 */
}
.nav-1 div:hover {
  color: #006be6; /* 悬停效果 */
}
.active {
  font-weight: 600;
  color: #006be6; /* 激活状态文字颜色 */
  border-bottom: 2px solid #006be6; /* 修复下划线样式 */
}
.app-top .top-b {
  width: 15%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-b button {
  width: 106px;
  height: 32px;
  border: 0;
  border-radius: 10px;
  background-color: #006be6;
  color: #fff;
  cursor: pointer;
}
.top-b button:hover {
  background-color: #0052b3;
}
.app-top .top-c {
  width: 10%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-c button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-c button:hover {
  background-color: #f0f0f0;
}

.app-main {
  width: 100%;
  height: 469px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.app-main table {
  width: 100%;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
}
.app-main th {
  width: 138px;
  height: 56px;
  background-color: #e6e1e1;
  border-right: 1px solid #ccc;
  min-width: 60px;
  max-width: 200px;
  padding: 0 12px;
  font-size: 14px;
}
.app-floot {
  width: 100%;
  height: 36px;
  margin-top: 8px;
  /* border: 1px solid red; */
  font-size: 12px;
}
.app-floot span {
  display: inline-block;
  width: 100px;
  height: 26px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
