<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>计划编号</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="inp-1">
            <span>计划名称</span>
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
            <button>+新增计划</button>
            <button>巡检记录</button>
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
                <th><div class="th-inner">计划编号</div></th>
                <th><div class="th-inner">计划名称</div></th>
                <th><div class="th-inner">类型</div></th>
                <th><div class="th-inner">周期</div></th>
                <th><div class="th-inner">负责人</div></th>
                <th><div class="th-inner">生效开始</div></th>
                <th><div class="th-inner">生效结束</div></th>
                <th><div class="th-inner">最近生成</div></th>
                <th><div class="th-inner">状态</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="11" class="empty-cell">暂无数据</td>
              </tr>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td style="color: #006be6">{{ item.planNo }}</td>
                <td>{{ item.planName }}</td>
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
                  >{{ item.type }}</span>
                </td>
                <td>{{ item.cycle }}</td>
                <td>{{ item.leader }}</td>
                <td>{{ item.effectiveStart }}</td>
                <td>{{ item.effectiveEnd }}</td>
                <td>{{ item.lastGenerate || '-' }}</td>
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
                <td class="ol-col">
                  <button>查看</button>
                  <button>编辑</button>
                  <button>删除</button>
                  <button style="color: #faad14;">生成</button>
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
          planNo: "XC-2024-001",
          planName: "月度设备巡检-1月",
          type: "设备巡检",
          cycle: "每月",
          leader: "张伟",
          effectiveStart: "2024-01-01",
          effectiveEnd: "2024-01-31",
          lastGenerate: "2024-01-01 08:00:00",
          status: "已生成",
        },
        {
          id: 2,
          planNo: "XC-2024-002",
          planName: "月度设备巡检-2月",
          type: "设备巡检",
          cycle: "每月",
          leader: "李芳",
          effectiveStart: "2024-02-01",
          effectiveEnd: "2024-02-28",
          lastGenerate: "2024-02-01 08:00:00",
          status: "已生成",
        },
        {
          id: 3,
          planNo: "XC-2024-003",
          planName: "季度安全检查-Q1",
          type: "安全检查",
          cycle: "每季度",
          leader: "王磊",
          effectiveStart: "2024-01-01",
          effectiveEnd: "2024-03-31",
          lastGenerate: "2024-01-01 09:00:00",
          status: "已生成",
        },
        {
          id: 4,
          planNo: "XC-2024-004",
          planName: "月度设备巡检-3月",
          type: "设备巡检",
          cycle: "每月",
          leader: "陈静",
          effectiveStart: "2024-03-01",
          effectiveEnd: "2024-03-31",
          lastGenerate: "2024-03-01 08:00:00",
          status: "已生成",
        },
        {
          id: 5,
          planNo: "XC-2024-005",
          planName: "季度安全检查-Q2",
          type: "安全检查",
          cycle: "每季度",
          leader: "赵明",
          effectiveStart: "2024-04-01",
          effectiveEnd: "2024-06-30",
          lastGenerate: "2024-04-01 09:00:00",
          status: "已生成",
        },
        {
          id: 6,
          planNo: "XC-2024-006",
          planName: "月度设备巡检-4月",
          type: "设备巡检",
          cycle: "每月",
          leader: "孙婷",
          effectiveStart: "2024-04-01",
          effectiveEnd: "2024-04-30",
          lastGenerate: "2024-04-01 08:00:00",
          status: "待生成",
        },
        {
          id: 7,
          planNo: "XC-2024-007",
          planName: "半年度消防检查-2024上",
          type: "消防检查",
          cycle: "每半年",
          leader: "刘洋",
          effectiveStart: "2024-01-01",
          effectiveEnd: "2024-06-30",
          lastGenerate: "2024-01-01 10:00:00",
          status: "已过期",
        },
        {
          id: 8,
          planNo: "XC-2024-008",
          planName: "月度设备巡检-5月",
          type: "设备巡检",
          cycle: "每月",
          leader: "周梅",
          effectiveStart: "2024-05-01",
          effectiveEnd: "2024-05-31",
          lastGenerate: "-",
          status: "待生成",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '已生成': '#52c41a',
        '待生成': '#faad14',
        '已过期': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '已生成': '#f6ffed',
        '待生成': '#fffbe6',
        '已过期': '#fff2f0'
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
  width: 70%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.top-2 {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.top-2 button:last-child {
  width: 84px;
  height: 32px;
  color: #006be6;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.top-2 button:last-child:hover {
  background-color: #f0f4f9;
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
  min-width: 1380px;
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
  width: 200px;
  min-width: 200px;
  position: sticky;
  right: 0;
  z-index: 2;
  border-left: 1px solid #ccc;
  background-color: #fff;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.ol-col button:hover {
  background-color: #f0f4f9;
}
.ol-col button:first-child,
.ol-col button:nth-child(2) {
  color: #006be6;
}
.ol-col button:nth-child(3) {
  color: red;
}
.ol-col button:nth-child(3):hover {
  background-color: #fff2f0;
}
.ol-col button:last-child {
  color: #faad14;
}
.ol-col button:last-child:hover {
  background-color: #fffbe6;
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