<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-1">
          <div class="top-1-1"></div>
          <div class="top-1-2">
            <div>生产工单</div>
            <div><span>1</span>进行中</div>
            <div>待排产4|已完成11</div>
          </div>
        </div>
        <div class="top-1">
          <div class="top-1-1" style="background-color: greenyellow"></div>
          <div class="top-1-2">
            <div>今日量产</div>
            <div><span style="color: greenyellow">0</span>件</div>
            <div>昨日0件</div>
          </div>
        </div>
        <div class="top-1">
          <div class="top-1-1" style="background-color: orange"></div>
          <div class="top-1-2">
            <div>质量合格率</div>
            <div><span style="color: orange">0.0</span>%</div>
            <div>暂无数据</div>
          </div>
        </div>
        <div class="top-1">
          <div class="top-1-1" style="background-color: blueviolet"></div>
          <div class="top-1-2">
            <div>设备状态</div>
            <div><span style="color: blueviolet">1</span>/10运行中</div>
            <div>停机8|维护1</div>
          </div>
        </div>
      </div>
      <div class="app-cen">
        <div class="cen-left">
          <div class="left-top">生产趋势</div>
          <div class="left-main">
            <div ref="chartRef"></div>
          </div>
        </div>
        <div class="cen-right">
          <div class="right-top">待办与异常</div>
          <div class="right-main">
            <div class="right-main-1">
              <div class="right-main-1-1"></div>
              <div class="right-main-1-2">
                <div>安灯报警</div>
                <div>未处置的安灯呼叫</div>
              </div>
            </div>
            <div class="right-main-1">
              <div
                class="right-main-1-1"
                style="background-color: orange"
              ></div>
              <div class="right-main-1-2">
                <div>设备维修</div>
                <div>未处置的维修工单</div>
              </div>
            </div>
            <div class="right-main-1">
              <div class="right-main-1-1" style="background-color: blue"></div>
              <div class="right-main-1-2">
                <div>待排产工单</div>
                <div>草稿状态的生产工单</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="app-floot">
        <div class="floot-left">
          <div class="floot-left-top">工单状态分布</div>
          <div class="floot-left-main">
            <div ref="chartRef1"></div>
          </div>
        </div>
        <div class="floot-right">
          <div class="floot-right-top">快捷入口</div>
          <div class="floot-right-main">
            <div class="floot-right-main-1" v-for="item in 9">
              <div></div>
              <div>生产工单</div>
            </div>
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
    return {
      tuTab: [
        { name: "产量", value: 0 },
        { name: "合格品", value: 0 },
        { name: "不良品", value: 0 },
        { name: "不良品", value: 0 },
        { name: "不良品", value: 0 },
        { name: "不良品", value: 0 },
        { name: "不良品", value: 0 },
      ],
    };
  },
  mounted() {
    // 使用 $nextTick 确保 DOM 已经渲染完成
    this.$nextTick(() => {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      // 获取图表容器的 DOM 元素
      const chartDom = this.$refs.chartRef;

      // 初始化 ECharts 实例
      const myChart = echarts.init(chartDom);

      // 配置折线图
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
          formatter: (params) => {
            return `${params[0].axisValue}<br/>
              ${params[0].marker} ${params[0].seriesName}: ${params[0].data}<br/>
              ${params[1].marker} ${params[1].seriesName}: ${params[1].data}<br/>
              ${params[2].marker} ${params[2].seriesName}: ${params[2].data}`;
          },
        },
        // 图例配置
        legend: {
          data: ["产量", "合格品", "不良品"],
          buttom: 0,
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            fontSize: 12,
            color: "#666",
          },
        },
        // 网格配置
        grid: {
          left: "3%",
          right: "4%",
          bottom: "15%",
          top: "5%",
          containLabel: true,
        },
        // x 轴配置
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["07-26", "07-27", "07-28", "07-29", "07-30", "07-31", "08-01"],
        },
        // y 轴配置
        yAxis: {
          type: "value",
          min: 0,
          max: 1,
          interval: 1,
        },
        // 系列数据配置
        series: [
          {
            name: "产量",
            type: "line",
            data: this.tuTab.map((item) => item.value),
            smooth: true,
            lineStyle: {
              color: "#006be6",
              width: 2,
            },
            itemStyle: {
              color: "#006be6",
            },
          },
          {
            name: "合格品",
            type: "line",
            data: this.tuTab.map((item) => item.value),
            smooth: true,
            lineStyle: {
              color: "#00bfa5",
              width: 2,
            },
            itemStyle: {
              color: "#00bfa5",
            },
          },
          {
            name: "不良品",
            type: "line",
            data: this.tuTab.map((item) => item.value),
            smooth: true,
            lineStyle: {
              color: "#ff5722",
              width: 2,
            },
            itemStyle: {
              color: "#ff5722",
            },
          },
        ],
      };
      // 使用配置项生成图表
      myChart.setOption(option);
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
  width: 1014px;
  height: 1094px;
  /* border: 1px solid red; */
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.top-1 {
  width: 242px;
  height: 124px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  padding: 24px;
  display: flex;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
.top-1:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  border-color: transparent;
}
.top-1 .top-1-1 {
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: #006be6;
  margin-right: 10px;
}
.top-1 .top-1-2 {
  width: 114px;
  height: 74px;
}
.top-1-2 div:first-child {
  font-size: 14px;
}
.top-1-2 div:nth-child(2) {
  font-size: 12px;
}
.top-1-2 div:nth-child(2) span {
  font-size: 24px;
  color: #006be6;
}
.top-1-2 div:last-child {
  font-size: 12px;
}
.app-cen {
  width: 100%;
  height: 405px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.cen-left {
  width: 650px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
}
.left-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.left-main {
  width: 100%;
  height: 349px;
  padding: 24px;
}
.left-main div {
  width: 100%;
  height: 100%;
}
.cen-right {
  width: 328px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
}
.right-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.right-main {
  width: 100%;
  height: 266px;
  padding: 24px;
}
.right-main-1 {
  width: 100%;
  height: 73px;
  padding: 16px 8px;
  display: flex;
  align-items: center;
}
.right-main-1:hover {
  background-color: #f5f5f5;
}
.right-main-1:nth-child(2) {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.right-main-1 .right-main-1-1 {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: red;
}
.right-main-1 .right-main-1-2 {
  /* width: 100%; */
  height: 40px;
  margin-left: 8px;
  /* display: flex;
    flex-direction: column; */
  /* justify-content: space-between; */
}
.right-main-1-2 div:last-child {
  font-size: 12px;
}

.app-floot {
  width: 100%;
  height: 453px;
  display: flex;
  justify-content: space-between;
}
.floot-left,
.floot-right {
  width: 490px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
}
.floot-left-top,
.floot-right-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.floot-left-main {
  width: 100%;
  height: 397px;
  padding: 24px;
}
.floot-left-main div {
  width: 100%;
  height: 100%;
}
.floot-right-main {
  width: 100%;
  height: 397px;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.floot-right-main-1 {
  width: calc((100% - 20px) / 3);
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.floot-right-main-1:hover {
  background-color: #f5f5f5;
}
.floot-right-main-1 div:first-child {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: #006be6;
  margin-bottom: 8px;
}
.floot-right-main-1 div:last-child {
  font-size: 14px;
}
</style>
