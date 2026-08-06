<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>资产编号</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="inp-1">
            <span>折旧期间</span>
            <input type="text" placeholder="YYYY-MM" />
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
            <button>手动计提</button>
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
                <th><div class="th-inner">资产编号</div></th>
                <th><div class="th-inner">期间</div></th>
                <th><div class="th-inner">方法</div></th>
                <th><div class="th-inner">原值</div></th>
                <th><div class="th-inner">期初累计</div></th>
                <th><div class="th-inner">本期折旧</div></th>
                <th><div class="th-inner">期末累计</div></th>
                <th><div class="th-inner">期末净值</div></th>
                <th><div class="th-inner">创建时间</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="10" class="empty-cell">暂无数据</td>
              </tr>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td style="color: #006be6">{{ item.assetNo }}</td>
                <td>{{ item.period }}</td>
                <td>{{ item.method }}</td>
                <td>¥{{ item.originalValue.toLocaleString() }}</td>
                <td>¥{{ item.beginAccumulated.toLocaleString() }}</td>
                <td>¥{{ item.currentDepreciation.toLocaleString() }}</td>
                <td>¥{{ item.endAccumulated.toLocaleString() }}</td>
                <td>¥{{ item.endNetValue.toLocaleString() }}</td>
                <td>{{ item.createTime }}</td>
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
          assetNo: "ZC-2024-001",
          period: "2024-01",
          method: "平均年限法",
          originalValue: 5800,
          beginAccumulated: 0,
          currentDepreciation: 80.56,
          endAccumulated: 80.56,
          endNetValue: 5719.44,
          createTime: "2024-01-31 17:30:00",
        },
        {
          id: 2,
          assetNo: "ZC-2024-001",
          period: "2024-02",
          method: "平均年限法",
          originalValue: 5800,
          beginAccumulated: 80.56,
          currentDepreciation: 80.56,
          endAccumulated: 161.12,
          endNetValue: 5638.88,
          createTime: "2024-02-29 17:30:00",
        },
        {
          id: 3,
          assetNo: "ZC-2024-001",
          period: "2024-03",
          method: "平均年限法",
          originalValue: 5800,
          beginAccumulated: 161.12,
          currentDepreciation: 80.56,
          endAccumulated: 241.68,
          endNetValue: 5558.32,
          createTime: "2024-03-31 17:30:00",
        },
        {
          id: 4,
          assetNo: "ZC-2024-002",
          period: "2024-01",
          method: "平均年限法",
          originalValue: 8200,
          beginAccumulated: 0,
          currentDepreciation: 142.36,
          endAccumulated: 142.36,
          endNetValue: 8057.64,
          createTime: "2024-01-31 17:30:00",
        },
        {
          id: 5,
          assetNo: "ZC-2024-002",
          period: "2024-02",
          method: "平均年限法",
          originalValue: 8200,
          beginAccumulated: 142.36,
          currentDepreciation: 142.36,
          endAccumulated: 284.72,
          endNetValue: 7915.28,
          createTime: "2024-02-29 17:30:00",
        },
        {
          id: 6,
          assetNo: "ZC-2024-003",
          period: "2024-01",
          method: "双倍余额递减法",
          originalValue: 3200,
          beginAccumulated: 0,
          currentDepreciation: 106.67,
          endAccumulated: 106.67,
          endNetValue: 3093.33,
          createTime: "2024-01-31 17:30:00",
        },
        {
          id: 7,
          assetNo: "ZC-2024-003",
          period: "2024-02",
          method: "双倍余额递减法",
          originalValue: 3200,
          beginAccumulated: 106.67,
          currentDepreciation: 103.11,
          endAccumulated: 209.78,
          endNetValue: 2990.22,
          createTime: "2024-02-29 17:30:00",
        },
        {
          id: 8,
          assetNo: "ZC-2024-004",
          period: "2024-01",
          method: "平均年限法",
          originalValue: 45000,
          beginAccumulated: 0,
          currentDepreciation: 625.00,
          endAccumulated: 625.00,
          endNetValue: 44375.00,
          createTime: "2024-01-31 17:30:00",
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
  min-width: 1110px;
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

/* 最后一列不显示右边框 */
.main-tab th:last-child .th-inner {
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