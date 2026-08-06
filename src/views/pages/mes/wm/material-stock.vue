<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <div class="left-main">
          <input type="text" placeholder="🔍请输入部门名称" />
          <div class="main-tab">
            <ul class="org-tree">
              <li
                v-for="node in treeData"
                :key="node.id"
                class="tree-node"
                :class="{ open: node.open }"
              >
                <span class="tree-label" @click="toggleNode(node)">{{
                  node.label
                }}</span>
                <ul
                  v-show="node.open"
                  v-if="node.children && node.children.length"
                >
                  <li
                    v-for="child in node.children"
                    :key="child.id"
                    class="tree-node"
                    :class="{ open: child.open }"
                  >
                    <span class="tree-label" @click="toggleNode(child)">{{
                      child.label
                    }}</span>
                    <ul
                      v-show="child.open"
                      v-if="child.children && child.children.length"
                    >
                      <li
                        v-for="leaf in child.children"
                        :key="leaf.id"
                        class="tree-leaf"
                      >
                        {{ leaf.label }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="app-right">
        <div class="right-top">
          <div class="top-inp">
            <div>
              <span>物料</span>
              <input type="text" placeholder="请输入物料" />
            </div>
            <div>
              <span>批次号</span>
              <input type="text" placeholder="请输入批次号" />
            </div>
            <div>
              <button>重置</button>
              <button>搜索</button>
              展开▽
            </div>
          </div>
        </div>
        <div class="right-main">
          <div class="main-top">
            <div>库存台账列表</div>
            <div>
              <button style="background-color: #fff"></button>
              <button style="background-color: #fff"></button>
              <button>导出</button>
              <button>🔍</button>
            </div>
            <div>
              <button>⟳</button>
              <button>⛶</button>
              <button>☷</button>
            </div>
          </div>
          <div class="main-tab1">
            <table>
              <thead>
                <tr>
                  <th><div>产品物料编码</div></th>
                  <th><div>产品物料名称</div></th>
                  <th><div>规格型号</div></th>
                  <th><div>在库数量</div></th>
                  <th><div>单位</div></th>
                  <th><div>批次号</div></th>
                  <th><div>仓库</div></th>
                  <th><div>库区</div></th>
                  <th><div>库位</div></th>
                  <th><div>入库日期</div></th>
                  <th class="ol-col"><div>冻结</div></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tabValue" :key="item.id">
                  <td>{{ item.materialCode }}</td>
                  <td>{{ item.materialName }}</td>
                  <td>{{ item.spec }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ item.unit }}</td>
                  <td style="color: #006be6;">{{ item.batchNo }}</td>
                  <td>{{ item.warehouse }}</td>
                  <td>{{ item.area }}</td>
                  <td>{{ item.location }}</td>
                  <td>{{ item.storageDate }}</td>
                  <td class="ol-col">{{ item.isFrozen }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="main-floot">共18条记录<span>20条/页</span></div>
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
          id: 1,
          materialCode: "M-2024-001",
          materialName: "碳钢螺丝 M4×20",
          spec: "M4×20 镀锌",
          quantity: 5200,
          unit: "个",
          batchNo: "B20240115001",
          warehouse: "原材料仓库",
          area: "A区",
          location: "A-01-03",
          storageDate: "2024-01-15",
          isFrozen: "否",
        },
        {
          id: 2,
          materialCode: "M-2024-001",
          materialName: "碳钢螺丝 M4×20",
          spec: "M4×20 镀锌",
          quantity: 3800,
          unit: "个",
          batchNo: "B20240201002",
          warehouse: "原材料仓库",
          area: "A区",
          location: "A-01-04",
          storageDate: "2024-02-01",
          isFrozen: "否",
        },
        {
          id: 3,
          materialCode: "M-2024-002",
          materialName: "ABS塑料外壳",
          spec: "100×80×30mm 白色",
          quantity: 2150,
          unit: "个",
          batchNo: "B20240120003",
          warehouse: "原材料仓库",
          area: "B区",
          location: "B-02-01",
          storageDate: "2024-01-20",
          isFrozen: "否",
        },
        {
          id: 4,
          materialCode: "M-2024-003",
          materialName: "瓦楞纸箱",
          spec: "400×300×200mm 五层",
          quantity: 3200,
          unit: "个",
          batchNo: "B20240215004",
          warehouse: "辅料仓库",
          area: "C区",
          location: "C-01-02",
          storageDate: "2024-02-15",
          isFrozen: "是",
        },
        {
          id: 5,
          materialCode: "M-2024-007",
          materialName: "不锈钢弹簧",
          spec: "线径0.8mm 外径10mm",
          quantity: 8500,
          unit: "个",
          batchNo: "B20240301005",
          warehouse: "原材料仓库",
          area: "A区",
          location: "A-03-01",
          storageDate: "2024-03-01",
          isFrozen: "否",
        },
        {
          id: 6,
          materialCode: "P-2024-005",
          materialName: "电源适配器半成品",
          spec: "12V/2A 裸板",
          quantity: 1200,
          unit: "个",
          batchNo: "B20240310006",
          warehouse: "半成品仓库",
          area: "D区",
          location: "D-01-03",
          storageDate: "2024-03-10",
          isFrozen: "否",
        },
        {
          id: 7,
          materialCode: "P-2024-005",
          materialName: "电源适配器半成品",
          spec: "12V/2A 裸板",
          quantity: 800,
          unit: "个",
          batchNo: "B20240325007",
          warehouse: "半成品仓库",
          area: "D区",
          location: "D-01-04",
          storageDate: "2024-03-25",
          isFrozen: "否",
        },
        {
          id: 8,
          materialCode: "P-2024-006",
          materialName: "智能网关成品",
          spec: "ZigBee 3.0 白色",
          quantity: 550,
          unit: "台",
          batchNo: "B20240401008",
          warehouse: "成品仓库",
          area: "E区",
          location: "E-01-01",
          storageDate: "2024-04-01",
          isFrozen: "否",
        },
        {
          id: 9,
          materialCode: "M-2024-008",
          materialName: "PC透明面板",
          spec: "120×80×2mm 透明",
          quantity: 1600,
          unit: "片",
          batchNo: "B20240415009",
          warehouse: "原材料仓库",
          area: "B区",
          location: "B-03-02",
          storageDate: "2024-04-15",
          isFrozen: "否",
        },
        {
          id: 10,
          materialCode: "M-2024-010",
          materialName: "散热硅脂",
          spec: "1g/支 导热系数6W/mK",
          quantity: 350,
          unit: "支",
          batchNo: "B20240501010",
          warehouse: "辅料仓库",
          area: "C区",
          location: "C-02-01",
          storageDate: "2024-05-01",
          isFrozen: "否",
        },
        {
          id: 11,
          materialCode: "P-2024-011",
          materialName: "主板半成品",
          spec: "PCB 四层板 带元件",
          quantity: 900,
          unit: "片",
          batchNo: "B20240520011",
          warehouse: "半成品仓库",
          area: "D区",
          location: "D-02-01",
          storageDate: "2024-05-20",
          isFrozen: "否",
        },
        {
          id: 12,
          materialCode: "P-2024-012",
          materialName: "智能灯泡成品",
          spec: "RGB 9W E27螺口",
          quantity: 2100,
          unit: "个",
          batchNo: "B20240601012",
          warehouse: "成品仓库",
          area: "E区",
          location: "E-02-03",
          storageDate: "2024-06-01",
          isFrozen: "否",
        },
        {
          id: 13,
          materialCode: "M-2024-013",
          materialName: "铜接线端子",
          spec: "DT-10 镀锡",
          quantity: 12000,
          unit: "个",
          batchNo: "B20240615013",
          warehouse: "原材料仓库",
          area: "A区",
          location: "A-02-05",
          storageDate: "2024-06-15",
          isFrozen: "否",
        },
        {
          id: 14,
          materialCode: "M-2024-014",
          materialName: "橡胶密封圈",
          spec: "内径20mm 外径26mm",
          quantity: 6500,
          unit: "个",
          batchNo: "B20240701014",
          warehouse: "原材料仓库",
          area: "B区",
          location: "B-01-03",
          storageDate: "2024-07-01",
          isFrozen: "否",
        },
        {
          id: 15,
          materialCode: "P-2024-017",
          materialName: "传感器半成品",
          spec: "温湿度 SHT30",
          quantity: 1300,
          unit: "个",
          batchNo: "B20240715015",
          warehouse: "半成品仓库",
          area: "D区",
          location: "D-03-01",
          storageDate: "2024-07-15",
          isFrozen: "否",
        },
        {
          id: 16,
          materialCode: "P-2024-018",
          materialName: "智能插座成品",
          spec: "10A 250V WiFi版",
          quantity: 1600,
          unit: "个",
          batchNo: "B20240801016",
          warehouse: "成品仓库",
          area: "E区",
          location: "E-01-05",
          storageDate: "2024-08-01",
          isFrozen: "否",
        },
        {
          id: 17,
          materialCode: "M-2024-015",
          materialName: "PE缠绕膜",
          spec: "500mm宽 2kg/卷",
          quantity: 550,
          unit: "卷",
          batchNo: "B20240815017",
          warehouse: "辅料仓库",
          area: "C区",
          location: "C-03-02",
          storageDate: "2024-08-15",
          isFrozen: "是",
        },
        {
          id: 18,
          materialCode: "P-2024-006",
          materialName: "智能网关成品",
          spec: "ZigBee 3.0 白色",
          quantity: 300,
          unit: "台",
          batchNo: "B20240901018",
          warehouse: "成品仓库",
          area: "E区",
          location: "E-01-02",
          storageDate: "2024-09-01",
          isFrozen: "否",
        },
      ],

      selectedTab: "day",
      rangeStart: "2026-07-01",
      rangeEnd: "2026-07-25",
      treeData: [
        {
          id: "root1",
          label: "物料产品分类",
          open: true,
          children: [
            {
              id: "shenzhen",
              label: "原材料",
              open: true,
              children: [
                { id: "rd", label: "五金类" },
                { id: "test", label: "注塑类" },
                { id: "test2", label: "包装类" },
                { id: "test3", label: "辅料类" },
              ],
            },
            {
              id: "changsha",
              label: "产品",
              open: true,
              children: [
                { id: "market", label: "半成品" },
                { id: "finance", label: "产成品" },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleNode(node) {
      if (node.children && node.children.length) {
        node.open = !node.open;
      }
    },
    selectTab(value) {
      this.selectedTab = value;
    },
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
  height: 760px;
  background-color: #ecebeb;
  position: absolute;
  top: -375px;
  display: flex;
}
.app-left {
  width: 220px;
  height: 580px;
  background-color: #fff;
  border-radius: 10px;
}
.left-title {
  width: 100%;
  height: 36px;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #ccc;
  padding-left: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
}
.left-main {
  width: 100%;
  height: 544px;
  padding: 10px;
}
.left-main input {
  width: 194px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.left-main input:hover {
  border: 1px solid #48e5fa;
}
.left-main input:focus {
  outline: none;
  border: 1px solid #48e5fa;
}
.main-tab {
  width: 194px;
  margin-top: 12px;
}
.org-tree,
.org-tree ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.org-tree .tree-node {
  padding-left: 8px;
}
.org-tree .tree-node > .tree-label,
.org-tree .tree-leaf {
  display: flex;
  align-items: center;
  height: 34px;
  color: #333;
  font-size: 14px;
}
.org-tree .tree-node > .tree-label {
  font-weight: 600;
}
.org-tree .tree-node.open > .tree-label::before {
  content: "▾";
  display: inline-block;
  width: 18px;
  text-align: center;
  margin-right: 6px;
  color: #8c8c8c;
}
.org-tree .tree-node:not(.open) > .tree-label::before {
  content: "▸";
  display: inline-block;
  width: 18px;
  text-align: center;
  margin-right: 6px;
  color: #8c8c8c;
}
.org-tree .tree-leaf {
  padding-left: 30px;
  color: #666;
}

.app-right {
  width: 802px;
  height: 580px;
  margin-left: 5px;
}
.right-top {
  width: 100%;
  height: 86px;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 250px;
  height: 42px;
}
.top-inp div span {
  display: inline-block;
  width: 80px;
  height: 24px;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
}
.top-inp div input {
  width: 160px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 0 8px;
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
  border: 0;
  background-color: #006be6;
  color: #fff;
}

.right-main {
  width: 100%;
  height: 482px;
  padding: 10px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
}
.right-main .main-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.main-top div:first-child {
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 43%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.main-top div:nth-child(2) button:first-child {
  width: 106px;
  height: 32px;
  border: 0;
  background-color: #006be6;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:nth-child(2),
.main-top div:nth-child(2) button:nth-child(3) {
  width: 78px;
  height: 32px;
  border: 0;
  background-color: #006be6;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0;
  background-color: #006be6;
}
.main-top div:last-child {
  width: 12%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-top div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
}

.main-tab1 {
  width: 100%;
  height: 391px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab1 table {
  width: max-content;
  min-width: 1270px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab1 th {
  height: 40px;
  background-color: #ece8e8;
  border-right: none;
  padding: 0;
  white-space: nowrap;
}
.main-tab1 th > div {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-weight: 600;
  color: #333;
}
.main-tab1 th.ol-col > div {
  border-right: none;
}
.main-tab1 td {
  height: 40px;
  padding: 0 12px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  text-align: center;
  border-right:0;
}
.ol-col {
  width: 220px;
  position: sticky;
  right: 0;
  /* 已去掉 border-left */
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
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 3px;
  margin-left: 5px;
}
</style>