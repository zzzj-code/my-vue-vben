<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>检验单编号</span>
            <input type="text" placeholder="请输入检验单编号" />
          </div>
          <div>
            <span>客户</span>
            <input type="text" placeholder="" />
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
          <div>出货检验单列表</div>
          <div>
            <button>+新增出货检验单</button>
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
                <th>检验单编号</th>
                <th>检验单名称</th>
                <th>客户名称</th>
                <th>批次号</th>
                <th>产品物料编码</th>
                <th>产品物料名称</th>
                <th>规格型号</th>
                <th>单位</th>
                <th>发货数量</th>
                <th>检测数量</th>
                <th>不合格数</th>
                <th>检测结果</th>
                <th>出货日期</th>
                <th>检测日期</th>
                <th>检测人员</th>
                <th>单据状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.customerName }}</td>
                <td>{{ item.batchNo }}</td>
                <td>{{ item.materialCode }}</td>
                <td>{{ item.materialName }}</td>
                <td>{{ item.spec }}</td>
                <td>{{ item.unit }}</td>
                <td>{{ item.shipQty }}</td>
                <td>{{ item.checkQty }}</td>
                <td>{{ item.defectQty }}</td>
                <td>{{ item.result }}</td>
                <td>{{ item.shipDate }}</td>
                <td>{{ item.checkDate }}</td>
                <td>{{ item.checker }}</td>
                <td>{{ item.status }}</td>
                <td class="ol-col">
                  <button>详情</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共5条记录<span>20条/页</span></div>
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
          code: "OQC-2024-001",
          name: "智能网关出货检验",
          customerName: "深圳市华科电子有限公司",
          batchNo: "B20240120001",
          materialCode: "P-2024-006",
          materialName: "智能网关",
          spec: "ZigBee 3.0 白色",
          unit: "台",
          shipQty: 100,
          checkQty: 20,
          defectQty: 0,
          result: "合格",
          shipDate: "2024-01-20",
          checkDate: "2024-01-19",
          checker: "李明",
          status: "已检验",
        },
        {
          id: 2,
          code: "OQC-2024-002",
          name: "智能灯泡出货检验",
          customerName: "东莞市恒达精密制造厂",
          batchNo: "B20240201002",
          materialCode: "P-2024-012",
          materialName: "智能灯泡",
          spec: "RGB 9W E27螺口",
          unit: "个",
          shipQty: 200,
          checkQty: 30,
          defectQty: 2,
          result: "不合格",
          shipDate: "2024-02-01",
          checkDate: "2024-01-31",
          checker: "王芳",
          status: "已检验",
        },
        {
          id: 3,
          code: "OQC-2024-003",
          name: "电源适配器出货检验",
          customerName: "广州市盛达贸易有限公司",
          batchNo: "B20240215003",
          materialCode: "P-2024-005",
          materialName: "电源适配器",
          spec: "12V/2A 带外壳",
          unit: "个",
          shipQty: 150,
          checkQty: 25,
          defectQty: 1,
          result: "不合格",
          shipDate: "2024-02-15",
          checkDate: "2024-02-14",
          checker: "刘洋",
          status: "已检验",
        },
        {
          id: 4,
          code: "OQC-2024-004",
          name: "智能插座出货检验",
          customerName: "珠海市科创新材料有限公司",
          batchNo: "B20240301004",
          materialCode: "P-2024-018",
          materialName: "智能插座",
          spec: "10A 250V WiFi版",
          unit: "个",
          shipQty: 120,
          checkQty: 20,
          defectQty: 0,
          result: "合格",
          shipDate: "2024-03-01",
          checkDate: "2024-02-29",
          checker: "陈静",
          status: "已检验",
        },
        {
          id: 5,
          code: "OQC-2024-005",
          name: "传感器半成品出货检验",
          customerName: "佛山市德力机械制造有限公司",
          batchNo: "B20240315005",
          materialCode: "P-2024-017",
          materialName: "传感器半成品",
          spec: "温湿度 SHT30",
          unit: "个",
          shipQty: 200,
          checkQty: 30,
          defectQty: 1,
          result: "不合格",
          shipDate: "2024-03-15",
          checkDate: "2024-03-14",
          checker: "赵刚",
          status: "已检验",
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
  min-width: 1100px;
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
