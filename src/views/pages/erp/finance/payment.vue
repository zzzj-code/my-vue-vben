<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>付款单号</span>
            <input type="text" placeholder="请输入付款单号" v-model="searchForm.no" />
          </div>
          <div>
            <span>付款时间</span>
            <input type="text" />
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
          <div class="top-1">付款单列表</div>
          <div class="top-2">
            <button @click="handleAdd">+新增付款单</button>
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
                  <div class="th-inner"><input type="checkbox" /></div>
                </th>
                <th class="col-id"><div class="th-inner">付款单号</div></th>
                <th><div class="th-inner">供应商</div></th>
                <th><div class="th-inner">付款时间</div></th>
                <th><div class="th-inner">创建人</div></th>
                <th><div class="th-inner">财务人员</div></th>
                <th><div class="th-inner">付款账户</div></th>
                <th><div class="th-inner">合计付款</div></th>
                <th><div class="th-inner">优惠金额</div></th>
                <th><div class="th-inner">实际付款</div></th>
                <th><div class="th-inner">状态</div></th>
                <th class="ol-col" style="width: 260px;">
                  <div class="th-inner no-border">操作</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td class="col-check"><input type="checkbox" /></td>
                <td class="col-id">{{ item.no }}</td>
                <td>{{ item.supplier }}</td>
                <td>{{ item.paymentTime }}</td>
                <td>{{ item.creator }}</td>
                <td>{{ item.financeUser }}</td>
                <td>{{ item.account }}</td>
                <td>{{ item.totalPrice }}</td>
                <td>{{ item.discountPrice }}</td>
                <td>{{ item.paymentPrice }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <a href="#" @click.prevent="handleDetail(item)">详情</a>&nbsp;&nbsp;
                  <a href="#" @click.prevent="handleEdit(item)">编辑</a>&nbsp;&nbsp;
                  <a href="#" @click.prevent="handleApprove(item)">审批</a>&nbsp;&nbsp;
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
// ========== 导入付款单相关API ==========
import { getFinancePaymentPage, deleteFinancePayment } from '#/api/erp/finance/payment';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        no: "",        // 付款单号
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
    this.loadFinancePaymentList();
  },
  methods: {
    // ========== 获取付款单列表 ==========
    async loadFinancePaymentList() {
      try {
        const data = await getFinancePaymentPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          no: this.searchForm.no,
        });
        // 字段映射，适配页面表格
        this.tabValue = data.list.map((item) => ({
          id: item.id,
          no: item.no || "",                     // 付款单号
          supplier: item.supplierName || "",     // 供应商
          paymentTime: this.formatTimestamp(item.paymentTime), // 付款时间
          creator: item.creatorName || "",       // 创建人
          financeUser: item.financeUserName || "", // 财务人员
          account: item.accountName || "",       // 付款账户
          totalPrice: item.totalPrice || 0,      // 合计付款
          discountPrice: item.discountPrice || 0, // 优惠金额
          paymentPrice: item.paymentPrice || 0,  // 实际付款
          status: item.status === 20 ? "已审核" : "未审核", // 状态
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取付款单列表失败", err);
      }
    },
    // ========== 时间戳格式化 ==========
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
    },
    // ========== 搜索 ==========
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadFinancePaymentList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { no: "" };
      this.pagination.pageNo = 1;
      this.loadFinancePaymentList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadFinancePaymentList();
    },
    // ========== 新增 ==========
    handleAdd() {
      alert("新增付款单功能待实现");
    },
    // ========== 详情 ==========
    handleDetail(row) {
      alert(`查看详情：${row.no}`);
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert(`编辑付款单：${row.no}`);
    },
    // ========== 审批 ==========
    handleApprove(row) {
      alert(`审批付款单：${row.no}`);
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除「${row.no}」吗？`)) return;
      try {
        await deleteFinancePayment([row.id]);
        alert("删除成功");
        this.loadFinancePaymentList();
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

/* 固定列：左侧复选框 */
.col-check {
  position: sticky;
  left: 0;
  z-index: 2;
  background-color: #f0eaea;
}
.col-check input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}


/* 固定列：右侧操作 */
.ol-col {
  position: sticky;
  right: 0;
  z-index: 2;
  background-color: #fff;
  width: 260px;
  min-width: 260px;
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