<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <span>统计区间：</span>
        <input type="text" placeholder="2026-07-01  ——>  2026-07-31" />
        <button>查询</button>
      </div>
      <div class="app-tab">
        <table>
          <thead>
            <tr>
              <th><div class="th-inner">成员</div></th>
              <th><div class="th-inner">任务数</div></th>
              <th><div class="th-inner">分配工时(h)</div></th>
              <th><div class="th-inner">填报工时(h)</div></th>
              <th><div class="th-inner">标准工时(h)</div></th>
              <th><div class="th-inner">负载率</div></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tabValue" :key="item.id">
              <td>{{ item.member }}</td>
              <td>{{ item.taskCount }}</td>
              <td>{{ item.allocatedHours }}</td>
              <td>{{ item.filledHours }}</td>
              <td>{{ item.standardHours }}</td>
              <td>
                <span
                  :style="{
                    display: 'inline-block',
                    padding: '0 12px',
                    height: '24px',
                    lineHeight: '24px',
                    backgroundColor: getLoadRateBg(item.loadRate),
                    color: getLoadRateColor(item.loadRate),
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }"
                >
                  {{ item.loadRate }}%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
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
          member: "张伟",
          taskCount: 5,
          allocatedHours: 40,
          filledHours: 38,
          standardHours: 40,
          loadRate: 95,
        },
        {
          id: 2,
          member: "李芳",
          taskCount: 4,
          allocatedHours: 32,
          filledHours: 30,
          standardHours: 32,
          loadRate: 94,
        },
        {
          id: 3,
          member: "王磊",
          taskCount: 6,
          allocatedHours: 48,
          filledHours: 45,
          standardHours: 48,
          loadRate: 94,
        },
      ],
    };
  },
  methods: {
    getLoadRateColor(rate) {
      if (rate >= 90) return '#52c41a';
      if (rate >= 70) return '#faad14';
      return '#ff4d4f';
    },
    getLoadRateBg(rate) {
      if (rate >= 90) return '#f6ffed';
      if (rate >= 70) return '#fffbe6';
      return '#fff2f0';
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
  height: 400px;
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 56px;
  background-color: #fff;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}
.app-top span {
  display: inline-block;
  width: 70px;
  height: 22px;
  font-size: 14px;
}
.app-top input {
  width: 298px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  margin-left: 10px;
}
.app-top button {
  width: 63px;
  height: 32px;
  border: 0;
  background-color: #006be6;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}
.app-tab {
  width: 100%;
  height: 320px;
  border-radius: 10px;
  border: 1px solid #ccc;
  overflow: auto;
}
.app-tab table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: #fff;
  font-size: 14px;
}
.app-tab th {
  height: 40px;
  background-color: #e9e6e6;
  border-right: none;
  padding: 0;
  white-space: nowrap;
  position: sticky;
  top: 0;
  z-index: 2;
}

/* ===== 表头内部 div：承载右边框 ===== */
.th-inner {
  padding: 0 12px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

/* 最后一列不显示右边框 */
.app-tab th:last-child .th-inner {
  border-right: none;
}

.app-tab td {
  height: 48px;
  padding: 0 12px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}

/* 列宽分配 */
.app-tab th:first-child,
.app-tab td:first-child {
  width: 18%;
  min-width: 100px;
}
.app-tab th:nth-child(2),
.app-tab td:nth-child(2) {
  width: 12%;
  min-width: 80px;
}
.app-tab th:nth-child(3),
.app-tab td:nth-child(3) {
  width: 15%;
  min-width: 100px;
}
.app-tab th:nth-child(4),
.app-tab td:nth-child(4) {
  width: 15%;
  min-width: 100px;
}
.app-tab th:nth-child(5),
.app-tab td:nth-child(5) {
  width: 15%;
  min-width: 100px;
}
.app-tab th:nth-child(6),
.app-tab td:nth-child(6) {
  width: 25%;
  min-width: 120px;
}
</style>