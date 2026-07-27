<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>员工姓名</span>
          <input type="text" placeholder="请输入员工姓名" />
        </div>
        <div>
          <span>年份</span>
          <input type="text" placeholder="请输入年份" />
        </div>
        <div>
          <span>月份</span>
          <input type="text" placeholder="请输入月份" />
        </div>
        <div>
          <button class="btn1">重置</button>
          <button class="btn2">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>工资条列表</div>
          <div>
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
                <th style="width: 50px">
                  <input type="checkbox" name="" id="" />
                </th>
                <th>工资条标题</th>
                <th>工号</th>
                <th>员工姓名</th>
                <th>年份</th>
                <th>月份</th>
                <th>应发</th>
                <th>应扣</th>
                <th>实发</th>
                <th>已发布</th>
                <th>已读</th>
                <th>已读时间</th>
                <th>创建时间</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{{ item.payslipTitle }}</td>
                <td>{{ item.employeeNo }}</td>
                <td>{{ item.employeeName }}</td>
                <td>{{ item.year }}</td>
                <td>{{ item.month }}</td>
                <td>{{ item.totalPayable }}</td>
                <td>{{ item.totalDeduction }}</td>
                <td>{{ item.totalNetPay }}</td>
                <td>{{ item.isPublished }}</td>
                <td>{{ item.isRead }}</td>
                <td>{{ item.readTime }}</td>
                <td>{{ item.createTime }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div>共3条记录<span>20条/页</span></div>
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
          id: 1,
          payslipTitle: '2026年1月工资条',
          employeeNo: 'EMP-001',
          employeeName: '张三',
          year: '2026',
          month: '1',
          totalPayable: '15,800.00',
          totalDeduction: '3,245.50',
          totalNetPay: '12,554.50',
          isPublished: '已发布',
          isRead: '已读',
          readTime: '2026-01-26 09:15:00',
          createTime: '2026-01-25 16:30:00'
        },
        {
          id: 2,
          payslipTitle: '2026年1月工资条',
          employeeNo: 'EMP-003',
          employeeName: '王强',
          year: '2026',
          month: '1',
          totalPayable: '12,600.00',
          totalDeduction: '2,890.30',
          totalNetPay: '9,709.70',
          isPublished: '已发布',
          isRead: '未读',
          readTime: '-',
          createTime: '2026-01-25 16:30:00'
        },
        {
          id: 3,
          payslipTitle: '2026年2月工资条',
          employeeNo: 'EMP-001',
          employeeName: '张三',
          year: '2026',
          month: '2',
          totalPayable: '16,200.00',
          totalDeduction: '3,456.80',
          totalNetPay: '12,743.20',
          isPublished: '已发布',
          isRead: '已读',
          readTime: '2026-02-26 10:20:00',
          createTime: '2026-02-25 17:00:00'
        }
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
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-title div:nth-child(2) {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* text-align: right; */
  padding-left: 65px;
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
.main-title div:nth-child(2) button{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #0a33e7;
  border: 0;
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
  font-size: 14px;
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
