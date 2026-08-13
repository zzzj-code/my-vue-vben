<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>转账单号</span>
            <input type="text" placeholder="请输入转账单号" v-model="searchForm.no" />
          </div>
          <div>
            <span>转账渠道</span>
            <input type="text" placeholder="请输入转账渠道" v-model="searchForm.channelCode" />
          </div>
          <div>
            <button @click="handleReset">重置</button>
            <button @click="handleSearch">搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>转账单列表</div>
          <div>
            <button @click="handleExport">导出</button>
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
                <th><div class="th-cell">编号</div></th>
                <th><div class="th-cell">转账金额</div></th>
                <th><div class="th-cell">转账单号</div></th>
                <th><div class="th-cell">转账状态</div></th>
                <th><div class="th-cell">转账渠道</div></th>
                <th><div class="th-cell">创建时间</div></th>
                <th><div class="th-cell">转账时间</div></th>
                <th><div class="th-cell">转账标题</div></th>
                <th><div class="th-cell">支付应用</div></th>
                <th><div class="th-cell">收款人姓名</div></th>
                <th><div class="th-cell">收款账号</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
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
            共{{ pagination.total }}条记录
            <span>{{ pagination.pageSize }}条/页</span>
          </div>
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
// ========== 导入转账订单相关API ==========
import { getTransferPage, exportTransfer } from '#/api/pay/transfer';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        no: '',
        channelCode: '',
      },
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
        Object.keys(this.searchForm).forEach((key) => {
          if (this.searchForm[key]) params[key] = this.searchForm[key];
        });
        const data = await getTransferPage(params);
        this.tabValue = data.list.map((item) => ({
          id: item.id || '',
          transferAmount: item.price / 100 || 0,
          transferNo: item.no || '',
          status: this.getStatusName(item.status),
          channel: item.channelCode || '',
          createTime: item.createTime || '',
          transferTime: item.successTime || '',
          title: item.subject || '',
          appName: item.appName || '',
          receiverName: item.receiverName || '',
          receiverAccount: item.receiverAccount || '',
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error('获取列表失败', err);
      }
    },
    // 状态转换
    getStatusName(status) {
      const map = { 0: '转账中', 1: '转账成功', 2: '转账失败', 3: '已退回' };
      return map[status] || '未知';
    },
    // 搜索
    handleSearch() { this.pagination.pageNo = 1; this.loadList(); },
    // 重置
    handleReset() {
      Object.keys(this.searchForm).forEach((key) => { this.searchForm[key] = ''; });
      this.pagination.pageNo = 1;
      this.loadList();
    },
    // 分页
    handlePageChange(page) { this.pagination.pageNo = page; this.loadList(); },
    // 导出
    handleExport() { alert('导出功能待实现'); },
    // 状态颜色
    getStatusColor(status) {
      const map = {
        '转账成功': '#52c41a',
        '转账中': '#faad14',
        '转账失败': '#ff4d4f',
        '已退回': '#8c8c8c',
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '转账成功': '#f6ffed',
        '转账中': '#fffbe6',
        '转账失败': '#fff2f0',
        '已退回': '#f5f5f5',
      };
      return map[status] || '#fff';
    },
    getChannelBg(channel) {
      const map = {
        'alipay': '#e8f0fe', '支付宝': '#e8f0fe',
        'wechat': '#e8f5e9', '微信支付': '#e8f5e9',
        'union': '#fff3e0', '银联': '#fff3e0',
        'wallet': '#f3e5f5', '钱包支付': '#f3e5f5',
      };
      return map[channel] || '#f5f5f5';
    },
    // 详情
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
  background-color: #ece8e8;
  padding: 0;
  white-space: nowrap;
}
.main-tab th:last-child {
  border-right: none;
}
.th-cell {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
.main-tab th:last-child .th-cell {
  border-right: none;
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