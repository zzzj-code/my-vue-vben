<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>单据编号</span>
          <input type="text" placeholder="请输入单据编号" />
        </div>
        <div>
          <span>单据状态</span>
          <input type="text" placeholder="请输入单据状态" />
        </div>
        <div>
          <span>姓名</span>
          <input type="text" placeholder="请输入姓名" />
        </div>
        <div>
          <button class="btn1">重置</button>
          <button class="btn2">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>员工入职申请单列表</div>
          <div>
            <button>+新增</button>
            <button>导出</button>
            <button>批量删除</button>
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
                <th class="col-check" style="width: 50px">
                  <input type="checkbox" name="" id="" />
                </th>
                <th class="col-id" style="width: 120px">单据编号</th>
                <th class="col-name" style="width: 100px">单据状态</th>
                <th style="width: 80px">姓名</th>
                <th style="width: 150px">手机号</th>
                <th style="width: 120px">邮箱</th>
                <th style="width: 120px">员工所属部门</th>
                <th style="width: 100px">职位</th>
                <th style="width: 120px">职务</th>
                <th style="width: 120px">人员状态</th>
                <th style="width: 180px">入职日期</th>
                <th style="width: 120px">预计转正日期</th>
                <th style="width: 180px">申请人</th>
                <th style="width: 100px">员工所属公司</th>
                <th style="width: 160px">创建时间</th>
                <th class="oc-col" style="width: 220px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td class="col-check">
                  <input type="checkbox" name="" id="" />
                </td>
                <td class="col-id">{{ item.id }}</td>
                <td class="col-name">{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.position }}</td>
                <td>{{ item.pos }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.time }}</td>
                <td>{{ item.times }}</td>
                <td>{{ item.unit }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.emit }}</td>
                <td>{{ item.statuss }}</td>
                <td>{{ item.datetime }}</td>
                <td class="oc-col">删除</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div>共11条记录<span>20条/页</span></div>
          <div></div>
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
          id: "EMP-2026-001",
          name: "待审核",
          gender: "张三",
          department: "技术部",
          position: "前端开发工程师",
          pos: "高级工程师",
          status: "在职",
          time: "2026-07-01",
          times: "2026-10-01",
          unit: "北京分公司",
          phone: "138****1234",
          emit: "李四",
          statuss: "北京科技有限公司",
          datetime: "2026-06-25 09:30:00",
        },
        {
          id: "EMP-2026-002",
          name: "已通过",
          gender: "李娜",
          department: "产品部",
          position: "产品经理",
          pos: "中级经理",
          status: "在职",
          time: "2026-07-05",
          times: "2026-10-05",
          unit: "上海分公司",
          phone: "139****5678",
          emit: "王五",
          statuss: "上海科技有限公司",
          datetime: "2026-06-28 14:20:00",
        },
        {
          id: "EMP-2026-003",
          name: "待审核",
          gender: "王强",
          department: "设计部",
          position: "UI设计师",
          pos: "中级设计师",
          status: "试用期",
          time: "2026-07-10",
          times: "2026-10-10",
          unit: "深圳分公司",
          phone: "136****9012",
          emit: "赵六",
          statuss: "深圳科技有限公司",
          datetime: "2026-07-01 10:15:00",
        },
        {
          id: "EMP-2026-004",
          name: "已驳回",
          gender: "刘洋",
          department: "市场部",
          position: "市场专员",
          pos: "初级专员",
          status: "离职",
          time: "2026-06-20",
          times: "2026-09-20",
          unit: "广州分公司",
          phone: "137****3456",
          emit: "孙七",
          statuss: "广州科技有限公司",
          datetime: "2026-06-18 16:45:00",
        },
        {
          id: "EMP-2026-005",
          name: "已通过",
          gender: "陈晨",
          department: "技术部",
          position: "Java开发工程师",
          pos: "高级工程师",
          status: "在职",
          time: "2026-07-15",
          times: "2026-10-15",
          unit: "成都分公司",
          phone: "158****7890",
          emit: "周八",
          statuss: "成都科技有限公司",
          datetime: "2026-07-08 11:00:00",
        },
        {
          id: "EMP-2026-006",
          name: "待审核",
          gender: "杨丽",
          department: "人事部",
          position: "人事专员",
          pos: "中级专员",
          status: "在职",
          time: "2026-07-18",
          times: "2026-10-18",
          unit: "杭州分公司",
          phone: "159****2345",
          emit: "吴九",
          statuss: "杭州科技有限公司",
          datetime: "2026-07-12 09:50:00",
        },
        {
          id: "EMP-2026-007",
          name: "已通过",
          gender: "赵岩",
          department: "财务部",
          position: "财务分析师",
          pos: "高级分析师",
          status: "试用期",
          time: "2026-07-22",
          times: "2026-10-22",
          unit: "武汉分公司",
          phone: "131****6789",
          emit: "郑十",
          statuss: "武汉科技有限公司",
          datetime: "2026-07-15 13:30:00",
        },
        {
          id: "EMP-2026-008",
          name: "已驳回",
          gender: "孙悦",
          department: "运营部",
          position: "运营经理",
          pos: "中级经理",
          status: "离职",
          time: "2026-06-28",
          times: "2026-09-28",
          unit: "南京分公司",
          phone: "132****0123",
          emit: "冯十一",
          statuss: "南京科技有限公司",
          datetime: "2026-06-22 15:20:00",
        },
        {
          id: "EMP-2026-009",
          name: "待审核",
          gender: "周琳",
          department: "技术部",
          position: "测试工程师",
          pos: "中级工程师",
          status: "在职",
          time: "2026-07-25",
          times: "2026-10-25",
          unit: "西安分公司",
          phone: "133****4567",
          emit: "陈十二",
          statuss: "西安科技有限公司",
          datetime: "2026-07-18 10:40:00",
        },
        {
          id: "EMP-2026-010",
          name: "已通过",
          gender: "吴迪",
          department: "销售部",
          position: "销售经理",
          pos: "高级经理",
          status: "在职",
          time: "2026-07-28",
          times: "2026-10-28",
          unit: "重庆分公司",
          phone: "135****8901",
          emit: "林十三",
          statuss: "重庆科技有限公司",
          datetime: "2026-07-20 16:10:00",
        },
      ],
    }
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
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.app-top div {
  width: 246px;
  height: 42px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.app-top div span {
  display: inline-block;
  width: 100px;
  text-align: right;
  font-size: 14px;
  margin-right: 8px;
  font-weight: 500;
}
.app-top div input {
  width: 136px;
  height: 32px;
  border: 0.5px solid #ccc;
  padding: 12px;
  border-radius: 10px;
}
.app-top div input:hover {
  border: 0.5px solid #35bbfa;
}
.app-top div input:focus {
  outline: none;
  border: 0.5px solid #35bbfa;
}
.app-top div:last-child {
  display: flex;
  padding-left: 50px;
  color: #35bbfa;
  font-size: 14px;
}
.app-top div button {
  width: 64px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.app-top div button:first-child {
  border: 0.5px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}
.app-top .btn1:hover {
  border: 0.5px solid #35bbfa;
  color: #35bbfa;
}
.app-top .btn2 {
  border: 0;
  background-color: #35bbfa;
  color: #fff;
}
.app-top .btn2:hover {
  background-color: #76d2fd;
}

.app-main {
  width: 100%;
  height: 494px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-title {
  width: 100%;
  height: 48px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.main-title div:first-child {
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-title div:nth-child(2) {
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-title div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
}
.main-title div:nth-child(2) button {
  width: 78px;
  height: 32px;
  color: #fff;
  border: 0;
  background-color: #0a33e7;
  border-radius: 10px;
}
.main-title div:nth-child(2) button:nth-child(3) {
  width: 134px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #ccc;
}
.main-title div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.main-title div:last-child button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
  /* margin-right: 5px; */
}

.main-tab {
  width: 100%;
  height: 385px;
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
  /* border: 1px solid #e6e6e6; */
}
.main-tab table th {
  border-right: 1px solid #ccc;
  text-align: center;
  background-color: #e9e6e6;
  height: 40px;
}
.main-tab table td {
  height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  background-color: #fff;
}
.col-check {
  position: sticky;
  left: 0;
}
.col-id {
  position: sticky;
  left: 50px;
}
.col-name {
  position: sticky;
  left: 170px;
}
.oc-col {
  position: sticky;
  right: 0;
}
.main-floot {
  width: 100%;
  height: 36px;
  /* border: 1px solid red; */
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
}
.main-floot div span {
  display: inline-block;
  width: 100px;
  height: 26px;
  margin-left: 5px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 5px;
  padding-top: 3px;
}
</style>
