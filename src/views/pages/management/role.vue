<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>角色名称</span>
            <input type="text" placeholder="请输入角色名称" />
          </div>
          <div>
            <span>角色标识</span>
            <input type="text" placeholder="请输入角色标识" />
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
          <div>角色列表</div>
          <div>
            <button>+新增角色</button>
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
                <th>角色编号</th>
                <th>角色名称</th>
                <th>角色类型</th>
                <th>角色标识</th>
                <th>显示顺序</th>
                <th>角色备注</th>
                <th>角色状态</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td>{{ item.roleCode }}</td>
                <td>{{ item.roleName }}</td>
                <td>{{ item.roleType }}</td>
                <td>{{ item.roleKey }}</td>
                <td>{{ item.sortOrder }}</td>
                <td>{{ item.remark }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                  <button>更多</button>
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
          roleCode: "R20260801001",
          roleName: "超级管理员",
          roleType: "系统角色",
          roleKey: "ROLE_SUPER_ADMIN",
          sortOrder: 1,
          remark: "拥有所有权限，不可删除",
          status: "启用",
          createTime: "2026-08-01 09:00:00",
        },
        {
          roleCode: "R20260801002",
          roleName: "系统管理员",
          roleType: "系统角色",
          roleKey: "ROLE_SYSTEM_ADMIN",
          sortOrder: 2,
          remark: "系统管理权限",
          status: "启用",
          createTime: "2026-08-01 10:30:00",
        },
        {
          roleCode: "R20260731003",
          roleName: "仓库管理员",
          roleType: "业务角色",
          roleKey: "ROLE_WAREHOUSE",
          sortOrder: 1,
          remark: "仓库进出库管理",
          status: "启用",
          createTime: "2026-07-31 14:20:00",
        },
        {
          roleCode: "R20260731004",
          roleName: "采购员",
          roleType: "业务角色",
          roleKey: "ROLE_PURCHASE",
          sortOrder: 2,
          remark: "采购订单管理",
          status: "启用",
          createTime: "2026-07-31 16:45:00",
        },
        {
          roleCode: "R20260730005",
          roleName: "销售员",
          roleType: "业务角色",
          roleKey: "ROLE_SALES",
          sortOrder: 3,
          remark: "销售订单管理",
          status: "启用",
          createTime: "2026-07-30 11:00:00",
        },
        {
          roleCode: "R20260730006",
          roleName: "财务人员",
          roleType: "业务角色",
          roleKey: "ROLE_FINANCE",
          sortOrder: 4,
          remark: "财务对账管理",
          status: "停用",
          createTime: "2026-07-30 09:30:00",
        },
        {
          roleCode: "R20260729007",
          roleName: "普通用户",
          roleType: "业务角色",
          roleKey: "ROLE_USER",
          sortOrder: 5,
          remark: "基础操作权限",
          status: "启用",
          createTime: "2026-07-29 13:50:00",
        },
        {
          roleCode: "R20260729008",
          roleName: "访客",
          roleType: "业务角色",
          roleKey: "ROLE_GUEST",
          sortOrder: 6,
          remark: "仅查看权限",
          status: "启用",
          createTime: "2026-07-29 15:10:00",
        },
        {
          roleCode: "R20260728009",
          roleName: "审计员",
          roleType: "系统角色",
          roleKey: "ROLE_AUDIT",
          sortOrder: 3,
          remark: "审计日志查看",
          status: "停用",
          createTime: "2026-07-28 10:00:00",
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
  min-width: 1360px;
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
