<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>盘点类型</span>
            <input type="text" placeholder="请输入盘点类型" />
          </div>
          <div>
            <span>任务编码</span>
            <input type="text" placeholder="请输入任务编码" />
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
          <div>盘点任务列表</div>
          <div>
            <button>+新增盘点任务</button>
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
                <th>任务编码</th>
                <th>任务名称</th>
                <th>盘点类型</th>
                <th>盘点方案</th>
                <th>盘点日期</th>
                <th>盘点人</th>
                <th>单据状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.planCode }}</td>
                <td>{{ item.inventoryDate }}</td>
                <td>{{ item.person }}</td>
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
          code: "IT-2024-001",
          name: "原材料仓库7月盘点任务",
          type: "循环盘点",
          planCode: "INV-2024-002",
          inventoryDate: "2024-07-15",
          person: "张伟",
          status: "已完成",
        },
        {
          id: 2,
          code: "IT-2024-002",
          name: "成品仓库9月季度盘点",
          type: "季度盘点",
          planCode: "INV-2024-003",
          inventoryDate: "2024-09-01",
          person: "李明",
          status: "待盘点",
        },
        {
          id: 3,
          code: "IT-2024-003",
          name: "半成品仓库抽盘任务",
          type: "抽盘",
          planCode: "INV-2024-004",
          inventoryDate: "2024-08-10",
          person: "王芳",
          status: "进行中",
        },
        {
          id: 4,
          code: "IT-2024-004",
          name: "危化品仓库专项盘点",
          type: "专项盘点",
          planCode: "INV-2024-006",
          inventoryDate: "2024-07-20",
          person: "刘洋",
          status: "已完成",
        },
        {
          id: 5,
          code: "IT-2024-005",
          name: "备品备件仓库8月盘点",
          type: "循环盘点",
          planCode: "INV-2024-007",
          inventoryDate: "2024-08-05",
          person: "陈静",
          status: "进行中",
        },
        {
          id: 6,
          code: "IT-2024-006",
          name: "年中全面盘点任务",
          type: "全面盘点",
          planCode: "INV-2024-008",
          inventoryDate: "2024-06-01",
          person: "赵刚",
          status: "已完成",
        },
        {
          id: 7,
          code: "IT-2024-007",
          name: "电子元器件抽盘任务",
          type: "抽盘",
          planCode: "INV-2024-009",
          inventoryDate: "2024-09-15",
          person: "孙丽",
          status: "待盘点",
        },
        {
          id: 8,
          code: "IT-2024-008",
          name: "成品仓库第四季度盘点",
          type: "季度盘点",
          planCode: "INV-2024-010",
          inventoryDate: "2024-10-01",
          person: "周明",
          status: "待盘点",
        },
        {
          id: 9,
          code: "IT-2024-009",
          name: "辅料仓库年度盘点任务",
          type: "全面盘点",
          planCode: "INV-2024-005",
          inventoryDate: "2024-12-15",
          person: "吴凯",
          status: "待盘点",
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
  min-width: 1310px;
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
  width: 280px;
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
