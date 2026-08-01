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
              <span>物料编码</span>
              <input type="text" placeholder="请输入物料编码" />
            </div>
            <div>
              <span>物料名称</span>
              <input type="text" placeholder="请输入物料名称" />
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
            <div>物料产品列表</div>
            <div>
              <button>+新增物料</button>
              <button>导入</button>
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
                  <th>物料编码</th>
                  <th>物料名称</th>
                  <th>规格型号</th>
                  <th>单位</th>
                  <th>物料分类</th>
                  <th>物料/产品</th>
                  <th>安全库存</th>
                  <th>状态</th>
                  <th>创建时间</th>
                  <th class="ol-col">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tabValue">
                  <td style="color: #006be6">{{ item.code }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.spec }}</td>
                  <td>{{ item.unit }}</td>
                  <td>{{ item.category }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.safetyStock }}</td>
                  <td>{{ item.status }}</td>
                  <td>{{ item.createTime }}</td>
                  <td class="ol-col">
                    <button>编辑</button>
                    <button>删除</button>
                    <button>标签打印</button>
                  </td>
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
          code: "M-2024-001",
          name: "碳钢螺丝 M4×20",
          spec: "M4×20 镀锌",
          unit: "个",
          category: "五金类",
          type: "物料",
          safetyStock: 5000,
          status: "启用",
          createTime: "2024-01-15 10:30",
        },
        {
          code: "M-2024-002",
          name: "ABS塑料外壳",
          spec: "100×80×30mm 白色",
          unit: "个",
          category: "注塑类",
          type: "物料",
          safetyStock: 2000,
          status: "启用",
          createTime: "2024-01-20 14:20",
        },
        {
          code: "M-2024-003",
          name: "瓦楞纸箱",
          spec: "400×300×200mm 五层",
          unit: "个",
          category: "包装类",
          type: "物料",
          safetyStock: 3000,
          status: "启用",
          createTime: "2024-02-01 09:15",
        },
        {
          code: "M-2024-004",
          name: "焊接助焊剂",
          spec: "500ml/瓶 无铅",
          unit: "瓶",
          category: "辅料类",
          type: "物料",
          safetyStock: 200,
          status: "停用",
          createTime: "2024-02-10 16:40",
        },
        {
          code: "P-2024-005",
          name: "电源适配器半成品",
          spec: "12V/2A 裸板",
          unit: "个",
          category: "半成品",
          type: "产品",
          safetyStock: 1000,
          status: "启用",
          createTime: "2024-03-01 11:00",
        },
        {
          code: "P-2024-006",
          name: "智能网关成品",
          spec: "ZigBee 3.0 白色",
          unit: "台",
          category: "产成品",
          type: "产品",
          safetyStock: 500,
          status: "启用",
          createTime: "2024-03-15 13:30",
        },
        {
          code: "M-2024-007",
          name: "不锈钢弹簧",
          spec: "线径0.8mm 外径10mm",
          unit: "个",
          category: "五金类",
          type: "物料",
          safetyStock: 8000,
          status: "启用",
          createTime: "2024-04-01 08:50",
        },
        {
          code: "M-2024-008",
          name: "PC透明面板",
          spec: "120×80×2mm 透明",
          unit: "片",
          category: "注塑类",
          type: "物料",
          safetyStock: 1500,
          status: "启用",
          createTime: "2024-04-10 10:20",
        },
        {
          code: "M-2024-009",
          name: "气泡膜卷材",
          spec: "500mm宽 双面气泡",
          unit: "米",
          category: "包装类",
          type: "物料",
          safetyStock: 2000,
          status: "停用",
          createTime: "2024-05-01 15:00",
        },
        {
          code: "M-2024-010",
          name: "散热硅脂",
          spec: "1g/支 导热系数6W/mK",
          unit: "支",
          category: "辅料类",
          type: "物料",
          safetyStock: 300,
          status: "启用",
          createTime: "2024-05-15 09:30",
        },
        {
          code: "P-2024-011",
          name: "主板半成品",
          spec: "PCB 四层板 带元件",
          unit: "片",
          category: "半成品",
          type: "产品",
          safetyStock: 800,
          status: "启用",
          createTime: "2024-06-01 14:10",
        },
        {
          code: "P-2024-012",
          name: "智能灯泡成品",
          spec: "RGB 9W E27螺口",
          unit: "个",
          category: "产成品",
          type: "产品",
          safetyStock: 2000,
          status: "启用",
          createTime: "2024-06-20 11:45",
        },
        {
          code: "M-2024-013",
          name: "铜接线端子",
          spec: "DT-10 镀锡",
          unit: "个",
          category: "五金类",
          type: "物料",
          safetyStock: 10000,
          status: "启用",
          createTime: "2024-07-01 08:00",
        },
        {
          code: "M-2024-014",
          name: "橡胶密封圈",
          spec: "内径20mm 外径26mm",
          unit: "个",
          category: "注塑类",
          type: "物料",
          safetyStock: 6000,
          status: "启用",
          createTime: "2024-07-10 16:20",
        },
        {
          code: "M-2024-015",
          name: "PE缠绕膜",
          spec: "500mm宽 2kg/卷",
          unit: "卷",
          category: "包装类",
          type: "物料",
          safetyStock: 500,
          status: "启用",
          createTime: "2024-07-20 13:00",
        },
        {
          code: "M-2024-016",
          name: "助焊剂稀释剂",
          spec: "1L/瓶 环保型",
          unit: "瓶",
          category: "辅料类",
          type: "物料",
          safetyStock: 100,
          status: "停用",
          createTime: "2024-08-01 09:10",
        },
        {
          code: "P-2024-017",
          name: "传感器半成品",
          spec: "温湿度 SHT30",
          unit: "个",
          category: "半成品",
          type: "产品",
          safetyStock: 1200,
          status: "启用",
          createTime: "2024-08-10 10:30",
        },
        {
          code: "P-2024-018",
          name: "智能插座成品",
          spec: "10A 250V WiFi版",
          unit: "个",
          category: "产成品",
          type: "产品",
          safetyStock: 1500,
          status: "启用",
          createTime: "2024-08-20 15:50",
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
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
  display: flex;
}
.app-left {
  width: 220px;
  height: 580px;
  /* border: 1px solid red;  */
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

/*  */

.app-right {
  width: 802px;
  height: 580px;
  /* border: 1px solid red; */
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
  min-width: 1480px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab1 th {
  height: 40px;
  padding: 0 6px;
  border-right: 1px solid #ccc;
  background-color: #f3f0f0;
}
.main-tab1 td {
  height: 40px;
  padding: 0 12px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.ol-col {
  width: 220px;
  border-right: 0;
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
.ol-col button:nth-child(2) {
  color: red;
}
.ol-col button:last-child {
  width: 80px;
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
