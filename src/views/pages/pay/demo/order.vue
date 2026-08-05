<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div>示例订单列表</div>
          <div>
            <button>+发起订单</button>
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
                <th>订单编号</th>
                <th>用户编号</th>
                <th>商品名字</th>
                <th>支付价格</th>
                <th>退款金额</th>
                <th>创建时间</th>
                <th>支付单号</th>
                <th>是否支付</th>
                <th>支付时间</th>
                <th>退款时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.orderNo }}</td>
                <td>{{ item.userNo }}</td>
                <td>{{ item.productName }}</td>
                <td>{{ item.payPrice }}</td>
                <td>{{ item.refundAmount }}</td>
                <td>{{ item.createTime }}</td>
                <td>{{ item.payNo }}</td>
                <td>{{ item.isPay }}</td>
                <td>{{ item.payTime }}</td>
                <td>{{ item.refundTime }}</td>
                <td class="ol-col">
                  <button>+前往支付</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          共{{ tabValue.length }}条记录<span>20条/页</span>
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
          orderNo: "ORD2026001",
          userNo: "U10001",
          productName: "iPhone 15 Pro Max 256GB",
          payPrice: 8999.0,
          refundAmount: 0.0,
          createTime: "2026-01-15 10:30:00",
          payNo: "PAY20260115001",
          isPay: "已支付",
          payTime: "2026-01-15 10:35:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026002",
          userNo: "U10002",
          productName: "会员VIP年卡",
          payPrice: 298.0,
          refundAmount: 0.0,
          createTime: "2026-01-16 14:20:00",
          payNo: "PAY20260116002",
          isPay: "已支付",
          payTime: "2026-01-16 14:25:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026003",
          userNo: "U10003",
          productName: "课程包套餐",
          payPrice: 1999.0,
          refundAmount: 0.0,
          createTime: "2026-01-17 09:15:00",
          payNo: "PAY20260117003",
          isPay: "已支付",
          payTime: "2026-01-17 09:20:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026004",
          userNo: "U10004",
          productName: "体检套餐",
          payPrice: 2680.0,
          refundAmount: 2680.0,
          createTime: "2026-01-18 16:45:00",
          payNo: "PAY20260118004",
          isPay: "已退款",
          payTime: "2026-01-18 16:50:00",
          refundTime: "2026-01-20 10:00:00",
        },
        {
          orderNo: "ORD2026005",
          userNo: "U10005",
          productName: "外卖优惠券",
          payPrice: 59.9,
          refundAmount: 0.0,
          createTime: "2026-01-19 11:20:00",
          payNo: "PAY20260119005",
          isPay: "已支付",
          payTime: "2026-01-19 11:25:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026006",
          userNo: "U10006",
          productName: "笔记本电脑",
          payPrice: 6999.0,
          refundAmount: 0.0,
          createTime: "2026-01-20 08:50:00",
          payNo: "PAY20260120006",
          isPay: "已支付",
          payTime: "2026-01-20 08:55:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026007",
          userNo: "U10007",
          productName: "美妆礼盒",
          payPrice: 399.0,
          refundAmount: 399.0,
          createTime: "2026-01-21 13:30:00",
          payNo: "PAY20260121007",
          isPay: "已退款",
          payTime: "2026-01-21 13:35:00",
          refundTime: "2026-01-23 15:20:00",
        },
        {
          orderNo: "ORD2026008",
          userNo: "U10008",
          productName: "健身月卡",
          payPrice: 299.0,
          refundAmount: 0.0,
          createTime: "2026-01-22 15:10:00",
          payNo: "PAY20260122008",
          isPay: "已支付",
          payTime: "2026-01-22 15:15:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026009",
          userNo: "U10009",
          productName: "酒店预订",
          payPrice: 1280.0,
          refundAmount: 0.0,
          createTime: "2026-01-23 09:40:00",
          payNo: "PAY20260123009",
          isPay: "已支付",
          payTime: "2026-01-23 09:45:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026010",
          userNo: "U10010",
          productName: "机票订购",
          payPrice: 2380.0,
          refundAmount: 2380.0,
          createTime: "2026-01-24 12:00:00",
          payNo: "PAY20260124010",
          isPay: "已退款",
          payTime: "2026-01-24 12:05:00",
          refundTime: "2026-01-26 09:30:00",
        },
        {
          orderNo: "ORD2026011",
          userNo: "U10011",
          productName: "游戏充值",
          payPrice: 648.0,
          refundAmount: 0.0,
          createTime: "2026-01-25 10:20:00",
          payNo: "PAY20260125011",
          isPay: "未支付",
          payTime: "-",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026012",
          userNo: "U10012",
          productName: "视频会员",
          payPrice: 198.0,
          refundAmount: 0.0,
          createTime: "2026-01-26 14:30:00",
          payNo: "PAY20260126012",
          isPay: "已支付",
          payTime: "2026-01-26 14:35:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026013",
          userNo: "U10013",
          productName: "云存储服务",
          payPrice: 399.0,
          refundAmount: 399.0,
          createTime: "2026-01-27 08:15:00",
          payNo: "PAY20260127013",
          isPay: "已退款",
          payTime: "2026-01-27 08:20:00",
          refundTime: "2026-01-29 11:00:00",
        },
        {
          orderNo: "ORD2026014",
          userNo: "U10014",
          productName: "设计素材包",
          payPrice: 99.0,
          refundAmount: 0.0,
          createTime: "2026-01-28 16:50:00",
          payNo: "PAY20260128014",
          isPay: "已支付",
          payTime: "2026-01-28 16:55:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026015",
          userNo: "U10015",
          productName: "在线课程",
          payPrice: 3299.0,
          refundAmount: 0.0,
          createTime: "2026-01-29 11:30:00",
          payNo: "PAY20260129015",
          isPay: "已支付",
          payTime: "2026-01-29 11:35:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026016",
          userNo: "U10016",
          productName: "鲜花配送",
          payPrice: 168.0,
          refundAmount: 0.0,
          createTime: "2026-02-01 09:00:00",
          payNo: "PAY20260201016",
          isPay: "已支付",
          payTime: "2026-02-01 09:05:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026017",
          userNo: "U10017",
          productName: "蛋糕预定",
          payPrice: 258.0,
          refundAmount: 258.0,
          createTime: "2026-02-02 13:40:00",
          payNo: "PAY20260202017",
          isPay: "已退款",
          payTime: "2026-02-02 13:45:00",
          refundTime: "2026-02-04 16:00:00",
        },
        {
          orderNo: "ORD2026018",
          userNo: "U10018",
          productName: "电影票",
          payPrice: 79.9,
          refundAmount: 0.0,
          createTime: "2026-02-03 15:25:00",
          payNo: "PAY20260203018",
          isPay: "未支付",
          payTime: "-",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026019",
          userNo: "U10019",
          productName: "景区门票",
          payPrice: 199.0,
          refundAmount: 0.0,
          createTime: "2026-02-04 10:10:00",
          payNo: "PAY20260204019",
          isPay: "已支付",
          payTime: "2026-02-04 10:15:00",
          refundTime: "-",
        },
        {
          orderNo: "ORD2026020",
          userNo: "U10020",
          productName: "打车充值",
          payPrice: 100.0,
          refundAmount: 0.0,
          createTime: "2026-02-05 14:55:00",
          payNo: "PAY20260205020",
          isPay: "已支付",
          payTime: "2026-02-05 15:00:00",
          refundTime: "-",
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
.app-main {
  width: 100%;
  height: 578px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.main-top div:first-child {
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 106px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
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
  height: 480px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1530px;
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
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ol-col {
  width: 220px;
  position: sticky;
  right: 0;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
}
.ol-col button {
  width: 84px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
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
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
