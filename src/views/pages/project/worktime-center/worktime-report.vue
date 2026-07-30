<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>单据编号</span>
            <input type="text" placeholder="请输入单据编号" />
          </div>
          <div class="inp-1">
            <span>年份</span>
            <input type="text" placeholder="请输入年份" />
          </div>
          <div class="inp-1">
            <span>审批状态</span>
            <input type="text" placeholder="请输入审批状态" />
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
          <div class="top-1">工时周报</div>
          <div class="top-2">
            <button>+新增工时周报</button>
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
                <th>单据编号</th>
                <th>周次</th>
                <th>起始日期</th>
                <th>结束日期</th>
                <th>工作天数</th>
                <th>合计工时(h)</th>
                <th>填报人</th>
                <th>所属部门</th>
                <th>审批状态</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td><input type="checkbox" /></td>
                <td style="color: #006be6">{{ item.documentNo }}</td>
                <td>{{ item.weekNo }}</td>
                <td>{{ item.startDate }}</td>
                <td>{{ item.endDate }}</td>
                <td>{{ item.workDays }}</td>
                <td>{{ item.totalHours }}</td>
                <td>{{ item.reporter }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.status }}</td>
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
        <div class="main-floot">共3条记录<span>20条/页</span></div>
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
          documentNo: "GZ-2026-001",
          weekNo: "第28周",
          startDate: "2026-07-08",
          endDate: "2026-07-14",
          workDays: 5,
          totalHours: 40,
          reporter: "张伟",
          department: "技术研发部",
          status: "已审批",
          createTime: "2026-07-15 09:30",
        },
        {
          id: 2,
          documentNo: "GZ-2026-002",
          weekNo: "第28周",
          startDate: "2026-07-08",
          endDate: "2026-07-14",
          workDays: 5,
          totalHours: 38,
          reporter: "李芳",
          department: "产品交付部",
          status: "审批中",
          createTime: "2026-07-15 10:15",
        },
        {
          id: 3,
          documentNo: "GZ-2026-003",
          weekNo: "第27周",
          startDate: "2026-07-01",
          endDate: "2026-07-07",
          workDays: 5,
          totalHours: 42,
          reporter: "王磊",
          department: "AI实验室",
          status: "已审批",
          createTime: "2026-07-08 14:20",
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
  width: 70%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.top-2 {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-2 button:nth-child(2) {
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
  background-color: #e9e6e6;
  padding: 0 20px;
}
.main-tab td {
  height: 40px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.ol-col {
  width: 140px;
  position: sticky;
  right: 0;
}
.ol-col button {
  width: 38px;
  height: 32px;
  color: #006be6;
  border: 0;
  background-color: #fff;
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
