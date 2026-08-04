<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>参数名称</span>
            <input type="text" placeholder="请输入参数名称" />
          </div>
          <div>
            <span>参数键名</span>
            <input type="text" placeholder="请输入参数键名" />
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
          <div>参数列表</div>
          <div>
            <button>+新增参数</button>
            <button>导入</button>
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
                <th>参数主键</th>
                <th>参数分类</th>
                <th>参数名称</th>
                <th>参数键名</th>
                <th>参数键值</th>
                <th>是否可见</th>
                <th>系统内置</th>
                <th>备注</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td>{{ item.id }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.paramName }}</td>
                <td>{{ item.paramKey }}</td>
                <td>{{ item.paramValue }}</td>
                <td>{{ item.isVisible }}</td>
                <td>{{ item.isBuiltin }}</td>
                <td>{{ item.remark }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共20条记录<span>20条/页</span></div>
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
          category: "系统配置",
          paramName: "系统名称",
          paramKey: "sys.name",
          paramValue: "XX管理系统",
          isVisible: "是",
          isBuiltin: "是",
          remark: "系统显示名称",
          createTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          category: "系统配置",
          paramName: "系统版本",
          paramKey: "sys.version",
          paramValue: "v3.2.1",
          isVisible: "是",
          isBuiltin: "是",
          remark: "当前系统版本号",
          createTime: "2026-08-01 10:30:00",
        },
        {
          id: 3,
          category: "系统配置",
          paramName: "登录超时时间",
          paramKey: "sys.login.timeout",
          paramValue: "1800",
          isVisible: "是",
          isBuiltin: "是",
          remark: "用户登录超时时间（秒）",
          createTime: "2026-07-31 14:20:00",
        },
        {
          id: 4,
          category: "业务配置",
          paramName: "订单自动确认时间",
          paramKey: "order.auto.confirm",
          paramValue: "7",
          isVisible: "是",
          isBuiltin: "否",
          remark: "订单自动确认天数",
          createTime: "2026-07-31 16:45:00",
        },
        {
          id: 5,
          category: "业务配置",
          paramName: "支付超时时间",
          paramKey: "order.pay.timeout",
          paramValue: "30",
          isVisible: "是",
          isBuiltin: "否",
          remark: "订单支付超时时间（分钟）",
          createTime: "2026-07-30 11:00:00",
        },
        {
          id: 6,
          category: "业务配置",
          paramName: "库存预警阈值",
          paramKey: "inventory.warn.threshold",
          paramValue: "10",
          isVisible: "是",
          isBuiltin: "否",
          remark: "库存低于该值时预警",
          createTime: "2026-07-30 09:30:00",
        },
        {
          id: 7,
          category: "安全配置",
          paramName: "密码尝试次数",
          paramKey: "security.password.attempts",
          paramValue: "5",
          isVisible: "否",
          isBuiltin: "是",
          remark: "密码错误最大尝试次数",
          createTime: "2026-07-29 13:50:00",
        },
        {
          id: 8,
          category: "安全配置",
          paramName: "验证码有效期",
          paramKey: "security.captcha.expire",
          paramValue: "300",
          isVisible: "否",
          isBuiltin: "是",
          remark: "验证码有效时间（秒）",
          createTime: "2026-07-29 15:10:00",
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
  min-width: 1500px;
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
