<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>操作人</span>
            <input type="text" placeholder="请输入操作人" />
          </div>
          <div>
            <span>操作模块</span>
            <input type="text" placeholder="请输入操作模块" />
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
          <div>操作日志列表</div>
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
                <th>日志编号</th>
                <th>操作人</th>
                <th>操作模块</th>
                <th>操作名</th>
                <th>操作内容</th>
                <th>操作时间</th>
                <th>业务编号</th>
                <th>操作 IP</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.operator }}</td>
                <td>{{ item.module }}</td>
                <td>{{ item.action }}</td>
                <td>{{ item.content }}</td>
                <td>{{ item.operateTime }}</td>
                <td>{{ item.businessId }}</td>
                <td>{{ item.ip }}</td>
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
          id: "LOG20260801001",
          operator: "张伟",
          module: "用户管理",
          action: "新增用户",
          content: "新增用户：张三（账号：zhangsan）",
          operateTime: "2026-08-01 09:00:00",
          businessId: "USER_001",
          ip: "192.168.1.100",
        },
        {
          id: "LOG20260801002",
          operator: "李娜",
          module: "订单管理",
          action: "创建订单",
          content: "创建订单：ORD20260801001，金额：299.00元",
          operateTime: "2026-08-01 10:30:00",
          businessId: "ORD20260801001",
          ip: "192.168.1.101",
        },
        {
          id: "LOG20260801003",
          operator: "王强",
          module: "库存管理",
          action: "库存调整",
          content: "商品ID：10001，调整数量：+50件，调整后库存：150件",
          operateTime: "2026-08-01 14:20:00",
          businessId: "INV_001",
          ip: "192.168.1.102",
        },
        {
          id: "LOG20260731004",
          operator: "刘洋",
          module: "财务管理",
          action: "生成账单",
          content: "生成2026年7月账单，共23笔，总金额：45,678.00元",
          operateTime: "2026-07-31 16:45:00",
          businessId: "BILL_202607",
          ip: "192.168.1.103",
        },
        {
          id: "LOG20260731005",
          operator: "陈静",
          module: "用户管理",
          action: "更新用户",
          content: "更新用户：李四（账号：lisi），修改邮箱为：lisi@example.com",
          operateTime: "2026-07-31 11:30:00",
          businessId: "USER_002",
          ip: "192.168.1.104",
        },
        {
          id: "LOG20260730006",
          operator: "赵敏",
          module: "订单管理",
          action: "取消订单",
          content: "取消订单：ORD20260730001，原因：用户申请取消",
          operateTime: "2026-07-30 09:30:00",
          businessId: "ORD20260730001",
          ip: "192.168.1.105",
        },
        {
          id: "LOG20260730007",
          operator: "孙浩",
          module: "权限管理",
          action: "分配权限",
          content: "为用户：王五（账号：wangwu）分配角色：仓库管理员",
          operateTime: "2026-07-30 14:00:00",
          businessId: "USER_003",
          ip: "192.168.1.106",
        },
        {
          id: "LOG20260729008",
          operator: "周婷",
          module: "库存管理",
          action: "盘点入库",
          content: "盘点入库：商品ID：10005，数量：30件，备注：盘点调整",
          operateTime: "2026-07-29 10:15:00",
          businessId: "INV_005",
          ip: "192.168.1.107",
        },
        {
          id: "LOG20260729009",
          operator: "吴刚",
          module: "财务管理",
          action: "确认收款",
          content:
            "确认收款：订单ORD20260728001，金额：1,299.00元，支付方式：微信支付",
          operateTime: "2026-07-29 15:30:00",
          businessId: "ORD20260728001",
          ip: "192.168.1.108",
        },
        {
          id: "LOG20260728010",
          operator: "郑丽",
          module: "系统管理",
          action: "系统配置",
          content: "修改系统配置：短信发送间隔从60秒调整为30秒",
          operateTime: "2026-07-28 08:30:00",
          businessId: "SYS_CONFIG",
          ip: "192.168.1.109",
        },
        {
          id: "LOG20260728011",
          operator: "张伟",
          module: "用户管理",
          action: "重置密码",
          content: "重置用户：赵六（账号：zhaoliu）的密码",
          operateTime: "2026-07-28 10:45:00",
          businessId: "USER_004",
          ip: "192.168.1.100",
        },
        {
          id: "LOG20260727012",
          operator: "李娜",
          module: "订单管理",
          action: "订单发货",
          content: "订单ORD20260726001已发货，快递：顺丰，单号：SF1234567890",
          operateTime: "2026-07-27 11:20:00",
          businessId: "ORD20260726001",
          ip: "192.168.1.101",
        },
        {
          id: "LOG20260727013",
          operator: "王强",
          module: "库存管理",
          action: "库存预警",
          content:
            "商品ID：10008 库存低于安全线，当前库存：5件，安全库存：20件",
          operateTime: "2026-07-27 16:00:00",
          businessId: "INV_008",
          ip: "192.168.1.102",
        },
        {
          id: "LOG20260726014",
          operator: "刘洋",
          module: "财务管理",
          action: "生成报表",
          content:
            "生成2026年Q2财务报表，收入：1,234,567.00元，支出：987,654.00元",
          operateTime: "2026-07-26 14:30:00",
          businessId: "RPT_Q2_2026",
          ip: "192.168.1.103",
        },
        {
          id: "LOG20260726015",
          operator: "陈静",
          module: "用户管理",
          action: "禁用用户",
          content: "禁用用户：孙七（账号：sunqi），原因：账号异常",
          operateTime: "2026-07-26 09:15:00",
          businessId: "USER_005",
          ip: "192.168.1.104",
        },
        {
          id: "LOG20260725016",
          operator: "赵敏",
          module: "订单管理",
          action: "订单退款",
          content: "订单ORD20260725001退款成功，退款金额：599.00元",
          operateTime: "2026-07-25 15:00:00",
          businessId: "ORD20260725001",
          ip: "192.168.1.105",
        },
        {
          id: "LOG20260725017",
          operator: "孙浩",
          module: "权限管理",
          action: "创建角色",
          content: "创建角色：财务专员，分配权限：查看账单、确认收款",
          operateTime: "2026-07-25 10:30:00",
          businessId: "ROLE_001",
          ip: "192.168.1.106",
        },
        {
          id: "LOG20260724018",
          operator: "周婷",
          module: "库存管理",
          action: "库存调拨",
          content: "从北京中心仓调拨商品ID：10010，数量：200件至上海分仓",
          operateTime: "2026-07-24 13:45:00",
          businessId: "TRANS_001",
          ip: "192.168.1.107",
        },
        {
          id: "LOG20260724019",
          operator: "吴刚",
          module: "财务管理",
          action: "发票开具",
          content:
            "开具发票：INV20260724001，金额：5,600.00元，购方：华为技术有限公司",
          operateTime: "2026-07-24 09:00:00",
          businessId: "INV20260724001",
          ip: "192.168.1.108",
        },
        {
          id: "LOG20260723020",
          operator: "郑丽",
          module: "系统管理",
          action: "数据库备份",
          content: "全量数据库备份完成，备份文件大小：1.2GB，耗时：5分23秒",
          operateTime: "2026-07-23 02:00:00",
          businessId: "BACKUP_001",
          ip: "127.0.0.1",
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
  min-width: 1200px;
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
