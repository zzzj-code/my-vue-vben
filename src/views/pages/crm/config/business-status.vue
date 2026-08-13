<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div>商机状态列表</div>
          <div>
            <button @click="handleAdd">+新增商机状态</button>
          </div>
          <div>
            <button @click="loadList">⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th>状态组名</th>
                <th>应用部门</th>
                <th>创建人</th>
                <th>创建时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in rows" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.dept }}</td>
                <td>{{ item.creator }}</td>
                <td>{{ item.createTime }}</td>
                <td>
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
// ========== 导入商机状态配置相关API ==========
import { getBusinessStatusPage, deleteBusinessStatus } from '#/api/crm/business/status';

export default {
  data() {
    return {
      pagination: { pageNo: 1, pageSize: 10, total: 0 },
      rows: [],
    };
  },
  mounted() {
    this.loadList();
  },
  methods: {
    async loadList() {
      try {
        const data = await getBusinessStatusPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
        });
        this.rows = data.list.map((item) => ({
          id: item.id,
          name: item.name || "",
          dept: item.deptName || "全公司",
          creator: item.creatorName || "",
          createTime: this.formatTimestamp(item.createTime),
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取商机状态列表失败", err);
      }
    },
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
    },
    handleAdd() { alert("新增商机状态功能待实现"); },
    handleEdit(row) { alert(`编辑：${row.name}`); },
    async handleDelete(row) {
      if (!confirm(`确定要删除「${row.name}」吗？`)) return;
      try { await deleteBusinessStatus(row.id); alert("删除成功"); this.loadList(); }
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
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-main {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
}
.main-top div:first-child {
  width: 75%;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.main-top div:nth-child(2) {
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;
}
.main-top div:nth-child(2) button {
  width: 134px;
  height: 32px;
  border-radius: 10px;
  background-color: #006be6;
  color: #fff;
  border: 0;
}
.main-top div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-top div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.main-tab {
  width: 100%;
  height: 480px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: 100%;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
}
.main-tab th {
  height: 40px;
  background-color: #e6e1e1;
  border-right: 1px solid #ccc;
  min-width: 60px;
  max-width: 200px;
  white-space: nowrap;
  padding: 0 12px;
}
.main-tab td {
  height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  font-size: 14px;
}
.main-tab tr:hover {
  background-color: #e6e6e6;
}
.main-floot{
    width: 100%;
    height: 36px;
    font-size: 12px;
    margin-top: 8px;
}
.main-floot span{
    display: inline-block;
    width: 100px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    padding-top: 3px;
    margin-left: 5px;
}
</style>
