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
            <span>通知类型</span>
            <input type="text" placeholder="请输入通知类型" />
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
          <div>通知列表</div>
          <div>
            <button style="background-color: #fff; color: #006be6; border: 1px solid #ccc;">导出</button>
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
                <th><div class="th-inner">任务编号</div></th>
                <th><div class="th-inner">应用名称</div></th>
                <th><div class="th-inner">商户单信息</div></th>
                <th><div class="th-inner">通知类型</div></th>
                <th><div class="th-inner">关联编号</div></th>
                <th><div class="th-inner">通知状态</div></th>
                <th><div class="th-inner">最后通知时间</div></th>
                <th><div class="th-inner">下次通知时间</div></th>
                <th><div class="th-inner">通知次数</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.taskNo }}</td>
                <td>{{ item.appName }}</td>
                <td>{{ item.merchantInfo }}</td>
                <td>
                  <span :style="{
                    backgroundColor: getTypeBg(item.notifyType),
                    padding: '2px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    display: 'inline-block',
                    color: '#fff',
                    fontWeight: '500'
                  }">
                    {{ item.notifyType }}
                  </span>
                </td>
                <td>{{ item.relatedNo }}</td>
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
                <td>{{ item.lastNotifyTime }}</td>
                <td>{{ item.nextNotifyTime }}</td>
                <td>{{ item.notifyCount }}次</td>
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
      const appNames = ['电商平台', '生活服务', '教育平台', '医疗健康', '餐饮外卖'];
      const notifyTypes = ['支付通知', '退款通知'];
      const statuses = ['待发送', '发送中', '发送成功', '发送失败'];
      const merchantInfoList = [
        '订单支付-20260115001',
        '退款处理-20260115002', 
        '订单支付-20260116003',
        '退款处理-20260116004',
        '订单支付-20260117005',
        '退款处理-20260117006'
      ];
      
      this.allData = [];
      for (let i = 1; i <= 30; i++) {
        const createDate = this.generateRandomTime();
        const lastNotify = this.addMinutes(createDate, Math.floor(Math.random() * 60) + 5);
        const nextNotify = this.addMinutes(lastNotify, Math.floor(Math.random() * 120) + 30);
        
        this.allData.push({
          id: i,
          taskNo: `TASK${String(i).padStart(6, '0')}`,
          appName: appNames[Math.floor(Math.random() * appNames.length)],
          merchantInfo: merchantInfoList[Math.floor(Math.random() * merchantInfoList.length)],
          notifyType: notifyTypes[Math.floor(Math.random() * notifyTypes.length)],
          relatedNo: `REL${String(Math.floor(Math.random() * 1000000)).padStart(6, '0')}`,
          status: statuses[Math.floor(Math.random() * statuses.length)],
          lastNotifyTime: lastNotify,
          nextNotifyTime: nextNotify,
          notifyCount: Math.floor(Math.random() * 10) + 1,
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
    addMinutes(timeStr, minutes) {
      const date = new Date(`2026-01-01 ${timeStr.split(' ')[1]}`);
      date.setMinutes(date.getMinutes() + minutes);
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hour = String(date.getHours()).padStart(2, '0');
      const min = String(date.getMinutes()).padStart(2, '0');
      const sec = String(date.getSeconds()).padStart(2, '0');
      return `2026-${month}-${day} ${hour}:${min}:${sec}`;
    },
    getStatusColor(status) {
      const map = {
        '待发送': '#faad14',
        '发送中': '#1890ff',
        '发送成功': '#52c41a',
        '发送失败': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '待发送': '#fffbe6',
        '发送中': '#e6f7ff',
        '发送成功': '#f6ffed',
        '发送失败': '#fff2f0'
      };
      return map[status] || '#fff';
    },
    getTypeBg(type) {
      const map = {
        '支付通知': '#1890ff',
        '退款通知': '#ff4d4f'
      };
      return map[type] || '#1890ff';
    },
    handleDetail(item) {
      alert(`通知详情：
任务编号：${item.taskNo}
应用名称：${item.appName}
商户信息：${item.merchantInfo}
通知类型：${item.notifyType}
关联编号：${item.relatedNo}
通知状态：${item.status}
通知次数：${item.notifyCount}次
最后通知：${item.lastNotifyTime}
下次通知：${item.nextNotifyTime}`);
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
.main-tab th:nth-child(1) { width: 12%; }
.main-tab th:nth-child(2) { width: 12%; }
.main-tab th:nth-child(3) { width: 14%; }
.main-tab th:nth-child(4) { width: 10%; }
.main-tab th:nth-child(5) { width: 10%; }
.main-tab th:nth-child(6) { width: 10%; }
.main-tab th:nth-child(7) { width: 12%; }
.main-tab th:nth-child(8) { width: 12%; }
.main-tab th:nth-child(9) { width: 8%; }
.main-tab th:nth-child(10) { width: 10%; }

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
</style>