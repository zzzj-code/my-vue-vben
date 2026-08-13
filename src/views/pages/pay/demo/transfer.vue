<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div>示例提现单列表</div>
          <div>
            <button @click="handleAdd">+新增示例提现单</button>
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
                  <button @click="handleTransfer(item)" v-if="item.withdrawStatus === '提现失败'">重新转账</button>
                  <span v-else>-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          共{{ pagination.total }}条记录<span>{{ pagination.pageSize }}条/页</span>
          <div style="float: right;">
            <button @click="handlePageChange(1)">&lt;&lt;</button>
            <button @click="handlePageChange(Math.max(1, pagination.pageNo - 1))" :disabled="pagination.pageNo <= 1">&lt;</button>
            <button class="active">{{ pagination.pageNo }}</button>
            <button @click="handlePageChange(pagination.pageNo + 1)">></button>
            <button @click="handlePageChange(Math.ceil(pagination.total / pagination.pageSize))">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入示例提现相关API ==========
import { getDemoWithdrawPage, createDemoWithdraw, transferDemoWithdraw } from '#/api/pay/demo/withdraw';

export default {
  data() {
    return {
      // 分页数据
      pagination: { pageNo: 1, pageSize: 10, total: 0 },
      // 表格数据
      tabValue: [],
    };
  },
  mounted() {
    this.loadList();
  },
  methods: {
    // 加载列表
    async loadList() {
      try {
        const params = {
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
        };
        const data = await getDemoWithdrawPage(params);
        this.tabValue = data.list.map((item) => ({
          id: item.id || '',
          withdrawNo: item.no || '',
          withdrawTitle: item.subject || '',
          withdrawType: this.getTypeName(item.type),
          withdrawAmount: item.price / 100 || 0,
          receiverName: item.receiverName || '',
          receiverAccount: item.receiverAccount || '',
          withdrawStatus: this.getStatusName(item.status),
          transferNo: item.transferNo || '-',
          transferChannel: item.channelCode || '-',
          transferTime: item.transferTime || '-',
          failReason: item.failReason || '-',
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error('获取列表失败', err);
      }
    },
    // 提现类型转换
    getTypeName(type) {
      const map = { 1: '银行卡提现', 2: '支付宝提现', 3: '微信提现' };
      return map[type] || '未知';
    },
    // 状态转换
    getStatusName(status) {
      const map = { 0: '待处理', 1: '审核中', 2: '提现成功', 3: '提现失败' };
      return map[status] || '未知';
    },
    // 分页
    handlePageChange(page) { this.pagination.pageNo = page; this.loadList(); },
    // 新增
    handleAdd() { alert('新增提现单功能待实现'); },
    // 重新转账
    async handleTransfer(item) {
      if (!confirm(`确定要重新转账"${item.withdrawNo}"吗？`)) return;
      try {
        await transferDemoWithdraw({ id: item.id });
        alert('转账成功');
        this.loadList();
      } catch (err) {
        console.error('转账失败', err);
      }
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
