<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>工单编码</span>
            <input type="text" placeholder="请输入工单编码" />
          </div>
          <div>
            <span>工单名称</span>
            <input type="text" placeholder="请输入工单名称" />
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
          <div>生产工单列表</div>
          <div>
            <button>+新增工单</button>
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
                  <button>条码</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共{{ tabValue.length }}条记录<span>20条/页</span></div>
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
          id: 1,
          code: "MO-2024-001",
          name: "智能网关生产工单",
          type: "生产工单",
          source: "销售订单",
          sourceCode: "SO-2024-001",
          productCode: "P-2024-006",
          productName: "智能网关",
          spec: "ZigBee 3.0 白色",
          unit: "台",
          qty: 100,
          customerCode: "CUST-001",
          customerName: "深圳市华科电子有限公司",
          demandDate: "2024-01-20",
          status: "已完成",
          createTime: "2024-01-15 10:30",
        },
        {
          id: 2,
          code: "MO-2024-002",
          name: "智能灯泡生产工单",
          type: "生产工单",
          source: "销售订单",
          sourceCode: "SO-2024-002",
          productCode: "P-2024-012",
          productName: "智能灯泡",
          spec: "RGB 9W E27螺口",
          unit: "个",
          qty: 200,
          customerCode: "CUST-002",
          customerName: "东莞市恒达精密制造厂",
          demandDate: "2024-02-05",
          status: "生产中",
          createTime: "2024-01-20 14:20",
        },
        {
          id: 3,
          code: "MO-2024-003",
          name: "电源适配器生产工单",
          type: "生产工单",
          source: "销售订单",
          sourceCode: "SO-2024-003",
          productCode: "P-2024-005",
          productName: "电源适配器",
          spec: "12V/2A 裸板",
          unit: "个",
          qty: 150,
          customerCode: "CUST-003",
          customerName: "广州市盛达贸易有限公司",
          demandDate: "2024-02-20",
          status: "待审核",
          createTime: "2024-02-01 09:15",
        },
        {
          id: 4,
          code: "MO-2024-004",
          name: "主板半成品生产工单",
          type: "生产工单",
          source: "生产计划",
          sourceCode: "PP-2024-001",
          productCode: "P-2024-011",
          productName: "主板半成品",
          spec: "PCB 四层板 带元件",
          unit: "片",
          qty: 300,
          customerCode: "",
          customerName: "内部使用",
          demandDate: "2024-03-10",
          status: "待排产",
          createTime: "2024-02-10 16:40",
        },
        {
          id: 5,
          code: "MO-2024-005",
          name: "智能插座生产工单",
          type: "生产工单",
          source: "销售订单",
          sourceCode: "SO-2024-005",
          productCode: "P-2024-018",
          productName: "智能插座",
          spec: "10A 250V WiFi版",
          unit: "个",
          qty: 120,
          customerCode: "CUST-005",
          customerName: "佛山市德力机械制造有限公司",
          demandDate: "2024-03-20",
          status: "生产中",
          createTime: "2024-03-01 11:00",
        },
        {
          id: 6,
          code: "MO-2024-006",
          name: "传感器半成品生产工单",
          type: "生产工单",
          source: "生产计划",
          sourceCode: "PP-2024-002",
          productCode: "P-2024-017",
          productName: "传感器半成品",
          spec: "温湿度 SHT30",
          unit: "个",
          qty: 200,
          customerCode: "",
          customerName: "内部使用",
          demandDate: "2024-03-25",
          status: "已完成",
          createTime: "2024-03-15 13:30",
        },
        {
          id: 7,
          code: "MO-2024-007",
          name: "智能网关第二批次生产工单",
          type: "生产工单",
          source: "销售订单",
          sourceCode: "SO-2024-006",
          productCode: "P-2024-006",
          productName: "智能网关",
          spec: "ZigBee 3.0 黑色",
          unit: "台",
          qty: 80,
          customerCode: "CUST-006",
          customerName: "中山市宏远电器有限公司",
          demandDate: "2024-04-05",
          status: "待审核",
          createTime: "2024-04-01 08:50",
        },
        {
          id: 8,
          code: "MO-2024-008",
          name: "智能灯泡第二批次生产工单",
          type: "生产工单",
          source: "销售订单",
          sourceCode: "SO-2024-007",
          productCode: "P-2024-012",
          productName: "智能灯泡",
          spec: "RGB 9W E27螺口",
          unit: "个",
          qty: 150,
          customerCode: "CUST-007",
          customerName: "惠州市金源包装材料厂",
          demandDate: "2024-04-20",
          status: "生产中",
          createTime: "2024-04-10 10:20",
        },
        {
          id: 9,
          code: "MO-2024-009",
          name: "电源适配器第二批次生产工单",
          type: "生产工单",
          source: "销售订单",
          sourceCode: "SO-2024-008",
          productCode: "P-2024-005",
          productName: "电源适配器",
          spec: "12V/2A 带外壳",
          unit: "个",
          qty: 100,
          customerCode: "CUST-008",
          customerName: "江门市天马玻璃制品有限公司",
          demandDate: "2024-05-05",
          status: "待排产",
          createTime: "2024-05-01 15:00",
        },
        {
          id: 10,
          code: "MO-2024-010",
          name: "智能插座第二批次生产工单",
          type: "生产工单",
          source: "销售订单",
          sourceCode: "SO-2024-009",
          productCode: "P-2024-018",
          productName: "智能插座",
          spec: "10A 250V WiFi版",
          unit: "个",
          qty: 180,
          customerCode: "CUST-009",
          customerName: "肇庆市诚信五金制品厂",
          demandDate: "2024-05-20",
          status: "已完成",
          createTime: "2024-05-15 09:30",
        },
      ],
    };
  },
  methods: {
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