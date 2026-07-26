<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>员工工号</span>
          <input type="text" placeholder="请输入员工工号" />
        </div>
        <div>
          <span>姓名</span>
          <input type="text" placeholder="请输入姓名" />
        </div>
        <div>
          <span>所属部门</span>
          <input type="text" placeholder="请输入所属部门" />
        </div>
        <div>
          <button class="btn1">重置</button>
          <button class="btn2">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>员工档案列表</div>
          <div>
            <button>+新增</button>
            <button>导出</button>
            <button>导入员工</button>
            <button>+批量生成用户</button>
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
                <th class="col-id" style="width: 120px">员工工号</th>
                <th class="col-name" style="width: 100px">姓名</th>
                <th style="width: 80px">性别</th>
                <th style="width: 150px">所属部门</th>
                <th style="width: 120px">职位</th>
                <th style="width: 120px">职务</th>
                <th style="width: 100px">人员状态</th>
                <th style="width: 120px">入职日期</th>
                <th style="width: 120px">转正日期</th>
                <th style="width: 180px">所属单位</th>
                <th style="width: 120px">手机号</th>
                <th style="width: 180px">邮箱</th>
                <th style="width: 100px">用户状态</th>
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
                <td class="oc-col">修改 +生成用户 删除</td>
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
          id: "111",
          name: "员工1",
          gender: "男",
          department: "研发",
          position: "员工",
          pos: "助理",
          status: "正式",
          time: "",
          times: "",
          unit: "深圳总公司",
          phone: "12352462314",
          emit: "123@qq.com",
          statuss: "true",
          datetime: "2026-7-26",
        },
        {
          id: "112",
          name: "员工2",
          gender: "女",
          department: "市场",
          position: "主管",
          pos: "经理",
          status: "正式",
          time: "2024-02-01",
          times: "2024-08-01",
          unit: "深圳总公司",
          phone: "13800138001",
          emit: "emp2@qq.com",
          statuss: "启用",
          datetime: "2026-7-26",
        },
        {
          id: "111",
          name: "员工1",
          gender: "男",
          department: "研发",
          position: "员工",
          pos: "助理",
          status: "正式",
          time: "",
          times: "",
          unit: "深圳总公司",
          phone: "12352462314",
          emit: "123@qq.com",
          statuss: "true",
          datetime: "2026-7-26",
        },
        {
          id: "112",
          name: "员工2",
          gender: "女",
          department: "市场",
          position: "主管",
          pos: "经理",
          status: "正式",
          time: "2024-02-01",
          times: "2024-08-01",
          unit: "深圳总公司",
          phone: "13800138001",
          emit: "emp2@qq.com",
          statuss: "启用",
          datetime: "2026-7-26",
        },
        {
          id: "111",
          name: "员工1",
          gender: "男",
          department: "研发",
          position: "员工",
          pos: "助理",
          status: "正式",
          time: "",
          times: "",
          unit: "深圳总公司",
          phone: "12352462314",
          emit: "123@qq.com",
          statuss: "true",
          datetime: "2026-7-26",
        },
        {
          id: "112",
          name: "员工2",
          gender: "女",
          department: "市场",
          position: "主管",
          pos: "经理",
          status: "正式",
          time: "2024-02-01",
          times: "2024-08-01",
          unit: "深圳总公司",
          phone: "13800138001",
          emit: "emp2@qq.com",
          statuss: "启用",
          datetime: "2026-7-26",
        },
        {
          id: "111",
          name: "员工1",
          gender: "男",
          department: "研发",
          position: "员工",
          pos: "助理",
          status: "正式",
          time: "",
          times: "",
          unit: "深圳总公司",
          phone: "12352462314",
          emit: "123@qq.com",
          statuss: "true",
          datetime: "2026-7-26",
        },
        {
          id: "112",
          name: "员工2",
          gender: "女",
          department: "市场",
          position: "主管",
          pos: "经理",
          status: "正式",
          time: "2024-02-01",
          times: "2024-08-01",
          unit: "深圳总公司",
          phone: "13800138001",
          emit: "emp2@qq.com",
          statuss: "启用",
          datetime: "2026-7-26",
        },
        {
          id: "111",
          name: "员工1",
          gender: "男",
          department: "研发",
          position: "员工",
          pos: "助理",
          status: "正式",
          time: "",
          times: "",
          unit: "深圳总公司",
          phone: "12352462314",
          emit: "123@qq.com",
          statuss: "true",
          datetime: "2026-7-26",
        },
        {
          id: "112",
          name: "员工2",
          gender: "女",
          department: "市场",
          position: "主管",
          pos: "经理",
          status: "正式",
          time: "2024-02-01",
          times: "2024-08-01",
          unit: "深圳总公司",
          phone: "13800138001",
          emit: "emp2@qq.com",
          statuss: "启用",
          datetime: "2026-7-26",
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
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-title div:nth-child(2) {
  width: 60%;
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
  width: 106px;
}
.main-title div:nth-child(2) button:nth-child(4) {
  width: 134px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #ccc;
}
.main-title div:nth-child(2) button:nth-child(5) {
  width: 106px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #ccc;
}
.main-title div:nth-child(2) button:nth-child(6) {
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
