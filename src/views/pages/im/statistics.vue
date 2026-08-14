<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-1">
          <div></div>
          <div>
            <span>总用户</span><br />
            <span class="s1">{{ summary.totalUser }}</span><br />
            <span>今日新增：+{{ summary.todayNewUser }}</span>
          </div>
        </div>
        <div class="top-1">
          <div style="background-color: #18a058"></div>
          <div>
            <span>总群聊</span><br />
            <span class="s1">{{ summary.totalGroup }}</span><br />
            <span>今日新增：+{{ summary.todayNewGroup }}</span>
          </div>
        </div>
        <div class="top-1">
          <div style="background-color: #f59e0b"></div>
          <div>
            <span>日活用户</span><br />
            <span class="s1">{{ summary.dailyActive }}</span><br />
            <span>周/月活：{{ summary.weeklyActive }}/{{ summary.monthlyActive }}</span>
          </div>
        </div>
        <div class="top-1">
          <div style="background-color: #64748b"></div>
          <div>
            <span>今日消息</span><br />
            <span class="s1">{{ summary.todayMessage }}</span><br />
            <span>环比昨日：{{ summary.messageChange }}</span>
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-chart">
          <div class="chart-title">消息趋势（私聊 + 群聊）</div>
          <div class="chart-tab">
            <div ref="chartRef1"></div>
          </div>
        </div>
        <div class="main-chart">
          <div class="chart-title">用户趋势（新增注册 + 日活）</div>
          <div class="chart-tab">
              <div ref="chartRef2"></div>
          </div>
        </div>
        <div class="main-chart">
          <div class="chart-title">消息类型分布</div>
          <div class="chart-tab">
              <div ref="chartRef3"></div>
          </div>
        </div>
        <div class="main-chart">
          <div class="chart-title">群规模分布</div>
          <div class="chart-tab">
              <div ref="chartRef4"></div>
          </div>
        </div>
        <div class="main-chart">
          <div class="chart-title">消息发送 TOP 10</div>
          <div class="chart-tab">
              <div ref="chartRef5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
// ========== 导入IM统计相关API ==========
import { getImStatisticsSummary, getMessageStatisticsAnalyse } from '#/api/im/statistics';

export default {
  data() {
    return {
      // 统计概览数据
      summary: {
        totalUser: 46,
        todayNewUser: 0,
        totalGroup: 1,
        todayNewGroup: 0,
        dailyActive: 0,
        weeklyActive: 1,
        monthlyActive: 1,
        todayMessage: 0,
        messageChange: '-100%'
      }
    };
  },
  mounted() {
    this.loadStatistics();
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initChart4();
    this.initChart5();
  },
  methods: {
    // 加载统计数据
    async loadStatistics() {
      try {
        const data = await getImStatisticsSummary();
        if (data) {
          this.summary = {
            totalUser: data.totalUser || 0,
            todayNewUser: data.todayNewUser || 0,
            totalGroup: data.totalGroup || 0,
            todayNewGroup: data.todayNewGroup || 0,
            dailyActive: data.dailyActive || 0,
            weeklyActive: data.weeklyActive || 0,
            monthlyActive: data.monthlyActive || 0,
            todayMessage: data.todayMessage || 0,
            messageChange: data.messageChange || '0%'
          };
        }
      } catch (err) {
        console.error('获取统计数据失败', err);
      }
    },
    initChart1() {
      const chart = echarts.init(this.$refs.chartRef1);
      const option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "#fff",
          borderColor: "#ccc",
          borderWidth: 1,
          textStyle: {
            color: "#333",
          },
        },
        legend: {
          data: ["私聊消息", "群聊消息"],
          top: 0,
          textStyle: {
            fontSize: 14,
            color: "#333",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "18%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: ["86400", "72800", "59200", "45600", "32000", "18400", "04800"],
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#71717a",
            fontSize: 14,
          },
        },
        yAxis: {
          type: "value",
          name: "消息量",
          nameTextStyle: {
            color: "#71717a",
            fontSize: 14,
          },
          nameGap: 25,
          min: 0,
          max: 6,
          interval: 1,
          splitLine: {
            lineStyle: {
              color: "#e5e7eb",
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#71717a",
            fontSize: 14,
          },
        },
        series: [
          {
            name: "私聊消息",
            type: "line",
            smooth: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            lineStyle: {
              width: 2,
              color: "#2f7df6",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(47, 125, 246, 0.25)" },
                { offset: 1, color: "rgba(47, 125, 246, 0.05)" },
              ]),
            },
            data: [3, 0, 0, 6, 1, 1, 0],
          },
          {
            name: "群聊消息",
            type: "line",
            smooth: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            lineStyle: {
              width: 2,
              color: "#18a058",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(24, 160, 88, 0.25)" },
                { offset: 1, color: "rgba(24, 160, 88, 0.05)" },
              ]),
            },
            data: [0, 0, 2, 2, 1, 0, 0],
          },
        ],
      };
      chart.setOption(option);
    },
    initChart2() {
      const chart = echarts.init(this.$refs.chartRef2);
      const option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "#fff",
          borderColor: "#ccc",
          borderWidth: 1,
          textStyle: {
            color: "#333",
          },
        },
        legend: {
          data: ["新增注册", "日活"],
          top: 0,
          textStyle: {
            fontSize: 14,
            color: "#333",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "18%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["86400", "72800", "59200", "45600", "32000", "18400", "04800"],
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#71717a",
            fontSize: 14,
          },
        },
        yAxis: [
          {
            type: "value",
            name: "新增注册",
            nameTextStyle: {
              color: "#71717a",
              fontSize: 14,
            },
            nameGap: 25,
            min: 0,
            max: 6,
            interval: 1,
            splitLine: {
              lineStyle: {
                color: "#e5e7eb",
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#71717a",
              fontSize: 14,
            },
          },
          {
            type: "value",
            name: "日活",
            nameTextStyle: {
              color: "#71717a",
              fontSize: 14,
            },
            nameGap: 25,
            min: 0,
            max: 1,
            interval: 0.2,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#71717a",
              fontSize: 14,
            },
          },
        ],
        series: [
          {
            name: "新增注册",
            type: "bar",
            yAxisIndex: 0,
            barWidth: "50%",
            itemStyle: {
              color: "#f59e0b",
            },
            data: [4, 1, 0, 5, 6, 1, 0],
          },
          {
            name: "日活",
            type: "line",
            yAxisIndex: 1,
            smooth: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            lineStyle: {
              width: 2,
              color: "#ef4444",
            },
            itemStyle: {
              color: "#ef4444",
            },
            data: [1, 0, 1, 1, 1, 1, 0],
          },
        ],
      };
      chart.setOption(option);
    },
    initChart3() {
      const chart = echarts.init(this.$refs.chartRef3);
      const option = {
        tooltip: {
          trigger: "item",
          backgroundColor: "#fff",
          borderColor: "#ccc",
          borderWidth: 1,
          textStyle: {
            color: "#333",
          },
          formatter: "{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          right: "10%",
          top: "center",
          textStyle: {
            fontSize: 14,
            color: "#333",
          },
        },
        series: [
          {
            name: "消息类型分布",
            type: "pie",
            radius: ["45%", "70%"],
            center: ["40%", "50%"],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 17, name: "未知(101)", itemStyle: { color: "#6366f1" } },
            ],
          },
        ],
      };
      chart.setOption(option);
    },
    initChart4() {
      const chart = echarts.init(this.$refs.chartRef4);
      const option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "#fff",
          borderColor: "#ccc",
          borderWidth: 1,
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "12%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["1-9人", "10-49人", "50-199人", "200+人"],
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#71717a",
            fontSize: 14,
          },
        },
        yAxis: {
          type: "value",
          name: "群组数",
          nameTextStyle: {
            color: "#71717a",
            fontSize: 14,
          },
          nameGap: 25,
          min: 0,
          max: 1,
          interval: 0.2,
          splitLine: {
            lineStyle: {
              color: "#e5e7eb",
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#71717a",
            fontSize: 14,
          },
        },
        series: [
          {
            name: "群组数",
            type: "bar",
            barWidth: "50%",
            itemStyle: {
              color: "#18a058",
              borderRadius: [6, 6, 0, 0],
            },
            data: [1, 0, 0, 0],
          },
        ],
      };
      chart.setOption(option);
    },
    initChart5() {
      const chart = echarts.init(this.$refs.chartRef5);
      const option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "#fff",
          borderColor: "#ccc",
          borderWidth: 1,
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "12%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          name: "消息数",
          nameTextStyle: {
            color: "#71717a",
          },
          nameGap: 10,
          min: 0,
          max: 18,
          interval: 3,
        },
        yAxis: {
          type: "category",
          data: ["王小东(1)"],
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#71717a",
            fontSize: 14,
          },
        },
        series: [
          {
            name: "消息数",
            type: "bar",
            barWidth: "8%",
            itemStyle: {
              color: "#2f7df6",
              borderRadius: [0, 5, 5, 0],
            },
            data: [17],
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
  height: 1370px;
  background-color: #ecebeb;
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 107px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
}
.app-top .top-1 {
  width: 244px;
  height: 104px;
  padding: 16px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  border: 0.5px solid #ccc;
}
.top-1 div:first-child {
  width: 48px;
  height: 48px;
  background-color: #2f7df6;
  margin-right: 12px;
  border-radius: 5px;
}
.top-1 div span:first-child {
  font-size: 14px;
  margin-bottom: 4px;
  color: #71717a;
}
.top-1 div .s1 {
  font-size: 24px;
  font-weight: 600;
}
.top-1 div span:last-child {
  margin-top: 8px;
  font-size: 12px;
  color: #71717a;
}
.app-main {
  width: 100%;
  height: 1247px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.main-chart {
  flex: 0 0 calc(50% - 10px);
  height: 405px;
  background-color: #fff;
  border: 0.5px solid #ccc;
  border-radius: 5px;
}
.chart-title {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.chart-tab {
  width: 100%;
  height: 348px;
  padding: 12px 16px 16px;
}
.chart-tab div {
  width: 100%;
  height: 100%;
}
</style>