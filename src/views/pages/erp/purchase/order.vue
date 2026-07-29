<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>订单单号</span>
            <input type="text" placeholder="请输入订单单号" />
          </div>
          <div>
            <span>产品</span>
            <input type="text" placeholder="请输入产品" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">采购订单列表</div>
          <div class="top-2">
            <button>+新增采购订单</button>
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
                  <input type="checkbox" name="" id="" />
                </th>
                <th class="col-id">订单单号</th>
                <th>产品信息</th>
                <th>供应商</th>
                <th>订单时间</th>
                <th>创建人</th>
                <th>总数量</th>
                <th>入库数量</th>
                <th>退货数量</th>
                <th>金额合计</th>
                <th>含税金额</th>
                <th>支付定金</th>
                <th>状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td class="col-check"><input type="checkbox" name="" id=""></td>
                <td class="col-id">{{ item.id }}</td>
                <td>{{ item.product }}</td>
                <td>{{ item.supplier }}</td>
                <td>{{ item.orderTime }}</td>
                <td>{{ item.creator }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.入库数量 }}</td>
                <td>{{ item.退货数量 }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.taxAmount }}</td>
                <td>{{ item.deposit }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">详情&nbsp;&nbsp;编辑&nbsp;&nbsp;删除</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共4条数据<span>20条/页</span></div>
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
          id: "PO-2024-001",
          product: "华为 Mate 60 Pro",
          supplier: "华为技术有限公司",
          orderTime: "2024-01-15 14:30",
          creator: "张伟",
          quantity: 50,
          入库数量: 48,
          退货数量: 2,
          amount: 349950,
          taxAmount: 394425,
          deposit: 100000,
          status: "已完成",
        },
        {
          id: "PO-2024-002",
          product: "联想 ThinkPad X1",
          supplier: "联想集团有限公司",
          orderTime: "2024-01-20 09:15",
          creator: "李娜",
          quantity: 30,
          入库数量: 30,
          退货数量: 0,
          amount: 239970,
          taxAmount: 271166,
          deposit: 50000,
          status: "已入库",
        },
        {
          id: "PO-2024-003",
          product: "小米 14 Ultra",
          supplier: "小米科技有限公司",
          orderTime: "2024-01-25 16:45",
          creator: "王强",
          quantity: 100,
          入库数量: 95,
          退货数量: 5,
          amount: 699900,
          taxAmount: 790887,
          deposit: 200000,
          status: "部分入库",
        },
        {
          id: "PO-2024-004",
          product: "Apple iPhone 15 Pro Max",
          supplier: "苹果电子产品商贸有限公司",
          orderTime: "2024-02-01 11:20",
          creator: "刘洋",
          quantity: 80,
          入库数量: 0,
          退货数量: 0,
          amount: 799920,
          taxAmount: 903909,
          deposit: 300000,
          status: "待审核",
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
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #f0eaea;
  text-align: center;
  padding: 0 24px;
}
.main-tab td {
  height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 0 24px;
  background-color: #fff;
}
.col-check {
  position: sticky;
  left: 0;
}
.col-id {
  position: sticky;
  left: 62px;
}
.ol-col {
  position: sticky;
  right: 0;
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
