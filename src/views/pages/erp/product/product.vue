<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>名称</span>
            <input type="text" placeholder="请输入名称" v-model="searchForm.name" />
          </div>
          <div>
            <span>分类</span>
            <input type="text" placeholder="请输入分类" v-model="searchForm.categoryId" />
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
          <div class="top-1">产品列表</div>
          <div class="top-2">
            <button @click="handleAdd">+新增产品</button>
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
                <th><div class="th-inner">条码</div></th>
                <th><div class="th-inner">名称</div></th>
                <th><div class="th-inner">MDM物料编码</div></th>
                <th><div class="th-inner">MDM物料名称</div></th>
                <th><div class="th-inner">规格</div></th>
                <th><div class="th-inner">分类</div></th>
                <th><div class="th-inner">单位</div></th>
                <th><div class="th-inner">采购价格</div></th>
                <th><div class="th-inner">销售价格</div></th>
                <th><div class="th-inner">最低价格</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in rows" :key="item.id">
                <td>{{ item.barCode }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.mdmCode }}</td>
                <td>{{ item.mdmName }}</td>
                <td>{{ item.standard }}</td>
                <td>{{ item.categoryName }}</td>
                <td>{{ item.unitName }}</td>
                <td>{{ item.purchasePrice }}</td>
                <td>{{ item.salePrice }}</td>
                <td>{{ item.minPrice }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
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
// ========== 导入产品管理相关API ==========
import { getProductPage, deleteProduct } from '#/api/erp/product/product';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        name: "",       // 产品名称
        categoryId: "", // 产品分类
      },
      // 分页信息
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
    this.loadProductList();
  },
  methods: {
    // ========== 获取产品列表 ==========
    async loadProductList() {
      try {
        const data = await getProductPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          name: this.searchForm.name,
          categoryId: this.searchForm.categoryId,
        });
        // 字段映射，适配页面表格
        this.rows = data.list.map((item) => ({
          id: item.id,
          barCode: item.barCode || "",           // 条码
          name: item.name || "",                 // 名称
          mdmCode: item.mdmCode || "",           // MDM物料编码
          mdmName: item.mdmName || "",           // MDM物料名称
          standard: item.standard || "",         // 规格
          categoryName: item.categoryName || "", // 分类
          unitName: item.unitName || "",         // 单位
          purchasePrice: item.purchasePrice || "", // 采购价格
          salePrice: item.salePrice || "",       // 销售价格
          minPrice: item.minPrice || "",         // 最低价格
          status: item.status === 0 ? "开启" : "关闭", // 状态
          createTime: this.formatTimestamp(item.createTime), // 创建时间
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取产品列表失败", err);
      }
    },
    // ========== 时间戳格式化 ==========
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
    },
    // ========== 搜索 ==========
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadProductList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { name: "", categoryId: "" };
      this.pagination.pageNo = 1;
      this.loadProductList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadProductList();
    },
    // ========== 新增 ==========
    handleAdd() {
      alert("新增产品功能待实现");
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert(`编辑产品：${row.name}`);
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除「${row.name}」吗？`)) return;
      try {
        await deleteProduct(row.id);
        alert("删除成功");
        this.loadProductList();
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
  width: 67%;
  font-size: 16px;
  font-weight: 600;
}
.top-2 {
  width: 23%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 106px;
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
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #f0eaea;
  border-right: none;
  text-align: center;
  padding: 0;
  white-space: nowrap;
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
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 0 8px;
  background-color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

/* 固定列：右侧操作 */
.ol-col {
  position: sticky;
  right: 0;
  z-index: 2;
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