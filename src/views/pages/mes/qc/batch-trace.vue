<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>批次号</span>
            <input type="text" placeholder="请输入批次号" />
          </div>
          <div>
            <span>产品物料</span>
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
          <div>批次追溯列表</div>
          <div>
            <button>+新增批次追溯</button>
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
                <th><div class="th-inner">批次编号</div></th>
                <th><div class="th-inner">产品物料编码</div></th>
                <th><div class="th-inner">产品物料名称</div></th>
                <th><div class="th-inner">规格型号</div></th>
                <th><div class="th-inner">单位</div></th>
                <th><div class="th-inner">供应商编码</div></th>
                <th><div class="th-inner">供应商名称</div></th>
                <th><div class="th-inner">客户编码</div></th>
                <th><div class="th-inner">客户名称</div></th>
                <th><div class="th-inner">销售订单编号</div></th>
                <th><div class="th-inner">采购订单编号</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td style="color: #006be6">{{ item.batchNo }}</td>
                <td>{{ item.materialCode }}</td>
                <td>{{ item.materialName }}</td>
                <td>{{ item.spec }}</td>
                <td>{{ item.unit }}</td>
                <td>{{ item.supplierCode || '-' }}</td>
                <td>{{ item.supplierName || '-' }}</td>
                <td>{{ item.customerCode || '-' }}</td>
                <td>{{ item.customerName || '-' }}</td>
                <td>{{ item.soCode || '-' }}</td>
                <td>{{ item.poCode || '-' }}</td>
                <td class="ol-col">
                  <button>批次追溯</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共{{ tabValue.length }}条记录<span>20条/页</span></div>
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
          batchNo: "B20240115001",
          materialCode: "M-2024-001",
          materialName: "碳钢螺丝",
          spec: "M4×20 镀锌",
          unit: "个",
          supplierCode: "SUP-001",
          supplierName: "华强电子",
          customerCode: "-",
          customerName: "-",
          soCode: "-",
          poCode: "PO-2024-001",
        },
        {
          id: 2,
          batchNo: "B20240120002",
          materialCode: "M-2024-002",
          materialName: "ABS塑料外壳",
          spec: "100×80×30mm 白色",
          unit: "个",
          supplierCode: "SUP-002",
          supplierName: "盛源塑胶",
          customerCode: "-",
          customerName: "-",
          soCode: "-",
          poCode: "PO-2024-002",
        },
        {
          id: 3,
          batchNo: "B20240201003",
          materialCode: "P-2024-006",
          materialName: "智能网关",
          spec: "ZigBee 3.0 白色",
          unit: "台",
          supplierCode: "-",
          supplierName: "-",
          customerCode: "CUST-001",
          customerName: "深圳市华科电子有限公司",
          soCode: "SO-2024-001",
          poCode: "-",
        },
        {
          id: 4,
          batchNo: "B20240215004",
          materialCode: "P-2024-012",
          materialName: "智能灯泡",
          spec: "RGB 9W E27螺口",
          unit: "个",
          supplierCode: "-",
          supplierName: "-",
          customerCode: "CUST-002",
          customerName: "东莞市恒达精密制造厂",
          soCode: "SO-2024-002",
          poCode: "-",
        },
        {
          id: 5,
          batchNo: "B20240301005",
          materialCode: "M-2024-007",
          materialName: "不锈钢弹簧",
          spec: "线径0.8mm 外径10mm",
          unit: "个",
          supplierCode: "SUP-005",
          supplierName: "德力机械",
          customerCode: "-",
          customerName: "-",
          soCode: "-",
          poCode: "PO-2024-005",
        },
        {
          id: 6,
          batchNo: "B20240315006",
          materialCode: "P-2024-018",
          materialName: "智能插座",
          spec: "10A 250V WiFi版",
          unit: "个",
          supplierCode: "-",
          supplierName: "-",
          customerCode: "CUST-005",
          customerName: "佛山市德力机械制造有限公司",
          soCode: "SO-2024-005",
          poCode: "-",
        },
        {
          id: 7,
          batchNo: "B20240401007",
          materialCode: "P-2024-011",
          materialName: "主板半成品",
          spec: "PCB 四层板 带元件",
          unit: "片",
          supplierCode: "-",
          supplierName: "-",
          customerCode: "CUST-007",
          customerName: "惠州市金源包装材料厂",
          soCode: "SO-2024-007",
          poCode: "-",
        },
        {
          id: 8,
          batchNo: "B20240415008",
          materialCode: "M-2024-013",
          materialName: "铜接线端子",
          spec: "DT-10 镀锡",
          unit: "个",
          supplierCode: "SUP-016",
          supplierName: "安达五金",
          customerCode: "-",
          customerName: "-",
          soCode: "-",
          poCode: "PO-2024-012",
        },
        {
          id: 9,
          batchNo: "B20240501009",
          materialCode: "P-2024-005",
          materialName: "电源适配器",
          spec: "12V/2A 带外壳",
          unit: "个",
          supplierCode: "-",
          supplierName: "-",
          customerCode: "CUST-008",
          customerName: "江门市天马玻璃制品有限公司",
          soCode: "SO-2024-008",
          poCode: "-",
        },
        {
          id: 10,
          batchNo: "B20240515010",
          materialCode: "M-2024-014",
          materialName: "橡胶密封圈",
          spec: "内径20mm 外径26mm",
          unit: "个",
          supplierCode: "SUP-020",
          supplierName: "丰源塑胶",
          customerCode: "-",
          customerName: "-",
          soCode: "-",
          poCode: "PO-2024-014",
        },
      ],
    };
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
  background-color: #ece8e8;
  border-right: none;
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
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}

.ol-col {
  width: 100px;
  min-width: 100px;
  position: sticky;
  right: 0;
  z-index: 2;
  border-left: 1px solid #ccc;
  background-color: #fff;
}
.ol-col button {
  width: 56px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  color: #006be6;
}
.ol-col button:hover {
  background-color: #f0f4f9;
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