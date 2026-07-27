<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-title">
          <div>员工数</div>
          <div>14</div>
        </div>
        <div class="top-title">
          <div>应发合计</div>
          <div>213,420.00</div>
        </div>
        <div class="top-title">
          <div>应扣合计</div>
          <div>82,878.53</div>
        </div>
        <div class="top-title">
          <div>实发合计</div>
          <div>130,541.47</div>
        </div>
        <div class="top-title">
          <div>人工成本</div>
          <div>266,149.00</div>
        </div>
      </div>
      <div class="app-title">
        <div class="title-div">
          <div>
            <span>薪资批次</span>
            <input type="text" />
          </div>
          <div>
            <span>员工姓名</span>
            <input type="text" />
          </div>
          <div>
            <span>部门</span>
            <input type="text" />
          </div>
          <div>
            <span>异常</span>
            <input type="text" />
          </div>
          <div>
            <button>重置</button>
            <button>查询</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-title">
          <div>薪资台账</div>
          <div><button>🔍</button></div>
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
                <th style="width: 40px;"><input type="checkbox"/></th>
                <th style="width: 140px;">批次编号</th>
                <th>批次名称</th>
                <th>薪酬主体</th>
                <th>年份</th>
                <th>月份</th>
                <th>员工姓名</th>
                <th>公司</th>
                <th>部门</th>
                <th>应发</th>
                <th>应扣</th>
                <th>实发</th>
                <th>人工成本</th>
                <th>异常</th>
                <th>异常标签</th>
                <th>已发薪</th>
                <th>已发条</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td><input type="checkbox"/></td>
                <td>{{ item.batchNo }}</td>
                <td>{{ item.batchName }}</td>
                <td>{{ item.subject }}</td>
                <td>{{ item.year }}</td>
                <td>{{ item.month }}</td>
                <td>{{ item.employeeName }}</td>
                <td>{{ item.company }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.totalPayable }}</td>
                <td>{{ item.totalDeduction }}</td>
                <td>{{ item.totalNetPay }}</td>
                <td>{{ item.laborCost }}</td>
                <td>{{ item.exception }}</td>
                <td>{{ item.exceptionTag }}</td>
                <td>{{ item.isPaid }}</td>
                <td>{{ item.isPayslip }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共14条记录<span>20条/页</span></div>
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
          batchNo: "BATCH-2026-001",
          batchName: "2026年1月薪资批次",
          subject: "宇擎科技集团",
          year: "2026",
          month: "1",
          employeeName: "张三",
          company: "宇擎科技集团",
          department: "技术部",
          totalPayable: "15,800.00",
          totalDeduction: "3,245.50",
          totalNetPay: "12,554.50",
          laborCost: "18,960.00",
          exception: "正常",
          exceptionTag: "-",
          isPaid: "已发薪",
          isPayslip: "已发条",
        },
        {
          id: 2,
          batchNo: "BATCH-2026-001",
          batchName: "2026年1月薪资批次",
          subject: "宇擎科技集团",
          year: "2026",
          month: "1",
          employeeName: "李娜",
          company: "宇擎科技集团",
          department: "产品部",
          totalPayable: "14,200.00",
          totalDeduction: "2,890.30",
          totalNetPay: "11,309.70",
          laborCost: "17,040.00",
          exception: "正常",
          exceptionTag: "-",
          isPaid: "已发薪",
          isPayslip: "已发条",
        },
        {
          id: 3,
          batchNo: "BATCH-2026-001",
          batchName: "2026年1月薪资批次",
          subject: "宇擎科技集团",
          year: "2026",
          month: "1",
          employeeName: "王强",
          company: "宇擎科技集团",
          department: "市场部",
          totalPayable: "12,600.00",
          totalDeduction: "2,560.80",
          totalNetPay: "10,039.20",
          laborCost: "15,120.00",
          exception: "正常",
          exceptionTag: "-",
          isPaid: "已发薪",
          isPayslip: "已发条",
        },
        {
          id: 4,
          batchNo: "BATCH-2026-001",
          batchName: "2026年1月薪资批次",
          subject: "宇擎科技集团",
          year: "2026",
          month: "1",
          employeeName: "刘洋",
          company: "宇擎科技集团",
          department: "设计部",
          totalPayable: "13,800.00",
          totalDeduction: "2,756.40",
          totalNetPay: "11,043.60",
          laborCost: "16,560.00",
          exception: "正常",
          exceptionTag: "-",
          isPaid: "已发薪",
          isPayslip: "已发条",
        },
        {
          id: 5,
          batchNo: "BATCH-2026-001",
          batchName: "2026年1月薪资批次",
          subject: "宇擎科技集团",
          year: "2026",
          month: "1",
          employeeName: "陈晨",
          company: "宇擎科技集团",
          department: "人事部",
          totalPayable: "11,500.00",
          totalDeduction: "2,345.20",
          totalNetPay: "9,154.80",
          laborCost: "13,800.00",
          exception: "正常",
          exceptionTag: "-",
          isPaid: "已发薪",
          isPayslip: "已发条",
        },
        {
          id: 6,
          batchNo: "BATCH-2026-002",
          batchName: "2026年2月薪资批次",
          subject: "宇擎深圳分公司",
          year: "2026",
          month: "2",
          employeeName: "杨丽",
          company: "宇擎深圳分公司",
          department: "技术部",
          totalPayable: "16,500.00",
          totalDeduction: "3,456.80",
          totalNetPay: "13,043.20",
          laborCost: "19,800.00",
          exception: "正常",
          exceptionTag: "-",
          isPaid: "已发薪",
          isPayslip: "已发条",
        },
        {
          id: 7,
          batchNo: "BATCH-2026-002",
          batchName: "2026年2月薪资批次",
          subject: "宇擎深圳分公司",
          year: "2026",
          month: "2",
          employeeName: "赵岩",
          company: "宇擎深圳分公司",
          department: "产品部",
          totalPayable: "15,200.00",
          totalDeduction: "3,124.50",
          totalNetPay: "12,075.50",
          laborCost: "18,240.00",
          exception: "正常",
          exceptionTag: "-",
          isPaid: "已发薪",
          isPayslip: "已发条",
        },
        {
          id: 8,
          batchNo: "BATCH-2026-002",
          batchName: "2026年2月薪资批次",
          subject: "宇擎深圳分公司",
          year: "2026",
          month: "2",
          employeeName: "孙悦",
          company: "宇擎深圳分公司",
          department: "市场部",
          totalPayable: "13,800.00",
          totalDeduction: "2,867.90",
          totalNetPay: "10,932.10",
          laborCost: "16,560.00",
          exception: "银行卡异常",
          exceptionTag: "银行信息有误",
          isPaid: "待处理",
          isPayslip: "未发条",
        },
        {
          id: 9,
          batchNo: "BATCH-2026-002",
          batchName: "2026年2月薪资批次",
          subject: "宇擎深圳分公司",
          year: "2026",
          month: "2",
          employeeName: "周琳",
          company: "宇擎深圳分公司",
          department: "设计部",
          totalPayable: "14,500.00",
          totalDeduction: "2,978.60",
          totalNetPay: "11,521.40",
          laborCost: "17,400.00",
          exception: "正常",
          exceptionTag: "-",
          isPaid: "已发薪",
          isPayslip: "已发条",
        },
        {
          id: 10,
          batchNo: "BATCH-2026-003",
          batchName: "2026年3月薪资批次",
          subject: "宇擎上海分公司",
          year: "2026",
          month: "3",
          employeeName: "吴迪",
          company: "宇擎上海分公司",
          department: "技术部",
          totalPayable: "17,200.00",
          totalDeduction: "3,678.90",
          totalNetPay: "13,521.10",
          laborCost: "20,640.00",
          exception: "正常",
          exceptionTag: "-",
          isPaid: "已发薪",
          isPayslip: "已发条",
        },
        {
          id: 11,
          batchNo: "BATCH-2026-003",
          batchName: "2026年3月薪资批次",
          subject: "宇擎上海分公司",
          year: "2026",
          month: "3",
          employeeName: "郑丽",
          company: "宇擎上海分公司",
          department: "财务部",
          totalPayable: "13,200.00",
          totalDeduction: "2,734.80",
          totalNetPay: "10,465.20",
          laborCost: "15,840.00",
          exception: "正常",
          exceptionTag: "-",
          isPaid: "已发薪",
          isPayslip: "已发条",
        },
        {
          id: 12,
          batchNo: "BATCH-2026-003",
          batchName: "2026年3月薪资批次",
          subject: "宇擎上海分公司",
          year: "2026",
          month: "3",
          employeeName: "冯华",
          company: "宇擎上海分公司",
          department: "人事部",
          totalPayable: "12,800.00",
          totalDeduction: "2,634.20",
          totalNetPay: "10,165.80",
          laborCost: "15,360.00",
          exception: "银行卡异常",
          exceptionTag: "账户已冻结",
          isPaid: "待处理",
          isPayslip: "未发条",
        },
        {
          id: 13,
          batchNo: "BATCH-2026-003",
          batchName: "2026年3月薪资批次",
          subject: "宇擎上海分公司",
          year: "2026",
          month: "3",
          employeeName: "陈明",
          company: "宇擎上海分公司",
          department: "市场部",
          totalPayable: "14,800.00",
          totalDeduction: "3,045.60",
          totalNetPay: "11,754.40",
          laborCost: "17,760.00",
          exception: "正常",
          exceptionTag: "-",
          isPaid: "已发薪",
          isPayslip: "已发条",
        },
        {
          id: 14,
          batchNo: "BATCH-2026-003",
          batchName: "2026年3月薪资批次",
          subject: "宇擎上海分公司",
          year: "2026",
          month: "3",
          employeeName: "林芳",
          company: "宇擎上海分公司",
          department: "产品部",
          totalPayable: "15,500.00",
          totalDeduction: "3,198.50",
          totalNetPay: "12,301.50",
          laborCost: "18,600.00",
          exception: "计算异常",
          exceptionTag: "个税计算有误",
          isPaid: "处理中",
          isPayslip: "未发条",
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
  height: 700px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 114px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.app-top .top-title {
  width: 196px;
  height: 100%;
  border-radius: 10px;
  padding: 24px;
  background-color: #fff;
}
.app-top div:first-child {
  width: 153px;
}
.top-title div:first-child {
  color: #ccc;
  font-size: 14px;
}
.top-title div:last-child {
  font-size: 24px;
}

.app-title {
  width: 100%;
  height: 86px;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
  padding: 12px 0 32px;
  margin-bottom: 10px;
}
.title-div {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.title-div div {
  width: 193px;
  height: 100%;
  /* border: 1px solid red; */
  margin-top: 10px;
  color: #006be6;
  font-size: 13px;
  display: flex;
  align-items: center;
}
.title-div div span {
  display: inline-block;
  width: 100px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
  text-align: right;
  color: black;
}
.title-div div input {
  width: 83px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.title-div div:last-child {
  display: flex;
  justify-content: space-between;
}
.title-div div:last-child button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
}
.title-div div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.title-div div button:last-child {
  border: 0;
  background-color: #006be6;
  color: #fff;
}
.app-main {
  width: 100%;
  height: 480px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  padding: 10px;
}
.main-title {
  width: 100%;
  height: 45px;
  /* border: 1px solid red; */
  display: flex;
}
.main-title div:first-child {
  width: 85%;
  font-size: 16px;
  font-weight: 600px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.main-title div:nth-child(2) {
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  /* text-align: right; */
  padding-left: 15px;
}
.main-title div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  justify-content: space-between;
}
.main-title div:nth-child(2) button {
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50px;
  background-color: #006be6;
}
.main-title div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.main-tab {
  width: 100%;
  height: 390px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: auto;
  display: flex;
  flex-direction: column;
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
.main-floot {
  width: 100%;
  height: 35px;
  /* border: 1px solid red; */
  font-size: 13px;
  margin-top: 5px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 26px;
  text-align: center;
  padding-top: 3px;
  border: 1px solid #ccc;
  margin-left: 3px;
  border-radius: 5px;
}
</style>
