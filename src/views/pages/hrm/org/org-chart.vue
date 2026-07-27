<template>
  <div class="page-wrapper">
    <div class="app">
      <div ref="chartRef" class="chart-box"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts"
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue"

export default {
  setup() {
    const chartRef = ref(null)
    let chartInstance = null

    const treeData = [
      {
        name: "宇擎源码1",
        title: "宇擎源码",
        level: "本级:4",
        total: "汇总:22",
        color: "purple",
        textColor: "#fff",
        children: [
          {
            name: "深圳总公司",
            title: "测试号",
            level: "本级:1",
            total: "汇总:14",
            color: "blue",
            textColor: "#fff",
            children: [
              { name: "研发部门", title: "宇擎源码", level: "本级:9", color: "#ffffff", textColor: "#333", border: "#dcdcdc" },
              { name: "市场部门", title: "未设置", level: "本级:3", color: "#ffffff", textColor: "#333", border: "#dcdcdc" },
              { name: "财务部门", title: "源码", level: "本级:1", color: "#ffffff", textColor: "#333", border: "#dcdcdc" },
              { name: "产品部门", title: "宇擎源码", level: "本级:0", color: "#ffffff", textColor: "#333", border: "#dcdcdc" },
            ],
          },
          {
            name: "测试",
            title: "未设置",
            level: "本级:0",
            total: "",
            color: "#ccc",
            textColor: "#333",
            border: "#dcdcdc",
          },
          {
            name: "长沙分公司",
            title: "未设置",
            level: "本级:1",
            total: "汇总:3",
            color: "blue",
            textColor: "#fff",
            children: [
              { name: "市场部门", title: "未设置", level: "本级:2", color: "#ffffff", textColor: "#333", border: "#dcdcdc" },
              { name: "财务部门", title: "未设置", level: "本级:0", color: "#ffffff", textColor: "#333", border: "#dcdcdc" },
              { name: "支持部门", title: "测试号", level: "本级:0", color: "#ffffff", textColor: "#333", border: "#dcdcdc" },
            ],
          },
          {
            name: "济南研发分公司",
            title: "宇擎源码",
            level: "本级:0",
            total: "汇总:1",
            color: "blue",
            textColor: "#fff",
            children: [
              { name: "济南研发部", title: "宇擎源码", level: "本级:1", color: "#ffffff", textColor: "#333", border: "#dcdcdc" },
            ],
          },
        ],
      },
    ]

    const formatLabel = (node) => {
      const totalText = node.total ? `${node.level} ${node.total}` : node.level
      return `${node.name}\n${node.title || ""}\n${totalText}`
    }

    const getTreeOption = () => ({
      tooltip: {
        trigger: "item",
        formatter: (params) => {
          const data = params.data
          const lines = [`<strong>${data.name}</strong>`]
          if (data.title) lines.push('负责人:'+data.title)
          if (data.level) lines.push(data.level)
          if (data.total) lines.push(data.total)
          return `<div style="line-height:1.6;">${lines.join("<br/>")}</div>`
        },
      },
      series: [
        {
          type: "tree",
          data: treeData,
          top: "8%",
          left: "8%",
          right: "8%",
          bottom: "8%",
          symbol: "rect",
          symbolSize: [140, 80],
          symbolKeepAspect: false,
          roam: true,
          scaleLimit: {
            min: 0.5,
            max: 2,
          },
          label: {
            position: "inside",
            verticalAlign: "middle",
            align: "center",
            fontSize: 12,
            lineHeight: 24,
            padding: [12, 16],
            formatter: (params) => formatLabel(params.data),
          },
          itemStyle: {
            borderWidth: 1,
            borderColor: "#dcdcdc",
          },
          emphasis: {
            focus: "none",
          },
          expandAndCollapse: false,
          initialTreeDepth: 5,
          orient: "vertical",
          edgeShape: "polyline",
          edgeForkPosition: "50%",
          lineStyle: {
            width: 2,
            color: "#bfcbd9",
          },
          labelLayout: {
            moveOverlap: "shiftY",
          },
        },
      ],
    })

    const applyNodeStyles = (node) => {
      if (!node) return
      node.itemStyle = node.itemStyle || {}
      node.itemStyle.color = node.color
      node.itemStyle.borderColor = node.border || "#dcdcdc"
      node.itemStyle.borderWidth = 1
      node.label = node.label || {}
      node.label.backgroundColor = "transparent"
      node.label.color = node.textColor || "#333"
      node.label.padding = [12, 16]
      if (node.children) node.children.forEach(applyNodeStyles)
    }

    const initChart = () => {
      if (!chartRef.value) return
      chartInstance = echarts.init(chartRef.value)
      treeData.forEach(applyNodeStyles)
      chartInstance.setOption(getTreeOption())
      window.addEventListener("resize", resizeChart)
    }

    const resizeChart = () => {
      if (chartInstance) chartInstance.resize()
    }

    onMounted(() => {
      nextTick(initChart)
    })

    onBeforeUnmount(() => {
      window.removeEventListener("resize", resizeChart)
      if (chartInstance) chartInstance.dispose()
    })

    return {
      chartRef,
    }
  },
}
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
  height: 760px;
  background-color: #ecebeb;
  position: absolute;
  top: -375px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}
.chart-box {
  width: 100%;
  height: 100%;
}
</style>
