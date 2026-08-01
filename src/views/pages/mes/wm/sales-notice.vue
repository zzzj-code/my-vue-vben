<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>通知单编号</span>
            <input type="text" placeholder="请输入通知单编号" />
          </div>
          <div>
            <span>通知单名称</span>
            <input type="text" placeholder="请输入通知单名称" />
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
          <div>发货通知单列表</div>
          <div>
            <button>+新增发货通知单</button>
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
                <th>通知单编号</th>
                <th>通知单名称</th>
                <th>销售订单编号</th>
                <th>客户名称</th>
                <th>发货日期</th>
                <th>收货人</th>
                <th>联系方式</th>
                <th>收货地址</th>
                <th>单据状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.soCode }}</td>
                <td>{{ item.customerName }}</td>
                <td>{{ item.shipDate }}</td>
                <td>{{ item.receiver }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共5条记录<span>20条/页</span></div>
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
          code: "DN-2024-001",
          name: "智能网关发货通知",
          soCode: "SO-2024-001",
          customerName: "深圳市华科电子有限公司",
          shipDate: "2024-01-20",
          receiver: "张明",
          phone: "13800138001",
          address: "深圳市宝安区西乡街道XX科技园A栋5楼",
          status: "已发货",
        },
        {
          id: 2,
          code: "DN-2024-002",
          name: "智能灯泡发货通知",
          soCode: "SO-2024-002",
          customerName: "东莞市恒达精密制造厂",
          shipDate: "2024-02-01",
          receiver: "李强",
          phone: "13800138002",
          address: "东莞市长安镇XX工业区B栋3楼",
          status: "待发货",
        },
        {
          id: 3,
          code: "DN-2024-003",
          name: "电源适配器发货通知",
          soCode: "SO-2024-003",
          customerName: "广州市盛达贸易有限公司",
          shipDate: "2024-02-15",
          receiver: "王芳",
          phone: "13800138003",
          address: "广州市天河区XX路88号盛达大厦12楼",
          status: "已发货",
        },
        {
          id: 4,
          code: "DN-2024-004",
          name: "智能插座发货通知",
          soCode: "SO-2024-004",
          customerName: "珠海市科创新材料有限公司",
          shipDate: "2024-03-01",
          receiver: "刘洋",
          phone: "13800138004",
          address: "珠海市香洲区XX路56号科创中心8楼",
          status: "待发货",
        },
        {
          id: 5,
          code: "DN-2024-005",
          name: "传感器半成品发货通知",
          soCode: "SO-2024-005",
          customerName: "佛山市德力机械制造有限公司",
          shipDate: "2024-03-15",
          receiver: "陈志",
          phone: "13800138005",
          address: "佛山市顺德区XX工业园C栋2楼",
          status: "已发货",
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
  min-width: 1470px;
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
  width: 200px;
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
