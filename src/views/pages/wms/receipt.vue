<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>入库单号</span>
            <input type="text" placeholder="请输入入库单号" />
          </div>
          <div>
            <span>业务单号</span>
            <input type="text" placeholder="请输入业务单号" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>入库单列表</div>
          <div>
            <button>+新增入库单</button>
            <button>导出</button>
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
                <th>&nbsp;</th>
                <th>单号/业务单号</th>
                <th>入库状态</th>
                <th>入库类型</th>
                <th>仓库</th>
                <th>总数量/总金额(元)</th>
                <th>供应商</th>
                <th>操作信息</th>
                <th>备注</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>></td>
                <td>
                  <div>
                    <div>{{ item.orderNo }}</div>
                    <div>{{ item.businessNo }}</div>
                  </div>
                </td>
                <td>
                  <span>{{
                    item.status
                  }}</span>
                </td>
                <td>{{ item.type }}</td>
                <td>{{ item.warehouse }}</td>
                <td>
                  <div>
                    <div>{{ item.totalQty }}</div>
                    <div>¥{{ item.totalAmount }}</div>
                  </div>
                </td>
                <td>{{ item.supplier }}</td>
                <td>
                  <div>
                    <div>{{ item.operator }}</div>
                    <div>{{ item.operateTime }}</div>
                  </div>
                </td>
                <td>{{ item.remark }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                  <button>打印</button>
                </td>
              </tr>
            </tbody>
          </table>
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
          orderNo: "RK20260801001",
          businessNo: "PO20260801001",
          status: "已完成",
          type: "采购入库",
          warehouse: "北京中心仓",
          totalQty: "1,250",
          totalAmount: "125,800.00",
          supplier: "华为技术有限公司",
          operator: "张伟",
          operateTime: "2026-08-01 14:30",
          remark: "已质检",
        },
        {
          orderNo: "RK20260801002",
          businessNo: "PO20260801002",
          status: "待审核",
          type: "采购入库",
          warehouse: "上海分仓",
          totalQty: "860",
          totalAmount: "89,760.00",
          supplier: "腾讯科技有限公司",
          operator: "李娜",
          operateTime: "2026-08-01 10:15",
          remark: "已质检",
        },
        {
          orderNo: "RK20260731003",
          businessNo: "PO20260731003",
          status: "进行中",
          type: "退货入库",
          warehouse: "深圳分仓",
          totalQty: "320",
          totalAmount: "32,500.00",
          supplier: "小米科技有限公司",
          operator: "王强",
          operateTime: "2026-07-31 16:45",
          remark: "质检中",
        },
        {
          orderNo: "RK20260731004",
          businessNo: "PO20260731004",
          status: "已完成",
          type: "调拨入库",
          warehouse: "广州分仓",
          totalQty: "2,100",
          totalAmount: "234,500.00",
          supplier: "字节跳动有限公司",
          operator: "刘洋",
          operateTime: "2026-07-31 09:20",
          remark: "已质检",
        },
        {
          orderNo: "RK20260730005",
          businessNo: "PO20260730005",
          status: "已驳回",
          type: "采购入库",
          warehouse: "成都分仓",
          totalQty: "150",
          totalAmount: "12,800.00",
          supplier: "美团科技有限公司",
          operator: "陈静",
          operateTime: "2026-07-30 11:00",
          remark: "资料不齐全",
        },
        {
          orderNo: "RK20260730006",
          businessNo: "PO20260730006",
          status: "进行中",
          type: "采购入库",
          warehouse: "武汉分仓",
          totalQty: "680",
          totalAmount: "67,890.00",
          supplier: "京东物流有限公司",
          operator: "赵敏",
          operateTime: "2026-07-30 08:50",
          remark: "已质检",
        },
        {
          orderNo: "RK20260729007",
          businessNo: "PO20260729007",
          status: "已完成",
          type: "退货入库",
          warehouse: "杭州分仓",
          totalQty: "45",
          totalAmount: "5,600.00",
          supplier: "网易科技有限公司",
          operator: "孙浩",
          operateTime: "2026-07-29 13:40",
          remark: "已质检",
        },
        {
          orderNo: "RK20260729008",
          businessNo: "PO20260729008",
          status: "待审核",
          type: "调拨入库",
          warehouse: "南京分仓",
          totalQty: "920",
          totalAmount: "98,200.00",
          supplier: "阿里巴巴集团",
          operator: "周婷",
          operateTime: "2026-07-29 09:10",
          remark: "已质检",
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
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 331px;
  height: 42px;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
.top-inp div input {
  width: 215px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-inp div:last-child {
  font-size: 14px;
  color: #006be6;
  text-align: right;
}
.top-inp div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  margin-right: 10px;
}
.top-inp div button:first-child {
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp div button:last-child {
  background-color: #006be6;
  border: 0;
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
.main-top div:first-child {
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:nth-child(2) {
  width: 63px;
}
.main-top div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.main-top div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-top div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.main-tab {
  width: 100%;
  height: 420px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1698px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  border-right: 1px solid #ccc;
  background-color: #ece8e8;
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
  width: 220px;
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:nth-child(2) {
  color: red;
}
</style>
