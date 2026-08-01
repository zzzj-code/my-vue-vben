<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>退料单编号</span>
            <input type="text" placeholder="请输入退料单编号" />
          </div>
          <div>
            <span>退料单名称</span>
            <input type="text" placeholder="请输入退料单名称" />
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
          <div>生产退料单列表</div>
          <div>
            <button>+新增生产退料单</button>
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
                <th>退料单编号</th>
                <th>退料单名称</th>
                <th>退料类型</th>
                <th>生产工单</th>
                <th>工作站</th>
                <th>退料日期</th>
                <th>单据状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.moCode }}</td>
                <td>{{ item.station }}</td>
                <td>{{ item.returnDate }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
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
          code: "MR-2024-001",
          name: "冲压车间螺丝退料",
          type: "余料退库",
          moCode: "MO-2024-001",
          station: "冲压机台A",
          returnDate: "2024-01-16",
          status: "已退库",
        },
        {
          id: 2,
          code: "MR-2024-002",
          name: "注塑车间塑胶退料",
          type: "不良品退库",
          moCode: "MO-2024-002",
          station: "注塑机A",
          returnDate: "2024-01-22",
          status: "待审核",
        },
        {
          id: 3,
          code: "MR-2024-003",
          name: "组装车间物料退料",
          type: "余料退库",
          moCode: "MO-2024-003",
          station: "组装线A",
          returnDate: "2024-02-03",
          status: "已退库",
        },
        {
          id: 4,
          code: "MR-2024-004",
          name: "表面处理退料",
          type: "不良品退库",
          moCode: "MO-2024-004",
          station: "喷涂线A",
          returnDate: "2024-02-12",
          status: "待退库",
        },
        {
          id: 5,
          code: "MR-2024-005",
          name: "包装车间余料退库",
          type: "余料退库",
          moCode: "MO-2024-005",
          station: "包装线A",
          returnDate: "2024-03-02",
          status: "已退库",
        },
        {
          id: 6,
          code: "MR-2024-006",
          name: "机加工退料",
          type: "不良品退库",
          moCode: "MO-2024-006",
          station: "CNC加工中心A",
          returnDate: "2024-03-18",
          status: "待审核",
        },
        {
          id: 7,
          code: "MR-2024-007",
          name: "线束车间端子退料",
          type: "余料退库",
          moCode: "MO-2024-007",
          station: "线束裁切线",
          returnDate: "2024-04-03",
          status: "已退库",
        },
        {
          id: 8,
          code: "MR-2024-008",
          name: "组装车间不良品退料",
          type: "不良品退库",
          moCode: "MO-2024-008",
          station: "组装线B",
          returnDate: "2024-04-12",
          status: "待退库",
        },
        {
          id: 9,
          code: "MR-2024-009",
          name: "注塑车间余料退库",
          type: "余料退库",
          moCode: "MO-2024-009",
          station: "注塑机B",
          returnDate: "2024-05-03",
          status: "已退库",
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
  min-width: 1210px;
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
.ol-col button:last-child {
  color: red;
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
