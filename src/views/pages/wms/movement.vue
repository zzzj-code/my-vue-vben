<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>移库单号</span>
            <input type="text" placeholder="请输入移库单号" />
          </div>
          <div>
            <span>业务单号</span>
            <input type="text" placeholder="请输入业务单号" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>移库单列表</div>
          <div>
            <button>+新增移库单</button>
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
                  <button>编辑</button>
                  <button>删除</button>
                  <button>打印</button>
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
export default {
  data() {
    return {
      tabValue: [
        {
          orderNo: "YK20260801001",
          businessNo: "PO20260801001",
          status: "已完成",
          type: "调拨出库",
          warehouse: "北京中心仓",
          totalQty: "1,250",
          totalAmount: "125,800.00",
          supplier: "华为技术有限公司",
          operator: "张伟",
          operateTime: "2026-08-01 14:30",
          remark: "已质检",
        },
        {
          orderNo: "YK20260801002",
          businessNo: "PO20260801002",
          status: "待审核",
          type: "销售出库",
          warehouse: "上海分仓",
          totalQty: "860",
          totalAmount: "89,760.00",
          supplier: "腾讯科技有限公司",
          operator: "李娜",
          operateTime: "2026-08-01 10:15",
          remark: "已质检",
        },
        {
          orderNo: "YK20260731003",
          businessNo: "PO20260731003",
          status: "进行中",
          type: "退货出库",
          warehouse: "深圳分仓",
          totalQty: "320",
          totalAmount: "32,500.00",
          supplier: "小米科技有限公司",
          operator: "王强",
          operateTime: "2026-07-31 16:45",
          remark: "质检中",
        },
        {
          orderNo: "YK20260731004",
          businessNo: "PO20260731004",
          status: "已完成",
          type: "调拨出库",
          warehouse: "广州分仓",
          totalQty: "2,100",
          totalAmount: "234,500.00",
          supplier: "字节跳动有限公司",
          operator: "刘洋",
          operateTime: "2026-07-31 09:20",
          remark: "已质检",
        },
        {
          orderNo: "YK20260730005",
          businessNo: "PO20260730005",
          status: "已驳回",
          type: "销售出库",
          warehouse: "成都分仓",
          totalQty: "150",
          totalAmount: "12,800.00",
          supplier: "美团科技有限公司",
          operator: "陈静",
          operateTime: "2026-07-30 11:00",
          remark: "资料不齐全",
        },
        {
          orderNo: "YK20260730006",
          businessNo: "PO20260730006",
          status: "进行中",
          type: "调拨出库",
          warehouse: "武汉分仓",
          totalQty: "680",
          totalAmount: "67,890.00",
          supplier: "京东物流有限公司",
          operator: "赵敏",
          operateTime: "2026-07-30 08:50",
          remark: "已质检",
        },
        {
          orderNo: "YK20260729007",
          businessNo: "PO20260729007",
          status: "已完成",
          type: "退货出库",
          warehouse: "杭州分仓",
          totalQty: "45",
          totalAmount: "5,600.00",
          supplier: "网易科技有限公司",
          operator: "孙浩",
          operateTime: "2026-07-29 13:40",
          remark: "已质检",
        },
        {
          orderNo: "YK20260729008",
          businessNo: "PO20260729008",
          status: "待审核",
          type: "调拨出库",
          warehouse: "南京分仓",
          totalQty: "920",
          totalAmount: "98,200.00",
          supplier: "阿里巴巴集团",
          operator: "周婷",
          operateTime: "2026-07-29 09:10",
          remark: "已质检",
        },
        {
          orderNo: "YK20260728009",
          businessNo: "PO20260728009",
          status: "已完成",
          type: "销售出库",
          warehouse: "北京中心仓",
          totalQty: "560",
          totalAmount: "56,780.00",
          supplier: "拼多多有限公司",
          operator: "吴刚",
          operateTime: "2026-07-28 15:20",
          remark: "已质检",
        },
        {
          orderNo: "YK20260728010",
          businessNo: "PO20260728010",
          status: "待审核",
          type: "调拨出库",
          warehouse: "上海分仓",
          totalQty: "730",
          totalAmount: "78,900.00",
          supplier: "百度科技有限公司",
          operator: "郑丽",
          operateTime: "2026-07-28 11:40",
          remark: "已质检",
        },
      ],
    };
  },
  methods: {
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