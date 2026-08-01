<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>装箱单编号</span>
            <input type="text" placeholder="请输入装箱单编号" />
          </div>
          <div>
            <span>销售订单编号</span>
            <input type="text" placeholder="请输入销售订单编号" />
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
          <div>装箱单列表</div>
          <div>
            <button>+新增装箱单</button>
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
                <th>装箱单编号</th>
                <th>装箱日期</th>
                <th>销售订单编号</th>
                <th>发票编号</th>
                <th>客户编码</th>
                <th>客户名称</th>
                <th>箱长度</th>
                <th>箱宽度</th>
                <th>箱高度</th>
                <th>尺寸单位</th>
                <th>净重</th>
                <th>毛重</th>
                <th>重量单位</th>
                <th>检查员</th>
                <th>检查员</th>
                <th>单据状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.packDate }}</td>
                <td>{{ item.soCode }}</td>
                <td>{{ item.invoiceCode }}</td>
                <td>{{ item.customerCode }}</td>
                <td>{{ item.customerName }}</td>
                <td>{{ item.length }}</td>
                <td>{{ item.width }}</td>
                <td>{{ item.height }}</td>
                <td>{{ item.sizeUnit }}</td>
                <td>{{ item.netWeight }}</td>
                <td>{{ item.grossWeight }}</td>
                <td>{{ item.weightUnit }}</td>
                <td>{{ item.inspector }}</td>
                <td>{{ item.checker }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button>删除</button>
                </td>
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
          id: 1,
          code: "PK-2024-001",
          packDate: "2024-01-20",
          soCode: "SO-2024-001",
          invoiceCode: "INV-2024-001",
          customerCode: "CUST-001",
          customerName: "深圳市华科电子有限公司",
          length: "40",
          width: "30",
          height: "25",
          sizeUnit: "cm",
          netWeight: "5.2",
          grossWeight: "6.8",
          weightUnit: "kg",
          inspector: "张明",
          checker: "李芳",
          status: "已完成",
        },
        {
          id: 2,
          code: "PK-2024-002",
          packDate: "2024-02-01",
          soCode: "SO-2024-002",
          invoiceCode: "INV-2024-002",
          customerCode: "CUST-002",
          customerName: "东莞市恒达精密制造厂",
          length: "50",
          width: "40",
          height: "35",
          sizeUnit: "cm",
          netWeight: "8.5",
          grossWeight: "10.2",
          weightUnit: "kg",
          inspector: "李强",
          checker: "王丽",
          status: "待装箱",
        },
        {
          id: 3,
          code: "PK-2024-003",
          packDate: "2024-02-15",
          soCode: "SO-2024-003",
          invoiceCode: "INV-2024-003",
          customerCode: "CUST-003",
          customerName: "广州市盛达贸易有限公司",
          length: "60",
          width: "45",
          height: "40",
          sizeUnit: "cm",
          netWeight: "12.0",
          grossWeight: "14.5",
          weightUnit: "kg",
          inspector: "王芳",
          checker: "赵敏",
          status: "已完成",
        },
        {
          id: 4,
          code: "PK-2024-004",
          packDate: "2024-03-01",
          soCode: "SO-2024-004",
          invoiceCode: "INV-2024-004",
          customerCode: "CUST-004",
          customerName: "珠海市科创新材料有限公司",
          length: "35",
          width: "25",
          height: "20",
          sizeUnit: "cm",
          netWeight: "3.8",
          grossWeight: "4.5",
          weightUnit: "kg",
          inspector: "刘洋",
          checker: "孙丽",
          status: "待检验",
        },
        {
          id: 5,
          code: "PK-2024-005",
          packDate: "2024-03-15",
          soCode: "SO-2024-005",
          invoiceCode: "INV-2024-005",
          customerCode: "CUST-005",
          customerName: "佛山市德力机械制造有限公司",
          length: "80",
          width: "60",
          height: "50",
          sizeUnit: "cm",
          netWeight: "25.0",
          grossWeight: "28.5",
          weightUnit: "kg",
          inspector: "陈志",
          checker: "周婷",
          status: "已完成",
        },
        {
          id: 6,
          code: "PK-2024-006",
          packDate: "2024-04-01",
          soCode: "SO-2024-006",
          invoiceCode: "INV-2024-006",
          customerCode: "CUST-006",
          customerName: "中山市宏远电器有限公司",
          length: "45",
          width: "35",
          height: "30",
          sizeUnit: "cm",
          netWeight: "6.5",
          grossWeight: "8.0",
          weightUnit: "kg",
          inspector: "赵娜",
          checker: "吴凯",
          status: "待装箱",
        },
        {
          id: 7,
          code: "PK-2024-007",
          packDate: "2024-04-15",
          soCode: "SO-2024-007",
          invoiceCode: "INV-2024-007",
          customerCode: "CUST-007",
          customerName: "惠州市金源包装材料厂",
          length: "55",
          width: "42",
          height: "38",
          sizeUnit: "cm",
          netWeight: "9.8",
          grossWeight: "11.5",
          weightUnit: "kg",
          inspector: "孙鹏",
          checker: "郑丽",
          status: "已完成",
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
  height: 390px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1790px;
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
  width: 160px;
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
}
.ol-col button {
  width: 56px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:last-child {
  color: red;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 8px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 3px;
  margin-left: 5px;
  text-align: center;
}
</style>
