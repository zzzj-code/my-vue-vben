<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>盘点单号</span>
            <input type="text" placeholder="请输入盘点单号" v-model="searchForm.no" />
          </div>
          <div>
            <span>产品</span>
            <input type="text" placeholder="请输入产品" v-model="searchForm.productName" />
          </div>
          <div>
            <button @click="handleReset">重置</button>
            <button @click="handleSearch">搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">库存盘点单列表</div>
          <div class="top-2">
            <button @click="handleAdd">+新增库存盘点单</button>
            <button>导出</button>
            <button disabled>批量删除</button>
            <button>🔍</button>
          </div>
          <div class="top-3">
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th class="col-check">
                  <input type="checkbox" disabled/>
                </th>
                <th class="col-id">盘点单号</th>
                <th>产品信息</th>
                <th>盘点时间</th>
                <th>创建人</th>
                <th>总数量</th>
                <th>总金额</th>
                <th>状态</th>
                <th class="ol-col" style="width: 260px;">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td class="col-check"><input type="checkbox" disabled/></td>
                <td class="col-id">{{ item.no }}</td>
                <td>{{ item.product }}</td>
                <td>{{ item.checkTime }}</td>
                <td>{{ item.creator }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <a href="#" @click.prevent="handleDetail(item)">详情</a>&nbsp;&nbsp;
                  <a href="#" @click.prevent="handleEdit(item)">编辑</a>&nbsp;&nbsp;
                  <a href="#" @click.prevent="handleDelete(item)">删除</a>
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
// ========== 导入库存盘点相关API ==========
import { getStockCheckPage, deleteStockCheck } from '#/api/erp/stock/check';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        no: "",        // 盘点单号
        productName: "", // 产品名称
      },
      // 分页信息
      pagination: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      // 表格数据
      tabValue: [],
    };
  },
  mounted() {
    this.loadStockCheckList();
  },
  methods: {
    // ========== 获取库存盘点列表 ==========
    async loadStockCheckList() {
      try {
        const data = await getStockCheckPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          no: this.searchForm.no,
          productName: this.searchForm.productName,
        });
        // 字段映射，适配页面表格
        this.tabValue = data.list.map((item) => ({
          id: item.id,
          no: item.no || "",                     // 盘点单号
          product: item.productNames || "",      // 产品信息
          checkTime: this.formatTimestamp(item.checkTime), // 盘点时间
          creator: item.creatorName || "",       // 创建人
          quantity: item.totalCount || 0,        // 总数量
          amount: item.totalPrice || 0,          // 总金额
          status: item.status === 20 ? "已盘点" : "待盘点", // 状态
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取库存盘点列表失败", err);
      }
    },
    // ========== 时间戳格式化 ==========
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`;
    },
    // ========== 搜索 ==========
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadStockCheckList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { no: "", productName: "" };
      this.pagination.pageNo = 1;
      this.loadStockCheckList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadStockCheckList();
    },
    // ========== 新增 ==========
    handleAdd() {
      alert("新增库存盘点功能待实现");
    },
    // ========== 详情 ==========
    handleDetail(row) {
      alert(`查看详情：${row.no}`);
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert(`编辑库存盘点：${row.no}`);
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除「${row.no}」吗？`)) return;
      try {
        await deleteStockCheck([row.id]);
        alert("删除成功");
        this.loadStockCheckList();
      } catch (err) {
        console.error("删除失败", err);
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
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 330px;
  height: 100%;
  /* border: 1px solid red; */
  font-size: 14px;
  color: #006be6;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  color: black;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
}
.top-inp div input {
  width: 220px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-inp div:last-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 140px;
  padding-right: 10px;
}
.top-inp div:last-child button:first-child {
  width: 63px;
  height: 32px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
}
.top-inp div:last-child button:last-child {
  width: 63px;
  height: 32px;
  border: 0;
  color: #fff;
  background-color: #006be6;
  border-radius: 10px;
}
.app-main {
  width: 100%;
  height: 489px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
}
.top-1 {
  width: 50%;
  font-size: 16px;
  font-weight: 600;
}
.top-2 {
  width: 40%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-2 button:nth-child(2) {
  width: 78px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-2 button:nth-child(3) {
  width: 106px;
  height: 32px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #ccc;
  border-radius: 10px;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #006be6;
  border: 0;
}
.top-3 {
  width: 10%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.main-tab {
  width: 100%;
  height: 398px;
  border-radius: 5px;
  border: 1px solid #ccc;
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
  border: 1px solid #e6e6e6;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #f0eaea;
  text-align: center;
  padding: 0 24px;
}
.main-tab td {
  height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 0 24px;
  background-color: #fff;
}
.col-check {
  position: sticky;
  left: 0;
}
.col-id {
  position: sticky;
  left: 62px;
}
.ol-col {
  position: sticky;
  right: 0;
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
  height: 24px;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
