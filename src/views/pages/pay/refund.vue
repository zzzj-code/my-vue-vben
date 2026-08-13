<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>应用编号</span>
            <input type="text" placeholder="请输入应用编号" v-model="searchForm.appId" />
          </div>
          <div>
            <span>退款渠道</span>
            <input type="text" placeholder="请输入退款渠道" v-model="searchForm.channelCode" />
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
          <div>支付退款列表</div>
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
                <th><div class="th-inner">编号</div></th>
                <th><div class="th-inner">支付金额</div></th>
                <th><div class="th-inner">退款金额</div></th>
                <th><div class="th-inner">退款单号</div></th>
                <th><div class="th-inner">退款状态</div></th>
                <th><div class="th-inner">退款渠道</div></th>
                <th><div class="th-inner">退款时间</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th><div class="th-inner">退款原因</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.id }}</td>
                <td>¥{{ item.payAmount.toFixed(2) }}</td>
                <td>¥{{ item.refundAmount.toFixed(2) }}</td>
                <td>{{ item.refundNo }}</td>
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
                <td>{{ item.refundTime }}</td>
                <td>{{ item.createTime }}</td>
                <td>{{ item.reason }}</td>
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
// ========== 导入退款订单相关API ==========
import { getRefundPage, exportRefund } from '#/api/pay/refund';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        appId: '',
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
        const data = await getRefundPage(params);
        this.tabValue = data.list.map((item) => ({
          id: item.id || '',
          payAmount: item.payPrice / 100 || 0,
          refundAmount: item.refundPrice / 100 || 0,
          refundNo: item.no || '',
          status: this.getStatusName(item.status),
          channel: item.channelCode || '',
          refundTime: item.successTime || '',
          createTime: item.createTime || '',
          reason: item.reason || '',
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error('获取列表失败', err);
      }
    },
    // 状态转换
    getStatusName(status) {
      const map = { 0: '退款中', 1: '退款成功', 2: '退款失败', 3: '已拒绝' };
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
        '退款成功': '#52c41a',
        '退款中': '#faad14',
        '退款失败': '#ff4d4f',
        '已拒绝': '#8c8c8c',
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '退款成功': '#f6ffed',
        '退款中': '#fffbe6',
        '退款失败': '#fff2f0',
        '已拒绝': '#f5f5f5',
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
      alert(`退款详情：
退款单号：${item.refundNo}
支付金额：¥${item.payAmount.toFixed(2)}
退款金额：¥${item.refundAmount.toFixed(2)}
退款渠道：${item.channel}
退款状态：${item.status}
退款原因：${item.reason}
申请时间：${item.createTime}
退款时间：${item.refundTime}`);
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
.main-tab th:nth-child(4) { width: 12%; }
.main-tab th:nth-child(5) { width: 10%; }
.main-tab th:nth-child(6) { width: 10%; }
.main-tab th:nth-child(7) { width: 12%; }
.main-tab th:nth-child(8) { width: 12%; }
.main-tab th:nth-child(9) { width: 14%; }
.main-tab th:nth-child(10) { width: 8%; }

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
  justify-content: space-between;
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