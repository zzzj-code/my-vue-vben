<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>规则名称</span>
            <input type="text" placeholder="请输入规则名称" />
          </div>
          <div>
            <span>匹配优先级</span>
            <input type="text" placeholder="请输入" />
          </div>
          <div>
            <span>状态</span>
            <input type="text" placeholder="请输入状态" />
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
          <div>SLA 规则列表</div>
          <div>
            <button>+新增SLA规则</button>
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
                <th><div class="th-cell">规则名称</div></th>
                <th><div class="th-cell">匹配优先级</div></th>
                <th><div class="th-cell">匹配分类</div></th>
                <th><div class="th-cell">响应时限(h)</div></th>
                <th><div class="th-cell">解决时限(h)</div></th>
                <th><div class="th-cell">预警提前(min)</div></th>
                <th><div class="th-cell">状态</div></th>
                <th><div class="th-cell">排序</div></th>
                <th><div class="th-cell">创建时间</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.priority }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.responseTime }}</td>
                <td>{{ item.solveTime }}</td>
                <td>{{ item.warningTime }}</td>
                <td>{{ item.status }}</td>
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
        <div class="main-floot">
          <div class="left-info">
            共{{ tabValue.length }}条记录
            <span>20条/页</span>
          </div>
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
          name: "紧急故障响应规则",
          priority: 1,
          category: "故障报修",
          responseTime: 1,
          solveTime: 4,
          warningTime: 30,
          status: "启用",
          sort: 1,
          createTime: "2024-07-10 09:00:00",
        },
        {
          id: 2,
          name: "高优先级处理规则",
          priority: 2,
          category: "系统变更",
          responseTime: 2,
          solveTime: 8,
          warningTime: 60,
          status: "启用",
          sort: 2,
          createTime: "2024-07-11 14:20:00",
        },
        {
          id: 3,
          name: "常规业务处理规则",
          priority: 3,
          category: "账号管理",
          responseTime: 4,
          solveTime: 24,
          warningTime: 120,
          status: "启用",
          sort: 3,
          createTime: "2024-07-12 11:45:00",
        },
        {
          id: 4,
          name: "低优先级处理规则",
          priority: 4,
          category: "版本发布",
          responseTime: 8,
          solveTime: 48,
          warningTime: 240,
          status: "停用",
          sort: 4,
          createTime: "2024-07-13 16:10:00",
        },
        {
          id: 5,
          name: "安全事件响应规则",
          priority: 1,
          category: "安全事件",
          responseTime: 0.5,
          solveTime: 2,
          warningTime: 15,
          status: "启用",
          sort: 5,
          createTime: "2024-07-14 10:30:00",
        },
        {
          id: 6,
          name: "资源申请处理规则",
          priority: 3,
          category: "资源申请",
          responseTime: 6,
          solveTime: 36,
          warningTime: 180,
          status: "启用",
          sort: 6,
          createTime: "2024-07-15 09:15:00",
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
  width: 80px;
  height: 24px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
.top-inp div input {
  width: 150px;
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
  cursor: pointer;
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
  cursor: pointer;
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
  min-width: 1140px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
  padding: 0;
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
}
.main-tab th:last-child {
  border-right: none;
}
.th-cell {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
.main-tab th:last-child .th-cell {
  border-right: none;
}
.main-tab td {
  text-align: center;
  height: 56px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 12px;
  border-right: 0;
}
.ol-col {
  width: 160px;
  min-width: 80px;
  position: sticky;
  right: 0;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  border-radius: 6px;
  background-color: #fff;
  color: #006be6;
  cursor: pointer;
}
.ol-col button:hover {
  background-color: #006be6;
  color: #fff;
}
.ol-col button:last-child {
  color: red;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.left-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.left-info span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
}
</style>
