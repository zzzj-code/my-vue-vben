<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div>示例提现单列表</div>
          <div>
            <button>+新增示例提现单</button>
            <button style="background-color: #fff"></button>
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
                <th>提现单编号</th>
                <th>提现标题</th>
                <th>提现类型</th>
                <th>提现金额</th>
                <th>收款人姓名</th>
                <th>收款人账号</th>
                <th>提现状态</th>
                <th>转账单号</th>
                <th>转账渠道</th>
                <th>转账时间</th>
                <th>转账失败原因</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.withdrawNo }}</td>
                <td>{{ item.withdrawTitle }}</td>
                <td>{{ item.withdrawType }}</td>
                <td>{{ item.withdrawAmount }}</td>
                <td>{{ item.receiverName }}</td>
                <td>{{ item.receiverAccount }}</td>
                <td>{{ item.withdrawStatus }}</td>
                <td>{{ item.transferNo }}</td>
                <td>{{ item.transferChannel }}</td>
                <td>{{ item.transferTime }}</td>
                <td>{{ item.failReason }}</td>
                <td class="ol-col">
                  <button>重新转账</button>
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
          id: 1,
          withdrawNo: "WD2026001",
          withdrawTitle: "工资提现",
          withdrawType: "银行卡提现",
          withdrawAmount: 3500.0,
          receiverName: "张伟",
          receiverAccount: "6222 **** **** 1234",
          withdrawStatus: "提现成功",
          transferNo: "TRF20260115001",
          transferChannel: "支付宝",
          transferTime: "2026-01-15 14:30:00",
          failReason: "-",
        },
        {
          id: 2,
          withdrawNo: "WD2026002",
          withdrawTitle: "佣金提现",
          withdrawType: "微信提现",
          withdrawAmount: 2680.5,
          receiverName: "李娜",
          receiverAccount: "wx_****5678",
          withdrawStatus: "提现成功",
          transferNo: "TRF20260116002",
          transferChannel: "微信支付",
          transferTime: "2026-01-16 10:20:00",
          failReason: "-",
        },
        {
          id: 3,
          withdrawNo: "WD2026003",
          withdrawTitle: "货款提现",
          withdrawType: "银行卡提现",
          withdrawAmount: 12000.0,
          receiverName: "王强",
          receiverAccount: "6226 **** **** 5678",
          withdrawStatus: "审核中",
          transferNo: "-",
          transferChannel: "-",
          transferTime: "-",
          failReason: "-",
        },
        {
          id: 4,
          withdrawNo: "WD2026004",
          withdrawTitle: "合作分成",
          withdrawType: "支付宝提现",
          withdrawAmount: 8000.0,
          receiverName: "刘洋",
          receiverAccount: "ali_****9012",
          withdrawStatus: "提现失败",
          transferNo: "TRF20260118004",
          transferChannel: "支付宝",
          transferTime: "2026-01-18 16:45:00",
          failReason: "银行卡信息错误",
        },
        {
          id: 5,
          withdrawNo: "WD2026005",
          withdrawTitle: "报销费用",
          withdrawType: "银行卡提现",
          withdrawAmount: 1560.0,
          receiverName: "陈静",
          receiverAccount: "6228 **** **** 9012",
          withdrawStatus: "提现成功",
          transferNo: "TRF20260119005",
          transferChannel: "银联",
          transferTime: "2026-01-19 09:30:00",
          failReason: "-",
        },
        {
          id: 6,
          withdrawNo: "WD2026006",
          withdrawTitle: "项目奖金",
          withdrawType: "微信提现",
          withdrawAmount: 5000.0,
          receiverName: "杨帆",
          receiverAccount: "wx_****2345",
          withdrawStatus: "提现成功",
          transferNo: "TRF20260120006",
          transferChannel: "微信支付",
          transferTime: "2026-01-20 11:00:00",
          failReason: "-",
        },
        {
          id: 7,
          withdrawNo: "WD2026007",
          withdrawTitle: "预付款退回",
          withdrawType: "支付宝提现",
          withdrawAmount: 3000.0,
          receiverName: "赵磊",
          receiverAccount: "ali_****6789",
          withdrawStatus: "提现失败",
          transferNo: "TRF20260121007",
          transferChannel: "支付宝",
          transferTime: "2026-01-21 14:20:00",
          failReason: "账户余额不足",
        },
        {
          id: 8,
          withdrawNo: "WD2026008",
          withdrawTitle: "服务费提现",
          withdrawType: "银行卡提现",
          withdrawAmount: 4200.0,
          receiverName: "黄丽",
          receiverAccount: "6225 **** **** 3456",
          withdrawStatus: "提现成功",
          transferNo: "TRF20260122008",
          transferChannel: "银联",
          transferTime: "2026-01-22 15:40:00",
          failReason: "-",
        },
        {
          id: 9,
          withdrawNo: "WD2026009",
          withdrawTitle: "尾款结算",
          withdrawType: "微信提现",
          withdrawAmount: 15000.0,
          receiverName: "周婷",
          receiverAccount: "wx_****7890",
          withdrawStatus: "待处理",
          transferNo: "-",
          transferChannel: "-",
          transferTime: "-",
          failReason: "-",
        },
        {
          id: 10,
          withdrawNo: "WD2026010",
          withdrawTitle: "活动经费",
          withdrawType: "银行卡提现",
          withdrawAmount: 2500.0,
          receiverName: "吴刚",
          receiverAccount: "6229 **** **** 6789",
          withdrawStatus: "提现成功",
          transferNo: "TRF20260124010",
          transferChannel: "银联",
          transferTime: "2026-01-24 10:15:00",
          failReason: "-",
        },
        {
          id: 11,
          withdrawNo: "WD2026011",
          withdrawTitle: "培训费提现",
          withdrawType: "支付宝提现",
          withdrawAmount: 1800.0,
          receiverName: "郑爽",
          receiverAccount: "ali_****3456",
          withdrawStatus: "提现成功",
          transferNo: "TRF20260125011",
          transferChannel: "支付宝",
          transferTime: "2026-01-25 13:30:00",
          failReason: "-",
        },
        {
          id: 12,
          withdrawNo: "WD2026012",
          withdrawTitle: "咨询费提现",
          withdrawType: "微信提现",
          withdrawAmount: 6800.0,
          receiverName: "孙阳",
          receiverAccount: "wx_****8901",
          withdrawStatus: "提现失败",
          transferNo: "TRF20260126012",
          transferChannel: "微信支付",
          transferTime: "2026-01-26 09:50:00",
          failReason: "账户已冻结",
        },
        {
          id: 13,
          withdrawNo: "WD2026013",
          withdrawTitle: "采购款提现",
          withdrawType: "银行卡提现",
          withdrawAmount: 20000.0,
          receiverName: "林芳",
          receiverAccount: "6212 **** **** 5678",
          withdrawStatus: "审核中",
          transferNo: "-",
          transferChannel: "-",
          transferTime: "-",
          failReason: "-",
        },
        {
          id: 14,
          withdrawNo: "WD2026014",
          withdrawTitle: "押金退还",
          withdrawType: "支付宝提现",
          withdrawAmount: 1500.0,
          receiverName: "郭强",
          receiverAccount: "ali_****1234",
          withdrawStatus: "提现成功",
          transferNo: "TRF20260128014",
          transferChannel: "支付宝",
          transferTime: "2026-01-28 16:20:00",
          failReason: "-",
        },
        {
          id: 15,
          withdrawNo: "WD2026015",
          withdrawTitle: "退款处理",
          withdrawType: "微信提现",
          withdrawAmount: 3200.0,
          receiverName: "唐丽",
          receiverAccount: "wx_****5678",
          withdrawStatus: "提现失败",
          transferNo: "TRF20260129015",
          transferChannel: "微信支付",
          transferTime: "2026-01-29 11:40:00",
          failReason: "收款账号不存在",
        },
        {
          id: 16,
          withdrawNo: "WD2026016",
          withdrawTitle: "分成款提现",
          withdrawType: "银行卡提现",
          withdrawAmount: 4500.0,
          receiverName: "顾刚",
          receiverAccount: "6223 **** **** 7890",
          withdrawStatus: "提现成功",
          transferNo: "TRF20260201016",
          transferChannel: "银联",
          transferTime: "2026-02-01 08:30:00",
          failReason: "-",
        },
        {
          id: 17,
          withdrawNo: "WD2026017",
          withdrawTitle: "补贴提现",
          withdrawType: "支付宝提现",
          withdrawAmount: 2300.0,
          receiverName: "沈静",
          receiverAccount: "ali_****9012",
          withdrawStatus: "待处理",
          transferNo: "-",
          transferChannel: "-",
          transferTime: "-",
          failReason: "-",
        },
        {
          id: 18,
          withdrawNo: "WD2026018",
          withdrawTitle: "薪资补发",
          withdrawType: "银行卡提现",
          withdrawAmount: 6800.0,
          receiverName: "贺军",
          receiverAccount: "6217 **** **** 2345",
          withdrawStatus: "提现成功",
          transferNo: "TRF20260203018",
          transferChannel: "银联",
          transferTime: "2026-02-03 14:10:00",
          failReason: "-",
        },
        {
          id: 19,
          withdrawNo: "WD2026019",
          withdrawTitle: "绩效奖金",
          withdrawType: "微信提现",
          withdrawAmount: 12000.0,
          receiverName: "陶云",
          receiverAccount: "wx_****4567",
          withdrawStatus: "提现失败",
          transferNo: "TRF20260204019",
          transferChannel: "微信支付",
          transferTime: "2026-02-04 10:30:00",
          failReason: "账户实名认证不通过",
        },
        {
          id: 20,
          withdrawNo: "WD2026020",
          withdrawTitle: "年终分红",
          withdrawType: "银行卡提现",
          withdrawAmount: 50000.0,
          receiverName: "苏磊",
          receiverAccount: "6220 **** **** 8901",
          withdrawStatus: "提现成功",
          transferNo: "TRF20260205020",
          transferChannel: "支付宝",
          transferTime: "2026-02-05 16:00:00",
          failReason: "-",
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
  width: 126px;
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
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
