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
            <span>检验类型</span>
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
          <div>过程检验单列表</div>
          <div>
            <button>+新增过程检验单</button>
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
                <th><div class="th-inner">检验单编号</div></th>
                <th><div class="th-inner">检验单名称</div></th>
                <th><div class="th-inner">检验类型</div></th>
                <th><div class="th-inner">生产工单编号</div></th>
                <th><div class="th-inner">产品物料编码</div></th>
                <th><div class="th-inner">产品物料名称</div></th>
                <th><div class="th-inner">规格型号</div></th>
                <th><div class="th-inner">单位</div></th>
                <th><div class="th-inner">检测数量</div></th>
                <th><div class="th-inner">检测结果</div></th>
                <th><div class="th-inner">检测日期</div></th>
                <th><div class="th-inner">检测人员</div></th>
                <th><div class="th-inner">单据状态</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
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
                  >{{ item.type }}</span>
                </td>
                <td>{{ item.moCode }}</td>
                <td>{{ item.materialCode }}</td>
                <td>{{ item.materialName }}</td>
                <td>{{ item.spec }}</td>
                <td>{{ item.unit }}</td>
                <td>{{ item.checkQty }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getResultBg(item.result),
                      color: getResultColor(item.result),
                      border: `1px solid ${getResultColor(item.result)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.result }}</span>
                </td>
                <td>{{ item.checkDate }}</td>
                <td>{{ item.checker }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getStatusBg(item.status),
                      color: getStatusColor(item.status),
                      border: `1px solid ${getStatusColor(item.status)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.status }}</span>
                </td>
                <td class="ol-col">
                  <button>详情</button>
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
          code: "IPQC-2024-001",
          name: "智能灯泡过程检验",
          type: "过程检验",
          moCode: "MO-2024-002",
          materialCode: "P-2024-012",
          materialName: "智能灯泡",
          spec: "RGB 9W E27螺口",
          unit: "个",
          checkQty: 30,
          result: "合格",
          checkDate: "2024-02-05",
          checker: "李明",
          status: "已检验",
        },
        {
          id: 2,
          code: "IPQC-2024-002",
          name: "智能网关过程检验",
          type: "过程检验",
          moCode: "MO-2024-001",
          materialCode: "P-2024-006",
          materialName: "智能网关",
          spec: "ZigBee 3.0 白色",
          unit: "台",
          checkQty: 20,
          result: "合格",
          checkDate: "2024-01-18",
          checker: "王芳",
          status: "已检验",
        },
        {
          id: 3,
          code: "IPQC-2024-003",
          name: "智能插座过程检验",
          type: "过程检验",
          moCode: "MO-2024-005",
          materialCode: "P-2024-018",
          materialName: "智能插座",
          spec: "10A 250V WiFi版",
          unit: "个",
          checkQty: 25,
          result: "不合格",
          checkDate: "2024-03-10",
          checker: "刘洋",
          status: "已检验",
        },
        {
          id: 4,
          code: "IPQC-2024-004",
          name: "电源适配器过程检验",
          type: "过程检验",
          moCode: "MO-2024-003",
          materialCode: "P-2024-005",
          materialName: "电源适配器",
          spec: "12V/2A 裸板",
          unit: "个",
          checkQty: 20,
          result: "合格",
          checkDate: "2024-02-15",
          checker: "陈静",
          status: "已检验",
        },
        {
          id: 5,
          code: "IPQC-2024-005",
          name: "主板半成品过程检验",
          type: "过程检验",
          moCode: "MO-2024-004",
          materialCode: "P-2024-011",
          materialName: "主板半成品",
          spec: "PCB 四层板 带元件",
          unit: "片",
          checkQty: 15,
          result: "合格",
          checkDate: "2024-02-20",
          checker: "赵刚",
          status: "待检验",
        },
        {
          id: 6,
          code: "IPQC-2024-006",
          name: "传感器半成品过程检验",
          type: "过程检验",
          moCode: "MO-2024-006",
          materialCode: "P-2024-017",
          materialName: "传感器半成品",
          spec: "温湿度 SHT30",
          unit: "个",
          checkQty: 10,
          result: "不合格",
          checkDate: "2024-03-18",
          checker: "孙丽",
          status: "已检验",
        },
      ],
    };
  },
  methods: {
    getResultColor(result) {
      const map = {
        '合格': '#52c41a',
        '不合格': '#ff4d4f'
      };
      return map[result] || '#333';
    },
    getResultBg(result) {
      const map = {
        '合格': '#f6ffed',
        '不合格': '#fff2f0'
      };
      return map[result] || '#fff';
    },
    getStatusColor(status) {
      const map = {
        '已检验': '#52c41a',
        '待检验': '#faad14'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '已检验': '#f6ffed',
        '待检验': '#fffbe6'
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
  min-width: 1520px;
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
  max-width: 140px;
}

.ol-col {
  width: 80px;
  min-width: 80px;
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