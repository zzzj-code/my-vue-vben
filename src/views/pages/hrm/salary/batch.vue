<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>批次编号</span>
          <input type="text" placeholder="请输入批次编号" />
        </div>
        <div>
          <span>批次名称</span>
          <input type="text" placeholder="请输入批次名称" />
        </div>
        <div>
          <button class="btn1">重置</button>
          <button class="btn2">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>员工个税档案列表</div>
          <div>
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
                <th>批次编号</th>
                <th>批次名称</th>
                <th>薪酬主体</th>
                <th>年份</th>
                <th>月份</th>
                <th>批次类型</th>
                <th>人数</th>
                <th>应发合计</th>
                <th>应扣合计</th>
                <th>实发合计</th>
                <th>试算</th>
                <th>确认</th>
                <th>发薪</th>
                <th>工资条</th>
                <th>试算时间</th>
                <th>创建时间</th>
                <th class="oc-col" style="width: 320px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{{ item.batchNo }}</td>
                <td>{{ item.batchName }}</td>
                <td>{{ item.subject }}</td>
                <td>{{ item.year }}</td>
                <td>{{ item.month }}</td>
                <td>{{ item.batchType }}</td>
                <td>{{ item.peopleCount }}</td>
                <td>{{ item.totalPayable }}</td>
                <td>{{ item.totalDeduction }}</td>
                <td>{{ item.totalNetPay }}</td>
                <td>{{ item.trialStatus }}</td>
                <td>{{ item.confirmStatus }}</td>
                <td>{{ item.payStatus }}</td>
                <td>{{ item.payslipStatus }}</td>
                <td>{{ item.trialTime }}</td>
                <td>{{ item.createTime }}</td>
                <td class="oc-col">查看结果  试算  确认审批  发薪登记  工资条</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">
          <div>共10条记录<span>20条/页</span></div>
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
          batchNo: 'BATCH-2026-001',
          batchName: '2026年1月薪资批次',
          subject: '宇擎科技集团',
          year: '2026',
          month: '1',
          batchType: '正常发薪',
          peopleCount: 156,
          totalPayable: '1,865,420.00',
          totalDeduction: '325,680.50',
          totalNetPay: '1,539,739.50',
          trialStatus: '已试算',
          confirmStatus: '已确认',
          payStatus: '已发薪',
          payslipStatus: '已生成',
          trialTime: '2026-01-25 09:30:00',
          createTime: '2026-01-20 14:00:00'
        },
        {
          id: 2,
          batchNo: 'BATCH-2026-002',
          batchName: '2026年2月薪资批次',
          subject: '宇擎深圳分公司',
          year: '2026',
          month: '2',
          batchType: '正常发薪',
          peopleCount: 89,
          totalPayable: '1,245,800.00',
          totalDeduction: '218,456.30',
          totalNetPay: '1,027,343.70',
          trialStatus: '已试算',
          confirmStatus: '已确认',
          payStatus: '已发薪',
          payslipStatus: '已生成',
          trialTime: '2026-02-24 10:15:00',
          createTime: '2026-02-18 16:30:00'
        },
        {
          id: 3,
          batchNo: 'BATCH-2026-003',
          batchName: '2026年3月薪资批次',
          subject: '宇擎上海分公司',
          year: '2026',
          month: '3',
          batchType: '正常发薪',
          peopleCount: 67,
          totalPayable: '980,500.00',
          totalDeduction: '156,789.20',
          totalNetPay: '823,710.80',
          trialStatus: '已试算',
          confirmStatus: '已确认',
          payStatus: '已发薪',
          payslipStatus: '已生成',
          trialTime: '2026-03-25 11:00:00',
          createTime: '2026-03-19 09:45:00'
        },
        {
          id: 4,
          batchNo: 'BATCH-2026-004',
          batchName: '2026年4月薪资批次',
          subject: '宇擎北京研发中心',
          year: '2026',
          month: '4',
          batchType: '正常发薪',
          peopleCount: 45,
          totalPayable: '756,200.00',
          totalDeduction: '132,456.80',
          totalNetPay: '623,743.20',
          trialStatus: '已试算',
          confirmStatus: '待确认',
          payStatus: '待发薪',
          payslipStatus: '未生成',
          trialTime: '2026-04-24 14:20:00',
          createTime: '2026-04-18 10:20:00'
        },
        {
          id: 5,
          batchNo: 'BATCH-2026-005',
          batchName: '2026年5月薪资批次',
          subject: '宇擎成都分公司',
          year: '2026',
          month: '5',
          batchType: '正常发薪',
          peopleCount: 78,
          totalPayable: '1,023,600.00',
          totalDeduction: '178,234.50',
          totalNetPay: '845,365.50',
          trialStatus: '已试算',
          confirmStatus: '已确认',
          payStatus: '已发薪',
          payslipStatus: '已生成',
          trialTime: '2026-05-25 09:40:00',
          createTime: '2026-05-19 13:50:00'
        },
        {
          id: 6,
          batchNo: 'BATCH-2026-006',
          batchName: '2026年6月薪资批次',
          subject: '宇擎杭州分公司',
          year: '2026',
          month: '6',
          batchType: '正常发薪',
          peopleCount: 56,
          totalPayable: '876,300.00',
          totalDeduction: '145,678.90',
          totalNetPay: '730,621.10',
          trialStatus: '已试算',
          confirmStatus: '已确认',
          payStatus: '发薪中',
          payslipStatus: '生成中',
          trialTime: '2026-06-24 15:10:00',
          createTime: '2026-06-18 11:30:00'
        },
        {
          id: 7,
          batchNo: 'BATCH-2026-007',
          batchName: '2026年半年奖批次',
          subject: '宇擎科技集团',
          year: '2026',
          month: '6',
          batchType: '奖金',
          peopleCount: 234,
          totalPayable: '3,245,000.00',
          totalDeduction: '568,750.00',
          totalNetPay: '2,676,250.00',
          trialStatus: '已试算',
          confirmStatus: '已确认',
          payStatus: '已发薪',
          payslipStatus: '已生成',
          trialTime: '2026-06-28 10:00:00',
          createTime: '2026-06-22 16:20:00'
        },
        {
          id: 8,
          batchNo: 'BATCH-2026-008',
          batchName: '2026年7月薪资批次',
          subject: '宇擎武汉分公司',
          year: '2026',
          month: '7',
          batchType: '正常发薪',
          peopleCount: 92,
          totalPayable: '1,345,800.00',
          totalDeduction: '234,567.30',
          totalNetPay: '1,111,232.70',
          trialStatus: '待试算',
          confirmStatus: '待确认',
          payStatus: '待发薪',
          payslipStatus: '未生成',
          trialTime: '-',
          createTime: '2026-07-20 09:00:00'
        },
        {
          id: 9,
          batchNo: 'BATCH-2026-009',
          batchName: '2026年8月薪资批次',
          subject: '宇擎南京分公司',
          year: '2026',
          month: '8',
          batchType: '正常发薪',
          peopleCount: 34,
          totalPayable: '567,800.00',
          totalDeduction: '98,765.40',
          totalNetPay: '469,034.60',
          trialStatus: '待试算',
          confirmStatus: '待确认',
          payStatus: '待发薪',
          payslipStatus: '未生成',
          trialTime: '-',
          createTime: '2026-07-25 14:30:00'
        },
        {
          id: 10,
          batchNo: 'BATCH-2026-010',
          batchName: '2026年9月薪资批次',
          subject: '宇擎西安分公司',
          year: '2026',
          month: '9',
          batchType: '正常发薪',
          peopleCount: 43,
          totalPayable: '678,900.00',
          totalDeduction: '112,345.60',
          totalNetPay: '566,554.40',
          trialStatus: '待试算',
          confirmStatus: '待确认',
          payStatus: '待发薪',
          payslipStatus: '未生成',
          trialTime: '-',
          createTime: '2026-07-28 11:15:00'
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
  width: 78%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-title div:nth-child(2) {
  width: 12%;
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
