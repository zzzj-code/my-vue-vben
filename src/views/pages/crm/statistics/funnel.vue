<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>时间范围</span>
          <input type="text" placeholder="请选择时间范围" v-model="searchForm.times" />
        </div>
        <div>
          <span>时间间隔</span>
          <input type="text" v-model="searchForm.interval" />
        </div>
        <div>
          <span>商机组</span>
          <input type="text" placeholder="请选择商机组" v-model="searchForm.businessStatusId" />
        </div>
        <div>
          <span>归属部门</span>
          <input type="text" placeholder="研发部门" v-model="searchForm.deptId" />
        </div>
        <div>
          <span>员工</span>
          <input type="text" placeholder="员工" v-model="searchForm.userId" />
        </div>
        <div>
          <button @click="handleReset">重置</button>
          <button @click="handleSearch">查询</button>
          收起^
        </div>
      </div>
      <div class="app-nav">
        <div class="nav">
          <div
            v-for="(item, index) in navList"
            :key="index"
            :class="{ active: activeNav === index }"
            @click="switchNav(index)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="view-toggle">
          <button :class="{ active: viewMode === 'stage' }" @click="switchViewMode('stage')">阶段视角</button>
          <button :class="{ active: viewMode === 'amount' }" @click="switchViewMode('amount')">金额视角</button>
        </div>
        <div ref="chartRef" style="width: 100%; height: 300px;"></div>
      </div>
      <div class="app-floot">
        <table>
          <tr>
            <th>序号</th>
            <th>员工姓名</th>
            <th>新增客户数</th>
            <th>成交客户数</th>
            <th>客户成交率(%)</th>
            <th>合同总金额</th>
            <th>回款金额</th>
            <th>未回款金额</th>
            <th>回款完成率(%)</th>
          </tr>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.userName }}</td>
            <td>{{ item.businessCreateCount }}</td>
            <td>{{ item.businessDealCount }}</td>
            <td>{{ item.businessDealRate }}</td>
            <td>{{ item.contractPrice }}</td>
            <td>{{ item.receivablePrice }}</td>
            <td>{{ item.unreceivablePrice }}</td>
            <td>{{ item.receivableRate }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
// ========== 导入漏斗统计相关API ==========
import { getDatas, getChartDatas } from '#/api/crm/statistics/funnel';

export default {
  data() {
    return {
      activeNav: 0,
      viewMode: "stage",
      navList: [
        "销售漏斗分析",
        "新增商机分析",
        "商机转化率分析",
      ],
      searchForm: {
        times: ["2026-08-08 08:49:50","2026-08-15 08:49:50"],
        interval: 2,
        businessStatusId: "",
        deptId: 1,
        userId: "",
      },
      tableData: [],    // 底部表格数据
      chart: null,      // 图表实例
    };
  },
  mounted() {
    this.initChart();
    this.loadStatistics();
  },
  methods: {
    // ========== 初始化图表 ==========
    initChart() {
      const chartDom = this.$refs.chartRef;
      if (chartDom) {
        this.chart = echarts.init(chartDom);
      }
    },
    // ========== 获取统计数据 ==========
    async loadStatistics() {
      try {
        // Tab名称映射
        const tabNames = [
          "funnel",                    // 销售漏斗分析
          "businessSummary",           // 新增商机分析
          "businessInversionRateSummary", // 商机转化率分析
        ];
        const tabName = tabNames[this.activeNav] || "funnel";
        // 获取图表数据
        const chartData = await getChartDatas(tabName, this.searchForm);
        if (chartData && this.chart) {
          this.chart.setOption(chartData);
        }
        // 获取表格数据
        const tableData = await getDatas(tabName, this.searchForm);
        if (tableData && Array.isArray(tableData)) {
          this.tableData = tableData;
        }
      } catch (err) {
        console.error("获取漏斗统计数据失败", err);
      }
    },
    handleSearch() { this.loadStatistics(); },
    handleReset() {
      this.searchForm = { times: ["2026-08-08 08:49:50","2026-08-15 08:49:50"], interval: 2, businessStatusId: "", deptId: 1, userId: "" };
      this.loadStatistics();
    },
    switchNav(index) { this.activeNav = index; this.loadStatistics(); },
    switchViewMode(mode) { this.viewMode = mode; this.loadStatistics(); },
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
  height: 800px;
  position: absolute;
  top: -375px;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
}
.app-top {
  width: 100%;
  height: 148px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.app-top div {
  flex: 0 0 calc(50% - 10px);
  height: 42px;
  display: flex;
  align-items: center;
}

.app-top > div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  font-size: 14px;
  margin-right: 8px;
  text-align: right;
  flex-shrink: 0;
  color: #333;
}

.app-top > div input {
  flex: 1;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 12px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
  box-sizing: border-box;
}
.app-top div input:focus {
  border-color: #006be6;
}
.app-top div:last-child {
  font-size: 14px;
  color: #006be6;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding-left: 0;
  align-items: center;
}
.app-top div:last-child button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}
.app-top div:last-child button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
}
.app-top div:last-child button:first-child:hover {
  background-color: #f5f5f5;
}
.app-top div:last-child button:last-child {
  border: 0;
  background-color: #006be6;
  color: #fff;
}
.app-top div:last-child button:last-child:hover {
  background-color: #0052b3;
}
.app-top div:last-child .collapse-btn {
  cursor: pointer;
  user-select: none;
  margin-left: 8px;
}
.app-nav {
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 4px;
  position: relative;
  scrollbar-width: none;
}
.app-nav::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
.app-nav::-webkit-scrollbar-track {
  background: transparent;
}
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 46px;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 4px;
  flex-shrink: 0;
}
.nav div {
  padding: 0 16px;
  height: 46px;
  font-size: 14px;
  color: #858585;
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: all 0.3s;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  flex-shrink: 0;
}
.nav div:hover {
  color: #333;
}
.nav div.active {
  color: #006be6;
  font-weight: 500;
  border-bottom-color: #006be6;
}
.app-main {
  width: 100%;
  height: 300px;
  margin-top: 10px;
  position: relative;
}
.view-toggle {
  position: absolute;
  top: 16px;
  left: 16px;
  display: inline-flex;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.view-toggle button {
  min-width: 96px;
  height: 32px;
  border: none;
  background: transparent;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.25s;
}
.view-toggle button.active {
  background-color: #006be6;
  color: #fff;
}
.view-toggle button:not(.active):hover {
  background-color: #f5f5f5;
}
.app-floot {
  width: 100%;
  height: 180px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-floot table {
  width: max-content;
  min-width: 1100px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
}
.main-floot th {
  min-width: 40px;
  height: 100px;
  border-right: 1px solid #ccc;
  background-color: #e8e8e8;
}
</style>
