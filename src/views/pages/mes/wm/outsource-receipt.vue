<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>入库单编号</span>
            <input type="text" placeholder="请输入入库单编号" />
          </div>
          <div>
            <span>入库单名称</span>
            <input type="text" placeholder="请输入入库单名称" />
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
          <div>外协入库单列表</div>
          <div>
            <button>+新增外协入库单</button>
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
                <th>入库单编号</th>
                <th>入库单名称</th>
                <th>外协工单号</th>
                <th>供应商名称</th>
                <th>入库日期</th>
                <th>单据状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.osCode }}</td>
                <td>{{ item.supplierName }}</td>
                <td>{{ item.receiveDate }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>完成入库</button>
                  <button>取消</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共6条记录<span>20条/页</span></div>
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
          code: "OSIN-2024-001",
          name: "外壳注塑入库",
          osCode: "OS-2024-001",
          supplierName: "广州市盛源塑胶制品有限公司",
          receiveDate: "2024-01-20",
          status: "已入库",
        },
        {
          id: 2,
          code: "OSIN-2024-002",
          name: "五金件外协入库",
          osCode: "OS-2024-002",
          supplierName: "东莞市恒达精密五金厂",
          receiveDate: "2024-02-05",
          status: "待入库",
        },
        {
          id: 3,
          code: "OSIN-2024-003",
          name: "表面处理入库",
          osCode: "OS-2024-003",
          supplierName: "佛山市德力机械制造有限公司",
          receiveDate: "2024-02-20",
          status: "待检验",
        },
        {
          id: 4,
          code: "OSIN-2024-004",
          name: "电子元件外协入库",
          osCode: "OS-2024-004",
          supplierName: "深圳市艾瑞斯科技有限公司",
          receiveDate: "2024-03-05",
          status: "已入库",
        },
        {
          id: 5,
          code: "OSIN-2024-005",
          name: "模具加工入库",
          osCode: "OS-2024-005",
          supplierName: "东莞市华辉精密模具厂",
          receiveDate: "2024-03-20",
          status: "待检验",
        },
        {
          id: 6,
          code: "OSIN-2024-006",
          name: "线束加工入库",
          osCode: "OS-2024-006",
          supplierName: "佛山市顺达电子贸易行",
          receiveDate: "2024-04-05",
          status: "待入库",
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
  min-width: 1090px;
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
