<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>转账单号</span>
            <input type="text" placeholder="请输入转账单号" />
          </div>
          <div>
            <span>转账渠道</span>
            <input type="text" placeholder="请输入转账渠道" />
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
          <div>转账单列表</div>
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
                <th>转账金额</th>
                <th>转账单号</th>
                <th>转账状态</th>
                <th>转账渠道</th>
                <th>创建时间</th>
                <th>转账时间</th>
                <th>转账标题</th>
                <th>支付应用</th>
                <th>收款人姓名</th>
                <th>收款账号</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.id }}</td>
                <td>¥{{ item.transferAmount.toFixed(2) }}</td>
                <td>{{ item.transferNo }}</td>
                <td>
                  <span
                    :style="{
                      color: getStatusColor(item.status),
                      backgroundColor: getStatusBg(item.status),
                      padding: '2px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      display: 'inline-block',
                      fontWeight: '500',
                    }"
                  >
                    {{ item.status }}
                  </span>
                </td>
                <td>
                  <span
                    :style="{
                      backgroundColor: getChannelBg(item.channel),
                      padding: '2px 10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      display: 'inline-block',
                    }"
                  >
                    {{ item.channel }}
                  </span>
                </td>
                <td>{{ item.createTime }}</td>
                <td>{{ item.transferTime }}</td>
                <td
                  style="
                    max-width: 120px;
                    text-align: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                >
                  {{ item.title }}
                </td>
                <td>{{ item.appName }}</td>
                <td>{{ item.receiverName }}</td>
                <td>{{ item.receiverAccount }}</td>
                <td class="ol-col">
                  <button @click="handleDetail(item)">详情</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div class="left-info">
            共{{ totalRecords }}条记录
            <span>20条/页</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allData: [],
      tabValue: [],
    };
  },
  computed: {
    totalRecords() {
      return this.allData.length;
    },
  },
  mounted() {
    this.generateData();
    this.tabValue = this.allData;
  },
  methods: {
    generateData() {
      const channels = ["支付宝", "微信支付", "银联", "钱包支付"];
      const statuses = ["转账成功", "转账中", "转账失败", "已退回"];
      const titles = [
        "工资发放",
        "供应商货款",
        "项目奖金",
        "报销费用",
        "合作分成",
        "押金退还",
        "预付款",
        "尾款结算",
        "服务费",
        "佣金支付",
        "采购款",
        "退款处理",
        "活动经费",
        "培训费",
        "咨询费",
      ];
      const appNames = [
        "电商平台",
        "生活服务",
        "教育平台",
        "医疗健康",
        "餐饮外卖",
      ];
      const receiverNames = [
        "张伟",
        "李娜",
        "王强",
        "刘洋",
        "陈静",
        "杨帆",
        "赵磊",
        "黄丽",
        "周婷",
        "吴刚",
      ];

      this.allData = [];
      for (let i = 1; i <= 50; i++) {
        const transferAmount = +(Math.random() * 50000 + 100).toFixed(2);
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const channel = channels[Math.floor(Math.random() * channels.length)];

        const createDate = this.generateRandomTime();
        const transferDate = this.addMinutes(
          createDate,
          Math.floor(Math.random() * 180) + 10,
        );

        this.allData.push({
          id: i,
          transferAmount: transferAmount,
          transferNo: `TRF${String(i).padStart(6, "0")}${Date.now().toString().slice(-6)}`,
          status: status,
          channel: channel,
          createTime: createDate,
          transferTime: transferDate,
          title: titles[Math.floor(Math.random() * titles.length)],
          appName: appNames[Math.floor(Math.random() * appNames.length)],
          receiverName: receiverNames[Math.floor(Math.random() * receiverNames.length)],
          receiverAccount: `6222${String(Math.floor(Math.random() * 1000000000)).padStart(10, "0")}`,
        });
      }
    },
    generateRandomTime() {
      const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
      const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
      const hour = String(Math.floor(Math.random() * 24)).padStart(2, "0");
      const minute = String(Math.floor(Math.random() * 60)).padStart(2, "0");
      const second = String(Math.floor(Math.random() * 60)).padStart(2, "0");
      return `2026-${month}-${day} ${hour}:${minute}:${second}`;
    },
    addMinutes(timeStr, minutes) {
      const date = new Date(`2026-01-01 ${timeStr.split(" ")[1]}`);
      date.setMinutes(date.getMinutes() + minutes);
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hour = String(date.getHours()).padStart(2, "0");
      const min = String(date.getMinutes()).padStart(2, "0");
      const sec = String(date.getSeconds()).padStart(2, "0");
      return `2026-${month}-${day} ${hour}:${min}:${sec}`;
    },
    getStatusColor(status) {
      const map = {
        转账成功: "#52c41a",
        转账中: "#faad14",
        转账失败: "#ff4d4f",
        已退回: "#8c8c8c",
      };
      return map[status] || "#333";
    },
    getStatusBg(status) {
      const map = {
        转账成功: "#f6ffed",
        转账中: "#fffbe6",
        转账失败: "#fff2f0",
        已退回: "#f5f5f5",
      };
      return map[status] || "#fff";
    },
    getChannelBg(channel) {
      const map = {
        支付宝: "#e8f0fe",
        微信支付: "#e8f5e9",
        银联: "#fff3e0",
        钱包支付: "#f3e5f5",
      };
      return map[channel] || "#f5f5f5";
    },
    handleDetail(item) {
      alert(`转账详情：
转账单号：${item.transferNo}
转账金额：¥${item.transferAmount.toFixed(2)}
转账渠道：${item.channel}
转账状态：${item.status}
转账标题：${item.title}
收款人：${item.receiverName}
收款账号：${item.receiverAccount}
支付应用：${item.appName}
创建时间：${item.createTime}
转账时间：${item.transferTime}`);
    },
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
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 63px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
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
  cursor: pointer;
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
  min-width: 1550px;
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
  padding: 0 12px;
  white-space: nowrap;
}
.main-tab td {
  text-align: center;
  height: 56px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 12px;
  border-right: 0;
}
.ol-col {
  width: 80px;
  min-width: 80px;
  position: sticky;
  right: 0;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
}
.ol-col button {
  width: 48px;
  height: 32px;
  border: 0;
  border-radius: 6px;
  background-color: #fff;
  color: #006be6;
  cursor: pointer;
}
.ol-col button:hover {
  background-color: #006be6;
  color: #fff;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.left-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.left-info span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
}
</style>