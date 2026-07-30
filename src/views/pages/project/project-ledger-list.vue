<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>项目编号</span>
            <input type="text" placeholder="请输入项目编号" />
          </div>
          <div class="inp-1">
            <span>项目名称</span>
            <input type="text" placeholder="请输入项目名称" />
          </div>
          <div class="inp-1">
            <span>项目类型</span>
            <input type="text" placeholder="请输入项目类型" />
          </div>
          <div class="inp-1">
            <button>重置</button>
            <button>搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">
            项目台账
            <div class="top-nav">
              <div
                v-for="item in [
                  '全部',
                  '我负责的',
                  '我参与的',
                  '进行中',
                  '已逾期',
                ]"
                :key="item"
                :class="{ active: activeNav === item }"
                @click="switchNav(item)"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="top-2">
            <button>批量归档</button>
            <button>批量终止</button>
            <button>导出</button>
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
                <th><input type="checkbox" /></th>
                <th>项目编号</th>
                <th>项目名称</th>
                <th>项目类型</th>
                <th>优先级</th>
                <th>立项状态</th>
                <th>进度</th>
                <th>项目经理</th>
                <th>所属部门</th>
                <th>对方单位</th>
                <th>计划开始</th>
                <th>计划结束</th>
                <th>预算金额</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td style="color: #006be6">{{ item.projectNo }}</td>
                <td>{{ item.projectName }}</td>
                <td>
                  <span
                    style="
                      display: inline-block;
                      width: 52px;
                      height: 22px;
                      background-color: #006be656;
                      border-radius: 5px;
                      border: 1px solid #006be6;
                      color: #006be6;
                      font-size: 12px;
                    "
                  >{{ item.projectType }}</span>
                </td>
                <td>
                  <span
                    style="
                      display: inline-block;
                      width: 28px;
                      height: 22px;
                      background-color: #006be656;
                      border-radius: 5px;
                      border: 1px solid #006be6;
                      color: #006be6;
                      font-size: 12px;
                    "
                  >{{ item.priority }}</span>
                </td>
                <td>{{ item.status }}</td>
                <td>{{ item.progress }}</td>
                <td>{{ item.manager }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.counterparty }}</td>
                <td>{{ item.planStart }}</td>
                <td>{{ item.planEnd }}</td>
                <td>{{ item.budget }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button></button>
                  <button>详情</button>
                  <button></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共4条记录<span>20条/页</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNav: "全部",
      tabValue: [
        {
          id: 1,
          projectNo: "XM-2026-001",
          projectName: "智慧城市数据中台",
          projectType: "研发",
          priority: "高",
          status: "已立项",
          progress: "65%",
          manager: "张伟",
          department: "技术研发部",
          counterparty: "市政数局",
          planStart: "2026-07-01",
          planEnd: "2026-12-31",
          budget: "¥2,800,000",
          createTime: "2026-07-01",
        },
        {
          id: 2,
          projectNo: "XM-2026-002",
          projectName: "企业ERP升级改造",
          projectType: "实施",
          priority: "中",
          status: "审核中",
          progress: "30%",
          manager: "李芳",
          department: "产品交付部",
          counterparty: "恒通集团",
          planStart: "2026-07-15",
          planEnd: "2026-11-30",
          budget: "¥1,500,000",
          createTime: "2026-07-03",
        },
        {
          id: 3,
          projectNo: "XM-2026-003",
          projectName: "AI智能客服系统",
          projectType: "研发",
          priority: "高",
          status: "已立项",
          progress: "45%",
          manager: "王磊",
          department: "AI实验室",
          counterparty: "云创科技",
          planStart: "2026-06-20",
          planEnd: "2026-10-15",
          budget: "¥3,200,000",
          createTime: "2026-06-28",
        },
        {
          id: 4,
          projectNo: "XM-2026-004",
          projectName: "移动办公APP开发",
          projectType: "开发",
          priority: "低",
          status: "已驳回",
          progress: "0%",
          manager: "陈静",
          department: "移动开发部",
          counterparty: "内部项目",
          planStart: "2026-07-10",
          planEnd: "2026-09-20",
          budget: "¥800,000",
          createTime: "2026-07-05",
        },
      ],
    };
  },
  methods: {
    switchNav(item) {
      this.activeNav = item;
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
  width: 1014px;
  height: 590px;
  /* border: 1px solid red; */
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 86px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
}
.top-inp {
  width: 100%;
  height: 42px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-inp .inp-1 {
  width: 246px;
  height: 100%;
  /* border: 1px solid red; */
}
.top-inp .inp-1 span {
  display: inline-block;
  width: 100px;
  height: 24px;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
}
.top-inp .inp-1 input {
  width: 125px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-inp .inp-1:last-child {
  font-size: 14px;
  color: #006be6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
}
.top-inp .inp-1:last-child button:first-child {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp .inp-1 button:last-child {
  width: 63px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  color: #fff;
  border: 0;
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
  align-items: center;
}
.top-1 {
  width: 62%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.top-1 .top-nav {
  width: 338px;
  height: 32px;
  border-radius: 10px;
  background-color: #f1f3f6;
  padding: 2px;
  display: flex;
}
.top-nav div {
  width: auto;
  height: 100%;
  padding: 0 11px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: lighter;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.active {
  background-color: #fff;
}
.top-2 {
  width: 28%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 66px;
  height: 32px;
  background-color: #fff;
  border: 0;
  border-radius: 10px;
  color: #006be6;
}
.top-2 button:nth-child(2) {
  width: 66px;
  height: 32px;
  background-color: #fff;
  border: 0;
  border-radius: 10px;
  color: #ff3860;
}
.top-2 button:nth-child(3) {
  width: 78px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  border-radius: 10px;
  color: #fff;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background-color: #006be6;
  color: #fff;
}
.top-3 {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
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
  min-width: 1100px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #e9e6e6;
  padding: 0 20px;
}
.main-tab td {
  height: 40px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
}
.ol-col {
  width: 240px;
  position: sticky;
  right: 0;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
}
.ol-col button:nth-child(2) {
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
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
