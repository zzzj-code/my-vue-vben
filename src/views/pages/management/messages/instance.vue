<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>场景编码</span>
            <input type="text" placeholder="请输入场景编码" />
          </div>
          <div>
            <span>业务类型</span>
            <input type="text" placeholder="请输入业务类型" />
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
          <div>消息实例列表</div>
          <div>
            <button style="background-color: #fff"></button>
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
                <th>编号</th>
                <th>场景编码</th>
                <th>标题</th>
                <th>业务类型</th>
                <th>业务ID</th>
                <th>计划发送</th>
                <th>实际发送</th>
                <th>状态</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.sceneCode }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.businessType }}</td>
                <td>{{ item.businessId }}</td>
                <td>{{ item.planSend }}</td>
                <td>{{ item.actualSend }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>详情</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共14条记录<span>20条/页</span></div>
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
          sceneCode: "ORDER_CREATE",
          title: "订单创建通知 #ORD20260801001",
          businessType: "订单消息",
          businessId: "ORD20260801001",
          planSend: "2026-08-01 09:05:00",
          actualSend: "2026-08-01 09:05:12",
          status: "已发送",
          createTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          sceneCode: "ORDER_PAY_SUCCESS",
          title: "订单支付成功 #ORD20260801002",
          businessType: "订单消息",
          businessId: "ORD20260801002",
          planSend: "2026-08-01 10:35:00",
          actualSend: "2026-08-01 10:35:08",
          status: "已发送",
          createTime: "2026-08-01 10:30:00",
        },
        {
          id: 3,
          sceneCode: "ORDER_SHIP",
          title: "订单发货通知 #ORD20260731001",
          businessType: "订单消息",
          businessId: "ORD20260731001",
          planSend: "2026-07-31 14:25:00",
          actualSend: "2026-07-31 14:25:15",
          status: "已发送",
          createTime: "2026-07-31 14:20:00",
        },
        {
          id: 4,
          sceneCode: "INVENTORY_WARN",
          title: "库存预警通知 - 商品ID: 10001",
          businessType: "库存消息",
          businessId: "INV001",
          planSend: "2026-07-31 16:50:00",
          actualSend: null,
          status: "待发送",
          createTime: "2026-07-31 16:45:00",
        },
        {
          id: 5,
          sceneCode: "USER_REGISTER",
          title: "用户注册验证码 - 用户: 张三",
          businessType: "用户消息",
          businessId: "USER20260730001",
          planSend: "2026-07-30 11:05:00",
          actualSend: "2026-07-30 11:05:03",
          status: "已发送",
          createTime: "2026-07-30 11:00:00",
        },
        {
          id: 6,
          sceneCode: "INVENTORY_LOW",
          title: "库存不足提醒 - 商品ID: 10005",
          businessType: "库存消息",
          businessId: "INV005",
          planSend: "2026-07-30 09:35:00",
          actualSend: null,
          status: "发送失败",
          createTime: "2026-07-30 09:30:00",
        },
        {
          id: 7,
          sceneCode: "PWD_RESET",
          title: "密码重置通知 - 用户: 李四",
          businessType: "用户消息",
          businessId: "USER20260729001",
          planSend: "2026-07-29 13:55:00",
          actualSend: "2026-07-29 13:55:20",
          status: "已发送",
          createTime: "2026-07-29 13:50:00",
        },
        {
          id: 8,
          sceneCode: "SYS_MAINTENANCE",
          title: "系统维护通知 - 2026-08-01 02:00",
          businessType: "系统消息",
          businessId: "SYS20260729001",
          planSend: "2026-07-29 15:15:00",
          actualSend: null,
          status: "已取消",
          createTime: "2026-07-29 15:10:00",
        },
        {
          id: 9,
          sceneCode: "INVOICE_SUCCESS",
          title: "发票开具成功 - 发票号: INV20260728001",
          businessType: "发票消息",
          businessId: "INV20260728001",
          planSend: "2026-07-28 10:05:00",
          actualSend: "2026-07-28 10:05:06",
          status: "已发送",
          createTime: "2026-07-28 10:00:00",
        },
        {
          id: 10,
          sceneCode: "MONTHLY_BILL",
          title: "月结账单通知 - 2026年7月",
          businessType: "财务消息",
          businessId: "BILL202607001",
          planSend: "2026-07-28 08:25:00",
          actualSend: null,
          status: "待发送",
          createTime: "2026-07-28 08:20:00",
        },
        {
          id: 11,
          sceneCode: "ORDER_CREATE",
          title: "订单创建通知 #ORD20260728001",
          businessType: "订单消息",
          businessId: "ORD20260728001",
          planSend: "2026-07-28 14:00:00",
          actualSend: "2026-07-28 14:00:10",
          status: "已发送",
          createTime: "2026-07-28 13:55:00",
        },
        {
          id: 12,
          sceneCode: "INVENTORY_WARN",
          title: "库存预警通知 - 商品ID: 10008",
          businessType: "库存消息",
          businessId: "INV008",
          planSend: "2026-07-27 16:00:00",
          actualSend: null,
          status: "发送失败",
          createTime: "2026-07-27 15:55:00",
        },
        {
          id: 13,
          sceneCode: "USER_REGISTER",
          title: "用户注册验证码 - 用户: 王五",
          businessType: "用户消息",
          businessId: "USER20260727001",
          planSend: "2026-07-27 14:05:00",
          actualSend: "2026-07-27 14:05:05",
          status: "已发送",
          createTime: "2026-07-27 14:00:00",
        },
        {
          id: 14,
          sceneCode: "INVOICE_SUCCESS",
          title: "发票开具成功 - 发票号: INV20260727001",
          businessType: "发票消息",
          businessId: "INV20260727001",
          planSend: "2026-07-27 11:35:00",
          actualSend: "2026-07-27 11:35:12",
          status: "已发送",
          createTime: "2026-07-27 11:30:00",
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
  width: 72%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 18%;
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
  height: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1435px;
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
  width: 100px;
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
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
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
