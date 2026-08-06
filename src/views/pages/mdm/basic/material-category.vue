<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div>物料分类</div>
          <div>
            <button>+新增分类</button>
            <button>收缩</button>
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
                <th><div>分类名称</div></th>
                <th><div>分类编码</div></th>
                <th><div>排序</div></th>
                <th><div>状态</div></th>
                <th><div>创建时间</div></th>
                <th class="ol-col"><div>操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.name }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.sort }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>+新增下级</button>
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
          id: 1,
          name: "原材料",
          code: "CAT-RAW-001",
          sort: 1,
          status: "启用",
          createTime: "2024-01-10 09:00:00",
        },
        {
          id: 2,
          name: "五金类",
          code: "CAT-HAR-002",
          sort: 2,
          status: "启用",
          createTime: "2024-01-12 10:30:00",
        },
        {
          id: 3,
          name: "注塑类",
          code: "CAT-INJ-003",
          sort: 3,
          status: "启用",
          createTime: "2024-01-15 14:20:00",
        },
        {
          id: 4,
          name: "包装类",
          code: "CAT-PKG-004",
          sort: 4,
          status: "停用",
          createTime: "2024-01-18 11:45:00",
        },
        {
          id: 5,
          name: "辅料类",
          code: "CAT-AUX-005",
          sort: 5,
          status: "启用",
          createTime: "2024-01-20 16:10:00",
        },
        {
          id: 6,
          name: "产成品",
          code: "CAT-FIN-006",
          sort: 6,
          status: "启用",
          createTime: "2024-01-22 09:30:00",
        },
        {
          id: 7,
          name: "半成品",
          code: "CAT-SEM-007",
          sort: 7,
          status: "启用",
          createTime: "2024-01-25 13:50:00",
        },
        {
          id: 8,
          name: "电子元器件",
          code: "CAT-ELC-008",
          sort: 8,
          status: "停用",
          createTime: "2024-01-28 10:15:00",
        },
        {
          id: 9,
          name: "化工原料",
          code: "CAT-CHE-009",
          sort: 9,
          status: "启用",
          createTime: "2024-02-01 15:40:00",
        },
        {
          id: 10,
          name: "工具设备",
          code: "CAT-TOO-010",
          sort: 10,
          status: "启用",
          createTime: "2024-02-03 08:20:00",
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
.app-main {
  width: 100%;
  height: 578px;
  background-color: #fff;
  border-radius: 10px;
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
}
.main-top div:nth-child(2) button:nth-child(2) {
  width: 86px;
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
  height: 500px;
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
  background-color: #ece8e8;
}
.main-tab th div {
  border-right: 1px solid #ccc;
  padding: 0 8px;
}
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 20px;
  border-right: 0;
  /* max-width: 160px; */
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
}
.ol-col {
  width: 220px;
  position: sticky;
  right: 0;
  /* box-shadow: -2px 0 3px rgba(0, 0, 0, 0.205); */
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:first-child {
  width: 84px;
}
.ol-col button:last-child {
  color: red;
}
</style>
