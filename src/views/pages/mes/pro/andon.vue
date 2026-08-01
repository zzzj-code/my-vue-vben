<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>工作站</span>
            <input type="text" placeholder="" />
          </div>
          <div>
            <span>发起人</span>
            <input type="text" placeholder="" />
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
          <div>安灯呼叫记录</div>
          <div>
            <button>+新增安灯呼叫</button>
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
                <th>工作站编码</th>
                <th>工作站名称</th>
                <th>工单编码</th>
                <th>工序名称</th>
                <th>发起人</th>
                <th>发起时间</th>
                <th>呼叫原因</th>
                <th>级别</th>
                <th>处理时间</th>
                <th>处理人</th>
                <th>处置状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.stationCode }}</td>
                <td>{{ item.stationName }}</td>
                <td>{{ item.moCode }}</td>
                <td>{{ item.processName }}</td>
                <td>{{ item.initiator }}</td>
                <td>{{ item.initTime }}</td>
                <td>{{ item.reason }}</td>
                <td>{{ item.level }}</td>
                <td>{{ item.handleTime }}</td>
                <td>{{ item.handler }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>标签打印</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共7条记录<span>20条/页</span></div>
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
          stationCode: "WS-001-01",
          stationName: "冲压机台A",
          moCode: "MO-2024-001",
          processName: "冲压成型",
          initiator: "张伟",
          initTime: "2024-07-15 10:30",
          reason: "设备故障（冲压模具卡顿）",
          level: "紧急",
          handleTime: "2024-07-15 10:45",
          handler: "李明",
          status: "已处理",
        },
        {
          id: 2,
          stationCode: "WS-002-01",
          stationName: "注塑机A",
          moCode: "MO-2024-002",
          processName: "注塑成型",
          initiator: "王芳",
          initTime: "2024-07-15 09:00",
          reason: "物料短缺（ABS塑料不足）",
          level: "一般",
          handleTime: "2024-07-15 09:20",
          handler: "刘洋",
          status: "已处理",
        },
        {
          id: 3,
          stationCode: "WS-003-01",
          stationName: "组装线A",
          moCode: "MO-2024-004",
          processName: "组装",
          initiator: "陈静",
          initTime: "2024-07-14 14:20",
          reason: "质量问题（产品尺寸超差）",
          level: "严重",
          handleTime: "",
          handler: "",
          status: "待处理",
        },
        {
          id: 4,
          stationCode: "WS-006-01",
          stationName: "CNC加工中心A",
          moCode: "MO-2024-003",
          processName: "CNC加工",
          initiator: "刘洋",
          initTime: "2024-07-14 11:00",
          reason: "设备异常（刀具磨损）",
          level: "一般",
          handleTime: "2024-07-14 11:30",
          handler: "赵刚",
          status: "已处理",
        },
        {
          id: 5,
          stationCode: "WS-005-01",
          stationName: "包装线A",
          moCode: "MO-2024-005",
          processName: "包装",
          initiator: "孙丽",
          initTime: "2024-07-13 08:30",
          reason: "人员缺岗（操作员请假）",
          level: "一般",
          handleTime: "2024-07-13 09:00",
          handler: "周明",
          status: "已处理",
        },
        {
          id: 6,
          stationCode: "WS-004-01",
          stationName: "喷涂线A",
          moCode: "MO-2024-009",
          processName: "表面处理",
          initiator: "林峰",
          initTime: "2024-07-12 15:00",
          reason: "质量异常（喷涂色差严重）",
          level: "严重",
          handleTime: "2024-07-12 16:00",
          handler: "李明",
          status: "已处理",
        },
        {
          id: 7,
          stationCode: "WS-007-01",
          stationName: "线束裁切线",
          moCode: "MO-2024-010",
          processName: "线束加工",
          initiator: "黄燕",
          initTime: "2024-07-12 10:00",
          reason: "设备故障（裁切机停机）",
          level: "紧急",
          handleTime: "",
          handler: "",
          status: "待处理",
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
  min-width: 1490px;
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
