<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>单据编号</span>
          <input type="text" placeholder="请输入单据编号" />
        </div>
        <div>
          <span>购方名称</span>
          <input type="text" placeholder="请输入购方名称" />
        </div>
        <div>
          <span>单据状态</span>
          <input type="text" placeholder="请输入单据状态" />
        </div>
        <div>
          <button>重置</button>
          <button>搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">开票申请列表</div>
          <div class="top-2">
            <button>+新增</button>
            <button disabled>批量删除</button>
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
                <th><div><input type="checkbox" /></div></th>
                <th><div>单据编号</div></th>
                <th><div>购方名称</div></th>
                <th><div>发票类型</div></th>
                <th><div>价税合计</div></th>
                <th><div>已开票金额</div></th>
                <th><div>单据状态</div></th>
                <th><div>开票进度</div></th>
                <th><div>申请人</div></th>
                <th><div>申请部门</div></th>
                <th><div>创建时间</div></th>
                <th class="ol-col"><div>操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.invoiceNo">
                <td><input type="checkbox"></td>
                <td style="color: #006be6;">{{ item.invoiceNo }}</td>
                <td>{{ item.buyerName }}</td>
                <td>{{ item.invoiceType }}</td>
                <td>{{ item.totalAmount }}</td>
                <td>{{ item.paidAmount }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.progress }}</td>
                <td>{{ item.applicant }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col"><button>删除</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共7条记录<span>20条/页</span></div>
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
          invoiceNo: "KP20260801001",
          buyerName: "华为技术有限公司",
          invoiceType: "增值税专用发票",
          totalAmount: "¥125,800.00",
          paidAmount: "¥125,800.00",
          status: "已开票",
          progress: 100,
          applicant: "张伟",
          department: "财务部",
          createTime: "2026-08-01 09:30",
        },
        {
          invoiceNo: "KP20260801002",
          buyerName: "阿里巴巴集团",
          invoiceType: "增值税普通发票",
          totalAmount: "¥56,320.50",
          paidAmount: "¥30,000.00",
          status: "部分开票",
          progress: 53,
          applicant: "李娜",
          department: "销售部",
          createTime: "2026-08-01 10:15",
        },
        {
          invoiceNo: "KP20260731003",
          buyerName: "腾讯科技有限公司",
          invoiceType: "增值税专用发票",
          totalAmount: "¥89,760.00",
          paidAmount: "¥0.00",
          status: "待审核",
          progress: 0,
          applicant: "王强",
          department: "采购部",
          createTime: "2026-07-31 16:45",
        },
        {
          invoiceNo: "KP20260731004",
          buyerName: "字节跳动有限公司",
          invoiceType: "增值税普通发票",
          totalAmount: "¥234,500.00",
          paidAmount: "¥234,500.00",
          status: "已开票",
          progress: 100,
          applicant: "刘洋",
          department: "市场部",
          createTime: "2026-07-31 14:20",
        },
        {
          invoiceNo: "KP20260730005",
          buyerName: "美团科技有限公司",
          invoiceType: "增值税专用发票",
          totalAmount: "¥67,890.00",
          paidAmount: "¥45,000.00",
          status: "部分开票",
          progress: 66,
          applicant: "陈静",
          department: "运营部",
          createTime: "2026-07-30 11:00",
        },
        {
          invoiceNo: "KP20260730006",
          buyerName: "京东物流有限公司",
          invoiceType: "增值税普通发票",
          totalAmount: "¥43,210.00",
          paidAmount: "¥0.00",
          status: "已驳回",
          progress: 0,
          applicant: "赵敏",
          department: "物流部",
          createTime: "2026-07-30 09:50",
        },
        {
          invoiceNo: "KP20260729007",
          buyerName: "小米科技有限公司",
          invoiceType: "增值税专用发票",
          totalAmount: "¥178,900.00",
          paidAmount: "¥178,900.00",
          status: "已开票",
          progress: 100,
          applicant: "孙浩",
          department: "技术部",
          createTime: "2026-07-29 13:40",
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
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 86px;
  margin-bottom: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}
.app-top div {
  width: 246px;
  height: 42px;
}
.app-top div span {
  display: inline-block;
  width: 90px;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
  text-align: right;
}
.app-top div input {
  width: 136px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.app-top div:last-child {
  font-size: 14px;
  color: #006be6;
  text-align: right;
}
.app-top div:last-child button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 10px;
}
.app-top div:last-child button:last-child {
  border: 0;
  background-color: #006be6;
  color: #fff;
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
}
.main-top .top-1 {
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top .top-2 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 78px;
  height: 32px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  background-color: #006be6;
}
.top-2 button:nth-child(2) {
  width: 106px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border: 0;
  background: #006be6;
  color: #fff;
  border-radius: 50%;
}
.main-top .top-3 {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
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
  min-width: 1560px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
  border-right: none;
  padding: 0;
  white-space: nowrap;
}
.main-tab th > div {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-weight: 600;
  color: #333;
}
.main-tab th.ol-col > div {
  border-right: none;
}
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 20px;
  border-right: 0;
}
.ol-col {
  width: 120px;
  position: sticky;
  right: 0;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: red;
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
  margin-left: 5px;
  padding-top: 3px;
}
</style>