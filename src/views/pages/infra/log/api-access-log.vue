<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>用户编号</span>
            <input type="text" placeholder="请输入用户编号" />
          </div>
          <div>
            <span>用户类型</span>
            <input type="text" placeholder="请输入用户类型" />
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
          <div>API 访问日志列表</div>
          <div>
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
                <th>日志编号</th>
                <th>用户编号</th>
                <th>用户类型</th>
                <th>应用名</th>
                <th>请求方法</th>
                <th>请求地址</th>
                <th>请求时间</th>
                <th>执行时长</th>
                <th>操作结果</th>
                <th>操作模块</th>
                <th>操作名</th>
                <th>操作类型</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.userId }}</td>
                <td>{{ item.userType }}</td>
                <td>{{ item.appName }}</td>
                <td>{{ item.method }}</td>
                <td>{{ item.url }}</td>
                <td>{{ item.requestTime }}</td>
                <td>{{ item.duration }}</td>
                <td>{{ item.result }}</td>
                <td>{{ item.module }}</td>
                <td>{{ item.action }}</td>
                <td>{{ item.actionType }}</td>
                <td class="ol-col">
                  <button>详情</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          共{{ tabValue.length }}条记录<span>20条/页</span>
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
          id: "API20260801001",
          userId: "USER_001",
          userType: "管理员",
          appName: "后台管理系统",
          method: "GET",
          url: "/api/users/list",
          requestTime: "2026-08-01 09:00:00",
          duration: 156,
          result: "成功",
          module: "用户管理",
          action: "查询用户列表",
          actionType: "查询",
        },
        {
          id: "API20260801002",
          userId: "USER_002",
          userType: "普通用户",
          appName: "移动端APP",
          method: "POST",
          url: "/api/orders/create",
          requestTime: "2026-08-01 10:30:00",
          duration: 234,
          result: "成功",
          module: "订单管理",
          action: "创建订单",
          actionType: "新增",
        },
        {
          id: "API20260801003",
          userId: "USER_001",
          userType: "管理员",
          appName: "后台管理系统",
          method: "PUT",
          url: "/api/users/update/1",
          requestTime: "2026-08-01 14:20:00",
          duration: 189,
          result: "成功",
          module: "用户管理",
          action: "更新用户信息",
          actionType: "修改",
        },
        {
          id: "API20260731004",
          userId: "USER_003",
          userType: "访客",
          appName: "门户网站",
          method: "GET",
          url: "/api/products/list",
          requestTime: "2026-07-31 16:45:00",
          duration: 89,
          result: "成功",
          module: "商品管理",
          action: "查询商品列表",
          actionType: "查询",
        },
        {
          id: "API20260731005",
          userId: "USER_002",
          userType: "普通用户",
          appName: "移动端APP",
          method: "POST",
          url: "/api/orders/pay",
          requestTime: "2026-07-31 11:30:00",
          duration: 456,
          result: "失败",
          module: "订单管理",
          action: "订单支付",
          actionType: "支付",
        },
        {
          id: "API20260730006",
          userId: "USER_004",
          userType: "管理员",
          appName: "后台管理系统",
          method: "DELETE",
          url: "/api/users/delete/5",
          requestTime: "2026-07-30 09:30:00",
          duration: 123,
          result: "成功",
          module: "用户管理",
          action: "删除用户",
          actionType: "删除",
        },
        {
          id: "API20260730007",
          userId: "USER_005",
          userType: "普通用户",
          appName: "移动端APP",
          method: "GET",
          url: "/api/orders/detail/1001",
          requestTime: "2026-07-30 14:00:00",
          duration: 67,
          result: "成功",
          module: "订单管理",
          action: "查询订单详情",
          actionType: "查询",
        },
        {
          id: "API20260729008",
          userId: "USER_001",
          userType: "管理员",
          appName: "后台管理系统",
          method: "POST",
          url: "/api/roles/assign",
          requestTime: "2026-07-29 10:15:00",
          duration: 312,
          result: "成功",
          module: "权限管理",
          action: "分配角色",
          actionType: "授权",
        },
        {
          id: "API20260729009",
          userId: "USER_006",
          userType: "访客",
          appName: "门户网站",
          method: "GET",
          url: "/api/news/latest",
          requestTime: "2026-07-29 15:30:00",
          duration: 45,
          result: "成功",
          module: "内容管理",
          action: "查询最新资讯",
          actionType: "查询",
        },
        {
          id: "API20260728010",
          userId: "USER_002",
          userType: "普通用户",
          appName: "移动端APP",
          method: "PUT",
          url: "/api/users/profile",
          requestTime: "2026-07-28 08:30:00",
          duration: 178,
          result: "成功",
          module: "用户管理",
          action: "更新个人资料",
          actionType: "修改",
        },
        {
          id: "API20260728011",
          userId: "USER_007",
          userType: "管理员",
          appName: "后台管理系统",
          method: "GET",
          url: "/api/statistics/dashboard",
          requestTime: "2026-07-28 10:45:00",
          duration: 567,
          result: "成功",
          module: "数据统计",
          action: "查询仪表盘数据",
          actionType: "查询",
        },
        {
          id: "API20260727012",
          userId: "USER_003",
          userType: "访客",
          appName: "门户网站",
          method: "POST",
          url: "/api/feedback/submit",
          requestTime: "2026-07-27 11:20:00",
          duration: 234,
          result: "失败",
          module: "反馈管理",
          action: "提交反馈",
          actionType: "新增",
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
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 63px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
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
  min-width: 1870px;
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
  width: 80px;
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
