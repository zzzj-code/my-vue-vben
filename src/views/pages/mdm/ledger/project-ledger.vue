<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>台账主编码</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div>
            <span>项目编号</span>
            <input type="text" placeholder="请输入" />
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
          <div>项目台账</div>
          <div>
            <button>+新增项目台账</button>
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
                <th><div class="th-cell">台账主编码</div></th>
                <th><div class="th-cell">项目编号</div></th>
                <th><div class="th-cell">项目名称</div></th>
                <th><div class="th-cell">合同台账主编码</div></th>
                <th><div class="th-cell">客商主编码</div></th>
                <th><div class="th-cell">预算金额</div></th>
                <th><div class="th-cell">数据来源</div></th>
                <th><div class="th-cell">状态</div></th>
                <th><div class="th-cell">创建时间</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.code }}</td>
                <td>{{ item.projectNo }}</td>
                <td>{{ item.projectName }}</td>
                <td>{{ item.contractCode }}</td>
                <td>{{ item.customerCode }}</td>
                <td>{{ item.budgetAmount }}</td>
                <td>{{ item.source }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div class="left-info">
            共{{ tabValue.length }}条记录
            <span>20条/页</span>
          </div>
        </div>
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
          code: "XM-2024-001",
          projectNo: "PRJ-2024-0001",
          projectName: "智能仓储系统建设项目",
          contractCode: "HT-2024-001",
          customerCode: "CUST-2024-001",
          budgetAmount: 3500000.0,
          source: "手工录入",
          status: "进行中",
          createTime: "2024-01-15 09:30:00",
        },
        {
          id: 2,
          code: "XM-2024-002",
          projectNo: "PRJ-2024-0002",
          projectName: "ERP系统升级改造项目",
          contractCode: "HT-2024-003",
          customerCode: "CUST-2024-005",
          budgetAmount: 4200000.0,
          source: "系统同步",
          status: "已立项",
          createTime: "2024-01-20 14:20:00",
        },
        {
          id: 3,
          code: "XM-2024-003",
          projectNo: "PRJ-2024-0003",
          projectName: "新能源汽车充电桩部署项目",
          contractCode: "HT-2024-011",
          customerCode: "CUST-2024-011",
          budgetAmount: 28000000.0,
          source: "手工录入",
          status: "进行中",
          createTime: "2024-02-10 10:00:00",
        },
        {
          id: 4,
          code: "XM-2024-004",
          projectNo: "PRJ-2024-0004",
          projectName: "智慧物流平台开发项目",
          contractCode: "HT-2024-005",
          customerCode: "CUST-2024-010",
          budgetAmount: 980000.0,
          source: "系统同步",
          status: "已完结",
          createTime: "2024-02-15 16:45:00",
        },
        {
          id: 5,
          code: "XM-2024-005",
          projectNo: "PRJ-2024-0005",
          projectName: "数据中心扩容建设项目",
          contractCode: "HT-2024-016",
          customerCode: "CUST-2024-017",
          budgetAmount: 6200000.0,
          source: "手工录入",
          status: "已中止",
          createTime: "2024-03-01 11:30:00",
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
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 106px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
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
  cursor: pointer;
}

.main-tab {
  width: 100%;
  height: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1280px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
  padding: 0;
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
}
.main-tab th:last-child {
  border-right: none;
}
.th-cell {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
.main-tab th:last-child .th-cell {
  border-right: none;
}
.main-tab td {
  text-align: center;
  height: 56px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 12px;
  border-right: 0;
}
.ol-col {
  width: 130px;
  min-width: 80px;
  position: sticky;
  right: 0;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  border-radius: 6px;
  background-color: #fff;
  color: #006be6;
  cursor: pointer;
}
.ol-col button:hover {
  background-color: #006be6;
  color: #fff;
}
.ol-col button:last-child {
  color: red;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.left-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.left-info span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
}
</style>
