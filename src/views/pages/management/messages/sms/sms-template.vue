<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>短信类型</span>
            <input type="text" placeholder="请输入短信类型" />
          </div>
          <div>
            <span>开启状态</span>
            <input type="text" placeholder="请输入开启状态" />
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
          <div>短信模板列表</div>
          <div>
            <button>+新增短信模板</button>
            <button disabled>批量删除</button>
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
                <th><input type="checkbox" /></th>
                <th>编号</th>
                <th>短信类型</th>
                <th>模板名称</th>
                <th>模板编码</th>
                <th>模板内容</th>
                <th>开启状态</th>
                <th>短信 API 的模板编号</th>
                <th>短信渠道</th>
                <th>创建时间</th>
                <th>备注</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td>{{ item.id }}</td>
                <td>{{ item.smsType }}</td>
                <td>{{ item.templateName }}</td>
                <td>{{ item.templateCode }}</td>
                <td>{{ item.templateContent }}</td>
                <td>{{ item.enableStatus }}</td>
                <td>{{ item.apiTemplateId }}</td>
                <td>{{ item.channel }}</td>
                <td>{{ item.createTime }}</td>
                <td>{{ item.remark }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>测试</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共15条记录<span>20条/页</span></div>
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
          smsType: "验证码",
          templateName: "注册验证码",
          templateCode: "SMS_001",
          templateContent: "您的验证码是：{code}，5分钟内有效，请勿泄露。",
          enableStatus: "开启",
          apiTemplateId: "SMS_123456789",
          channel: "阿里云",
          createTime: "2026-08-01 09:00:00",
          remark: "用户注册场景",
        },
        {
          id: 2,
          smsType: "验证码",
          templateName: "登录验证码",
          templateCode: "SMS_002",
          templateContent: "您正在登录系统，验证码：{code}，有效期为5分钟。",
          enableStatus: "开启",
          apiTemplateId: "SMS_987654321",
          channel: "腾讯云",
          createTime: "2026-08-01 10:30:00",
          remark: "用户登录场景",
        },
        {
          id: 3,
          smsType: "验证码",
          templateName: "支付验证码",
          templateCode: "SMS_003",
          templateContent:
            "您正在进行支付操作，验证码：{code}，请勿泄露给他人。",
          enableStatus: "开启",
          apiTemplateId: "SMS_456789123",
          channel: "阿里云",
          createTime: "2026-07-31 14:20:00",
          remark: "支付安全验证",
        },
        {
          id: 4,
          smsType: "通知",
          templateName: "订单创建通知",
          templateCode: "SMS_004",
          templateContent:
            "您的订单已创建成功，订单号：{orderNo}，金额：{amount}元。",
          enableStatus: "开启",
          apiTemplateId: "SMS_789123456",
          channel: "阿里云",
          createTime: "2026-07-31 16:45:00",
          remark: "订单流程",
        },
        {
          id: 5,
          smsType: "通知",
          templateName: "订单支付成功",
          templateCode: "SMS_005",
          templateContent:
            "您的订单{orderNo}已支付成功，支付金额：{amount}元。",
          enableStatus: "开启",
          apiTemplateId: "SMS_321654987",
          channel: "腾讯云",
          createTime: "2026-07-30 11:00:00",
          remark: "支付确认",
        },
        {
          id: 6,
          smsType: "通知",
          templateName: "订单发货通知",
          templateCode: "SMS_006",
          templateContent:
            "您的订单{orderNo}已发货，快递单号：{trackingNo}，请注意查收。",
          enableStatus: "停用",
          apiTemplateId: "SMS_654987321",
          channel: "阿里云",
          createTime: "2026-07-30 09:30:00",
          remark: "物流通知",
        },
        {
          id: 7,
          smsType: "通知",
          templateName: "库存预警通知",
          templateCode: "SMS_007",
          templateContent:
            "商品{productName}库存不足，当前库存：{stock}件，请及时补货。",
          enableStatus: "开启",
          apiTemplateId: "SMS_159357852",
          channel: "阿里云",
          createTime: "2026-07-29 13:50:00",
          remark: "库存管理",
        },
        {
          id: 8,
          smsType: "营销",
          templateName: "节日促销",
          templateCode: "SMS_008",
          templateContent:
            "【限时特惠】{productName}限时折扣{discount}折，点击链接：{link} 立即购买！",
          enableStatus: "开启",
          apiTemplateId: "SMS_852753159",
          channel: "腾讯云",
          createTime: "2026-07-29 15:10:00",
          remark: "营销活动",
        },
        {
          id: 9,
          smsType: "营销",
          templateName: "会员权益通知",
          templateCode: "SMS_009",
          templateContent:
            "尊敬的会员，您本月有{points}积分即将过期，请及时兑换。",
          enableStatus: "停用",
          apiTemplateId: "SMS_753951456",
          channel: "阿里云",
          createTime: "2026-07-28 10:00:00",
          remark: "会员运营",
        },
        {
          id: 10,
          smsType: "通知",
          templateName: "密码重置通知",
          templateCode: "SMS_010",
          templateContent:
            "您已成功重置密码，新密码：{newPassword}，请及时登录修改。",
          enableStatus: "开启",
          apiTemplateId: "SMS_951753456",
          channel: "腾讯云",
          createTime: "2026-07-28 08:20:00",
          remark: "账号安全",
        },
        {
          id: 11,
          smsType: "验证码",
          templateName: "修改密码验证码",
          templateCode: "SMS_011",
          templateContent: "您正在修改密码，验证码：{code}，有效期为10分钟。",
          enableStatus: "开启",
          apiTemplateId: "SMS_456123789",
          channel: "阿里云",
          createTime: "2026-07-27 14:00:00",
          remark: "安全验证",
        },
        {
          id: 12,
          smsType: "营销",
          templateName: "新品上市通知",
          templateCode: "SMS_012",
          templateContent:
            "新品{productName}已上市，限时优惠{price}元，点击查看：{link}",
          enableStatus: "停用",
          apiTemplateId: "SMS_789456123",
          channel: "腾讯云",
          createTime: "2026-07-27 11:30:00",
          remark: "新品推广",
        },
        {
          id: 13,
          smsType: "通知",
          templateName: "账单提醒",
          templateCode: "SMS_013",
          templateContent:
            "您本月账单已生成，金额：{amount}元，请于{billDate}前完成支付。",
          enableStatus: "开启",
          apiTemplateId: "SMS_321789654",
          channel: "阿里云",
          createTime: "2026-07-26 09:00:00",
          remark: "财务管理",
        },
        {
          id: 14,
          smsType: "通知",
          templateName: "会议通知",
          templateCode: "SMS_014",
          templateContent:
            "会议提醒：{meetingName}将于{meetingTime}在{meetingPlace}召开，请准时参加。",
          enableStatus: "开启",
          apiTemplateId: "SMS_654321789",
          channel: "腾讯云",
          createTime: "2026-07-26 16:00:00",
          remark: "内部通知",
        },
        {
          id: 15,
          smsType: "验证码",
          templateName: "修改手机号验证码",
          templateCode: "SMS_015",
          templateContent:
            "您正在修改绑定的手机号，验证码：{code}，5分钟内有效。",
          enableStatus: "开启",
          apiTemplateId: "SMS_147258369",
          channel: "阿里云",
          createTime: "2026-07-25 10:30:00",
          remark: "安全设置",
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
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 30%;
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
  width: 106px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: black;
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
  min-width: 1600px;
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
  width: 220px;
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
.ol-col button:nth-child(2) {
  color: red;
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
