<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>模板名称</span>
            <input type="text" placeholder="请输入模板名称" />
          </div>
          <div>
            <span>模板编码</span>
            <input type="text" placeholder="请输入模板编码" />
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
          <div>站内信模板列表</div>
          <div>
            <button>+新增站内信模板</button>
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
                <th>模板名称</th>
                <th>模板编码</th>
                <th>发送人名称</th>
                <th>模板内容</th>
                <th>模板类型</th>
                <th>状态</th>
                <th>备注</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td>{{ item.id }}</td>
                <td>{{ item.templateName }}</td>
                <td>{{ item.templateCode }}</td>
                <td>{{ item.senderName }}</td>
                <td>{{ item.content }}</td>
                <td>{{ item.templateType }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.remark }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>测试</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共13条记录<span>20条/页</span></div>
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
          templateName: "订单创建通知",
          templateCode: "SITE_ORDER_CREATE",
          senderName: "系统管理员",
          content: "您的订单已创建成功，订单号：{orderNo}，金额：{amount}元。",
          templateType: "通知",
          status: "启用",
          remark: "用户下单后自动发送",
          createTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          templateName: "订单支付成功通知",
          templateCode: "SITE_ORDER_PAY",
          senderName: "系统管理员",
          content: "您的订单{orderNo}已支付成功，支付金额：{amount}元。",
          templateType: "通知",
          status: "启用",
          remark: "支付成功后发送",
          createTime: "2026-08-01 10:30:00",
        },
        {
          id: 3,
          templateName: "订单发货通知",
          templateCode: "SITE_ORDER_SHIP",
          senderName: "物流部",
          content:
            "您的订单{orderNo}已发货，快递单号：{trackingNo}，请注意查收。",
          templateType: "通知",
          status: "启用",
          remark: "物流发货后发送",
          createTime: "2026-07-31 14:20:00",
        },
        {
          id: 4,
          templateName: "库存预警通知",
          templateCode: "SITE_INVENTORY_WARN",
          senderName: "仓储部",
          content:
            "商品{productName}库存不足，当前库存：{stock}件，请及时补货。",
          templateType: "通知",
          status: "启用",
          remark: "库存低于阈值时发送",
          createTime: "2026-07-31 16:45:00",
        },
        {
          id: 5,
          templateName: "系统维护通知",
          templateCode: "SITE_SYS_MAINTENANCE",
          senderName: "技术部",
          content:
            "系统将于{maintenanceTime}进行维护，预计耗时{hours}小时，请提前保存数据。",
          templateType: "公告",
          status: "停用",
          remark: "已废弃，不再使用",
          createTime: "2026-07-30 11:00:00",
        },
        {
          id: 6,
          templateName: "密码重置通知",
          templateCode: "SITE_PWD_RESET",
          senderName: "安全中心",
          content: "您已成功重置密码，新密码：{newPassword}，请及时登录修改。",
          templateType: "通知",
          status: "启用",
          remark: "密码重置后发送",
          createTime: "2026-07-30 09:30:00",
        },
        {
          id: 7,
          templateName: "会员权益提醒",
          templateCode: "SITE_MEMBER_BENEFIT",
          senderName: "运营部",
          content: "尊敬的会员，您本月有{points}积分即将过期，请及时兑换。",
          templateType: "营销",
          status: "启用",
          remark: "会员积分过期提醒",
          createTime: "2026-07-29 13:50:00",
        },
        {
          id: 8,
          templateName: "新品上市通知",
          templateCode: "SITE_NEW_PRODUCT",
          senderName: "市场部",
          content:
            "新品{productName}已上市，限时优惠{price}元，点击查看：{link}",
          templateType: "营销",
          status: "停用",
          remark: "新品推广模板（测试中）",
          createTime: "2026-07-29 15:10:00",
        },
        {
          id: 9,
          templateName: "账单提醒",
          templateCode: "SITE_BILL_REMIND",
          senderName: "财务部",
          content:
            "您本月账单已生成，金额：{amount}元，请于{billDate}前完成支付。",
          templateType: "通知",
          status: "启用",
          remark: "月度账单提醒",
          createTime: "2026-07-28 10:00:00",
        },
        {
          id: 10,
          templateName: "会议通知",
          templateCode: "SITE_MEETING_NOTICE",
          senderName: "行政部",
          content:
            "会议提醒：{meetingName}将于{meetingTime}在{meetingPlace}召开，请准时参加。",
          templateType: "通知",
          status: "启用",
          remark: "内部会议通知",
          createTime: "2026-07-28 08:20:00",
        },
        {
          id: 11,
          templateName: "节日祝福",
          templateCode: "SITE_HOLIDAY_GREET",
          senderName: "人力资源部",
          content: "祝您{holidayName}快乐！感谢您一直以来对公司的付出与支持。",
          templateType: "营销",
          status: "启用",
          remark: "节日祝福模板",
          createTime: "2026-07-27 14:00:00",
        },
        {
          id: 12,
          templateName: "绩效考核通知",
          templateCode: "SITE_KPI_NOTICE",
          senderName: "人力资源部",
          content: "您好，{period}绩效考核结果已出炉，请登录系统查看详情。",
          templateType: "通知",
          status: "启用",
          remark: "季度绩效考核",
          createTime: "2026-07-27 11:30:00",
        },
        {
          id: 13,
          templateName: "请假审批通知",
          templateCode: "SITE_LEAVE_APPROVE",
          senderName: "人事部",
          content:
            "您的请假申请已{approveStatus}，请假时间：{leaveTime}，请知悉。",
          templateType: "通知",
          status: "启用",
          remark: "请假审批结果通知",
          createTime: "2026-07-26 09:00:00",
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
  min-width: 1440px;
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
