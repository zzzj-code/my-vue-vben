<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>时间范围</span>
          <input type="text" placeholder="请选择时间范围" />
        </div>
        <div>
          <span>时间间隔</span>
          <input type="text" value="周" />
        </div>
        <div></div>
        <div>
          <button>重置</button>
          <button>查询</button>
          收起^
        </div>
      </div>
      <div class="app-nav">
        <div class="nav">
          <div
            v-for="(item, index) in navList"
            :key="index"
            :class="{ active: activeNav === index }"
            @click="activeNav = index"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="app-main" ref="chartRef"></div>
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
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      activeNav: 0,
      navList: [
        "客户总量分析",
        "客户跟进次数分析",
        "客户跟进方式分析",
        "客户转化率分析",
        "公海客户分析",
        "员工客户成交周期分析",
        "地区客户成交周期分析",
        "产品客户成交周期分析",
      ],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = echarts.init(this.$refs.chartRef);
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["新增客户数", "成交客户数"],
          top: 0,
          textStyle: {
            fontSize: 14,
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "20%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["2026-07-21(第30周)", "2026-07-27(第31周)"],
        },
        yAxis: {
          type: "value",
          minInterval: 1,
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#e8e8e8",
            },
          },
        },
        series: [
          {
            name: "新增客户数",
            type: "bar",
            data: [0, 0],
            itemStyle: {
              color: "#006be6",
              borderRadius: [4, 4, 0, 0],
            },
            barWidth: "30%",
            label: {
              show: true,
              position: "top",
              fontSize: 14,
              fontWeight: "bold",
            },
          },
          {
            name: "成交客户数",
            type: "bar",
            data: [0, 0],
            itemStyle: {
              color: "#52c41a",
              borderRadius: [4, 4, 0, 0],
            },
            barWidth: "30%",
            label: {
              show: true,
              position: "top",
              fontSize: 14,
              fontWeight: "bold",
            },
          },
        ],
      };
      chart.setOption(option);
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
.main-floot th{
    min-width: 40px;
    height: 100px;
    border-right: 1px solid #ccc;
    background-color: #e8e8e8;
}
</style>
