<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div>租户套餐列表</div>
          <div>
            <button>+新增租户</button>
            <button>收缩</button>
            <button>导出</button>
            <button disabled>批量删除</button>
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
                <th>ID</th>
                <th>组织名称</th>
                <th><input type="checkbox" /></th>
                <th>组织类型</th>
                <th>负责人</th>
                <th>显示顺序</th>
                <th>组织状态</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.orgName }}</td>
                <td><input type="checkbox" /></td>
                <td>{{ item.orgType }}</td>
                <td>{{ item.leader }}</td>
                <td>{{ item.sortOrder }}</td>
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
          orgName: "华为技术有限公司",
          orgType: "集团公司",
          leader: "张伟",
          sortOrder: 1,
          status: "启用",
          createTime: "2026-01-10 09:00:00",
          parentId: 0,
        },
        {
          id: 2,
          orgName: "华为云事业部",
          orgType: "事业部",
          leader: "李娜",
          sortOrder: 1,
          status: "启用",
          createTime: "2026-01-15 10:30:00",
          parentId: 1,
        },
        {
          id: 3,
          orgName: "华为消费者业务",
          orgType: "事业部",
          leader: "王强",
          sortOrder: 2,
          status: "启用",
          createTime: "2026-01-20 14:20:00",
          parentId: 1,
        },
        {
          id: 4,
          orgName: "华为云北京研发中心",
          orgType: "部门",
          leader: "刘洋",
          sortOrder: 1,
          status: "启用",
          createTime: "2026-02-01 11:00:00",
          parentId: 2,
        },
        {
          id: 5,
          orgName: "华为云上海研发中心",
          orgType: "部门",
          leader: "陈静",
          sortOrder: 2,
          status: "启用",
          createTime: "2026-02-10 16:45:00",
          parentId: 2,
        },
        {
          id: 6,
          orgName: "华为手机产品线",
          orgType: "部门",
          leader: "赵敏",
          sortOrder: 1,
          status: "启用",
          createTime: "2026-02-20 09:30:00",
          parentId: 3,
        },
        {
          id: 7,
          orgName: "华为平板产品线",
          orgType: "部门",
          leader: "孙浩",
          sortOrder: 2,
          status: "停用",
          createTime: "2026-03-01 13:50:00",
          parentId: 3,
        },
        {
          id: 8,
          orgName: "华为云深圳研发中心",
          orgType: "部门",
          leader: "周婷",
          sortOrder: 3,
          status: "启用",
          createTime: "2026-03-10 08:40:00",
          parentId: 2,
        },
        {
          id: 9,
          orgName: "华为穿戴产品线",
          orgType: "部门",
          leader: "吴刚",
          sortOrder: 3,
          status: "启用",
          createTime: "2026-03-20 15:10:00",
          parentId: 3,
        },
        {
          id: 10,
          orgName: "华为云杭州研发中心",
          orgType: "部门",
          leader: "郑丽",
          sortOrder: 4,
          status: "停用",
          createTime: "2026-04-01 10:00:00",
          parentId: 2,
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
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 40%;
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
.main-top div:nth-child(2) button:nth-child(2),
.main-top div:nth-child(2) button:nth-child(3) {
  width: 63px;
}
.main-top div:nth-child(2) button:nth-child(4) {
  width: 106px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: black;
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
  height: 500px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1070px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 56px;
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
  width: 220px;
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
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
