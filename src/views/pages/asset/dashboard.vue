<template>
  <div class="title">资产看板</div>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">
            <div>资产总数</div>
            <div>12</div>
          </div>
          <div class="top-1">
            <div>资产总值(原值)</div>
            <div>140,301.00</div>
          </div>
          <div class="top-1">
            <div>资产净值</div>
            <div>140,301.00</div>
          </div>
          <div class="top-2">
            <div class="top-2-1">状态分布</div>
            <div class="top-2-2">
              <div>闲置：12</div>
              <div>使用中：0</div>
              <div>维修中：0</div>
              <div>已报废：0</div>
            </div>
          </div>
        </div>
        <div class="main-center">
          <div class="cen-left">
            <div class="cen-left-top">分类分布</div>
            <div class="cen-left-main">
              <div ref="chartRef"></div>
            </div>
          </div>
          <div class="cen-right">
            <div class="cen-right-top">部门分布</div>
            <div class="cen-right-main">
              <div ref="chartRef1"></div>
            </div>
          </div>
        </div>
        <div class="main-floot">
          <div class="floot-left">
            <div class="floot-left-top">状态分布</div>
            <div class="floot-left-main">
              <div ref="chartRef2"></div>
            </div>
          </div>
          <div class="floot-right">
            <div class="floot-right-top">折旧趋势</div>
            <div class="floot-right-main">暂无数据</div>
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
      //饼图数据
      tuTab: [
        { names: "便携式计算机", value: 2 },
        { names: "台式计算机", value: 1 },
        { names: "打印机", value: 1 },
        { names: "服务器", value: 1 },
        { names: "网络设备", value: 1 },
        { names: "家具", value: 2 },
        { names: "办公设备", value: 3 },
        { names: "文件柜", value: 1 },
      ],
      //柱状图数据
      tuTab1: [
        { names: "宇擎数码", value: 3 },
        { names: "研发部", value: 3 },
        { names: "行政部", value: 4 },
        { names: "未分配", value: 2 },
      ],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      //获取dom
      const charDom = this.$refs.chartRef;
      const charDom1 = this.$refs.chartRef1;
      const charDom2 = this.$refs.chartRef2;
      //创建实例
      const myChart = echarts.init(charDom);
      const myChart1 = echarts.init(charDom1);
      const myChart2 = echarts.init(charDom2);

      //获取数组数据
      const list1 = this.tuTab.map((item) => ({
        value: item.value,
        name: item.names,
      }));

      const list2 = this.tuTab1.map((item) => ({
        value: item.value,
        name: item.names,
      }));

      const names = list2.map((item) => item.name);
      const values = list2.map((item) => item.value);

      //配置饼图
      const option1 = {
        //提示
        tooltip: {
          trigger: "item",
          formatter: (params) => {
            return `${params.name}:${params.value}件(${params.percent}%)`;
          },
        },
        //图标签
        legend: {
          orient: "horizontal",
          bottom: "bottom",
          itemWidth: 20,
          itemHeight: 12,
          textStyle: {
            fontSize: 11,
          },
        },
        series: [
          {
            name: "资产占比",
            type: "pie",
            radius: ["40%", "68%"],
            avoidLabelOverlap: true,
            itemStyle: {
              borderRadius: 6,
            },
            label: {
              show: false,
            },
            data: list1,
            emphasis: {
              scale: true,
              scaleSize: 8,
              label: {
                show: true,
                formatter: "{b}",
                fontSize: 12,
                fontWeight: "bold",
                color: "#333",
              },
            },
          },
        ],
      };

      //配置柱状图
      const option2 = {
        //提示
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: (params) => {
            const item = params[0];
            return `${item.name}<br/>数量：${item.value}件`;
          },
        },
        //图位置
        grid: {
          left: "1",
          right: "1",
          top: "20px",
          bottom: "1",
          containLabel: true,
        },
        //x轴位置
        xAxis: {
          type: "category",
          data: names,
          axisLabel: {
            fontSize: 12,
            interval: 0,
          },
        },
        axisTick: {
          alignWithLabel: true,
        },
        //y轴配置
        yAxis: {
          type: "value",
          name: "数量（件）",
          name: list2.value,
        },
        series: [
          {
            name: "数量",
            type: "bar",
            data: values,
            barWidth: "35%",
            //渐变
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 1, color: "greenyellow" },
                  { offset: 0, color: "rgb(50, 142, 247)" },
                ],
              },
            },
          },
        ],
      };

      const option3 = {
        tooltip: {
          trigger: "item",
          formatter: (params) => {
            return `${params.name}:${params.value}件(${params.percent}%)`;
          },
        },
        legend: {
          orient: "horizontal",
          bottom: "bottom",
          itemWidth: 20,
          itemHeight: 12,
          textStyle: {
            fontSize: 11,
          },
        },
        color: ["#ccc"],
        series: [
          {
            name: "资产占比",
            type: "pie",
            radius: ["40%", "68%"],
            avoidLabelOverlap: true,
            itemStyle: {
              borderRadius: 6,
            },
            label: {
              show: false,
            },
            data: [{ value: 12, name: "闲置" }],
            emphasis: {
              scale: true,
              scaleSize: 8,
              label: {
                show: true,
                formatter: "{b}",
                fontSize: 12,
                fontWeight: "bold",
                color: "#333",
              },
            },
          },
        ],
      };

      myChart.setOption(option1);
      myChart1.setOption(option2);
      myChart2.setOption(option3);
      window.addEventListener("resize", () => {
        myChart.resize();
        myChart1.resize();
        myChart2.resize();
      });
    },
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  top: 1px;
  left: -0.2px;
  width: 1030px;
  height: 69px;
  background-color: #fff;
  padding: 16px 24px;
  font-size: 18px;
  font-weight: 600;
}
.page-wrapper {
  width: 1030px;
  display: grid;
  place-items: center;
  background-color: #ecebeb;
  position: relative;
}
.app {
  width: 1006px;
  /* border: 1px solid red; */
  padding-bottom: 10px;
  position: absolute;
  top: -375px;
}
.app-main {
  width: 100%;
  height: 1027px;
  /* border: 1px solid red; */
  margin-top: 70px;
}
.main-top {
  width: 100%;
  height: 185px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.main-top .top-1 {
  width: 241px;
  height: 142px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
}
.top-1 div:first-child {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.top-1 div:last-child {
  width: 100%;
  height: 86px;
  padding: 24px;
  font-size: 24px;
}
.main-top .top-2 {
  width: 241px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
}
.top-2 .top-2-1 {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.top-2 .top-2-2 {
  width: 100%;
  height: 129px;
  padding: 24px;
}
.top-2 .top-2-2 div {
  font-size: 14px;
}

.main-center {
  width: 100%;
  height: 405px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
}
.cen-left {
  width: 499px;
  height: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
}
.cen-left-top {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.cen-left-main {
  width: 100%;
  height: 348px;
  padding: 24px;
}
.cen-left-main div {
  width: 100%;
  height: 100%;
}

.cen-right {
  width: 499px;
  height: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
}
.cen-right-top {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.cen-right-main {
  width: 100%;
  height: 348px;
  padding: 24px;
}
.cen-right-main div {
  width: 100%;
  height: 100%;
}

.main-floot {
  width: 100%;
  height: 405px;
  display: flex;
  justify-content: space-between;
}
.floot-left {
  width: 499px;
  height: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
}
.floot-left-top {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.floot-left-main {
  width: 100%;
  height: 348px;
  padding: 24px;
}
.floot-left-main div {
  width: 100%;
  height: 100%;
}
.floot-right {
  width: 499px;
  height: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
}
.floot-right-top {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.floot-right-main {
  width: 100%;
  height: 348px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
</style>
