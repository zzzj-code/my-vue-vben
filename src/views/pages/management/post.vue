<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>岗位名称</span>
            <input type="text" placeholder="请输入岗位名称" />
          </div>
          <div>
            <span>岗位编码</span>
            <input type="text" placeholder="请输入岗位编码" />
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
          <div>岗位列表</div>
          <div>
            <button>+新增岗位</button>
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
                <th><input type="checkbox" /></th>
                <th>岗位编号</th>
                <th>岗位名称</th>
                <th>岗位编码</th>
                <th>显示顺序</th>
                <th>岗位备注</th>
                <th>岗位状态</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td>{{ item.positionCode }}</td>
                <td>{{ item.positionName}}</td>
                <td>{{ item.positionKey }}</td>
                <td>{{ item.sortOrder }}</td>
                <td>{{ item.remark }}</td>
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
        <div class="main-floot">共14条记录<span>20条/页</span></div>
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
          positionCode: "P20260801001",
          positionName: "总经理",
          positionKey: "GM",
          sortOrder: 1,
          remark: "公司最高管理者",
          status: "启用",
          createTime: "2026-08-01 09:00:00",
        },
        {
          positionCode: "P20260801002",
          positionName: "副总经理",
          positionKey: "DGM",
          sortOrder: 2,
          remark: "协助总经理管理",
          status: "启用",
          createTime: "2026-08-01 10:30:00",
        },
        {
          positionCode: "P20260731003",
          positionName: "技术总监",
          positionKey: "CTO",
          sortOrder: 3,
          remark: "技术部门负责人",
          status: "启用",
          createTime: "2026-07-31 14:20:00",
        },
        {
          positionCode: "P20260731004",
          positionName: "财务总监",
          positionKey: "CFO",
          sortOrder: 4,
          remark: "财务部门负责人",
          status: "启用",
          createTime: "2026-07-31 16:45:00",
        },
        {
          positionCode: "P20260730005",
          positionName: "人力资源经理",
          positionKey: "HRM",
          sortOrder: 5,
          remark: "人力资源部门负责人",
          status: "启用",
          createTime: "2026-07-30 11:00:00",
        },
        {
          positionCode: "P20260730006",
          positionName: "项目经理",
          positionKey: "PM",
          sortOrder: 6,
          remark: "项目管理负责人",
          status: "启用",
          createTime: "2026-07-30 09:30:00",
        },
        {
          positionCode: "P20260729007",
          positionName: "开发工程师",
          positionKey: "DEV",
          sortOrder: 7,
          remark: "软件研发",
          status: "启用",
          createTime: "2026-07-29 13:50:00",
        },
        {
          positionCode: "P20260729008",
          positionName: "测试工程师",
          positionKey: "QA",
          sortOrder: 8,
          remark: "软件测试",
          status: "停用",
          createTime: "2026-07-29 15:10:00",
        },
        {
          positionCode: "P20260728009",
          positionName: "产品经理",
          positionKey: "PDM",
          sortOrder: 9,
          remark: "产品策划与管理",
          status: "启用",
          createTime: "2026-07-28 10:00:00",
        },
        {
          positionCode: "P20260728010",
          positionName: "运维工程师",
          positionKey: "OPS",
          sortOrder: 10,
          remark: "系统运维与支持",
          status: "启用",
          createTime: "2026-07-28 08:20:00",
        },
        {
          positionCode: "P20260727011",
          positionName: "设计师",
          positionKey: "UI",
          sortOrder: 11,
          remark: "UI/UX设计",
          status: "停用",
          createTime: "2026-07-27 14:00:00",
        },
        {
          positionCode: "P20260727012",
          positionName: "销售经理",
          positionKey: "SM",
          sortOrder: 12,
          remark: "销售团队管理",
          status: "启用",
          createTime: "2026-07-27 11:30:00",
        },
        {
          positionCode: "P20260726013",
          positionName: "客服专员",
          positionKey: "CS",
          sortOrder: 13,
          remark: "客户服务支持",
          status: "启用",
          createTime: "2026-07-26 09:00:00",
        },
        {
          positionCode: "P20260726014",
          positionName: "行政专员",
          positionKey: "ADMIN",
          sortOrder: 14,
          remark: "行政管理事务",
          status: "启用",
          createTime: "2026-07-26 16:00:00",
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
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 35%;
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
.main-top div:nth-child(2) button:nth-child(3) {
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
  height: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1350px;
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
  width: 130px;
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
.ol-col button:nth-child(2) {
  color: red;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
