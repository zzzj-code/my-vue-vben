<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>应用编号</span>
            <input type="text" placeholder="请输入应用编号" />
          </div>
          <div>
            <span>支付渠道</span>
            <input type="text" placeholder="请输入支付渠道" />
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
          <div>支付订单列表</div>
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
                <th><div class="th-inner">编号</div></th>
                <th><div class="th-inner">支付金额</div></th>
                <th><div class="th-inner">退款金额</div></th>
                <th><div class="th-inner">手续金额</div></th>
                <th><div class="th-inner">订单号</div></th>
                <th><div class="th-inner">支付状态</div></th>
                <th><div class="th-inner">支付渠道</div></th>
                <th><div class="th-inner">支付时间</div></th>
                <th><div class="th-inner">支付应用</div></th>
                <th><div class="th-inner">商品标题</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.id }}</td>
                <td>¥{{ item.amount.toFixed(2) }}</td>
                <td>¥{{ item.refundAmount.toFixed(2) }}</td>
                <td>¥{{ item.fee.toFixed(2) }}</td>
                <td>{{ item.orderNo }}</td>
                <td>
                  <span :style="{ 
                    color: getStatusColor(item.status),
                    backgroundColor: getStatusBg(item.status),
                    padding: '2px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    display: 'inline-block',
                    fontWeight: '500'
                  }">
                    {{ item.status }}
                  </span>
                </td>
                <td>
                  <span :style="{ 
                    backgroundColor: getChannelBg(item.channel),
                    padding: '2px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    display: 'inline-block'
                  }">
                    {{ item.channel }}
                  </span>
                </td>
                <td>{{ item.payTime }}</td>
                <td>{{ item.appName }}</td>
                <td>{{ item.productTitle }}</td>
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
      currentPage: 1,
      pageSize: 20,
      allData: [],
      tabValue: [],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.allData.length / this.pageSize);
    },
    totalRecords() {
      return this.allData.length;
    }
  },
  mounted() {
    this.generateData();
    this.updatePage();
  },
  methods: {
    generateData() {
      const channels = ['支付宝', '微信支付', '银联', '钱包支付'];
      const statuses = ['支付成功', '待支付', '支付失败', '已退款'];
      const appNames = ['电商平台', '生活服务', '教育平台', '医疗健康', '餐饮外卖'];
      const productTitles = [
        'iPhone 15 Pro Max', '会员VIP年卡', '课程包套餐', '体检套餐', '外卖优惠券',
        '笔记本电脑', '美妆礼盒', '健身月卡', '酒店预订', '机票订购',
        '游戏充值', '视频会员', '云存储服务', '设计素材包', '在线课程',
        '鲜花配送', '蛋糕预定', '电影票', '景区门票', '打车充值'
      ];
      
      this.allData = [];
      for (let i = 1; i <= 50; i++) {
        const amount = +(Math.random() * 5000 + 10).toFixed(2);
        const refundAmount = Math.random() > 0.7 ? +(Math.random() * amount * 0.5).toFixed(2) : 0;
        const fee = +(amount * 0.006).toFixed(2);
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const channel = channels[Math.floor(Math.random() * channels.length)];
        
        this.allData.push({
          id: i,
          amount: amount,
          refundAmount: refundAmount,
          fee: fee,
          orderNo: `ORD${String(i).padStart(6, '0')}${Date.now().toString().slice(-6)}`,
          status: status,
          channel: channel,
          payTime: this.generateRandomTime(),
          appName: appNames[Math.floor(Math.random() * appNames.length)],
          productTitle: productTitles[Math.floor(Math.random() * productTitles.length)],
        });
      }
    },
    generateRandomTime() {
      const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
      const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
      const hour = String(Math.floor(Math.random() * 24)).padStart(2, '0');
      const minute = String(Math.floor(Math.random() * 60)).padStart(2, '0');
      const second = String(Math.floor(Math.random() * 60)).padStart(2, '0');
      return `2026-${month}-${day} ${hour}:${minute}:${second}`;
    },
    updatePage() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.tabValue = this.allData.slice(start, end);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.updatePage();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.updatePage();
      }
    },
    getStatusColor(status) {
      const map = {
        '支付成功': '#52c41a',
        '待支付': '#faad14',
        '支付失败': '#ff4d4f',
        '已退款': '#8c8c8c'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '支付成功': '#f6ffed',
        '待支付': '#fffbe6',
        '支付失败': '#fff2f0',
        '已退款': '#f5f5f5'
      };
      return map[status] || '#fff';
    },
    getChannelBg(channel) {
      const map = {
        '支付宝': '#e8f0fe',
        '微信支付': '#e8f5e9',
        '银联': '#fff3e0',
        '钱包支付': '#f3e5f5'
      };
      return map[channel] || '#f5f5f5';
    },
    handleDetail(item) {
      alert(`订单详情：
订单号：${item.orderNo}
支付金额：¥${item.amount.toFixed(2)}
支付渠道：${item.channel}
支付状态：${item.status}
商品：${item.productTitle}
支付应用：${item.appName}
支付时间：${item.payTime}`);
    }
  }
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
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
  border-right: none;
  border-bottom: 2px solid #ccc;
  padding: 0;
  white-space: nowrap;
}

/* ===== 表头内部 div：承载右边框 ===== */
.th-inner {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

/* 操作列不显示右边框 */
.th-inner.no-border {
  border-right: none;
}

/* 各列宽度控制 */
.main-tab th:nth-child(1) { width: 6%; }
.main-tab th:nth-child(2) { width: 9%; }
.main-tab th:nth-child(3) { width: 9%; }
.main-tab th:nth-child(4) { width: 9%; }
.main-tab th:nth-child(5) { width: 12%; }
.main-tab th:nth-child(6) { width: 10%; }
.main-tab th:nth-child(7) { width: 10%; }
.main-tab th:nth-child(8) { width: 12%; }
.main-tab th:nth-child(9) { width: 10%; }
.main-tab th:nth-child(10) { width: 12%; }
.main-tab th:nth-child(11) { width: 8%; }

.main-tab td {
  text-align: center;
  height: 56px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 4px 6px;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  line-height: 1.4;
}

/* td 中的 div 和 span 换行处理 */
.main-tab td div,
.main-tab td span {
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
}

.ol-col {
  width: 80px;
  min-width: 80px;
  position: sticky;
  right: 0;
  z-index: 2;
  background-color: #fff;
  box-shadow: -2px 0 8px rgba(0,0,0,0.08);
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

.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
}
.pagination button {
  padding: 2px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  height: 24px;
  font-size: 12px;
}
.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.pagination button:hover:not(:disabled) {
  background-color: #006be6;
  color: #fff;
  border-color: #006be6;
}
.pagination span {
  font-weight: 500;
  min-width: 40px;
  text-align: center;
  border: none;
  padding-top: 0;
  height: auto;
}
</style>