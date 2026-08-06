<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <div class="left-title">物料分类</div>
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
              <span>名称</span>
              <input type="text" placeholder="请输入名称" />
            </div>
            <div>
              <span>物料编码</span>
              <input type="text" placeholder="请输入物料编码" />
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
            <div>物料信息</div>
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
                  <th><div class="th-inner">名称</div></th>
                  <th><div class="th-inner">物料编码</div></th>
                  <th><div class="th-inner">规格型号</div></th>
                  <th><div class="th-inner">物料类型</div></th>
                  <th><div class="th-inner">参考采购价</div></th>
                  <th><div class="th-inner">参考销售价</div></th>
                  <th><div class="th-inner">状态</div></th>
                  <th><div class="th-inner">创建时间</div></th>
                  <th class="ol-col">
                    <div class="th-inner no-border">操作</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tabValue" :key="item.code">
                  <td>{{ item.name }}</td>
                  <td>{{ item.code }}</td>
                  <td>{{ item.spec }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.purchasePrice }}</td>
                  <td>{{ item.salePrice }}</td>
                  <td>{{ item.status }}</td>
                  <td>{{ item.createTime }}</td>
                  <td class="ol-col">
                    <button>编辑</button>
                    <button>删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="main-floot">
            共{{ tabValue.length }}条记录<span>20条/页</span>
          </div>
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
          name: "笔记本电脑",
          code: "MAT-2024-001",
          spec: "14英寸/i5/16GB/512GB",
          type: "产成品",
          purchasePrice: 4500.0,
          salePrice: 5200.0,
          status: "启用",
          createTime: "2024-01-15 09:30:00",
        },
        {
          id: 2,
          name: "不锈钢螺丝",
          code: "MAT-2024-002",
          spec: "M5×20mm/304不锈钢",
          type: "五金类",
          purchasePrice: 0.85,
          salePrice: 1.2,
          status: "启用",
          createTime: "2024-01-15 10:20:00",
        },
        {
          id: 3,
          name: "ABS塑料颗粒",
          code: "MAT-2024-003",
          spec: "黑色/注塑级/25kg袋",
          type: "注塑类",
          purchasePrice: 12.5,
          salePrice: 15.0,
          status: "停用",
          createTime: "2024-01-16 14:15:00",
        },
        {
          id: 4,
          name: "瓦楞纸箱",
          code: "MAT-2024-004",
          spec: "60×40×50cm/五层/加硬",
          type: "包装类",
          purchasePrice: 8.2,
          salePrice: 10.5,
          status: "启用",
          createTime: "2024-01-16 16:40:00",
        },
        {
          id: 5,
          name: "无铅锡丝",
          code: "MAT-2024-005",
          spec: "0.8mm/500g/卷",
          type: "辅料类",
          purchasePrice: 85.0,
          salePrice: 105.0,
          status: "启用",
          createTime: "2024-01-17 11:10:00",
        },
        {
          id: 6,
          name: "PCB电路板",
          code: "MAT-2024-006",
          spec: "双层/FR4/1.6mm/10×10cm",
          type: "半成品",
          purchasePrice: 32.0,
          salePrice: 45.0,
          status: "启用",
          createTime: "2024-01-18 09:45:00",
        },
        {
          id: 7,
          name: "手机充电器",
          code: "MAT-2024-007",
          spec: "20W快充/Type-C接口",
          type: "产成品",
          purchasePrice: 28.0,
          salePrice: 39.9,
          status: "停用",
          createTime: "2024-01-18 13:30:00",
        },
        {
          id: 8,
          name: "铝合金型材",
          code: "MAT-2024-008",
          spec: "6061-T6/20×20mm/6m",
          type: "五金类",
          purchasePrice: 156.0,
          salePrice: 195.0,
          status: "启用",
          createTime: "2024-01-19 10:00:00",
        },
        {
          id: 9,
          name: "PE保护膜",
          code: "MAT-2024-009",
          spec: "0.05mm×1.2m×200m",
          type: "包装类",
          purchasePrice: 280.0,
          salePrice: 350.0,
          status: "启用",
          createTime: "2024-01-19 15:20:00",
        },
        {
          id: 10,
          name: "润滑油",
          code: "MAT-2024-010",
          spec: "10W-40/4L/桶",
          type: "辅料类",
          purchasePrice: 120.0,
          salePrice: 150.0,
          status: "停用",
          createTime: "2024-01-20 08:50:00",
        },
        {
          id: 11,
          name: "LED显示屏模组",
          code: "MAT-2024-011",
          spec: "P2.5/320×160mm",
          type: "半成品",
          purchasePrice: 420.0,
          salePrice: 520.0,
          status: "启用",
          createTime: "2024-01-20 14:30:00",
        },
        {
          id: 12,
          name: "鼠标键盘套装",
          code: "MAT-2024-012",
          spec: "无线/2.4G/USB接收器",
          type: "产成品",
          purchasePrice: 65.0,
          salePrice: 89.0,
          status: "启用",
          createTime: "2024-01-21 09:15:00",
        },
        {
          id: 13,
          name: "防静电包装袋",
          code: "MAT-2024-013",
          spec: "30×40cm/防静电/自封",
          type: "包装类",
          purchasePrice: 0.45,
          salePrice: 0.6,
          status: "启用",
          createTime: "2024-01-21 16:40:00",
        },
        {
          id: 14,
          name: "焊锡膏",
          code: "MAT-2024-014",
          spec: "Sn63Pb37/500g/瓶",
          type: "辅料类",
          purchasePrice: 145.0,
          salePrice: 180.0,
          status: "停用",
          createTime: "2024-01-22 11:20:00",
        },
        {
          id: 15,
          name: "连接器端子",
          code: "MAT-2024-015",
          spec: "PH2.0/镀锡/1000个/盘",
          type: "五金类",
          purchasePrice: 38.0,
          salePrice: 48.0,
          status: "启用",
          createTime: "2024-01-22 15:00:00",
        },
        {
          id: 16,
          name: "树脂原料",
          code: "MAT-2024-016",
          spec: "环氧树脂/透明/1kg",
          type: "注塑类",
          purchasePrice: 65.0,
          salePrice: 82.0,
          status: "启用",
          createTime: "2024-01-23 09:30:00",
        },
        {
          id: 17,
          name: "移动电源",
          code: "MAT-2024-017",
          spec: "20000mAh/快充/双向充电",
          type: "产成品",
          purchasePrice: 85.0,
          salePrice: 129.0,
          status: "启用",
          createTime: "2024-01-23 14:20:00",
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
    getStatusColor(status) {
      const map = {
        启用: "#52c41a",
        停用: "#8c8c8c",
      };
      return map[status] || "#333";
    },
    getStatusBg(status) {
      const map = {
        启用: "#f6ffed",
        停用: "#f5f5f5",
      };
      return map[status] || "#fff";
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
  min-width: 1180px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab1 th {
  height: 40px;
  background-color: #f3f0f0;
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

.main-tab1 td {
  height: 40px;
  padding: 0 8px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
}

.ol-col {
  width: 160px;
  min-width: 200px;
  position: sticky;
  right: 0;
  z-index: 2;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
  background-color: #fff;
}
.ol-col button {
  width: 56px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.ol-col button:first-child {
  color: #006be6;
}
.ol-col button:first-child:hover {
  background-color: #f0f4f9;
}
.ol-col button:nth-child(2) {
  color: red;
}
.ol-col button:nth-child(2):hover {
  background-color: #fff2f0;
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
