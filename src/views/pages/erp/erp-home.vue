<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-1">
          <div><h3>今日销售</h3></div>
          <div>0<span></span></div>
          <div>今日采购 <span>0</span></div>
        </div>
        <div class="top-1">
          <div><h3>昨日销售</h3></div>
          <div>0<span></span></div>
          <div>昨日采购 <span>0</span></div>
        </div>
        <div class="top-1">
          <div><h3>本月销售</h3></div>
          <div>0<span></span></div>
          <div>本月采购 <span>0</span></div>
        </div>
        <div class="top-1">
          <div><h3>今年销售</h3></div>
          <div>0<span></span></div>
          <div>今年采购 <span>0</span></div>
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
export default {
  data() {
    return {};
  },
  mounted() {
    this.initChart();
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
    initChart() {
      // 获取 DOM 元素
      const chartDom = this.$refs.chartRef;
      const charDom1 = this.$refs.chartRef1;
      // 初始化图表
      this.chart = echarts.init(chartDom);
      this.chart1 = echarts.init(charDom1);

      // 配置选项
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
          data: [
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
            data: ["0", "0", "0", "0", "0", "0"],
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
          data: [
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
            data: ["0", "0", "0", "0", "0", "532.8"],
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
