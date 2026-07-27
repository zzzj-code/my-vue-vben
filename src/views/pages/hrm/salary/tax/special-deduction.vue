<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>员工姓名</span>
          <input type="text" placeholder="请输入员工姓名" />
        </div>
        <div>
          <span>身份证号</span>
          <input type="text" placeholder="请输入身份证号" />
        </div>
        <div>
          <span>扣除年度</span>
          <input type="text" placeholder="请输入扣除年度" />
        </div>
        <div>
          <button class="btn1">重置</button>
          <button class="btn2">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>专项附加扣除（按人员+年度；展开查看月明细）</div>
          <div>
            <button>导入</button>
            <button>年度维护</button>
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
                  <!-- <input type="checkbox" name="" id="" /> -->
                </th>
                <th>姓名</th>
                <th>身份证号</th>
                <th>扣除年度</th>
                <th>已维护月数</th>
                <th>月合计</th>
                <th>来源</th>
                <th>更新时间</th>
                <th class="oc-col" style="width: 180px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>
                  <!-- <input type="checkbox" name="" id="" /> -->
                   >
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.idNumber }}</td>
                <td>{{ item.year }}</td>
                <td>{{ item.maintainedMonths }}</td>
                <td>{{ item.monthlyTotal }}</td>
                <td>{{ item.source }}</td>
                <td>{{ item.updateTime }}</td>
                <td class="oc-col">维护 删除</td>
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
          id: 1,
          name: '张三',
          idNumber: '110101199001011234',
          year: '2026',
          maintainedMonths: '12',
          monthlyTotal: '2,500.00',
          source: '员工自行申报',
          updateTime: '2026-07-20 14:30:00'
        },
        {
          id: 2,
          name: '李娜',
          idNumber: '110102199205152345',
          year: '2026',
          maintainedMonths: '12',
          monthlyTotal: '3,200.00',
          source: 'HR批量导入',
          updateTime: '2026-07-19 10:15:00'
        },
        {
          id: 3,
          name: '王强',
          idNumber: '110103198812203456',
          year: '2026',
          maintainedMonths: '10',
          monthlyTotal: '1,800.00',
          source: '员工自行申报',
          updateTime: '2026-07-18 16:40:00'
        },
        {
          id: 4,
          name: '刘洋',
          idNumber: '110104199507184567',
          year: '2026',
          maintainedMonths: '12',
          monthlyTotal: '4,100.00',
          source: 'HR批量导入',
          updateTime: '2026-07-17 09:20:00'
        },
        {
          id: 5,
          name: '陈晨',
          idNumber: '110105199303256789',
          year: '2026',
          maintainedMonths: '8',
          monthlyTotal: '2,000.00',
          source: '员工自行申报',
          updateTime: '2026-07-16 13:50:00'
        },
        {
          id: 6,
          name: '杨丽',
          idNumber: '110106199109157890',
          year: '2026',
          maintainedMonths: '12',
          monthlyTotal: '3,500.00',
          source: 'HR批量导入',
          updateTime: '2026-07-15 11:30:00'
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
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-title div:nth-child(2) {
  width: 20%;
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
