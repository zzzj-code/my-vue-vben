<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-tit">
          <div class="tit1">
            <div>合同总数<br /><span>25</span></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="top-tit">
          <div class="tit1">
            <div>草稿数<br /><span>0</span></div>
            <div style="background-color: #ccc"></div>
            <div style="background-color: #9b999963"></div>
          </div>
        </div>
        <div class="top-tit">
          <div class="tit1">
            <div>已起草<br /><span>13</span></div>
            <div style="background-color: rgb(162, 250, 140, 0.5)"></div>
            <div style="background-color: rgba(162, 250, 140, 0.418)"></div>
          </div>
        </div>
        <div class="top-tit">
          <div class="tit1">
            <div>已生效<br /><span>9</span></div>
            <div style="background-color: rgb(162, 250, 140, 0.5)"></div>
            <div style="background-color: rgba(162, 250, 140, 0.418)"></div>
          </div>
        </div>
        <div class="top-tit">
          <div class="tit1">
            <div>已到期<br /><span>6</span></div>
            <div style="background-color: #e86452bd"></div>
            <div style="background-color: #e864526e"></div>
          </div>
        </div>
        <div class="top-tit">
          <div class="tit1">
            <div>合同金额<br /><span>¥3,761,665.00</span></div>
            <div style="background-color: #9270cabd"></div>
            <div style="background-color: #9270ca6e"></div>
          </div>
        </div>
        <div class="top-tit">
          <div class="tit1">
            <div>已履约金额<br /><span>¥461,160.00</span></div>
            <div style="background-color: #269a99bd"></div>
            <div style="background-color: #269a996e"></div>
          </div>
        </div>
        <div class="top-tit">
          <div class="tit1">
            <div>代收金额<br /><span>¥1,150,835.00</span></div>
            <div style="background-color: #f6bd16bd"></div>
            <div style="background-color: #f6bd166e"></div>
          </div>
        </div>
      </div>
      <div class="app-report">
        <div class="report-left">
          <div class="left-top">
            月度签约统计<input type="text" placeholder="2026" />
          </div>
          <div class="left-main">
            <div ref="chartRef"></div>
          </div>
        </div>
        <div class="report-right">
          <div class="right-top">分类分布</div>
          <div class="right-main">
            <div ref="chartRef2"></div>
          </div>
        </div>
      </div>
      <div class="app-report2">
        <div class="report2-left">
          <div class="report2-left-top">生命周期分布</div>
          <div class="report2-left-main">
            <div ref="sortRef"></div>
          </div>
        </div>
        <div class="report2-right">
          <div class="report2-right-top">
            即将到期合同（30 天内）<span>查看全部</span>
          </div>
          <div>暂无即将到期合同</div>
        </div>
      </div>
      <div class="app-tab">
        <div class="tab-top">履约完成率 TOP10（点击行查看合同）</div>
        <div class="tab-main">
          <table>
            <thead>
              <tr>
                <th>
                  <div>排名</div>
                </th>
                <th>
                  <div>合同编号</div>
                </th>
                <th>
                  <div>合同名称</div>
                </th>
                <th>
                  <div>合同金额</div>
                </th>
                <th>
                  <div>已履约</div>
                </th>
                <th>
                  <div style="border-right: 0;">完成率</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.contractNo }}</td>
                <td>{{ item.contractName }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.paid }}</td>
                <td>{{ item.completionRate }}</td>
              </tr>
            </tbody>
          </table>
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
      //表格数据
      tabValue: [
        {
          id: 1,
          contractNo: "HT202605284724",
          contractName: "采购052801",
          amount: 3000,
          paid: 1000,
          completionRate: "33.33%",
        },
        {
          id: 2,
          contractNo: "HT20260307001",
          contractName: "原材料年度采购框架协议",
          amount: 2000000,
          paid: 450000,
          completionRate: "22.5%",
        },
        {
          id: 3,
          contractNo: "HT20260303001",
          contractName: "服务器设备采购合同",
          amount: 320000,
          paid: 124,
          completionRate: "0.04%",
        },
        {
          id: 4,
          contractNo: "HT20260308001",
          contractName: "云服务采购合同",
          amount: 86000,
          paid: 33,
          completionRate: "0.04%",
        },
        {
          id: 5,
          contractNo: "HT202605216826",
          contractName: "采购202601",
          amount: 0,
          paid: 3,
          completionRate: "0%",
        },
        {
          id: 6,
          contractNo: "HT20260301001",
          contractName: "宇擎ERP系统销售合同",
          amount: 580000,
          paid: 0,
          completionRate: "0%",
        },
        {
          id: 7,
          contractNo: "HT20260304001",
          contractName: "办公场地租赁合同",
          amount: 240000,
          paid: 0,
          completionRate: "0%",
        },
        {
          id: 8,
          contractNo: "HT20260306001",
          contractName: "员工劳动合同-张伟",
          amount: 0,
          paid: 0,
          completionRate: "0%",
        },
        {
          id: 9,
          contractNo: "HT202604028823",
          contractName: "1",
          amount: 0,
          paid: 0,
          completionRate: "0%",
        },
      ],
      // 柱状图数据
      rawData: [
        { month: "01", count: 2.0, amount: 224.0 },
        { month: "02", count: 2.0, amount: 40.6 },
        { month: "03", count: 3.0, amount: 73.0 },
        { month: "04", count: 2.0, amount: 20.3 },
        { month: "05", count: 4.0, amount: 7.0 },
        { month: "06", count: 2.0, amount: 8.0 },
        { month: "07", count: 1.0, amount: 0.0 },
        { month: "08", count: 0.0, amount: 0.0 },
        { month: "09", count: 0.0, amount: 0.0 },
        { month: "10", count: 0.0, amount: 0.0 },
        { month: "11", count: 0.0, amount: 0.0 },
        { month: "12", count: 0.0, amount: 0.0 },
      ],
      // 环形图数据
      chartData: [
        { name: "框架协议", value: 1 },
        { name: "劳动合同", value: 1 },
        { name: "劳动合同", value: 1 },
        { name: "未分类", value: 2 },
        { name: "采购合同", value: 2 },
        { name: "实施服务", value: 1 },
        { name: "租聘合同", value: 1 },
        { name: "设备采购", value: 7 },
        { name: "软件销售", value: 9 },
      ],
      //排序柱状图数据
      rowData: [
        { name: "已起草", num: 13, price: 369665 },
        { name: "已生效", num: 5, price: 2820000 },
        { name: "履约中", num: 4, price: 409000 },
        { name: "签署中", num: 2, price: 154000 },
        { name: "已归档", num: 1, price: 9000 },
      ],
    };
  },
  mounted() {
    // DOM 渲染完成后初始化图表
    this.initChart();
    // 监听窗口变化，自适应
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.chartInstance) {
      this.chartInstance.dispose();
      this.chartInstance = null;
    }
    if (this.chartInstance2) {
      this.chartInstance2.dispose();
      this.chartInstance2 = null;
    }
    if (this.chartInstance3) {
      this.chartInstance3.dispose();
      this.chartInstance3 = null;
    }
  },
  methods: {
    initChart() {
      // 获取柱状图和环形图DOM
      const chartDom = this.$refs.chartRef;
      const chartDom2 = this.$refs.chartRef2;
      const chartDom3 = this.$refs.sortRef;
      if (!chartDom) return;
      if (!chartDom2) return;
      if (!chartDom3) return;

      // 初始化柱状图和环形图
      this.chartInstance = echarts.init(chartDom);
      this.chartInstance2 = echarts.init(chartDom2);
      this.chartInstance3 = echarts.init(chartDom3);

      //排序图数据
      const uname = this.rowData.map((item) => item.name);
      const nums = this.rowData.map((item) => item.num);

      // 柱状图数据
      const months = this.rawData.map((item) => item.month);
      const counts = this.rawData.map((item) => item.count);
      const amounts = this.rawData.map((item) => item.amount);

      //环形图数据
      const names = this.chartData.map((item) => item.name);
      const values = this.chartData.map((item) => item.value);

      //配置排序图
      const option3 = {
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" },
          formatter: function (params) {
            const name = params[0].name;
            const num = params[0].value;
            const target = this.rowData.find((item) => item.name === name);
            const price = target.price;
            return `${name}<br>数量：${num}份<br>金额：￥${price.toLocaleString()}.00`;
          }.bind(this),
        },
        grid: {
          // 图标四周位置
          left: "5%",
          right: "5%",
          bottom: "5%",
          top: "5%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              color: "#eeeeee",
              type: "solid",
            },
          },
          axisLine: { show: false },
          axisTick: { show: false },
        },
        yAxis: {
          type: "category",
          data: uname,
          axisLine: { show: false },
          axisTick: { show: false },
        },
        series: [
          {
            type: "bar",
            barWidth: 16,
            data: nums,
            itemStyle: {
              // 水平蓝绿渐变，和原图配色一致
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#4e86f2" },
                { offset: 1, color: "#56d0b0" },
              ]),
              borderRadius: 5, // 柱子两端圆角
            },
          },
        ],
      };

      //配置环形图
      const option2 = {
        //提示框
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            return `${params.name}<br>${params.value}份(${params.percent}%)`;
          },
        },
        // 图例
        legend: {
          data: names,
          bottom: 0,
          orient: "horizontal",
          type: "scroll",
          textStyle: {
            fontSize: 12,
          },
        },
        // 环形图
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            clockwise: false,
            itemStyle: {
              borderRadius: 5,
              borderColor: "#fff",
              borderWidth: 2,
            },
            data: this.chartData.map((item) => ({
              name: item.name,
              value: item.value,
            })),
            label: {
              show: false,
            },
            labelLine: {
              show: true,
            },
            emphasis: {
              scale: true,
              scaleSize: 10,
              label: {
                show: true,
                formatter: "{b}",
                fontSize: 14,
                fontWeight: "bold",
              },
            },
          },
        ],
      };

      // 配置柱状图
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "cross" },
          formatter: function (params) {
            let res = `<strong>${params[0].axisValue}月</strong><br/>`;
            params.forEach((p) => {
              if (p.seriesName === "签约金额") {
                res += `${p.seriesName}：${p.value} 万<br/>`;
              } else {
                res += `${p.seriesName}：${p.value} 份<br/>`;
              }
            });
            return res;
          },
        },
        legend: {
          data: ["签约数量", "签约金额"],
          top: 0, //位置
          textStyle: {
            fontSize: 14,
          },
        },
        grid: {
          // 图标四周位置
          left: "5%",
          right: "5%",
          bottom: "5%",
          top: "15%",
          containLabel: false,
        },
        xAxis: {
          // 显示x轴文字
          type: "category",
          data: months,
          axisLabel: {
            interval: 0,
            fontSize: 12,
          },
        },
        yAxis: [
          {
            type: "value",
            name: "数量",
            min: 0,
            max: 4,
            splitLine: {
              lineStyle: {
                type: "line",
                color: "#e8e8e8",
              },
            },
            axisLabel: {
              fontSize: 15,
            },
          },
          {
            type: "value",
            name: "金额",
            min: 0,
            max: 250,
            splitLine: {
              show: false,
            },
            axisLabel: {
              fontSize: 12,
              formatter: function (value) {
                return value.toFixed(1) + "万";
              },
            },
          },
        ],
        series: [
          {
            name: "签约数量",
            type: "bar",
            data: counts,
            itemStyle: {
              color: "#4A90D9",
              borderRadius: [4, 4, 0, 0],
            },
            barWidth: "80%",
          },
          {
            name: "签约金额",
            type: "line",
            yAxisIndex: 1,
            data: amounts,
            smooth: true,
            symbol: "circle",
            symbolSize: 7,
            lineStyle: {
              color: "#5ad8a6",
              width: 2,
            },
            itemStyle: {
              color: "#5ad8a6",
            },
          },
        ],
      };

      // 渲染图表
      this.chartInstance.setOption(option);
      this.chartInstance2.setOption(option2);
      this.chartInstance3.setOption(option3);
    },

    // 窗口变化时自适应
    handleResize() {
      if (this.chartInstance) {
        this.chartInstance.resize();
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
  height: 1675px;
  margin-bottom: 20px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
  padding: 20px;
}
.app-top {
  width: 100%;
  height: 224px;
  margin-bottom: 10px;
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.app-top .top-tit {
  width: calc(25% - 12px);
  height: 94px;
  padding: 16px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
}
.top-tit .tit1 {
  width: 199.5px;
  height: 60px;
  /* border: 1px solid #e86352bd; */
  display: flex;
  justify-content: space-between;
}
.tit1 div:first-child {
  width: 143px;
  height: 100%;
  font-size: 14px;
  color: #797676;
}
.tit1 div:first-child span {
  font-size: 24px;
  /* font-weight: 500; */
  color: black;
  z-index: 200;
}
.tit1 div:nth-child(2) {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background-color: #9cd9f169;
}
.tit1 div:last-child {
  position: absolute;
  left: 180px;
  top: -30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #9cd9f1a2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-report {
  width: 100%;
  height: 405px;
  display: flex;
  justify-content: space-between;
}
.app-report .report-left {
  width: 550px;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
}
.report-left .left-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.left-top input {
  width: 149px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.report-left .left-main {
  width: 100%;
  height: 348px;
  padding: 24px;
}
.report-left .left-main div {
  width: 100%;
  height: 100%;
}
.app-report .report-right {
  width: 400px;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
}
.report-right .right-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.report-right .right-main {
  width: 100%;
  height: 348px;
  padding: 24px;
}
.report-right .right-main div {
  width: 100%;
  height: 100%;
}

.app-report2 {
  width: 100%;
  height: 405px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.app-report2 .report2-left {
  width: 480px;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
}
.report2-left-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.report2-left-main {
  width: 100%;
  height: 349px;
  padding: 24px;
}
.report2-left-main div {
  width: 100%;
  height: 100%;
}
.app-report2 .report2-right {
  width: 470px;
  height: 330px;
  border-radius: 10px;
  background-color: #fff;
}
.report2-right-top {
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.report2-right-top span {
  color: rgb(35, 159, 231);
  font-size: 14px;
}
.report2-right div:last-child {
  width: 100%;
  height: 274px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-tab {
  width: 100%;
  height: 561px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;
}
.tab-top {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 500;
}
.tab-main {
  width: 100%;
  height: 505px;
  padding: 24px;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.tab-main table {
  width: max-content;
  min-width: 100%;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
  font-size: 14px;
}
.tab-main th {
  padding: 8px;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #e2e1e1;
}
.tab-main th div:first-child{
  height: 24px;
  /* border: 1px solid; */
  border-right: 1px solid #ccc;
}
.tab-main th:last-child {
  border: 0;
}
.tab-main td {
  height: 45px;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  text-align: center;
}
.tab-main tr:hover{
    cursor: pointer;
    background-color: #e9e8e8;
}
</style>
