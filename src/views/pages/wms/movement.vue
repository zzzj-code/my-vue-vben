<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>移库单号</span>
            <input type="text" placeholder="请输入移库单号" v-model="searchForm.orderNo" />
          </div>
          <div>
            <span>业务单号</span>
            <input type="text" placeholder="请输入业务单号" v-model="searchForm.businessNo" />
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
          <div>移库单列表</div>
          <div>
            <button @click="handleAdd">+新增移库单</button>
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
                <th><div class="th-inner">&nbsp;</div></th>
                <th><div class="th-inner">单号/业务单号</div></th>
                <th><div class="th-inner">出库状态</div></th>
                <th><div class="th-inner">出库类型</div></th>
                <th><div class="th-inner">仓库</div></th>
                <th><div class="th-inner">总数量/总金额(元)</div></th>
                <th><div class="th-inner">供应商</div></th>
                <th><div class="th-inner">操作信息</div></th>
                <th><div class="th-inner">备注</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.orderNo">
                <td>
                  <span style="color: #c0c4cc; font-size: 18px;">▶</span>
                </td>
                <td>
                  <div class="order-info">
                    <div class="order-no">{{ item.orderNo }}</div>
                    <div class="business-no">{{ item.businessNo }}</div>
                  </div>
                </td>
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
                <td>{{ item.warehouse }}</td>
                <td>
                  <div class="amount-info">
                    <div>{{ item.totalQty }}</div>
                    <div style="color: #006be6; font-weight: 500;">¥{{ item.totalAmount }}</div>
                  </div>
                </td>
                <td>{{ item.supplier }}</td>
                <td>
                  <div class="operator-info">
                    <div>{{ item.operator }}</div>
                    <div style="color: #8c8c8c; font-size: 12px;">{{ item.operateTime }}</div>
                  </div>
                </td>
                <td>{{ item.remark }}</td>
                <td class="ol-col">
                  <button @click="handleEdit(item)">编辑</button>
                  <button @click="handleDelete(item)">删除</button>
                  <button @click="handlePrint(item)">打印</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入通用操作单相关 API（src/api/wms/goodscommonoperationorder/index.js）==========
// 说明：移库单在本项目中对应"通用操作单"（goods-common-operation-order）。
//       出库/移库/盘库共用该接口，用 type 字段区分业务类型（移库属于调拨类操作）。
// getMovementOrderPage : 通用操作单分页查询（GET /wms/goods-common-operation-order/page）
// deleteMovementOrder  : 删除通用操作单（DELETE /wms/goods-common-operation-order/delete?id=xxx）
import { getMovementOrderPage, deleteMovementOrder } from '#/api/wms/movement-order';

export default {
  data() {
    return {
      // ========== 搜索表单 ==========
      searchForm: {
        orderNo: "",    // 移库单号
        businessNo: "", // 业务单号
      },
      // ========== 分页信息 ==========
      pagination: {
        pageNo: 1,    // 当前页码
        pageSize: 20, // 每页条数
        total: 0,     // 总条数
      },
      // ========== 表格数据 ==========
      tabValue: [],
    };
  },
  mounted() {
    // 页面加载后自动拉取移库单列表
    this.loadMovementList();
  },
  methods: {
    // ========== 获取移库单列表 ==========
    async loadMovementList() {
      try {
        // 调用通用操作单分页接口
        const data = await getMovementOrderPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          no: this.searchForm.orderNo,             // 移库单号
          businessNo: this.searchForm.businessNo,  // 业务单号
          // type: "移库", // 如需按业务类型过滤（出库/移库/盘库），可加该参数，值以后端枚举为准
        });
        const list = (data && data.list) || [];
        // 字段映射：后端字段 → 页面模板字段
        this.tabValue = list.map((item) => ({
          id: item.id,                                        // 主键，删除时使用
          orderNo: item.no || item.orderNo || "",             // 移库单号
          businessNo: item.businessNo || item.salesOrderNo || "", // 业务单号
          status: this.formatStatus(item.status),             // 出库状态（数字枚举 → 中文）
          type: this.formatType(item.type),                   // 出库类型
          warehouse: item.warehouseName || item.warehouse || "", // 仓库名称
          totalQty: this.formatNumber(item.totalQuantity ?? item.totalQty, 0), // 总数量
          totalAmount: this.formatNumber(item.totalAmount, 2), // 总金额
          supplier: item.supplierName || item.supplier || "", // 供应商
          operator: item.operator || item.creatorName || "",  // 操作人
          operateTime: this.formatTimestamp(item.operateTime || item.updateTime || item.createTime), // 操作时间
          remark: item.remark || "",                          // 备注
        }));
        // 更新总条数
        this.pagination.total = (data && data.total) || 0;
      } catch (err) {
        console.error("获取移库单列表失败", err);
      }
    },
    // ========== 状态格式化（数字枚举 → 中文）==========
    formatStatus(status) {
      const map = { 0: '待审核', 1: '进行中', 2: '已完成', 3: '已驳回' };
      if (status === null || status === undefined || status === '') return '';
      return map[status] !== undefined ? map[status] : String(status);
    },
    // ========== 类型格式化（兼容数字枚举 / 中文字符串）==========
    formatType(type) {
      const map = { 1: '调拨出库', 2: '销售出库', 3: '退货出库' };
      if (type === null || type === undefined || type === '') return '';
      return map[type] !== undefined ? map[type] : String(type);
    },
    // ========== 数字千分位格式化 ==========
    formatNumber(value, decimals = 0) {
      if (value === null || value === undefined || value === '') return '';
      if (typeof value === 'string') return value;
      return Number(value).toLocaleString('zh-CN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    },
    // ========== 时间戳格式化 ==========
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
    },
    // ========== 搜索 ==========
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadMovementList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { orderNo: "", businessNo: "" };
      this.pagination.pageNo = 1;
      this.loadMovementList();
    },
    // ========== 新增移库单 ==========
    handleAdd() {
      alert("新增移库单功能待实现");
    },
    // ========== 编辑移库单 ==========
    handleEdit(row) {
      alert(`编辑移库单：${row.orderNo}`);
    },
    // ========== 删除移库单 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除「${row.orderNo}」吗？`)) return;
      try {
        await deleteMovementOrder(row.id);
        alert("删除成功");
        this.loadMovementList();
      } catch (err) {
        console.error("删除移库单失败", err);
      }
    },
    // ========== 打印 ==========
    handlePrint(row) {
      alert(`打印移库单：${row.orderNo}`);
    },
    // ========== 状态颜色（模板中状态标签的配色，保留原逻辑）==========
    getStatusColor(status) {
      const map = {
        '已完成': '#52c41a',
        '待审核': '#faad14',
        '进行中': '#1890ff',
        '已驳回': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '已完成': '#f6ffed',
        '待审核': '#fffbe6',
        '进行中': '#e6f7ff',
        '已驳回': '#fff2f0'
      };
      return map[status] || '#fff';
    }
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
  height: 420px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1698px;
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
  max-width: 160px;
}

/* 单号/业务单号 样式 */
.order-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.6;
}
.order-no {
  color: #006be6;
  font-weight: 500;
}
.business-no {
  color: #8c8c8c;
  font-size: 12px;
}

/* 数量/金额 样式 */
.amount-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.6;
}

/* 操作信息 样式 */
.operator-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.6;
}

/* 展开箭头列 */
.main-tab td:first-child,
.main-tab th:first-child {
  width: 40px;
  min-width: 40px;
  max-width: 40px;
}

.ol-col {
  width: 180px;
  min-width: 180px;
  position: sticky;
  right: 0;
  background-color: #fff;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.ol-col button:first-child {
  color: #006be6;
}
.ol-col button:first-child:hover {
  background-color: #f0f4f9;
}
.ol-col button:nth-child(2) {
  color: red;
}
.ol-col button:nth-child(2):hover {
  background-color: #fff2f0;
}
.ol-col button:last-child {
  color: #006be6;
}
.ol-col button:last-child:hover {
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