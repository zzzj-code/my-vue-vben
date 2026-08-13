<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>工单编码</span>
            <input type="text" placeholder="请输入工单编码" v-model="searchForm.code" />
          </div>
          <div>
            <span>工单名称</span>
            <input type="text" placeholder="请输入工单名称" v-model="searchForm.productName" />
          </div>
          <div>
            <button @click="handleReset">重置</button>
            <button @click="handleSearch">搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>生产工单列表</div>
          <div>
            <button @click="handleAdd">+新增工单</button>
            <button>导出</button>
            <button>🔍</button>
          </div>
          <div>
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th><div class="th-inner">工单编码</div></th>
                <th><div class="th-inner">工单名称</div></th>
                <th><div class="th-inner">工单类型</div></th>
                <th><div class="th-inner">工单来源</div></th>
                <th><div class="th-inner">来源单据编号</div></th>
                <th><div class="th-inner">产品编码</div></th>
                <th><div class="th-inner">产品名称</div></th>
                <th><div class="th-inner">规格型号</div></th>
                <th><div class="th-inner">单位</div></th>
                <th><div class="th-inner">工单数量</div></th>
                <th><div class="th-inner">客户编码</div></th>
                <th><div class="th-inner">客户名称</div></th>
                <th><div class="th-inner">需求日期</div></th>
                <th><div class="th-inner">工单状态</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: '#e6f6ff',
                      color: '#006be6',
                      border: '1px solid #006be6',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.type }}</span>
                </td>
                <td>{{ item.source }}</td>
                <td>{{ item.sourceCode || '-' }}</td>
                <td>{{ item.productCode }}</td>
                <td>{{ item.productName }}</td>
                <td>{{ item.spec }}</td>
                <td>{{ item.unit }}</td>
                <td>{{ item.qty }}</td>
                <td>{{ item.customerCode || '-' }}</td>
                <td>{{ item.customerName || '-' }}</td>
                <td>{{ item.demandDate }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getStatusBg(item.status),
                      color: getStatusColor(item.status),
                      border: `1px solid ${getStatusColor(item.status)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.status }}</span>
                </td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button @click="handleEdit(item)">条码</button>
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
// ========== 导入生产工单相关API ==========
import { getWorkOrderPage, deleteWorkOrder } from '#/api/mes/pro/work-order';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        code: "",        // 工单编号
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
    this.loadWorkOrderList();
  },
  methods: {
    // ========== 获取生产工单列表 ==========
    async loadWorkOrderList() {
      try {
        const data = await getWorkOrderPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          code: this.searchForm.code,
          productName: this.searchForm.productName,
        });
        // 字段映射，适配页面表格
        this.tabValue = data.list.map((item) => ({
          id: item.id,
          code: item.code || "",              // 工单编号
          name: item.name || "",              // 工单名称
          type: "生产工单",                    // 工单类型
          source: item.sourceType ? "销售订单" : "生产计划", // 来源
          sourceCode: item.sourceCode || "",  // 来源单号
          productCode: item.productCode || "", // 产品编码
          productName: item.productName || "", // 产品名称
          spec: item.specification || "",     // 规格型号
          unit: item.unitName || "",          // 单位
          qty: item.quantity || 0,            // 数量
          customerCode: item.customerCode || "", // 客户编码
          customerName: item.customerName || "内部使用", // 客户名称
          demandDate: item.demandDate || "",  // 需求日期
          status: this.getStatusName(item.status), // 状态
          createTime: this.formatTimestamp(item.createTime), // 创建时间
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取生产工单列表失败", err);
      }
    },
    // ========== 状态名称转换 ==========
    getStatusName(status) {
      const map = { 0: "待审核", 1: "待排产", 2: "生产中", 3: "已完成" };
      return map[status] || "待审核";
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
      this.loadWorkOrderList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { code: "", productName: "" };
      this.pagination.pageNo = 1;
      this.loadWorkOrderList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadWorkOrderList();
    },
    // ========== 新增 ==========
    handleAdd() {
      alert("新增工单功能待实现");
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert(`编辑工单：${row.name}`);
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除「${row.name}」吗？`)) return;
      try {
        await deleteWorkOrder(row.id);
        alert("删除成功");
        this.loadWorkOrderList();
      } catch (err) {
        console.error("删除失败", err);
      }
    },
    getStatusColor(status) {
      const map = {
        '待审核': '#faad14',
        '待排产': '#8c8c8c',
        '生产中': '#1890ff',
        '已完成': '#52c41a'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '待审核': '#fffbe6',
        '待排产': '#f5f5f5',
        '生产中': '#e6f7ff',
        '已完成': '#f6ffed'
      };
      return map[status] || '#fff';
    }
  }
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
  margin-bottom: 12px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 331px;
  height: 42px;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
.top-inp div input {
  width: 215px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-inp div:last-child {
  font-size: 14px;
  color: #006be6;
  text-align: right;
}
.top-inp div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.top-inp div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp div button:last-child {
  background-color: #006be6;
  border: 0;
  color: #fff;
}

.app-main {
  width: 100%;
  height: 492px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.main-top div:first-child {
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:nth-child(2) {
  width: 63px;
}
.main-top div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.main-top div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  height: 390px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 2100px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
  border-right: none;
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
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
}

.ol-col {
  width: 80px;
  min-width: 80px;
  position: sticky;
  right: 0;
  z-index: 2;
  border-left: 1px solid #ccc;
  background-color: #fff;
}
.ol-col button {
  width: 56px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  color: #006be6;
}
.ol-col button:hover {
  background-color: #f0f4f9;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 8px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 3px;
  margin-left: 5px;
  text-align: center;
}
</style>