<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <div class="left-main">
          <input type="text" placeholder="🔍请输入部门名称" />
          <div class="main-tab">
            <ul class="org-tree">
              <li
                v-for="node in treeData"
                :key="node.id"
                class="tree-node"
                :class="{ open: node.open }"
              >
                <span class="tree-label" @click="toggleNode(node)">{{
                  node.label
                }}</span>
                <ul
                  v-show="node.open"
                  v-if="node.children && node.children.length"
                >
                  <li
                    v-for="child in node.children"
                    :key="child.id"
                    class="tree-node"
                    :class="{ open: child.open }"
                  >
                    <span class="tree-label" @click="toggleNode(child)">{{
                      child.label
                    }}</span>
                    <ul
                      v-show="child.open"
                      v-if="child.children && child.children.length"
                    >
                      <li
                        v-for="leaf in child.children"
                        :key="leaf.id"
                        class="tree-leaf"
                      >
                        {{ leaf.label }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="app-right">
        <div class="right-top">
          <div class="top-inp">
            <div>
              <span>用户姓名</span>
              <input type="text" />
            </div>
            <div>
              <span>打卡日期</span>
              <input type="text" />
            </div>
            <div>
              <span>签到状态</span>
              <input type="text" />
            </div>
            <div>
              <button
                style="
                  width: 63px;
                  height: 32px;
                  margin-right: 5px;
                  border: 1px solid #ccc;
                  background-color: #fff;
                  border-radius: 10px;
                  margin-left: 10px;
                "
              >
                重置
              </button>
              <button
                style="
                  width: 63px;
                  height: 32px;
                  border: 0;
                  border-radius: 10px;
                  color: #fff;
                  background-color: blue;
                "
              >
                搜索
              </button>
              <span style="color: blue; font-size: 14px">展开▽</span>
            </div>
          </div>
        </div>
        <div class="right-main">
          <div class="main-title">
            <div>打卡记录</div>
            <div>
              <button class="btn1">+新增</button>
              <button class="btn1">导出</button>
              <button class="btn3">导入外部考勤数据</button>
              <button class="btn4">批量删除</button>
              <button class="btn5">🔍</button>
            </div>
            <div>
              <button>⟳</button>
              <button>⛶</button>
              <button>⊞</button>
            </div>
          </div>
          <div class="main-a">
            <table>
              <thead>
                <tr>
                  <th><input type="checkbox" name="" id="" /></th>
                  <th>用户姓名</th>
                  <th>登录账号</th>
                  <th>打开日期</th>
                  <th>星期</th>
                  <th>年度周</th>
                  <th>签到时间</th>
                  <th>签到状态</th>
                  <th>签退时间</th>
                  <th>签退状态</th>
                  <th class="ol-col">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tableData" :key="item.id">
                  <td><input type="checkbox" name="" id=""></td>
                  <td>{{ item.userName }}</td>
                  <td>{{ item.loginAccount }}</td>
                  <td>{{ item.checkDate }}</td>
                  <td>{{ item.week }}</td>
                  <td>{{ item.yearWeek }}</td>
                  <td>{{ item.signInTime }}</td>
                  <td>{{ item.signInStatus }}</td>
                  <td>{{ item.signOutTime}}</td>
                  <td>{{ item.signOutStatus}}</td>
                  <td class="ol-col">修改   删除</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="main-floot">
            <div>共60条记录<span>20页/条</span></div>
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
      treeData: [
        {
          id: "root1",
          label: "宇擎源码1",
          open: true,
          children: [
            {
              id: "shenzhen",
              label: "深圳总公司",
              open: true,
              children: [
                { id: "rd", label: "研发部门" },
                { id: "test", label: "测试" },
              ],
            },
            {
              id: "changsha",
              label: "长沙分公司",
              open: true,
              children: [
                { id: "market", label: "市场部门" },
                { id: "finance", label: "财务部门" },
              ],
            },
            {
              id: "jinan",
              label: "济南研发分公司",
              open: true,
              children: [{ id: "jinan-rd", label: "济南研发部" }],
            },
          ],
        },
      ],
      tableData: [
        {
          id: 1,
          userName: "张三",
          loginAccount: "zhangsan",
          checkDate: "2026-07-20",
          week: "星期一",
          yearWeek: "2026年第30周",
          signInTime: "09:05:12",
          signInStatus: "正常",
          signOutTime: "18:30:45",
          signOutStatus: "正常",
        },
        {
          id: 2,
          userName: "李娜",
          loginAccount: "lina",
          checkDate: "2026-07-20",
          week: "星期一",
          yearWeek: "2026年第30周",
          signInTime: "08:55:30",
          signInStatus: "正常",
          signOutTime: "19:15:20",
          signOutStatus: "正常",
        },
        {
          id: 3,
          userName: "王强",
          loginAccount: "wangqiang",
          checkDate: "2026-07-21",
          week: "星期二",
          yearWeek: "2026年第30周",
          signInTime: "09:15:48",
          signInStatus: "迟到",
          signOutTime: "18:20:10",
          signOutStatus: "正常",
        },
        {
          id: 4,
          userName: "刘洋",
          loginAccount: "liuyang",
          checkDate: "2026-07-21",
          week: "星期二",
          yearWeek: "2026年第30周",
          signInTime: "08:45:20",
          signInStatus: "正常",
          signOutTime: "20:00:00",
          signOutStatus: "正常",
        },
        {
          id: 5,
          userName: "陈晨",
          loginAccount: "chenchen",
          checkDate: "2026-07-22",
          week: "星期三",
          yearWeek: "2026年第30周",
          signInTime: "09:30:15",
          signInStatus: "迟到",
          signOutTime: "18:45:30",
          signOutStatus: "正常",
        },
        {
          id: 6,
          userName: "杨丽",
          loginAccount: "yangli",
          checkDate: "2026-07-22",
          week: "星期三",
          yearWeek: "2026年第30周",
          signInTime: "09:00:00",
          signInStatus: "正常",
          signOutTime: "17:30:00",
          signOutStatus: "早退",
        },
        {
          id: 7,
          userName: "赵岩",
          loginAccount: "zhaoyan",
          checkDate: "2026-07-23",
          week: "星期四",
          yearWeek: "2026年第30周",
          signInTime: "08:50:20",
          signInStatus: "正常",
          signOutTime: "19:30:15",
          signOutStatus: "正常",
        },
        {
          id: 8,
          userName: "孙悦",
          loginAccount: "sunyue",
          checkDate: "2026-07-23",
          week: "星期四",
          yearWeek: "2026年第30周",
          signInTime: "09:10:35",
          signInStatus: "迟到",
          signOutTime: "18:15:40",
          signOutStatus: "正常",
        },
        {
          id: 9,
          userName: "周琳",
          loginAccount: "zhoulin",
          checkDate: "2026-07-24",
          week: "星期五",
          yearWeek: "2026年第30周",
          signInTime: "08:40:10",
          signInStatus: "正常",
          signOutTime: "18:50:25",
          signOutStatus: "正常",
        },
        {
          id: 10,
          userName: "吴迪",
          loginAccount: "wudi",
          checkDate: "2026-07-24",
          week: "星期五",
          yearWeek: "2026年第30周",
          signInTime: "--:--:--",
          signInStatus: "请假",
          signOutTime: "--:--:--",
          signOutStatus: "请假",
        },
      ],
    };
  },
  methods: {
    toggleNode(node) {
      if (node.children && node.children.length) {
        node.open = !node.open;
      }
    },
    selectTab(value) {
      this.selectedTab = value;
    },
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
  height: 760px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
  display: flex;
}
.app-left {
  width: 220px;
  height: 580px;
  /* border: 1px solid red;  */
  background-color: #fff;
  border-radius: 10px;
}
.left-title {
  width: 100%;
  height: 36px;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #ccc;
  padding-left: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
}
.left-main {
  width: 100%;
  height: 544px;
  padding: 10px;
}
.left-main input {
  width: 194px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.left-main input:hover {
  border: 1px solid #48e5fa;
}
.left-main input:focus {
  outline: none;
  border: 1px solid #48e5fa;
}
.main-tab {
  width: 194px;
  margin-top: 12px;
}
.org-tree,
.org-tree ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.org-tree .tree-node {
  padding-left: 8px;
}
.org-tree .tree-node > .tree-label,
.org-tree .tree-leaf {
  display: flex;
  align-items: center;
  height: 34px;
  color: #333;
  font-size: 14px;
}
.org-tree .tree-node > .tree-label {
  font-weight: 600;
}
.org-tree .tree-node.open > .tree-label::before {
  content: "▾";
  display: inline-block;
  width: 18px;
  text-align: center;
  margin-right: 6px;
  color: #8c8c8c;
}
.org-tree .tree-node:not(.open) > .tree-label::before {
  content: "▸";
  display: inline-block;
  width: 18px;
  text-align: center;
  margin-right: 6px;
  color: #8c8c8c;
}
.org-tree .tree-leaf {
  padding-left: 30px;
  color: #666;
}

/*  */

.app-right {
  width: 802px;
  height: 500px;
  /* border: 1px solid red; */
  margin-left: 5px;
}
.right-top {
  width: 100%;
  height: 86px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.top-inp {
  width: 100%;
  height: 42px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 180px;
  height: 100%;
  /* border: 1px solid red; */
}
.top-inp div:last-child {
  display: flex;
  justify-content: space-between;
}
.top-inp div span {
  display: inline-block;
  width: 90px;
  text-align: right;
  margin-right: 3px;
  font-size: 14px;
}
.top-inp div input {
  width: 81px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.right-main {
  width: 100%;
  height: 484px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
}
.main-title {
  width: 100%;
  height: 47px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.main-title div:first-child {
  width: 25%;
  font-size: 16px;
  font-weight: 600;
  /* border: 1px solid red; */
}
.main-title div:nth-child(2) {
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn1 {
  width: 78px;
  height: 32px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  background-color: #006be6;
}
.btn3 {
  width: 162px;
  height: 32px;
  border: 0;
  border-radius: 10px;
  color: #fff;
  background-color: #006be6;
}
.btn4 {
  width: 84px;
  height: 32px;
  background-color: #fff;
  border: 0;
  color: #ccc;
}
.btn5 {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #006be6;
  margin-right: 5px;
}
.main-title div:last-child {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-title div:last-child button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
}
.main-a {
  width: 100%;
  height: 381px;
  /* border: 1px solid red; */
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-a table {
  width: max-content;
  min-width: 860px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  /* border: 1px solid #e6e6e6; */
}
.main-a th {
  height: 40px;
  background-color: #eeebeb;
  border-right: 1px solid #ccc;
}
.main-a td {
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  text-align: center;
}
.ol-col {
  position: sticky;
  right: 0;
}
.main-floot {
  width: 100%;
  height: 36px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 26px;
  text-align: center;
  border: 1px solid #ccc;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
