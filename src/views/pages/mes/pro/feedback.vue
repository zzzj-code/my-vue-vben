<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>报工单号</span>
            <input type="text" placeholder="请输入报工单号" />
          </div>
          <div>
            <span>报工类型</span>
            <input type="text" placeholder="请输入报工类型" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>生产报工列表</div>
          <div>
            <button>+新增生产报工</button>
            <button>导出</button>
            <button>🔍</button>
          </div>
          <div>
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th>报工单号</th>
                <th>报工类型</th>
                <th>工作站</th>
                <th>工序</th>
                <th>生产工单编码</th>
                <th>产品物料编码</th>
                <th>产品物料名称</th>
                <th>规格型号</th>
                <th>单位</th>
                <th>报工数量</th>
                <th>报工人</th>
                <th>报工时间</th>
                <th>审核人</th>
                <th>状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.station }}</td>
                <td>{{ item.process }}</td>
                <td>{{ item.moCode }}</td>
                <td>{{ item.productCode }}</td>
                <td>{{ item.productName }}</td>
                <td>{{ item.spec }}</td>
                <td>{{ item.unit }}</td>
                <td>{{ item.qty }}</td>
                <td>{{ item.reporter }}</td>
                <td>{{ item.reportTime }}</td>
                <td>{{ item.approver }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>审批</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共9条记录<span>20条/页</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabValue: [
        {
          id: 1,
          code: "RP-2024-001",
          type: "计件报工",
          station: "冲压机台A",
          process: "冲压成型",
          moCode: "MO-2024-001",
          productCode: "M-2024-001",
          productName: "碳钢螺丝",
          spec: "M4×20 镀锌",
          unit: "个",
          qty: 500,
          reporter: "张伟",
          reportTime: "2024-07-15 10:30",
          approver: "李明",
          status: "已审核",
        },
        {
          id: 2,
          code: "RP-2024-002",
          type: "计件报工",
          station: "注塑机A",
          process: "注塑成型",
          moCode: "MO-2024-002",
          productCode: "M-2024-002",
          productName: "ABS塑料外壳",
          spec: "100×80×30mm 白色",
          unit: "个",
          qty: 200,
          reporter: "王芳",
          reportTime: "2024-07-15 09:00",
          approver: "",
          status: "待审核",
        },
        {
          id: 3,
          code: "RP-2024-003",
          type: "工时报工",
          station: "CNC加工中心A",
          process: "CNC加工",
          moCode: "MO-2024-003",
          productCode: "M-2024-007",
          productName: "不锈钢弹簧",
          spec: "线径0.8mm 外径10mm",
          unit: "个",
          qty: 300,
          reporter: "刘洋",
          reportTime: "2024-07-14 14:20",
          approver: "李明",
          status: "已审核",
        },
        {
          id: 4,
          code: "RP-2024-004",
          type: "计件报工",
          station: "组装线A",
          process: "组装",
          moCode: "MO-2024-004",
          productCode: "P-2024-006",
          productName: "智能网关",
          spec: "ZigBee 3.0 白色",
          unit: "台",
          qty: 50,
          reporter: "陈静",
          reportTime: "2024-07-14 11:00",
          approver: "赵刚",
          status: "已审核",
        },
        {
          id: 5,
          code: "RP-2024-005",
          type: "工时报工",
          station: "包装线A",
          process: "包装",
          moCode: "MO-2024-005",
          productCode: "P-2024-012",
          productName: "智能灯泡",
          spec: "RGB 9W E27螺口",
          unit: "个",
          qty: 150,
          reporter: "孙丽",
          reportTime: "2024-07-13 08:30",
          approver: "",
          status: "待审核",
        },
        {
          id: 6,
          code: "RP-2024-006",
          type: "计件报工",
          station: "冲压机台B",
          process: "冲压成型",
          moCode: "MO-2024-006",
          productCode: "M-2024-013",
          productName: "铜接线端子",
          spec: "DT-10 镀锡",
          unit: "个",
          qty: 800,
          reporter: "周明",
          reportTime: "2024-07-13 09:30",
          approver: "李明",
          status: "已审核",
        },
        {
          id: 7,
          code: "RP-2024-007",
          type: "计件报工",
          station: "注塑机B",
          process: "注塑成型",
          moCode: "MO-2024-007",
          productCode: "M-2024-014",
          productName: "橡胶密封圈",
          spec: "内径20mm 外径26mm",
          unit: "个",
          qty: 400,
          reporter: "吴凯",
          reportTime: "2024-07-12 08:00",
          approver: "赵刚",
          status: "已审核",
        },
        {
          id: 8,
          code: "RP-2024-008",
          type: "工时报工",
          station: "组装线B",
          process: "组装",
          moCode: "MO-2024-008",
          productCode: "P-2024-018",
          productName: "智能插座",
          spec: "10A 250V WiFi版",
          unit: "个",
          qty: 80,
          reporter: "郑华",
          reportTime: "2024-07-12 10:00",
          approver: "",
          status: "待审核",
        },
        {
          id: 9,
          code: "RP-2024-009",
          type: "计件报工",
          station: "喷涂线A",
          process: "表面处理",
          moCode: "MO-2024-009",
          productCode: "M-2024-008",
          productName: "PC透明面板",
          spec: "120×80×2mm 透明",
          unit: "片",
          qty: 250,
          reporter: "林峰",
          reportTime: "2024-07-11 15:00",
          approver: "李明",
          status: "已审核",
        },
      ],
    };
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
  height: 590px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 86px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 331px;
  height: 42px;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
.top-inp div input {
  width: 215px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-inp div:last-child {
  font-size: 14px;
  color: #006be6;
  text-align: right;
}
.top-inp div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.top-inp div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp div button:last-child {
  background-color: #006be6;
  border: 0;
  color: #fff;
}

.app-main {
  width: 100%;
  height: 492px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.main-top div:first-child {
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:nth-child(2) {
  width: 63px;
}
.main-top div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.main-top div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-top div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.main-tab {
  width: 100%;
  height: 390px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1920px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #ece8e8;
}
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 20px;
  border-right: 0;
}
.ol-col {
  width: 240px;
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
}
.ol-col button {
  width: 56px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 8px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 3px;
  margin-left: 5px;
  text-align: center;
}
</style>
