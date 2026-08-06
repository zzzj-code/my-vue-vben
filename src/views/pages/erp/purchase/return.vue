<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>退货单号</span>
            <input type="text" placeholder="请输入退货单号" />
          </div>
          <div>
            <span>产品</span>
            <input type="text" placeholder="请输入产品" />
          </div>
          <div>
            <button>重置</button>
            <button>搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">采购退货列表</div>
          <div class="top-2">
            <button>+新增采购订单</button>
            <button>导出</button>
            <button disabled>批量删除</button>
            <button>🔍</button>
          </div>
          <div class="top-3">
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th class="col-check">
                  <div class="th-inner"><input type="checkbox" /></div>
                </th>
                <th class="col-id"><div class="th-inner">退货单号</div></th>
                <th><div class="th-inner">退货产品信息</div></th>
                <th><div class="th-inner">供应商</div></th>
                <th><div class="th-inner">退货时间</div></th>
                <th><div class="th-inner">创建人</div></th>
                <th><div class="th-inner">总数量</div></th>
                <th><div class="th-inner">应退金额</div></th>
                <th><div class="th-inner">已退金额</div></th>
                <th><div class="th-inner">未退金额</div></th>
                <th><div class="th-inner">审批状态</div></th>
                <th class="ol-col" style="width: 260px;">
                  <div class="th-inner no-border">操作</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td class="col-check"><input type="checkbox" /></td>
                <td class="col-id">{{ item.id }}</td>
                <td>{{ item.product }}</td>
                <td>{{ item.supplier }}</td>
                <td>{{ item.returnTime }}</td>
                <td>{{ item.creator }}</td>
                <td>{{ item.quantity }}</td>
                <td>¥{{ item.shouldAmount.toFixed(2) }}</td>
                <td>¥{{ item.paidAmount.toFixed(2) }}</td>
                <td>¥{{ item.unpaidAmount.toFixed(2) }}</td>
                <td>
                  <span :style="{
                    color: getStatusColor(item.status),
                    backgroundColor: getStatusBg(item.status),
                    padding: '2px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    display: 'inline-block',
                    fontWeight: '500'
                  }">
                    {{ item.status }}
                  </span>
                </td>
                <td class="ol-col">详情&nbsp;&nbsp;编辑&nbsp;&nbsp;删除</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共{{ tabValue.length }}条数据<span>20条/页</span></div>
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
          id: "RET-2024-001",
          product: "华为 Mate 60 Pro 256GB",
          supplier: "华为技术有限公司",
          returnTime: "2024-01-18 10:30",
          creator: "张伟",
          quantity: 2,
          shouldAmount: 13998.00,
          paidAmount: 13998.00,
          unpaidAmount: 0.00,
          status: "已退款",
        },
        {
          id: "RET-2024-002",
          product: "小米 14 Ultra 512GB",
          supplier: "小米科技有限公司",
          returnTime: "2024-01-28 14:20",
          creator: "王强",
          quantity: 5,
          shouldAmount: 34995.00,
          paidAmount: 20000.00,
          unpaidAmount: 14995.00,
          status: "部分退款",
        },
        {
          id: "RET-2024-003",
          product: "联想 ThinkPad X1 Carbon",
          supplier: "联想集团有限公司",
          returnTime: "2024-02-05 09:15",
          creator: "李娜",
          quantity: 1,
          shouldAmount: 7999.00,
          paidAmount: 0.00,
          unpaidAmount: 7999.00,
          status: "待审核",
        },
        {
          id: "RET-2024-004",
          product: "Apple iPhone 15 Pro Max",
          supplier: "苹果电子产品商贸有限公司",
          returnTime: "2024-02-10 16:40",
          creator: "刘洋",
          quantity: 3,
          shouldAmount: 29997.00,
          paidAmount: 29997.00,
          unpaidAmount: 0.00,
          status: "已退款",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      const map = {
        '已退款': '#52c41a',
        '部分退款': '#faad14',
        '待审核': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '已退款': '#f6ffed',
        '部分退款': '#fffbe6',
        '待审核': '#fff2f0'
      };
      return map[status] || '#fff';
    }
  }
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
  margin-bottom: 15px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 330px;
  height: 100%;
  font-size: 14px;
  color: #006be6;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  color: black;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
}
.top-inp div input {
  width: 220px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.top-inp div:last-child {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 140px;
  padding-right: 10px;
}
.top-inp div:last-child button:first-child {
  width: 63px;
  height: 32px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
}
.top-inp div:last-child button:last-child {
  width: 63px;
  height: 32px;
  border: 0;
  color: #fff;
  background-color: #006be6;
  border-radius: 10px;
}
.app-main {
  width: 100%;
  height: 489px;
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
  width: 50%;
  font-size: 16px;
  font-weight: 600;
}
.top-2 {
  width: 40%;
  height: 32px;
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
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-2 button:nth-child(3) {
  width: 106px;
  height: 32px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #ccc;
  border-radius: 10px;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #006be6;
  border: 0;
}
.top-3 {
  width: 10%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
}
.main-tab {
  width: 100%;
  height: 398px;
  border-radius: 5px;
  border: 1px solid #ccc;
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
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #f0eaea;
  border-right: none;
  text-align: center;
  padding: 0;
  white-space: nowrap;
}

/* ===== 表头内部 div：承载右边框 ===== */
.th-inner {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

/* 操作列不显示右边框 */
.th-inner.no-border {
  border-right: none;
}

.main-tab td {
  height: 40px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 0 8px;
  background-color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

/* 固定列：左侧复选框 */
.col-check {
  position: sticky;
  left: 0;
  z-index: 2;
  background-color: #f0eaea;
}
.col-check input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}


/* 固定列：右侧操作 */
.ol-col {
  position: sticky;
  right: 0;
  z-index: 2;
  background-color: #fff;
  width: 260px;
  min-width: 260px;
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
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>