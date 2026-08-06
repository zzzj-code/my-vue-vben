<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>盘点单号</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="inp-1">
            <span>盘点名称</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="inp-1"></div>
          <div class="inp-1">
            <button>重置</button>
            <button>搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1"></div>
          <div class="top-2">
            <button>+新增盘点</button>
          </div>
          <div class="top-3">
            <button>⟳</button>
            <button>⛶</button>
            <button>☷</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th><div class="th-inner">序号</div></th>
                <th><div class="th-inner">盘点单号</div></th>
                <th><div class="th-inner">盘点名称</div></th>
                <th><div class="th-inner">范围类型</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">应盘</div></th>
                <th><div class="th-inner">已盘</div></th>
                <th><div class="th-inner">计划开始</div></th>
                <th><div class="th-inner">计划结束</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="10" class="empty-cell">暂无数据</td>
              </tr>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: '#e6f6ff',
                      color: '#006be6',
                      border: '1px solid #006be6',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.scopeType }}</span>
                </td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getStatusBg(item.status),
                      color: getStatusColor(item.status),
                      border: `1px solid ${getStatusColor(item.status)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.status }}</span>
                </td>
                <td>{{ item.shouldCount }}</td>
                <td>
                  <span :style="{
                    color: item.counted === item.shouldCount ? '#52c41a' : '#faad14'
                  }">
                    {{ item.counted }}
                  </span>
                </td>
                <td>{{ item.planStart }}</td>
                <td>{{ item.planEnd }}</td>
                <td class="ol-col">
                  <button :disabled="item.status === '已完成'">执行盘点</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共{{ tabValue.length }}条记录<span>20条/页</span></div>
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
          code: "PD202401001",
          name: "2024年第一季度资产盘点",
          scopeType: "全部资产",
          status: "已完成",
          shouldCount: 156,
          counted: 156,
          planStart: "2024-01-15",
          planEnd: "2024-01-20",
        },
        {
          id: 2,
          code: "PD202402002",
          name: "办公设备专项盘点",
          scopeType: "办公设备",
          status: "进行中",
          shouldCount: 45,
          counted: 32,
          planStart: "2024-02-01",
          planEnd: "2024-02-10",
        },
        {
          id: 3,
          code: "PD202403003",
          name: "电子设备年度盘点",
          scopeType: "电子设备",
          status: "待开始",
          shouldCount: 78,
          counted: 0,
          planStart: "2024-03-01",
          planEnd: "2024-03-15",
        },
        {
          id: 4,
          code: "PD202404004",
          name: "仓库物资盘点",
          scopeType: "仓库物资",
          status: "进行中",
          shouldCount: 230,
          counted: 187,
          planStart: "2024-04-01",
          planEnd: "2024-04-10",
        },
        {
          id: 5,
          code: "PD202405005",
          name: "IT设备专项盘点",
          scopeType: "IT设备",
          status: "已完成",
          shouldCount: 92,
          counted: 92,
          planStart: "2024-05-01",
          planEnd: "2024-05-05",
        },
        {
          id: 6,
          code: "PD202406006",
          name: "办公家具盘点",
          scopeType: "办公家具",
          status: "待开始",
          shouldCount: 120,
          counted: 0,
          planStart: "2024-06-01",
          planEnd: "2024-06-20",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '待开始': '#8c8c8c',
        '进行中': '#1890ff',
        '已完成': '#52c41a'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '待开始': '#f5f5f5',
        '进行中': '#e6f7ff',
        '已完成': '#f6ffed'
      };
      return map[status] || '#fff';
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
  width: 1014px;
  height: 590px;
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 86px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-inp .inp-1 {
  width: 246px;
  height: 100%;
}
.top-inp .inp-1 span {
  display: inline-block;
  width: 100px;
  height: 24px;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
}
.top-inp .inp-1 input {
  width: 125px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-inp .inp-1:last-child {
  font-size: 14px;
  color: #006be6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
}
.top-inp .inp-1:last-child button:first-child {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp .inp-1 button:last-child {
  width: 63px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  color: #fff;
  border: 0;
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
  align-items: center;
}
.top-1 {
  width: 80%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.top-2 {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 106px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-3 {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
}
.main-tab {
  width: 100%;
  height: 401px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1190px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #e9e6e6;
  border-right: none;
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

.main-tab td {
  height: 40px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
}

/* 序号列 */
.main-tab td:first-child,
.main-tab th:first-child {
  width: 50px;
  min-width: 50px;
  max-width: 50px;
}

/* 空状态 */
.empty-cell {
  text-align: center;
  color: #ccc;
  font-size: 14px;
  padding: 60px 0;
  height: 200px;
}

.ol-col {
  width: 120px;
  min-width: 120px;
  position: sticky;
  right: 0;
  z-index: 2;
  border-left: 1px solid #ccc;
  background-color: #fff;
}
.ol-col button {
  width: 66px;
  height: 32px;
  background-color: #fff;
  border: 0;
  color: #006be6;
  border-radius: 4px;
  cursor: pointer;
}
.ol-col button:hover:not(:disabled) {
  background-color: #f0f4f9;
}
.ol-col button:disabled {
  color: #ccc;
  cursor: not-allowed;
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
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>