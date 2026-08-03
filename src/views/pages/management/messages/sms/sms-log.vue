<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>手机号</span>
            <input type="text" placeholder="请输入手机号" />
          </div>
          <div>
            <span>短信渠道</span>
            <input type="text" placeholder="请输入短信渠道" />
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
          <div>短信日志列表</div>
          <div>
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
                <th>编号</th>
                <th>手机号</th>
                <th>短信内容</th>
                <th>发送状态</th>
                <th>发送时间</th>
                <th>接收状态</th>
                <th>接收时间</th>
                <th>短信渠道</th>
                <th>模板编号</th>
                <th>短信类型</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.content }}</td>
                <td>{{ item.sendStatus }}</td>
                <td>{{ item.sendTime }}</td>
                <td>{{ item.receiveStatus }}</td>
                <td>{{ item.receiveTime }}</td>
                <td>{{ item.channel }}</td>
                <td>{{ item.templateId }}</td>
                <td>{{ item.smsType }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>详情</button>
                </td>
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
          phone: "138****8001",
          content: "您的验证码是：123456，5分钟内有效，请勿泄露。",
          sendStatus: "成功",
          sendTime: "2026-08-01 09:05:12",
          receiveStatus: "已送达",
          receiveTime: "2026-08-01 09:05:15",
          channel: "阿里云",
          templateId: "SMS_123456789",
          smsType: "验证码",
          createTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          phone: "138****8002",
          content: "您正在登录系统，验证码：654321，有效期为5分钟。",
          sendStatus: "成功",
          sendTime: "2026-08-01 10:35:08",
          receiveStatus: "已送达",
          receiveTime: "2026-08-01 10:35:11",
          channel: "腾讯云",
          templateId: "SMS_987654321",
          smsType: "验证码",
          createTime: "2026-08-01 10:30:00",
        },
        {
          id: 3,
          phone: "138****8003",
          content:
            "您的订单已创建成功，订单号：ORD20260801001，金额：299.00元。",
          sendStatus: "成功",
          sendTime: "2026-07-31 14:25:15",
          receiveStatus: "已送达",
          receiveTime: "2026-07-31 14:25:18",
          channel: "阿里云",
          templateId: "SMS_789123456",
          smsType: "通知",
          createTime: "2026-07-31 14:20:00",
        },
        {
          id: 4,
          phone: "138****8004",
          content: "您的订单ORD20260731001已支付成功，支付金额：1299.00元。",
          sendStatus: "成功",
          sendTime: "2026-07-31 16:50:30",
          receiveStatus: "已送达",
          receiveTime: "2026-07-31 16:50:33",
          channel: "腾讯云",
          templateId: "SMS_321654987",
          smsType: "通知",
          createTime: "2026-07-31 16:45:00",
        },
        {
          id: 5,
          phone: "138****8005",
          content: "商品iPhone 15库存不足，当前库存：5件，请及时补货。",
          sendStatus: "失败",
          sendTime: "2026-07-30 11:05:03",
          receiveStatus: "未送达",
          receiveTime: null,
          channel: "阿里云",
          templateId: "SMS_159357852",
          smsType: "通知",
          createTime: "2026-07-30 11:00:00",
        },
        {
          id: 6,
          phone: "138****8006",
          content:
            "【限时特惠】小米手机限时折扣8折，点击链接：https://xxx.com 立即购买！",
          sendStatus: "成功",
          sendTime: "2026-07-30 09:35:45",
          receiveStatus: "已送达",
          receiveTime: "2026-07-30 09:35:48",
          channel: "腾讯云",
          templateId: "SMS_852753159",
          smsType: "营销",
          createTime: "2026-07-30 09:30:00",
        },
        {
          id: 7,
          phone: "138****8007",
          content: "您已成功重置密码，新密码：Abc123456，请及时登录修改。",
          sendStatus: "成功",
          sendTime: "2026-07-29 13:55:20",
          receiveStatus: "已送达",
          receiveTime: "2026-07-29 13:55:23",
          channel: "阿里云",
          templateId: "SMS_951753456",
          smsType: "通知",
          createTime: "2026-07-29 13:50:00",
        },
        {
          id: 8,
          phone: "138****8008",
          content: "尊敬的会员，您本月有1500积分即将过期，请及时兑换。",
          sendStatus: "失败",
          sendTime: "2026-07-29 15:15:00",
          receiveStatus: "未送达",
          receiveTime: null,
          channel: "阿里云",
          templateId: "SMS_753951456",
          smsType: "营销",
          createTime: "2026-07-29 15:10:00",
        },
        {
          id: 9,
          phone: "138****8009",
          content: "您正在进行支付操作，验证码：789012，请勿泄露给他人。",
          sendStatus: "成功",
          sendTime: "2026-07-28 10:05:06",
          receiveStatus: "已送达",
          receiveTime: "2026-07-28 10:05:09",
          channel: "阿里云",
          templateId: "SMS_456789123",
          smsType: "验证码",
          createTime: "2026-07-28 10:00:00",
        },
        {
          id: 10,
          phone: "138****8010",
          content:
            "您本月账单已生成，金额：568.00元，请于2026-08-10前完成支付。",
          sendStatus: "成功",
          sendTime: "2026-07-28 08:25:00",
          receiveStatus: "已送达",
          receiveTime: "2026-07-28 08:25:03",
          channel: "腾讯云",
          templateId: "SMS_321789654",
          smsType: "通知",
          createTime: "2026-07-28 08:20:00",
        },
        {
          id: 11,
          phone: "138****8011",
          content: "您正在修改密码，验证码：345678，有效期为10分钟。",
          sendStatus: "成功",
          sendTime: "2026-07-27 14:05:05",
          receiveStatus: "已送达",
          receiveTime: "2026-07-27 14:05:08",
          channel: "阿里云",
          templateId: "SMS_456123789",
          smsType: "验证码",
          createTime: "2026-07-27 14:00:00",
        },
        {
          id: 12,
          phone: "138****8012",
          content:
            "新品华为Mate 60已上市，限时优惠5999元，点击查看：https://xxx.com",
          sendStatus: "成功",
          sendTime: "2026-07-27 11:35:12",
          receiveStatus: "已送达",
          receiveTime: "2026-07-27 11:35:15",
          channel: "腾讯云",
          templateId: "SMS_789456123",
          smsType: "营销",
          createTime: "2026-07-27 11:30:00",
        },
        {
          id: 13,
          phone: "138****8013",
          content:
            "您的订单ORD20260726001已发货，快递单号：SF1234567890，请注意查收。",
          sendStatus: "成功",
          sendTime: "2026-07-26 10:20:30",
          receiveStatus: "已送达",
          receiveTime: "2026-07-26 10:20:33",
          channel: "阿里云",
          templateId: "SMS_654987321",
          smsType: "通知",
          createTime: "2026-07-26 10:15:00",
        },
        {
          id: 14,
          phone: "138****8014",
          content:
            "会议提醒：项目评审会将于2026-07-27 14:00在301会议室召开，请准时参加。",
          sendStatus: "成功",
          sendTime: "2026-07-26 16:05:00",
          receiveStatus: "已送达",
          receiveTime: "2026-07-26 16:05:03",
          channel: "腾讯云",
          templateId: "SMS_654321789",
          smsType: "通知",
          createTime: "2026-07-26 16:00:00",
        },
        {
          id: 15,
          phone: "138****8015",
          content: "您正在修改绑定的手机号，验证码：901234，5分钟内有效。",
          sendStatus: "成功",
          sendTime: "2026-07-25 10:35:08",
          receiveStatus: "已送达",
          receiveTime: "2026-07-25 10:35:11",
          channel: "阿里云",
          templateId: "SMS_147258369",
          smsType: "验证码",
          createTime: "2026-07-25 10:30:00",
        },
        {
          id: 16,
          phone: "138****8016",
          content:
            "【限时特惠】全场商品满200减30，点击链接：https://xxx.com 立即抢购！",
          sendStatus: "失败",
          sendTime: "2026-07-24 14:00:00",
          receiveStatus: "未送达",
          receiveTime: null,
          channel: "阿里云",
          templateId: "SMS_852753159",
          smsType: "营销",
          createTime: "2026-07-24 13:55:00",
        },
        {
          id: 17,
          phone: "138****8017",
          content: "您有新的订单，订单号：ORD20260724001，请及时处理。",
          sendStatus: "成功",
          sendTime: "2026-07-24 09:30:15",
          receiveStatus: "已送达",
          receiveTime: "2026-07-24 09:30:18",
          channel: "腾讯云",
          templateId: "SMS_789123456",
          smsType: "通知",
          createTime: "2026-07-24 09:25:00",
        },
        {
          id: 18,
          phone: "138****8018",
          content: "您正在进行支付操作，验证码：567890，请勿泄露给他人。",
          sendStatus: "成功",
          sendTime: "2026-07-23 16:45:20",
          receiveStatus: "已送达",
          receiveTime: "2026-07-23 16:45:23",
          channel: "阿里云",
          templateId: "SMS_456789123",
          smsType: "验证码",
          createTime: "2026-07-23 16:40:00",
        },
        {
          id: 19,
          phone: "138****8019",
          content:
            "您本月账单已生成，金额：1280.00元，请于2026-08-05前完成支付。",
          sendStatus: "成功",
          sendTime: "2026-07-22 08:30:00",
          receiveStatus: "已送达",
          receiveTime: "2026-07-22 08:30:03",
          channel: "腾讯云",
          templateId: "SMS_321789654",
          smsType: "通知",
          createTime: "2026-07-22 08:25:00",
        },
        {
          id: 20,
          phone: "138****8020",
          content:
            "商品库存预警：商品华为耳机库存不足，当前库存：3件，请及时补货。",
          sendStatus: "成功",
          sendTime: "2026-07-21 11:20:10",
          receiveStatus: "已送达",
          receiveTime: "2026-07-21 11:20:13",
          channel: "阿里云",
          templateId: "SMS_159357852",
          smsType: "通知",
          createTime: "2026-07-21 11:15:00",
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
  min-width: 1700px;
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
  width: 80px;
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
