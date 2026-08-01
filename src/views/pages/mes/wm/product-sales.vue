<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>出库单编号</span>
            <input type="text" placeholder="请输入出库单编号" />
          </div>
          <div>
            <span>出库单名称</span>
            <input type="text" placeholder="请输入出库单名称" />
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
          <div>销售出库单列表</div>
          <div>
            <button>+新增销售出库单</button>
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
                <th>出库单编号</th>
                <th>出库单名称</th>
                <th>发货通知单号</th>
                <th>销售订单编号</th>
                <th>客户编码</th>
                <th>客户名称</th>
                <th>收货人</th>
                <th>承运商</th>
                <th>运输单号</th>
                <th>出库日期</th>
                <th>单据状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.dnCode }}</td>
                <td>{{ item.soCode }}</td>
                <td>{{ item.customerCode }}</td>
                <td>{{ item.customerName }}</td>
                <td>{{ item.receiver }}</td>
                <td>{{ item.carrier }}</td>
                <td>{{ item.trackingNo }}</td>
                <td>{{ item.outDate }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共8条记录<span>20条/页</span></div>
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
          code: "SOUT-2024-001",
          name: "智能网关出库",
          dnCode: "DN-2024-001",
          soCode: "SO-2024-001",
          customerCode: "CUST-001",
          customerName: "深圳市华科电子有限公司",
          receiver: "张明",
          carrier: "顺丰速运",
          trackingNo: "SF1234567890",
          outDate: "2024-01-20",
          status: "已出库",
        },
        {
          id: 2,
          code: "SOUT-2024-002",
          name: "智能灯泡出库",
          dnCode: "DN-2024-002",
          soCode: "SO-2024-002",
          customerCode: "CUST-002",
          customerName: "东莞市恒达精密制造厂",
          receiver: "李强",
          carrier: "德邦物流",
          trackingNo: "DB9876543210",
          outDate: "2024-02-01",
          status: "待出库",
        },
        {
          id: 3,
          code: "SOUT-2024-003",
          name: "电源适配器出库",
          dnCode: "DN-2024-003",
          soCode: "SO-2024-003",
          customerCode: "CUST-003",
          customerName: "广州市盛达贸易有限公司",
          receiver: "王芳",
          carrier: "圆通速递",
          trackingNo: "YT4567890123",
          outDate: "2024-02-15",
          status: "已出库",
        },
        {
          id: 4,
          code: "SOUT-2024-004",
          name: "智能插座出库",
          dnCode: "DN-2024-004",
          soCode: "SO-2024-004",
          customerCode: "CUST-004",
          customerName: "珠海市科创新材料有限公司",
          receiver: "刘洋",
          carrier: "中通快递",
          trackingNo: "ZT7890123456",
          outDate: "2024-03-01",
          status: "待出库",
        },
        {
          id: 5,
          code: "SOUT-2024-005",
          name: "传感器半成品出库",
          dnCode: "DN-2024-005",
          soCode: "SO-2024-005",
          customerCode: "CUST-005",
          customerName: "佛山市德力机械制造有限公司",
          receiver: "陈志",
          carrier: "韵达快递",
          trackingNo: "YD2345678901",
          outDate: "2024-03-15",
          status: "已出库",
        },
        {
          id: 6,
          code: "SOUT-2024-006",
          name: "智能网关第二批出库",
          dnCode: "DN-2024-006",
          soCode: "SO-2024-006",
          customerCode: "CUST-006",
          customerName: "中山市宏远电器有限公司",
          receiver: "赵娜",
          carrier: "京东物流",
          trackingNo: "JD3456789012",
          outDate: "2024-04-01",
          status: "待出库",
        },
        {
          id: 7,
          code: "SOUT-2024-007",
          name: "主板半成品出库",
          dnCode: "DN-2024-007",
          soCode: "SO-2024-007",
          customerCode: "CUST-007",
          customerName: "惠州市金源包装材料厂",
          receiver: "孙鹏",
          carrier: "申通快递",
          trackingNo: "ST4567890123",
          outDate: "2024-04-15",
          status: "已出库",
        },
        {
          id: 8,
          code: "SOUT-2024-008",
          name: "智能灯泡第二批出库",
          dnCode: "DN-2024-008",
          soCode: "SO-2024-008",
          customerCode: "CUST-009",
          customerName: "肇庆市诚信五金制品厂",
          receiver: "吴刚",
          carrier: "百世快递",
          trackingNo: "BS5678901234",
          outDate: "2024-05-01",
          status: "待出库",
        },
      ],
    };
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
  min-width: 1770px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #ece8e8;
}
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 20px;
  border-right: 0;
}
.ol-col {
  width: 240px;
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
}
.ol-col button {
  width: 56px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:last-child {
  color: red;
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
