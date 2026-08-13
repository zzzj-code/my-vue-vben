<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-1">
          <div><h3>今日销售</h3></div>
          <div>{{ saleSummary.todayPrice }}<span></span></div>
          <div>今日采购 <span>{{ purchaseSummary.todayPrice }}</span></div>
        </div>
        <div class="top-1">
          <div><h3>昨日销售</h3></div>
          <div>{{ saleSummary.yesterdayPrice }}<span></span></div>
          <div>昨日采购 <span>{{ purchaseSummary.yesterdayPrice }}</span></div>
        </div>
        <div class="top-1">
          <div><h3>本月销售</h3></div>
          <div>{{ saleSummary.monthPrice }}<span></span></div>
          <div>本月采购 <span>{{ purchaseSummary.monthPrice }}</span></div>
        </div>
        <div class="top-1">
          <div><h3>今年销售</h3></div>
          <div>{{ saleSummary.yearPrice }}<span></span></div>
          <div>今年采购 <span>{{ purchaseSummary.yearPrice }}</span></div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-1">
          <div class="main-title">销售统计</div>
          <div class="main-tab">
            <div ref="chartRef"></div>
          </div>
        </div>
        <div class="main-1">
          <div class="main-title">采购统计</div>
          <div class="main-tab">
            <div ref="chartRef1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
// ========== 导入销售统计和采购统计相关API ==========
import { getSaleSummary, getSaleTimeSummary } from '#/api/erp/statistics/sale';
import { getPurchaseSummary, getPurchaseTimeSummary } from '#/api/erp/statistics/purchase';

export default {
  data() {
    return {
      // 销售统计数据
      saleSummary: {
        todayPrice: 0,    // 今日销售
        yesterdayPrice: 0, // 昨日销售
        monthPrice: 0,    // 本月销售
        yearPrice: 0,     // 今年销售
      },
      // 采购统计数据
      purchaseSummary: {
        todayPrice: 0,    // 今日采购
        yesterdayPrice: 0, // 昨日采购
        monthPrice: 0,    // 本月采购
        yearPrice: 0,     // 今年采购
      },
      // 销售时间统计数据
      saleTimeSummary: {
        dates: [],
        prices: [],
      },
      // 采购时间统计数据
      purchaseTimeSummary: {
        dates: [],
        prices: [],
      },
    };
  },
  mounted() {
    this.loadStatistics();
    // 监听窗口变化，自适应
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    // 销毁图表
    if (this.chart || this.chart1) {
      this.chart.dispose();
      this.chart1.dispose();
    }
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    // ========== 加载统计数据 ==========
    async loadStatistics() {
      try {
        // 并行加载销售汇总和采购汇总
        const [saleData, purchaseData, saleTimeData, purchaseTimeData] = await Promise.all([
          getSaleSummary().catch(() => null),
          getPurchaseSummary().catch(() => null),
          getSaleTimeSummary().catch(() => null),
          getPurchaseTimeSummary().catch(() => null),
        ]);
        // 处理销售汇总数据
        if (saleData) {
          this.saleSummary = {
            todayPrice: saleData.todayPrice || 0,
            yesterdayPrice: saleData.yesterdayPrice || 0,
            monthPrice: saleData.monthPrice || 0,
            yearPrice: saleData.yearPrice || 0,
          };
        }
        // 处理采购汇总数据
        if (purchaseData) {
          this.purchaseSummary = {
            todayPrice: purchaseData.todayPrice || 0,
            yesterdayPrice: purchaseData.yesterdayPrice || 0,
            monthPrice: purchaseData.monthPrice || 0,
            yearPrice: purchaseData.yearPrice || 0,
          };
        }
        // 处理销售时间统计数据
        if (saleTimeData && saleTimeData.list) {
          this.saleTimeSummary = {
            dates: saleTimeData.list.map((item) => item.date || ""),
            prices: saleTimeData.list.map((item) => item.price || 0),
          };
        }
        // 处理采购时间统计数据
        if (purchaseTimeData && purchaseTimeData.list) {
          this.purchaseTimeSummary = {
            dates: purchaseTimeData.list.map((item) => item.date || ""),
            prices: purchaseTimeData.list.map((item) => item.price || 0),
          };
        }
        // 初始化图表
        this.initChart();
      } catch (err) {
        console.error("加载统计数据失败", err);
        this.initChart();
      }
    },
    initChart() {
      // 获取 DOM 元素
      const chartDom = this.$refs.chartRef;
      const charDom1 = this.$refs.chartRef1;
      // 初始化图表
      this.chart = echarts.init(chartDom);
      this.chart1 = echarts.init(charDom1);

      // 配置选项 - 销售统计
      const option = {
        // 提示框
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        // 图例
        legend: {
          data: ["金额"],
          top: 5,
        },
        // 网格
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "15%",
          containLabel: true,
        },
        // X轴
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.saleTimeSummary.dates.length > 0 ? this.saleTimeSummary.dates : [
            "2026-02",
            "2026-03",
            "2026-04",
            "2026-05",
            "2026-06",
            "2026-07",
          ],
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
        },
        // Y轴
        yAxis: {
          type: "value",
        },
        // 系列数据
        series: [
          {
            name: "金额",
            type: "line",
            smooth: true,
            smoothMonotone: "x",
            data: this.saleTimeSummary.prices.length > 0 ? this.saleTimeSummary.prices : ["0", "0", "0", "0", "0", "0"],
            symbol: "diamond",
            symbolSize: 10,
            lineStyle: {
              width: 3,
              color: "#006be6",
            },
            itemStyle: {
              color: "#006be6",
            },
          },
        ],
      };

      const option1 = {
        // 提示框
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        // 图例
        legend: {
          data: ["金额"],
          top: 5,
        },
        // 网格
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "15%",
          containLabel: true,
        },
        // X轴
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.purchaseTimeSummary.dates.length > 0 ? this.purchaseTimeSummary.dates : [
            "2026-02",
            "2026-03",
            "2026-04",
            "2026-05",
            "2026-06",
            "2026-07",
          ],
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
        },
        // Y轴
        yAxis: {
          type: "value",
        },
        // 系列数据
        series: [
          {
            name: "金额",
            type: "line",
            smooth: true,
            smoothMonotone: "x",
            data: this.purchaseTimeSummary.prices.length > 0 ? this.purchaseTimeSummary.prices : ["0", "0", "0", "0", "0", "532.8"],
            symbol: "diamond",
            symbolSize: 10,
            areaStyle: {
              width: 3,
              color: "#006be6",
            },
            itemStyle: {
              color: "#006be6",
            },
          },
        ],
      };

      // 设置配置
      this.chart.setOption(option);
      this.chart1.setOption(option1);
    },
    handleResize() {
      // 自适应大小
      if (this.chart) {
        this.chart.resize();
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
  height: 639px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 186px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.app-top .top-1 {
  width: 241px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.274);
}
.top-1 div {
  width: 100%;
  height: 34px;
  padding: 0 24px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.top-1 div:nth-child(2) {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}
.top-1 div:last-child {
  display: flex;
  justify-content: space-between;
}

.app-main {
  width: 100%;
  height: 405px;
  display: flex;
  justify-content: space-between;
}
.app-main .main-1 {
  width: 495px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.274);
}
.main-1 .main-title {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
}
.main-1 .main-tab {
  width: 100%;
  height: 348px;
  /* border: 1px solid red; */
  padding: 24px;
}
.main-tab div {
  width: 100%;
  height: 100%;
}
</style>
