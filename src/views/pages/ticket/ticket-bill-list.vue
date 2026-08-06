<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>工单编号</span>
          <input type="text" placeholder="请输入工单编号" />
        </div>
        <div>
          <span>工单标题</span>
          <input type="text" placeholder="请输入工单标题" />
        </div>
        <div>
          <span>流程状态</span>
          <input type="text" placeholder="请输入流程状态" />
        </div>
        <div>
          <button>重置</button>
          <button>搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">工单列表</div>
          <div class="top-2">
            <button>+新增</button>
            <button disabled>批量删除</button>
            <button>🔍</button>
          </div>
          <div class="top-3">
            <button>⟳</button>
            <button>⛶</button>
            <button>☷</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th>
                  <div><input type="checkbox" /></div>
                </th>
                <th><div>工单编号</div></th>
                <th><div>流程状态</div></th>
                <th><div>工单状态</div></th>
                <th><div>工单标题</div></th>
                <th><div>工单分类</div></th>
                <th><div>优先级</div></th>
                <th><div>处理人</div></th>
                <th><div>创建人</div></th>
                <th><div>创建时间</div></th>
                <th class="ol-col"><div>操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.invoiceNo">
                <td><input type="checkbox" /></td>
                <td style="color: #006be6">{{ item.invoiceNo }}</td>
                <td>{{ item.processStatus }}</td>
                <td>{{ item.orderStatus }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.priority }}</td>
                <td>{{ item.handler }}</td>
                <td>{{ item.creator }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col"></td>
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
          id: 1,
          invoiceNo: "WO-2024-001",
          processStatus: "审批中",
          orderStatus: "待处理",
          title: "服务器硬件故障维修",
          category: "故障报修",
          priority: "紧急",
          handler: "张伟",
          creator: "李娜",
          createTime: "2024-07-15 09:30:00",
        },
        {
          id: 2,
          invoiceNo: "WO-2024-002",
          processStatus: "已完成",
          orderStatus: "已关闭",
          title: "ERP系统用户权限变更",
          category: "系统变更",
          priority: "高",
          handler: "王强",
          creator: "刘洋",
          createTime: "2024-07-16 14:20:00",
        },
        {
          id: 3,
          invoiceNo: "WO-2024-003",
          processStatus: "待审批",
          orderStatus: "进行中",
          title: "数据库备份策略调整",
          category: "配置变更",
          priority: "中",
          handler: "陈静",
          creator: "杨帆",
          createTime: "2024-07-17 11:45:00",
        },
        {
          id: 4,
          invoiceNo: "WO-2024-004",
          processStatus: "已驳回",
          orderStatus: "已退回",
          title: "网络设备升级申请",
          category: "设备升级",
          priority: "高",
          handler: "赵磊",
          creator: "黄丽",
          createTime: "2024-07-18 16:10:00",
        },
        {
          id: 5,
          invoiceNo: "WO-2024-005",
          processStatus: "审批中",
          orderStatus: "待处理",
          title: "安全漏洞修复处理",
          category: "安全事件",
          priority: "紧急",
          handler: "周婷",
          creator: "吴刚",
          createTime: "2024-07-19 10:00:00",
        },
        {
          id: 6,
          invoiceNo: "WO-2024-006",
          processStatus: "已完成",
          orderStatus: "已关闭",
          title: "员工入职账号开通",
          category: "账号管理",
          priority: "低",
          handler: "张伟",
          creator: "李娜",
          createTime: "2024-07-20 13:30:00",
        },
        {
          id: 7,
          invoiceNo: "WO-2024-007",
          processStatus: "待审批",
          orderStatus: "进行中",
          title: "应用系统版本发布",
          category: "版本发布",
          priority: "高",
          handler: "王强",
          creator: "刘洋",
          createTime: "2024-07-21 09:15:00",
        },
        {
          id: 8,
          invoiceNo: "WO-2024-008",
          processStatus: "已驳回",
          orderStatus: "已退回",
          title: "服务器资源扩容申请",
          category: "资源申请",
          priority: "中",
          handler: "陈静",
          creator: "杨帆",
          createTime: "2024-07-22 15:40:00",
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
  width: 1014px;
  height: 590px;
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 86px;
  margin-bottom: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}
.app-top div {
  width: 246px;
  height: 42px;
}
.app-top div span {
  display: inline-block;
  width: 90px;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
  text-align: right;
}
.app-top div input {
  width: 136px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.app-top div:last-child {
  font-size: 14px;
  color: #006be6;
  text-align: right;
}
.app-top div:last-child button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 10px;
}
.app-top div:last-child button:last-child {
  border: 0;
  background-color: #006be6;
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
.main-top .top-1 {
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top .top-2 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 78px;
  height: 32px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  background-color: #006be6;
}
.top-2 button:nth-child(2) {
  width: 106px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border: 0;
  background: #006be6;
  color: #fff;
  border-radius: 50%;
}
.main-top .top-3 {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
}
.main-tab {
  width: 100%;
  height: 401px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1560px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
  border-right: none;
  padding: 0;
  white-space: nowrap;
}
.main-tab th > div {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-weight: 600;
  color: #333;
}
.main-tab th.ol-col > div {
  border-right: none;
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
  width: 120px;
  position: sticky;
  right: 0;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
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
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  margin-left: 5px;
  padding-top: 3px;
}
</style>
