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
          <span>薪酬主体</span>
          <input type="text" placeholder="请输入薪酬主体" />
        </div>
        <div>
          <button class="btn1">重置</button>
          <button class="btn2">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>个税累计期初列表</div>
          <div>
            <button>导入</button>
            <button>+新增</button>
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
                <th>员工</th>
                <th>身份证</th>
                <th>主体</th>
                <th>年度</th>
                <th>截至月</th>
                <th>累计收入</th>
                <th>累计专项扣除</th>
                <th>累计专项附加</th>
                <th>累计免税</th>
                <th>累计其他扣除</th>
                <th>累计因缴纳所得额</th>
                <th>累计因缴纳税额</th>
                <th>创建时间</th>
                <th class="oc-col" style="width: 180px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{{ item.employee }}</td>
                <td>{{ item.idNumber }}</td>
                <td>{{ item.subject }}</td>
                <td>{{ item.year }}</td>
                <td>{{ item.month }}</td>
                <td>{{ item.cumulativeIncome }}</td>
                <td>{{ item.cumulativeSpecialDeduction }}</td>
                <td>{{ item.cumulativeAdditionalDeduction }}</td>
                <td>{{ item.cumulativeTaxExempt }}</td>
                <td>{{ item.cumulativeOtherDeduction }}</td>
                <td>{{ item.cumulativeTaxableIncome }}</td>
                <td>{{ item.cumulativeTaxPaid }}</td>
                <td>{{ item.createTime }}</td>
                <td class="oc-col">维护 删除</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div>共7条记录<span>20条/页</span></div>
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
          employee: '张三',
          idNumber: '110101199001011234',
          subject: '宇擎科技集团',
          year: '2026',
          month: '6',
          cumulativeIncome: '180,000.00',
          cumulativeSpecialDeduction: '12,600.00',
          cumulativeAdditionalDeduction: '18,000.00',
          cumulativeTaxExempt: '3,000.00',
          cumulativeOtherDeduction: '6,000.00',
          cumulativeTaxableIncome: '140,400.00',
          cumulativeTaxPaid: '8,424.00',
          createTime: '2026-07-20 09:30:00'
        },
        {
          id: 2,
          employee: '李娜',
          idNumber: '110102199205152345',
          subject: '宇擎深圳分公司',
          year: '2026',
          month: '6',
          cumulativeIncome: '210,000.00',
          cumulativeSpecialDeduction: '14,700.00',
          cumulativeAdditionalDeduction: '24,000.00',
          cumulativeTaxExempt: '5,000.00',
          cumulativeOtherDeduction: '8,000.00',
          cumulativeTaxableIncome: '158,300.00',
          cumulativeTaxPaid: '12,498.00',
          createTime: '2026-07-19 14:20:00'
        },
        {
          id: 3,
          employee: '王强',
          idNumber: '110103198812203456',
          subject: '宇擎上海分公司',
          year: '2026',
          month: '5',
          cumulativeIncome: '150,000.00',
          cumulativeSpecialDeduction: '10,500.00',
          cumulativeAdditionalDeduction: '15,000.00',
          cumulativeTaxExempt: '2,000.00',
          cumulativeOtherDeduction: '5,000.00',
          cumulativeTaxableIncome: '117,500.00',
          cumulativeTaxPaid: '7,050.00',
          createTime: '2026-07-18 11:45:00'
        },
        {
          id: 4,
          employee: '刘洋',
          idNumber: '110104199507184567',
          subject: '宇擎北京研发中心',
          year: '2026',
          month: '6',
          cumulativeIncome: '240,000.00',
          cumulativeSpecialDeduction: '16,800.00',
          cumulativeAdditionalDeduction: '12,000.00',
          cumulativeTaxExempt: '4,000.00',
          cumulativeOtherDeduction: '7,000.00',
          cumulativeTaxableIncome: '200,200.00',
          cumulativeTaxPaid: '16,018.00',
          createTime: '2026-07-17 16:30:00'
        },
        {
          id: 5,
          employee: '陈晨',
          idNumber: '110105199303256789',
          subject: '宇擎科技集团',
          year: '2026',
          month: '4',
          cumulativeIncome: '120,000.00',
          cumulativeSpecialDeduction: '8,400.00',
          cumulativeAdditionalDeduction: '20,000.00',
          cumulativeTaxExempt: '1,000.00',
          cumulativeOtherDeduction: '4,000.00',
          cumulativeTaxableIncome: '86,600.00',
          cumulativeTaxPaid: '5,196.00',
          createTime: '2026-07-16 10:15:00'
        },
        {
          id: 6,
          employee: '杨丽',
          idNumber: '110106199109157890',
          subject: '宇擎成都分公司',
          year: '2026',
          month: '6',
          cumulativeIncome: '195,000.00',
          cumulativeSpecialDeduction: '13,650.00',
          cumulativeAdditionalDeduction: '18,000.00',
          cumulativeTaxExempt: '3,500.00',
          cumulativeOtherDeduction: '6,500.00',
          cumulativeTaxableIncome: '153,350.00',
          cumulativeTaxPaid: '11,268.00',
          createTime: '2026-07-15 13:40:00'
        },
        {
          id: 7,
          employee: '赵岩',
          idNumber: '110107199412206789',
          subject: '宇擎杭州分公司',
          year: '2026',
          month: '5',
          cumulativeIncome: '165,000.00',
          cumulativeSpecialDeduction: '11,550.00',
          cumulativeAdditionalDeduction: '16,000.00',
          cumulativeTaxExempt: '2,500.00',
          cumulativeOtherDeduction: '5,500.00',
          cumulativeTaxableIncome: '129,450.00',
          cumulativeTaxPaid: '8,106.00',
          createTime: '2026-07-14 09:50:00'
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
