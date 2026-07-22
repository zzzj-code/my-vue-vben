<template>
  <div class="page-wrapper">
    <div class="app">
      <!-- 顶部 -->
      <div class="app-top">
        <div class="top-shuju" v-for="(item, index) in cardData" :key="index">
          <div>
            <h3>{{ item.title }}</h3>
          </div>
          <div>
            <span>{{ formatNumber(item.value) }}</span>
          </div>
          <div>
            <span>{{ item.totalLabel }}</span>
            <span>{{ formatNumber(item.total) }}</span>
          </div>
        </div>
      </div>
      <!-- _________________ -->
      <!-- 中间图表区域 -->
      <div class="app-main">
        <div class="chart-panel-main">
          <div class="chart-tools-wrapper">
            <div class="chart-tools">
              <button
                @click="setChartType('line')"
                :class="{ active: chartType === 'line' }"
              >
                流量趋势
              </button>
              <button
                @click="setChartType('bar')"
                :class="{ active: chartType === 'bar' }"
              >
                月访问量
              </button>
            </div>
          </div>
          <div ref="mainChart" class="chart-container"></div>
        </div>
      </div>
      <!-- ———————————————————— -->
      <!-- 底部图表 -->
      <div class="app-floot">
        <div class="chart-card">
          <div class="chart-card-title">访问数量</div>
          <div ref="radarChart" class="chart-container"></div>
        </div>
        <div class="chart-card">
          <div class="chart-card-title">访问来源</div>
          <div ref="donutChart" class="chart-container"></div>
        </div>
        <div class="chart-card">
          <div class="chart-card-title">访问来源</div>
          <div ref="pieChart" class="chart-container"></div>
        </div>
      </div>
      <!-- ——————————————————- -->
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      // 顶部数据
      cardData: [
        {
          title: "用户量",
          value: 0,
          targetValue: 2000,
          totalLabel: "总用户量",
          total: 120000,
        },
        {
          title: "访问量",
          value: 0,
          targetValue: 20000,
          totalLabel: "总访问量",
          total: 500000,
        },
        {
          title: "下载量",
          value: 0,
          targetValue: 8000,
          totalLabel: "总下载量",
          total: 120000,
        },
        {
          title: "使用量",
          value: 0,
          targetValue: 5000,
          totalLabel: "总使用量",
          total: 50000,
        },
      ],
      animationTimers: [], // 存储定时器

      // 单一大图相关
      mainChart: null,
      chartType: "line", // 'line' or 'bar'
      radarChart: null,
      donutChart: null,
      pieChart: null,
    };
  },
  mounted() {
    this.startAnimations();
    this.$nextTick(() => {
      this.initMainChart();
      this.initBottomCharts();
      window.addEventListener("resize", this.resizeChart);
    });
  },
  beforeUnmount() {
    this.animationTimers.forEach((timer) => clearInterval(timer));
    this.animationTimers = [];
    if (this.mainChart) {
      this.mainChart.dispose();
      this.mainChart = null;
    }
    if (this.radarChart) {
      this.radarChart.dispose();
      this.radarChart = null;
    }
    if (this.donutChart) {
      this.donutChart.dispose();
      this.donutChart = null;
    }
    if (this.pieChart) {
      this.pieChart.dispose();
      this.pieChart = null;
    }
    window.removeEventListener("resize", this.resizeChart);
  },
  methods: {
    formatNumber(num) {
      if (num === undefined || num === null) return "0";
      // 格式化数字，添加千位分隔符
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    startAnimations() {
      this.cardData.forEach((item, index) => {
        const timer = setInterval(() => {
          // 每次增加的量（根据目标值动态调整速度）
          const step = Math.ceil(item.targetValue / 60); // 60帧内完成

          if (item.value < item.targetValue) {
            item.value = Math.min(item.value + step, item.targetValue);
          } else {
            // 到达目标值后清除该卡片的定时器
            clearInterval(timer);
            // 从定时器数组中移除
            const timerIndex = this.animationTimers.indexOf(timer);
            if (timerIndex > -1) {
              this.animationTimers.splice(timerIndex, 1);
            }
          }
        }, 30);

        this.animationTimers.push(timer);
      });
    },
    refreshData() {
      // 重置所有值为0
      this.cardData.forEach((item) => {
        item.value = 0;
      });
      // 清除旧定时器
      this.animationTimers.forEach((timer) => clearInterval(timer));
      this.animationTimers = [];
      // 重新开始动画
      this.startAnimations();
    },

    // === Main Chart ===
    initMainChart() {
      const dom = this.$refs.mainChart;
      if (!dom) return;
      this.mainChart = echarts.init(dom);
      this.renderMainChart();
    },
    setChartType(type) {
      if (this.chartType === type) return;
      this.chartType = type;
      this.renderMainChart();
    },
    renderMainChart() {
      if (!this.mainChart) return;
      this.mainChart.clear();
      if (this.chartType === "bar") {
        const { categories, values } = this.generateMonthlyData();
        this.mainChart.setOption(this.getBarOption(categories, values), true);
      } else {
        const { categories, bigSeries, smallSeries } =
          this.generateHourlyAreaData();
        this.mainChart.setOption(
          this.getAreaOption(categories, bigSeries, smallSeries),
          true,
        );
      }
    },
    getBarOption(categories, values) {
      return {
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        grid: { left: 40, right: 20, top: 30, bottom: 40 },
        xAxis: {
          type: "category",
          data: categories,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { color: "#666" },
        },
        yAxis: {
          type: "value",
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { lineStyle: { color: "#f0f2f5" } },
          axisLabel: { color: "#666" },
        },
        series: [
          {
            type: "bar",
            data: values,
            itemStyle: { color: "#5b7bd5", borderWidth: 0 },
            emphasis: { itemStyle: { color: "#4a6acb" } },
            barWidth: "40%",
          },
        ],
      };
    },
    getAreaOption(categories, bigSeries, smallSeries) {
      return {
        tooltip: { trigger: "axis" },
        grid: { left: 40, right: 20, top: 30, bottom: 40 },
        xAxis: {
          type: "category",
          data: categories,
          boundaryGap: false,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { color: "#666" },
        },
        yAxis: {
          type: "value",
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: true, lineStyle: { color: "#f0f2f5" } },
          splitArea: {
            show: true,
            areaStyle: {
              color: ["rgba(240,242,245,0.7)", "rgba(255,255,255,0.8)"],
            },
          },
          axisLabel: { color: "#666" },
        },
        series: [
          {
            name: "大流量",
            type: "line",
            smooth: true,
            data: bigSeries,
            areaStyle: { color: "rgba(91,123,213,0.2)" },
            lineStyle: { color: "#5b7bd5", width: 2 },
            symbol: "circle",
            symbolSize: 6,
          },
          {
            name: "小流量",
            type: "line",
            smooth: true,
            data: smallSeries,
            areaStyle: { color: "rgba(26,166,136,0.25)" },
            lineStyle: { color: "#1aa688", width: 2 },
            symbol: "circle",
            symbolSize: 4,
          },
        ],
      };
    },
    generateMonthlyData() {
      const categories = [];
      const values = [];
      for (let i = 1; i <= 12; i++) {
        categories.push(i + "月");
        values.push(Math.round(Math.random() * 7000 + 2000));
      }
      return { categories, values };
    },
    generateHourlyAreaData() {
      const categories = [];
      const bigSeries = [];
      const smallSeries = [];
      // hours 6:00 - 23:00
      for (let h = 6; h <= 23; h++) {
        categories.push(h + ":00");
      }
      // create two peaks at 12 and 16
      for (let i = 0; i < categories.length; i++) {
        const x = i;
        // big peak shape
        const peak1 = Math.max(0, 64000 * Math.exp(-Math.pow((x - 6) / 3, 2)));
        const peak2 = Math.max(
          0,
          70000 * Math.exp(-Math.pow((x - 10) / 2.5, 2)),
        );
        bigSeries.push(Math.round(peak1 + peak2));
        // small series lower peaks
        const s1 = Math.max(0, 20000 * Math.exp(-Math.pow((x - 6) / 3, 2)));
        const s2 = Math.max(0, 22000 * Math.exp(-Math.pow((x - 10) / 2.5, 2)));
        smallSeries.push(Math.round(s1 + s2));
      }
      return { categories, bigSeries, smallSeries };
    },
    resizeChart() {
      if (this.mainChart) this.mainChart.resize();
      if (this.radarChart) this.radarChart.resize();
      if (this.donutChart) this.donutChart.resize();
      if (this.pieChart) this.pieChart.resize();
    },
    initBottomCharts() {
      const radarDom = this.$refs.radarChart;
      const donutDom = this.$refs.donutChart;
      const pieDom = this.$refs.pieChart;
      if (radarDom) {
        this.radarChart = echarts.init(radarDom);
        this.radarChart.setOption(this.getRadarOption());
      }
      if (donutDom) {
        this.donutChart = echarts.init(donutDom);
        this.donutChart.setOption(this.getDonutOption());
      }
      if (pieDom) {
        this.pieChart = echarts.init(pieDom);
        this.pieChart.setOption(this.getPieOption());
      }
    },
    getRadarOption() {
      return {
        tooltip: { trigger: "item" },
        legend: {
          bottom: 10,
          data: ["访问", "趋势"],
          textStyle: { color: "#555" },
        },
        radar: {
          indicator: [
            { name: "网页", max: 100 },
            { name: "其它", max: 100 },
            { name: "第三方", max: 100 },
            { name: "客户端", max: 100 },
            { name: "Ipad", max: 100 },
            { name: "移动端", max: 100 },
          ],
          splitLine: { lineStyle: { color: "#e8ecf3" } },
          splitArea: {
            areaStyle: {
              color: ["rgba(248,249,255,0.9)", "rgba(255,255,255,0.9)"],
            },
          },
          axisLine: { lineStyle: { color: "#e8ecf3" } },
        },
        series: [
          {
            name: "访问数量",
            type: "radar",
            areaStyle: { opacity: 0.2 },
            data: [
              {
                value: [45, 55, 50, 85, 65, 70],
                name: "访问",
                itemStyle: { color: "#a58ee0" },
                lineStyle: { color: "#a58ee0" },
                areaStyle: { color: "rgba(165,142,224,0.25)" },
              },
              {
                value: [55, 45, 60, 70, 50, 60],
                name: "趋势",
                itemStyle: { color: "#5b7bd5" },
                lineStyle: { color: "#5b7bd5" },
                areaStyle: { color: "rgba(91,123,213,0.2)" },
              },
            ],
          },
        ],
      };
    },
    getDonutOption() {
      return {
        tooltip: { trigger: "item" },
        legend: {
          bottom: 10,
          itemWidth: 12,
          itemHeight: 12,
          textStyle: { color: "#555" },
          data: ["搜索引擎", "直接访问", "邮件营销", "联盟广告"],
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "65%"],
            avoidLabelOverlap: false,
            label: { show: false },
            emphasis: {
              label: { show: true, fontSize: 14, fontWeight: "bold" },
            },
            labelLine: { show: false },
            data: [
              { value: 40, name: "搜索引擎" },
              { value: 30, name: "直接访问" },
              { value: 20, name: "邮件营销" },
              { value: 10, name: "联盟广告" },
            ],
          },
        ],
      };
    },
    getPieOption() {
      return {
        tooltip: { trigger: "item" },
        legend: {
          bottom: 10,
          itemWidth: 12,
          itemHeight: 12,
          textStyle: { color: "#555" },
          data: ["技术", "远程", "其它", "第三方"],
        },
        series: [
          {
            type: "pie",
            radius: ["35%", "60%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
              formatter: "{b}",
              color: "#333",
            },
            labelLine: { length: 15, length2: 10 },
            data: [
              { value: 20, name: "技术" },
              { value: 30, name: "远程" },
              { value: 25, name: "其它" },
              { value: 25, name: "第三方" },
            ],
          },
        ],
      };
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
  height: 1028px;
  padding: 10px;
  position: relative;
  top: 140px;
  overflow: hidden;
}
/* 顶部 */
.app-top {
  width: 990px;
  height: 186px;
  display: flex;
}
.top-shuju {
  width: 234px;
  height: 186px;
  margin-right: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.top-shuju div:nth-child(1) {
  width: 100%;
  height: 34px;
  padding: 0 24px;
}

.top-shuju div:nth-child(2) {
  width: 100%;
  height: 32px;
  padding: 0 24px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}

.top-shuju div:nth-child(3) {
  width: 100%;
  height: 22px;
  padding: 0 24px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
/* ———————————————————————— */
/* 中间图表 */
.app-main {
  width: 975px;
  height: 394px;
  margin-top: 20px;
  padding: 12px 16px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  background-color: #fff;
}
.chart-panel-main {
  position: relative;
  width: 100%;
}
.chart-tools-wrapper {
  padding: 12px 16px;
}
.chart-tools {
  display: inline-flex;
  gap: 8px;
  background: #f5f7f9;
  padding: 6px;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}
.chart-tools button {
  background: transparent;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  color: #333;
}
.chart-tools button.active {
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  color: #333;
}
.chart-container {
  width: 100%;
  height: 320px;
}
/* —————————————————————————————— */
/* 底部图表 */
.app-floot {
  width: 975px;
  height: 408px;
  margin-top: 20px;
  display: flex;
  gap: 15px;
}
.chart-card {
  width: 315px;
  height: 408px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  overflow: hidden;
}
.chart-card-title {
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;
}
.chart-card .chart-container {
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
}
.chart-card .chart-container > div,
.chart-card .chart-container canvas {
  width: 100% !important;
  height: 100% !important;
}
/* —————————————————— */
</style>
