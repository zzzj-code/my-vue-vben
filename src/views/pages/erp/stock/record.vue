<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>产品</span>
            <input type="text" placeholder="请输入产品" v-model="searchForm.productName" />
          </div>
          <div>
            <span>仓库</span>
            <input type="text" placeholder="请输入仓库" v-model="searchForm.warehouseName" />
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
          <div class="top-1">产品库存明细列表</div>
          <div class="top-2">
            <button>导出</button>
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
                <th>产品名称</th>
                <th>产品分类</th>
                <th>产品单位</th>
                <th>仓库</th>
                <th>类型</th>
                <th>出入库单号</th>
                <th>出入库日期</th>
                <th>出入库数量</th>
                <th>库存量</th>
                <th>操作人</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.product }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.unit }}</td>
                <td>{{ item.warehouse }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.orderNo }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.stock }}</td>
                <td>{{ item.operator }}</td>
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
// ========== 导入库存记录相关API ==========
import { getStockRecordPage } from '#/api/erp/stock/record';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        productName: "",   // 产品名称
        warehouseName: "", // 仓库名称
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
    this.loadStockRecordList();
  },
  methods: {
    // ========== 获取库存记录列表 ==========
    async loadStockRecordList() {
      try {
        const data = await getStockRecordPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          productName: this.searchForm.productName,
          warehouseName: this.searchForm.warehouseName,
        });
        // 字段映射，适配页面表格
        this.tabValue = data.list.map((item) => ({
          id: item.id,
          product: item.productName || "",      // 产品名称
          category: item.categoryName || "",    // 产品分类
          unit: item.unitName || "",            // 产品单位
          warehouse: item.warehouseName || "",  // 仓库
          type: item.type === 1 ? "入库" : "出库", // 类型
          orderNo: item.bizNo || "",            // 出入库单号
          date: this.formatTimestamp(item.recordTime), // 出入库日期
          quantity: item.count || 0,            // 出入库数量
          stock: item.totalCount || 0,          // 库存量
          operator: item.creatorName || "",     // 操作人
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取库存记录列表失败", err);
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
      this.loadStockRecordList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { productName: "", warehouseName: "" };
      this.pagination.pageNo = 1;
      this.loadStockRecordList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadStockRecordList();
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
  width: 77%;
  font-size: 16px;
  font-weight: 600;
}
.top-2 {
  width: 13%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 78px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
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
  font-size: 14px;
  border-right: 1px solid #ccc;
  background-color: #f0eaea;
  text-align: center;
  padding: 0 24px;
}
.main-tab td {
  height: 40px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 0 24px;
  background-color: #fff;
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
