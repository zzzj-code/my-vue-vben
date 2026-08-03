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
            <span>渠道</span>
            <input type="text" placeholder="请输入渠道" />
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
          <div>发送日志列表</div>
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
                <th>实例ID</th>
                <th>场景编码</th>
                <th>渠道</th>
                <th>渠道模板编码</th>
                <th>接收人ID</th>
                <th>接收地址</th>
                <th>标题</th>
                <th>状态</th>
                <th>服务商</th>
                <th>失败原因</th>
                <th>重试次数</th>
                <th>发送时间</th>
                <th>创建时间</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.instanceId }}</td>
                <td>{{ item.sceneCode }}</td>
                <td>{{ item.channel }}</td>
                <td>{{ item.channelTemplateCode }}</td>
                <td>{{ item.receiverId }}</td>
                <td>{{ item.receiverAddress }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.serviceProvider }}</td>
                <td>{{ item.failReason }}</td>
                <td>{{ item.retryCount }}</td>
                <td>{{ item.sendTime }}</td>
                <td>{{ item.createTime }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共20条记录<span>20条/页</span></div>
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
          instanceId: 1,
          sceneCode: "ORDER_CREATE",
          channel: "短信",
          channelTemplateCode: "SMS_ORDER_001",
          receiverId: "USER_001",
          receiverAddress: "138****8001",
          title: "订单创建通知",
          status: "成功",
          serviceProvider: "阿里云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-08-01 09:05:12",
          createTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          instanceId: 1,
          sceneCode: "ORDER_CREATE",
          channel: "邮件",
          channelTemplateCode: "EMAIL_ORDER_001",
          receiverId: "USER_001",
          receiverAddress: "zhangsan@example.com",
          title: "订单创建通知",
          status: "成功",
          serviceProvider: "阿里云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-08-01 09:05:15",
          createTime: "2026-08-01 09:00:00",
        },
        {
          id: 3,
          instanceId: 2,
          sceneCode: "ORDER_PAY_SUCCESS",
          channel: "短信",
          channelTemplateCode: "SMS_PAY_001",
          receiverId: "USER_002",
          receiverAddress: "138****8002",
          title: "订单支付成功",
          status: "成功",
          serviceProvider: "腾讯云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-08-01 10:35:08",
          createTime: "2026-08-01 10:30:00",
        },
        {
          id: 4,
          instanceId: 3,
          sceneCode: "ORDER_SHIP",
          channel: "短信",
          channelTemplateCode: "SMS_SHIP_001",
          receiverId: "USER_003",
          receiverAddress: "138****8003",
          title: "订单发货通知",
          status: "失败",
          serviceProvider: "阿里云",
          failReason: "手机号格式错误",
          retryCount: 2,
          sendTime: "2026-07-31 14:25:15",
          createTime: "2026-07-31 14:20:00",
        },
        {
          id: 5,
          instanceId: 4,
          sceneCode: "INVENTORY_WARN",
          channel: "邮件",
          channelTemplateCode: "EMAIL_INVENTORY_001",
          receiverId: "ADMIN_001",
          receiverAddress: "admin@example.com",
          title: "库存预警通知",
          status: "成功",
          serviceProvider: "阿里云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-07-31 16:50:30",
          createTime: "2026-07-31 16:45:00",
        },
        {
          id: 6,
          instanceId: 5,
          sceneCode: "USER_REGISTER",
          channel: "短信",
          channelTemplateCode: "SMS_REGISTER_001",
          receiverId: "USER_004",
          receiverAddress: "138****8004",
          title: "用户注册验证码",
          status: "成功",
          serviceProvider: "腾讯云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-07-30 11:05:03",
          createTime: "2026-07-30 11:00:00",
        },
        {
          id: 7,
          instanceId: 6,
          sceneCode: "INVENTORY_LOW",
          channel: "站内信",
          channelTemplateCode: "SITE_INVENTORY_001",
          receiverId: "ROLE_001",
          receiverAddress: "系统消息",
          title: "库存不足提醒",
          status: "失败",
          serviceProvider: "自建",
          failReason: "站内信服务异常",
          retryCount: 3,
          sendTime: "2026-07-30 09:35:45",
          createTime: "2026-07-30 09:30:00",
        },
        {
          id: 8,
          instanceId: 7,
          sceneCode: "PWD_RESET",
          channel: "邮件",
          channelTemplateCode: "EMAIL_PWD_001",
          receiverId: "USER_005",
          receiverAddress: "lisi@example.com",
          title: "密码重置通知",
          status: "成功",
          serviceProvider: "阿里云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-07-29 13:55:20",
          createTime: "2026-07-29 13:50:00",
        },
        {
          id: 9,
          instanceId: 8,
          sceneCode: "SYS_MAINTENANCE",
          channel: "站内信",
          channelTemplateCode: "SITE_SYS_001",
          receiverId: "ALL_USER",
          receiverAddress: "全部用户",
          title: "系统维护通知",
          status: "取消",
          serviceProvider: "自建",
          failReason: null,
          retryCount: 0,
          sendTime: null,
          createTime: "2026-07-29 15:10:00",
        },
        {
          id: 10,
          instanceId: 9,
          sceneCode: "INVOICE_SUCCESS",
          channel: "邮件",
          channelTemplateCode: "EMAIL_INVOICE_001",
          receiverId: "USER_006",
          receiverAddress: "wangwu@example.com",
          title: "发票开具成功",
          status: "成功",
          serviceProvider: "阿里云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-07-28 10:05:06",
          createTime: "2026-07-28 10:00:00",
        },
        {
          id: 11,
          instanceId: 10,
          sceneCode: "MONTHLY_BILL",
          channel: "邮件",
          channelTemplateCode: "EMAIL_BILL_001",
          receiverId: "USER_007",
          receiverAddress: "zhaoliu@example.com",
          title: "月结账单通知",
          status: "待发送",
          serviceProvider: "阿里云",
          failReason: null,
          retryCount: 0,
          sendTime: null,
          createTime: "2026-07-28 08:20:00",
        },
        {
          id: 12,
          instanceId: 11,
          sceneCode: "ORDER_CREATE",
          channel: "短信",
          channelTemplateCode: "SMS_ORDER_001",
          receiverId: "USER_008",
          receiverAddress: "138****8005",
          title: "订单创建通知",
          status: "成功",
          serviceProvider: "腾讯云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-07-28 14:00:10",
          createTime: "2026-07-28 13:55:00",
        },
        {
          id: 13,
          instanceId: 12,
          sceneCode: "INVENTORY_WARN",
          channel: "短信",
          channelTemplateCode: "SMS_INVENTORY_001",
          receiverId: "ADMIN_002",
          receiverAddress: "138****8006",
          title: "库存预警通知",
          status: "失败",
          serviceProvider: "阿里云",
          failReason: "短信余额不足",
          retryCount: 5,
          sendTime: "2026-07-27 16:00:20",
          createTime: "2026-07-27 15:55:00",
        },
        {
          id: 14,
          instanceId: 13,
          sceneCode: "USER_REGISTER",
          channel: "短信",
          channelTemplateCode: "SMS_REGISTER_001",
          receiverId: "USER_009",
          receiverAddress: "138****8007",
          title: "用户注册验证码",
          status: "成功",
          serviceProvider: "腾讯云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-07-27 14:05:05",
          createTime: "2026-07-27 14:00:00",
        },
        {
          id: 15,
          instanceId: 14,
          sceneCode: "INVOICE_SUCCESS",
          channel: "短信",
          channelTemplateCode: "SMS_INVOICE_001",
          receiverId: "USER_010",
          receiverAddress: "138****8008",
          title: "发票开具成功",
          status: "成功",
          serviceProvider: "阿里云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-07-27 11:35:12",
          createTime: "2026-07-27 11:30:00",
        },
        {
          id: 16,
          instanceId: 15,
          sceneCode: "ORDER_SHIP",
          channel: "短信",
          channelTemplateCode: "SMS_SHIP_001",
          receiverId: "USER_011",
          receiverAddress: "138****8009",
          title: "订单发货通知",
          status: "重试中",
          serviceProvider: "阿里云",
          failReason: "网络超时",
          retryCount: 1,
          sendTime: "2026-07-26 10:20:30",
          createTime: "2026-07-26 10:15:00",
        },
        {
          id: 17,
          instanceId: 16,
          sceneCode: "ORDER_CREATE",
          channel: "邮件",
          channelTemplateCode: "EMAIL_ORDER_001",
          receiverId: "USER_011",
          receiverAddress: "sunqi@example.com",
          title: "订单创建通知",
          status: "成功",
          serviceProvider: "阿里云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-07-26 10:10:15",
          createTime: "2026-07-26 10:05:00",
        },
        {
          id: 18,
          instanceId: 17,
          sceneCode: "PWD_RESET",
          channel: "短信",
          channelTemplateCode: "SMS_PWD_001",
          receiverId: "USER_012",
          receiverAddress: "138****8010",
          title: "密码重置通知",
          status: "成功",
          serviceProvider: "腾讯云",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-07-25 16:45:08",
          createTime: "2026-07-25 16:40:00",
        },
        {
          id: 19,
          instanceId: 18,
          sceneCode: "INVENTORY_LOW",
          channel: "邮件",
          channelTemplateCode: "EMAIL_INVENTORY_002",
          receiverId: "ADMIN_003",
          receiverAddress: "admin2@example.com",
          title: "库存不足提醒",
          status: "失败",
          serviceProvider: "阿里云",
          failReason: "邮件服务器拒绝连接",
          retryCount: 4,
          sendTime: "2026-07-25 09:35:50",
          createTime: "2026-07-25 09:30:00",
        },
        {
          id: 20,
          instanceId: 19,
          sceneCode: "MONTHLY_BILL",
          channel: "站内信",
          channelTemplateCode: "SITE_BILL_001",
          receiverId: "ALL_USER",
          receiverAddress: "全部用户",
          title: "月结账单通知",
          status: "成功",
          serviceProvider: "自建",
          failReason: null,
          retryCount: 0,
          sendTime: "2026-07-24 08:30:00",
          createTime: "2026-07-24 08:00:00",
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
  min-width: 1800px;
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
