<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>退货单编号</span>
            <input type="text" placeholder="请输入退货单编号" />
          </div>
          <div>
            <span>退货单名称</span>
            <input type="text" placeholder="请输入退货单名称" />
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
          <div>销售退货单列表</div>
          <div>
            <button>+新增销售退货单</button>
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
                <th>退货单编号</th>
                <th>退货单名称</th>
                <th>销售订单号</th>
                <th>客户编码</th>
                <th>客户名称</th>
                <th>退货原因</th>
                <th>退货日期</th>
                <th>单据状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.soCode }}</td>
                <td>{{ item.customerCode }}</td>
                <td>{{ item.customerName }}</td>
                <td>{{ item.reason }}</td>
                <td>{{ item.returnDate }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共10条记录<span>20条/页</span></div>
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
          code: "SRET-2024-001",
          name: "智能网关退货",
          soCode: "SO-2024-001",
          customerCode: "CUST-001",
          customerName: "深圳市华科电子有限公司",
          reason: "产品质量问题（无法正常启动）",
          returnDate: "2024-02-10",
          status: "已退货",
        },
        {
          id: 2,
          code: "SRET-2024-002",
          name: "智能灯泡退货",
          soCode: "SO-2024-002",
          customerCode: "CUST-002",
          customerName: "东莞市恒达精密制造厂",
          reason: "规格不符（色温偏差）",
          returnDate: "2024-02-25",
          status: "待审核",
        },
        {
          id: 3,
          code: "SRET-2024-003",
          name: "电源适配器退货",
          soCode: "SO-2024-003",
          customerCode: "CUST-003",
          customerName: "广州市盛达贸易有限公司",
          reason: "运输损坏（外壳破损）",
          returnDate: "2024-03-10",
          status: "已退货",
        },
        {
          id: 4,
          code: "SRET-2024-004",
          name: "智能插座退货",
          soCode: "SO-2024-004",
          customerCode: "CUST-004",
          customerName: "珠海市科创新材料有限公司",
          reason: "功能异常（WiFi连接不稳定）",
          returnDate: "2024-03-20",
          status: "待退货",
        },
        {
          id: 5,
          code: "SRET-2024-005",
          name: "传感器半成品退货",
          soCode: "SO-2024-005",
          customerCode: "CUST-005",
          customerName: "佛山市德力机械制造有限公司",
          reason: "精度不达标（偏差超出范围）",
          returnDate: "2024-04-05",
          status: "已退货",
        },
        {
          id: 6,
          code: "SRET-2024-006",
          name: "智能网关第二批次退货",
          soCode: "SO-2024-006",
          customerCode: "CUST-006",
          customerName: "中山市宏远电器有限公司",
          reason: "软件兼容性问题",
          returnDate: "2024-04-15",
          status: "待审核",
        },
        {
          id: 7,
          code: "SRET-2024-007",
          name: "主板半成品退货",
          soCode: "SO-2024-007",
          customerCode: "CUST-007",
          customerName: "惠州市金源包装材料厂",
          reason: "尺寸误差（不符合安装要求）",
          returnDate: "2024-05-02",
          status: "已退货",
        },
        {
          id: 8,
          code: "SRET-2024-008",
          name: "智能灯泡第二批次退货",
          soCode: "SO-2024-008",
          customerCode: "CUST-009",
          customerName: "肇庆市诚信五金制品厂",
          reason: "灯珠损坏（部分不亮）",
          returnDate: "2024-05-15",
          status: "待退货",
        },
        {
          id: 9,
          code: "SRET-2024-009",
          name: "电源适配器第二批次退货",
          soCode: "SO-2024-003",
          customerCode: "CUST-003",
          customerName: "广州市盛达贸易有限公司",
          reason: "电压不稳（输出电压偏差）",
          returnDate: "2024-06-01",
          status: "待审核",
        },
        {
          id: 10,
          code: "SRET-2024-010",
          name: "智能网关第三批次退货",
          soCode: "SO-2024-001",
          customerCode: "CUST-001",
          customerName: "深圳市华科电子有限公司",
          reason: "批次混料（发错型号）",
          returnDate: "2024-06-15",
          status: "已退货",
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
  min-width: 1400px;
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
