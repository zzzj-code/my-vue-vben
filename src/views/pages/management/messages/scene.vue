<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>场景名称</span>
            <input type="text" placeholder="请输入场景名称" />
          </div>
          <div>
            <span>场景编码</span>
            <input type="text" placeholder="请输入场景编码" />
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
          <div>消息定义列表</div>
          <div>
            <button>+新增消息定义</button>
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
                <th>编号</th>
                <th>场景名称</th>
                <th>场景编码</th>
                <th>分类</th>
                <th>消息类型</th>
                <th>接收人模式</th>
                <th>状态</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.id }}</td>
                <td>{{ item.sceneName }}</td>
                <td>{{ item.sceneCode }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.msgType }}</td>
                <td>{{ item.receiverMode }}</td>
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
        <div class="main-floot">共8条记录<span>20条/页</span></div>
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
          sceneName: "订单创建通知",
          sceneCode: "ORDER_CREATE",
          category: "订单消息",
          msgType: "短信",
          receiverMode: "指定用户",
          status: "启用",
          createTime: "2026-08-01 09:00:00",
        },
        {
          id: 2,
          sceneName: "订单支付成功",
          sceneCode: "ORDER_PAY_SUCCESS",
          category: "订单消息",
          msgType: "短信",
          receiverMode: "全部用户",
          status: "启用",
          createTime: "2026-08-01 10:30:00",
        },
        {
          id: 3,
          sceneName: "订单发货通知",
          sceneCode: "ORDER_SHIP",
          category: "订单消息",
          msgType: "短信",
          receiverMode: "指定用户",
          status: "启用",
          createTime: "2026-07-31 14:20:00",
        },
        {
          id: 4,
          sceneName: "库存预警通知",
          sceneCode: "INVENTORY_WARN",
          category: "库存消息",
          msgType: "邮件",
          receiverMode: "管理员",
          status: "启用",
          createTime: "2026-07-31 16:45:00",
        },
        {
          id: 5,
          sceneName: "库存不足提醒",
          sceneCode: "INVENTORY_LOW",
          category: "库存消息",
          msgType: "站内信",
          receiverMode: "指定角色",
          status: "停用",
          createTime: "2026-07-30 11:00:00",
        },
        {
          id: 6,
          sceneName: "用户注册验证码",
          sceneCode: "USER_REGISTER",
          category: "用户消息",
          msgType: "短信",
          receiverMode: "指定用户",
          status: "启用",
          createTime: "2026-07-30 09:30:00",
        },
        {
          id: 7,
          sceneName: "密码重置通知",
          sceneCode: "PWD_RESET",
          category: "用户消息",
          msgType: "邮件",
          receiverMode: "指定用户",
          status: "启用",
          createTime: "2026-07-29 13:50:00",
        },
        {
          id: 8,
          sceneName: "系统维护通知",
          sceneCode: "SYS_MAINTENANCE",
          category: "系统消息",
          msgType: "站内信",
          receiverMode: "全部用户",
          status: "停用",
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
  width: 72%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 18%;
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
  min-width: 1135px;
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
  width: 140px;
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
