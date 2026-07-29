<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>产品</span>
            <input type="text" placeholder="请输入产品" />
          </div>
          <div>
            <span>仓库</span>
            <input type="text" placeholder="请输入仓库" />
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
          <div class="top-1">产品库存明细列表</div>
          <div class="top-2">
            <button>导出</button>
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
                <th>产品名称</th>
                <th>产品分类</th>
                <th>产品单位</th>
                <th>仓库</th>
                <th>类型</th>
                <th>出入库单号</th>
                <th>出入库日期</th>
                <th>出入库数量</th>
                <th>库存量</th>
                <th>操作人</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.product }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.unit }}</td>
                <td>{{ item.warehouse }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.orderNo }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.stock }}</td>
                <td>{{ item.operator }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共18条数据<span>20条/页</span></div>
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
          product: "华为 Mate 60 Pro 256GB",
          category: "手机通讯",
          unit: "台",
          warehouse: "深圳中心仓",
          type: "入库",
          orderNo: "IN-2024-001",
          date: "2024-01-16 10:30",
          quantity: 50,
          stock: 120,
          operator: "张伟",
        },
        {
          product: "华为 Mate 60 Pro 256GB",
          category: "手机通讯",
          unit: "台",
          warehouse: "深圳中心仓",
          type: "出库",
          orderNo: "OUT-2024-001",
          date: "2024-01-18 14:20",
          quantity: 10,
          stock: 110,
          operator: "李明",
        },
        {
          product: "华为 Mate 60 Pro 256GB",
          category: "手机通讯",
          unit: "台",
          warehouse: "深圳中心仓",
          type: "入库",
          orderNo: "IN-2024-005",
          date: "2024-01-25 09:15",
          quantity: 30,
          stock: 140,
          operator: "张伟",
        },
        {
          product: "联想 ThinkPad X1 Carbon",
          category: "电脑办公",
          unit: "台",
          warehouse: "北京分仓",
          type: "入库",
          orderNo: "IN-2024-002",
          date: "2024-01-21 14:20",
          quantity: 30,
          stock: 80,
          operator: "李娜",
        },
        {
          product: "联想 ThinkPad X1 Carbon",
          category: "电脑办公",
          unit: "台",
          warehouse: "北京分仓",
          type: "出库",
          orderNo: "OUT-2024-003",
          date: "2024-01-23 11:00",
          quantity: 5,
          stock: 75,
          operator: "王强",
        },
        {
          product: "小米 14 Ultra 512GB",
          category: "手机通讯",
          unit: "台",
          warehouse: "广州分仓",
          type: "入库",
          orderNo: "IN-2024-003",
          date: "2024-01-26 09:15",
          quantity: 100,
          stock: 180,
          operator: "王强",
        },
        {
          product: "小米 14 Ultra 512GB",
          category: "手机通讯",
          unit: "台",
          warehouse: "广州分仓",
          type: "出库",
          orderNo: "OUT-2024-005",
          date: "2024-01-28 16:30",
          quantity: 25,
          stock: 155,
          operator: "刘洋",
        },
        {
          product: "Apple iPhone 15 Pro Max",
          category: "手机通讯",
          unit: "台",
          warehouse: "上海分仓",
          type: "入库",
          orderNo: "IN-2024-004",
          date: "2024-02-02 16:40",
          quantity: 80,
          stock: 95,
          operator: "刘洋",
        },
        {
          product: "三星 Galaxy S24 Ultra",
          category: "手机通讯",
          unit: "台",
          warehouse: "深圳中心仓",
          type: "入库",
          orderNo: "IN-2024-005",
          date: "2024-02-06 11:00",
          quantity: 60,
          stock: 150,
          operator: "陈静",
        },
        {
          product: "三星 Galaxy S24 Ultra",
          category: "手机通讯",
          unit: "台",
          warehouse: "深圳中心仓",
          type: "出库",
          orderNo: "OUT-2024-008",
          date: "2024-02-08 09:30",
          quantity: 15,
          stock: 135,
          operator: "赵磊",
        },
        {
          product: "戴尔 XPS 16 笔记本",
          category: "电脑办公",
          unit: "台",
          warehouse: "北京分仓",
          type: "入库",
          orderNo: "IN-2024-006",
          date: "2024-02-11 13:30",
          quantity: 25,
          stock: 55,
          operator: "赵磊",
        },
        {
          product: "索尼 WH-1000XM5 耳机",
          category: "音频设备",
          unit: "副",
          warehouse: "深圳中心仓",
          type: "入库",
          orderNo: "IN-2024-007",
          date: "2024-02-16 08:50",
          quantity: 200,
          stock: 300,
          operator: "孙悦",
        },
        {
          product: "索尼 WH-1000XM5 耳机",
          category: "音频设备",
          unit: "副",
          warehouse: "深圳中心仓",
          type: "出库",
          orderNo: "OUT-2024-012",
          date: "2024-02-18 15:20",
          quantity: 30,
          stock: 270,
          operator: "周明",
        },
        {
          product: "格力空调 KFR-35GW",
          category: "家用电器",
          unit: "台",
          warehouse: "广州分仓",
          type: "入库",
          orderNo: "IN-2024-008",
          date: "2024-02-21 15:10",
          quantity: 150,
          stock: 200,
          operator: "周明",
        },
        {
          product: "海尔冰箱 BCD-500",
          category: "家用电器",
          unit: "台",
          warehouse: "上海分仓",
          type: "入库",
          orderNo: "IN-2024-009",
          date: "2024-03-02 10:00",
          quantity: 40,
          stock: 60,
          operator: "吴芳",
        },
        {
          product: "小米电视 S Pro 65",
          category: "家用电器",
          unit: "台",
          warehouse: "深圳中心仓",
          type: "入库",
          orderNo: "IN-2024-010",
          date: "2024-03-06 14:30",
          quantity: 120,
          stock: 180,
          operator: "郑华",
        },
        {
          product: "小米电视 S Pro 65",
          category: "家用电器",
          unit: "台",
          warehouse: "深圳中心仓",
          type: "出库",
          orderNo: "OUT-2024-020",
          date: "2024-03-08 10:00",
          quantity: 20,
          stock: 160,
          operator: "张伟",
        },
        {
          product: "OPPO Find X7 Ultra",
          category: "手机通讯",
          unit: "台",
          warehouse: "广州分仓",
          type: "入库",
          orderNo: "IN-2024-011",
          date: "2024-03-10 09:30",
          quantity: 92,
          stock: 120,
          operator: "林峰",
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
  /* border: 1px solid red; */
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
  width: 77%;
  font-size: 16px;
  font-weight: 600;
}
.top-2 {
  width: 13%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 78px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  border: 0;
  color: #fff;
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
}
.main-tab th {
  height: 40px;
  font-size: 14px;
  border-right: 1px solid #ccc;
  background-color: #f0eaea;
  text-align: center;
  padding: 0 24px;
}
.main-tab td {
  height: 40px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 0 24px;
  background-color: #fff;
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
