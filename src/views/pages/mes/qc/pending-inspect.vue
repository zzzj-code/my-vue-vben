<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>方案编号</span>
            <input type="text" placeholder="请输入方案编号" />
          </div>
          <div>
            <span>方案名称</span>
            <input type="text" placeholder="请输入方案名称" />
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
          <div>质检方案列表</div>
          <div>
            <button>+新增质检方案</button>
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
                <th><div class="th-inner">来源单据类型</div></th>
                <th><div class="th-inner">来源单据编号</div></th>
                <th><div class="th-inner">检验类型</div></th>
                <th><div class="th-inner">物料编码</div></th>
                <th><div class="th-inner">物料名称</div></th>
                <th><div class="th-inner">规格型号</div></th>
                <th><div class="th-inner">待检数量</div></th>
                <th><div class="th-inner">单位</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getSourceTypeBg(item.sourceType),
                      color: getSourceTypeColor(item.sourceType),
                      border: `1px solid ${getSourceTypeColor(item.sourceType)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.sourceType }}</span>
                </td>
                <td style="color: #006be6">{{ item.sourceCode }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: '#e6f6ff',
                      color: '#006be6',
                      border: '1px solid #006be6',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.checkType }}</span>
                </td>
                <td>{{ item.materialCode }}</td>
                <td>{{ item.materialName }}</td>
                <td>{{ item.spec }}</td>
                <td>{{ item.qty }}</td>
                <td>{{ item.unit }}</td>
                <td class="ol-col">
                  <button>+来料检验</button>
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
          sourceType: "采购入库单",
          sourceCode: "RN-2024-001",
          checkType: "来料检验",
          materialCode: "M-2024-001",
          materialName: "碳钢螺丝",
          spec: "M4×20 镀锌",
          qty: 5000,
          unit: "个",
        },
        {
          id: 2,
          sourceType: "采购入库单",
          sourceCode: "RN-2024-003",
          checkType: "来料检验",
          materialCode: "M-2024-003",
          materialName: "瓦楞纸箱",
          spec: "400×300×200mm 五层",
          qty: 3000,
          unit: "个",
        },
        {
          id: 3,
          sourceType: "生产工单",
          sourceCode: "MO-2024-002",
          checkType: "过程检验",
          materialCode: "P-2024-012",
          materialName: "智能灯泡",
          spec: "RGB 9W E27螺口",
          qty: 200,
          unit: "个",
        },
        {
          id: 4,
          sourceType: "生产工单",
          sourceCode: "MO-2024-004",
          checkType: "首件检验",
          materialCode: "P-2024-011",
          materialName: "主板半成品",
          spec: "PCB 四层板 带元件",
          qty: 300,
          unit: "片",
        },
        {
          id: 5,
          sourceType: "采购入库单",
          sourceCode: "RN-2024-005",
          checkType: "来料检验",
          materialCode: "M-2024-007",
          materialName: "不锈钢弹簧",
          spec: "线径0.8mm 外径10mm",
          qty: 8000,
          unit: "个",
        },
        {
          id: 6,
          sourceType: "生产工单",
          sourceCode: "MO-2024-005",
          checkType: "过程检验",
          materialCode: "P-2024-018",
          materialName: "智能插座",
          spec: "10A 250V WiFi版",
          qty: 120,
          unit: "个",
        },
        {
          id: 7,
          sourceType: "采购入库单",
          sourceCode: "RN-2024-008",
          checkType: "来料检验",
          materialCode: "M-2024-013",
          materialName: "铜接线端子",
          spec: "DT-10 镀锡",
          qty: 10000,
          unit: "个",
        },
        {
          id: 8,
          sourceType: "生产工单",
          sourceCode: "MO-2024-003",
          checkType: "首件检验",
          materialCode: "P-2024-005",
          materialName: "电源适配器",
          spec: "12V/2A 裸板",
          qty: 150,
          unit: "个",
        },
        {
          id: 9,
          sourceType: "采购入库单",
          sourceCode: "RN-2024-010",
          checkType: "来料检验",
          materialCode: "M-2024-010",
          materialName: "散热硅脂",
          spec: "1g/支 导热系数6W/mK",
          qty: 300,
          unit: "支",
        },
        {
          id: 10,
          sourceType: "生产工单",
          sourceCode: "MO-2024-006",
          checkType: "过程检验",
          materialCode: "P-2024-017",
          materialName: "传感器半成品",
          spec: "温湿度 SHT30",
          qty: 200,
          unit: "个",
        },
        {
          id: 11,
          sourceType: "采购入库单",
          sourceCode: "RN-2024-012",
          checkType: "来料检验",
          materialCode: "M-2024-014",
          materialName: "橡胶密封圈",
          spec: "内径20mm 外径26mm",
          qty: 6000,
          unit: "个",
        },
        {
          id: 12,
          sourceType: "生产工单",
          sourceCode: "MO-2024-007",
          checkType: "首件检验",
          materialCode: "P-2024-006",
          materialName: "智能网关",
          spec: "ZigBee 3.0 黑色",
          qty: 80,
          unit: "台",
        },
        {
          id: 13,
          sourceType: "生产工单",
          sourceCode: "MO-2024-008",
          checkType: "过程检验",
          materialCode: "P-2024-012",
          materialName: "智能灯泡",
          spec: "RGB 9W E27螺口",
          qty: 150,
          unit: "个",
        },
      ],
    };
  },
  methods: {
    getSourceTypeColor(type) {
      const map = {
        '采购入库单': '#52c41a',
        '生产工单': '#1890ff'
      };
      return map[type] || '#333';
    },
    getSourceTypeBg(type) {
      const map = {
        '采购入库单': '#f6ffed',
        '生产工单': '#e6f7ff'
      };
      return map[type] || '#fff';
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
  width: 72px;
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