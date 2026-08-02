<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>仓库名称</span>
            <input type="text" placeholder="请输入仓库名称" />
          </div>
          <div>
            <span>仓库编号</span>
            <input type="text" placeholder="请输入仓库编号" />
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
          <div>仓库列表</div>
          <div>
            <button>+新增仓库</button>
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
                <th>仓库名称</th>
                <th>仓库编号</th>
                <th>备注</th>
                <th>排序</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.warehouseName }}</td>
                <td>{{ item.warehouseCode }}</td>
                <td>{{ item.remark }}</td>
                <td>{{ item.sort }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
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
          warehouseName: "北京中心仓",
          warehouseCode: "BJ-001",
          remark: "华北地区主仓库",
          sort: 1,
          createTime: "2026-01-15 09:30",
        },
        {
          warehouseName: "上海分仓",
          warehouseCode: "SH-002",
          remark: "华东地区分仓库",
          sort: 2,
          createTime: "2026-02-20 14:20",
        },
        {
          warehouseName: "深圳分仓",
          warehouseCode: "SZ-003",
          remark: "华南地区分仓库",
          sort: 3,
          createTime: "2026-03-10 11:00",
        },
        {
          warehouseName: "广州分仓",
          warehouseCode: "GZ-004",
          remark: "华南地区分仓库",
          sort: 4,
          createTime: "2026-04-05 16:45",
        },
        {
          warehouseName: "成都分仓",
          warehouseCode: "CD-005",
          remark: "西南地区分仓库",
          sort: 5,
          createTime: "2026-05-12 10:30",
        },
        {
          warehouseName: "武汉分仓",
          warehouseCode: "WH-006",
          remark: "华中地区分仓库",
          sort: 6,
          createTime: "2026-06-18 13:50",
        },
        {
          warehouseName: "杭州分仓",
          warehouseCode: "HZ-007",
          remark: "华东地区分仓库",
          sort: 7,
          createTime: "2026-07-01 08:20",
        },
        {
          warehouseName: "南京分仓",
          warehouseCode: "NJ-008",
          remark: "华东地区分仓库",
          sort: 8,
          createTime: "2026-07-20 15:10",
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
  height: 420px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: 100%;
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
  width: 160px;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:last-child{
    color: red;
}
</style>
