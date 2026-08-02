<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-1">
          <div>WMS首页</div>
          <div>单据工作台/库存概览</div>
        </div>
        <div class="top-2">
          <input type="text" placeholder="北京仓" />
          <button>刷新</button>
        </div>
      </div>
      <div class="app-nav">
        <div class="nav-1" v-for="item in 4">
          <div class="nav-lim">
            <div class="lim-1">
              <div>
                <span></span>
                入库
              </div>
              <button>查看</button>
            </div>
            <div class="lim-2">
              <span>合计</span>
              <span>5</span>
              <span>单</span>
            </div>
            <div class="lim-3">
              <span
                style="
                  background-color: rgb(64, 158, 255);
                  width: 20%;
                  border-radius: 10px 0 0 10px;
                "
              ></span>
              <span
                style="background-color: rgb(103, 194, 58); width: 60%"
              ></span>
              <span
                style="background-color: rgb(144, 147, 153); width: 20%"
              ></span>
            </div>
            <div class="lim-4">
              <div>
                <div class="lim-4-1">草稿</div>
                <div class="lim-4-1" style="color: rgb(64, 158, 255)">3</div>
              </div>
              <div>
                <div class="lim-4-1">已完成</div>
                <div class="lim-4-1" style="color: rgb(103, 194, 58)">9</div>
              </div>
              <div>
                <div class="lim-4-1">已作废</div>
                <div class="lim-4-1" style="color: rgb(144, 147, 153)">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="app-cen">
        <div class="cen-top">
          <div>
            <div class="cen-1">单据趋势</div>
            <div class="cen-2">入库、出库、移库、盘库单据数量</div>
          </div>
          <div>
            <button>近七天</button>
          </div>
        </div>
        <div class="cen-main" ref="chartRef"></div>
      </div>
      <div class="app-floot">
        <div class="floot-left">
          <div
            style="width: 100%; height: 22px; font-size: 14px; font-weight: 500"
          >
            货物占比
          </div>
          <div style="width: 100%; height: 20px; font-size: 14px">
            按商品库存数量汇总Top5
          </div>
          <div class="left-tab"></div>
        </div>
        <div class="floot-right">
          <div
            style="width: 100%; height: 22px; font-size: 14px; font-weight: 500"
          >
            库存分布
          </div>
          <div style="width: 100%; height: 20px; font-size: 14px">
            按仓库库存数量汇总
          </div>
          <div class="left-tab"></div>
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
      chartInstance: null,
      // 近七天日期（x轴）
      dateList: ["07-27", "07-28", "07-29", "07-30", "07-31", "08-01", "08-02"],
      // 四类单据数据
      inStockData: [0, 0, 0, 0, 0, 0, 0], // 入库
      outStockData: [0, 0, 0, 0, 0, 0, 0], // 出库
      moveStockData: [0, 0, 0, 0, 0, 0, 0], // 移库
      checkStockData: [0, 0, 0, 0, 0, 0, 0], // 盘库
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.chartInstance = echarts.init(this.$refs.chartRef);
      const option = {
        // 图例
        legend: {
          data: ["入库", "出库", "移库", "盘库"],
          top: 0,
          itemWidth: 14,
          itemHeight: 14,
          textStyle: {
            fontSize: 12,
            color: "#606266",
          },
        },
        // 提示框
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
            let result = params[0].axisValue + "<br/>";
            params.forEach((item) => {
              result += `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName} ${item.value}<br/>`;
            });
            return result;
          },
        },
        // 网格
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          top: "15%",
          containLabel: true,
        },
        // x轴
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: ["07-27", "07-28", "07-29", "07-30", "07-31", "08-01", "08-02"],
        },
        // y轴
        yAxis: {
          type: "value",
          name: "单据数",
          min: 0,
          max: 1,
          interval: 1,
        },
        series: [
          {
            name: "入库",
            type: "bar",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: false,
            symbol: "circle",
            symbolSize: 6,
            lineStyle: {
              color: "#409EFF",
              width: 2,
            },
            itemStyle: {
              color: "#409EFF",
            },
          },
          {
            name: "出库",
            type: "bar",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: false,
            symbol: "circle",
            symbolSize: 6,
            lineStyle: {
              color: "#67C23A",
              width: 2,
            },
            itemStyle: {
              color: "#67C23A",
            },
          },
          {
            name: "移库",
            type: "bar",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: false,
            symbol: "circle",
            symbolSize: 6,
            lineStyle: {
              color: "#E6A23C",
              width: 2,
            },
            itemStyle: {
              color: "#E6A23C",
            },
          },
          {
            name: "盘库",
            type: "bar",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: false,
            symbol: "circle",
            symbolSize: 6,
            lineStyle: {
              color: "#909399",
              width: 2,
            },
            itemStyle: {
              color: "#909399",
            },
          },
        ],
      };
      this.chartInstance.setOption(option);
      // 响应式
      window.addEventListener("resize", () => {
        this.chartInstance.resize();
      });
    },
  },
  beforeDestroy() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }
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
  height: 1140px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 80px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
}
.top-1 {
  width: 193px;
  height: 100%;
}
.top-1 div:first-child {
  font-size: 20px;
  font-weight: 500;
}
.top-1 div:last-child {
  font-size: 14px;
}
.top-2 {
  width: 291px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-2 input {
  width: 220px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-2 button {
  width: 63px;
  height: 32px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
}
.app-nav {
  width: 100%;
  height: 176px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.nav-1 {
  width: 242px;
  height: 100%;
  background-color: #2f7df6;
  border-radius: 10px;
  display: flex;
  align-items: end;
}
.nav-lim {
  width: 100%;
  height: 170px;
  background-color: #fff;
  border-radius: 10px;
  padding: 12px 16px 16px;
}
.lim-1 {
  width: 100%;
  height: 24px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
}
.lim-1 div {
  width: 44px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
}
.lim-1 div span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #2f7df6;
}
.lim-1 button {
  border: 0;
  background-color: #fff;
  color: #2f7df6;
}
.lim-2 {
  width: 100%;
  height: 36px;
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: 5px;
}
.lim-2 span:nth-child(2) {
  font-size: 30px;
  font-weight: 500;
}
.lim-3 {
  width: 100%;
  height: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #f1efef;
  display: flex;
  overflow: hidden;
}
.lim-3 span {
  display: inline-block;
  height: 100%;
  flex-shrink: 0;
}
.lim-4 {
  width: 100%;
  height: 40px;
  /* border: 1px solid; */
  display: flex;
  justify-content: space-between;
}
.lim-4-1 {
  width: 64px;
  height: 20px;
  font-size: 14px;
}

.app-cen {
  width: 100%;
  height: 412px;
  padding: 12px 16px 16px;
  background-color: #fff;
  border-radius: 10px;
  border: 0.5px solid #ccc;
}
.cen-top {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.cen-1 {
  width: 210px;
  height: 22px;
  font-size: 14px;
  font-weight: 500;
}
.cen-2 {
  width: 210px;
  height: 20px;
  font-size: 14px;
}
.cen-top div button {
  width: 63px;
  height: 32px;
  border: 0.5px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
}
.cen-main {
  width: 100%;
  height: 330px;
}

.app-floot {
  width: 100%;
  height: 384px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.floot-left,
.floot-right {
  width: 498px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 12px 16px 16px;
}
.left-tab {
  width: 100%;
  height: 300px;
  border: 1px solid;
  margin-top: 10px;
}
</style>
