<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <div class="left-main">
          <input type="text" placeholder="🔍请输入..." />
          <div class="main-tab">
            <ul class="org-tree">
              <li
                v-for="node in treeData"
                :key="node.id"
                class="tree-node"
                :class="{ open: node.open, 'no-child': !node.children || !node.children.length }"
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
                    class="tree-node tree-leaf-level"
                  >
                    <span class="tree-label">{{ child.label }}</span>
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
              <span>商品编号</span>
              <input type="text" placeholder="请输入商品编号" />
            </div>
            <div>
              <span>商品名称</span>
              <input type="text" placeholder="请输入商品名称" />
            </div>
            <div>
              <button>重置</button>
              <button>搜索</button>
              <span class="expand-text">展开 ▽</span>
            </div>
          </div>
        </div>
        <div class="right-main">
          <div class="main-top">
            <div>商品列表</div>
            <div>
              <button>+ 新增商品</button>
              <button>导出</button>
              <button class="btn-search-icon">🔍</button>
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
                  <th><div class="th-inner">商品信息</div></th>
                  <th><div class="th-inner">规格信息</div></th>
                  <th><div class="th-inner">金额(元)</div></th>
                  <th><div class="th-inner">重量(kg)</div></th>
                  <th class="ol-col"><div class="th-inner no-border">操作</div></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in tableData" :key="index">
                  <td v-if="row.isFirst" :rowspan="row.specCount" class="cell-product">
                    <div class="p-name">{{ row.productName }}</div>
                    <div class="p-code">{{ row.productCode }}</div>
                    <div v-if="row.productBrand" class="p-brand">品牌：{{ row.productBrand }}</div>
                    <div class="p-category">分类：{{ row.productCategory }}</div>
                  </td>
                  <td class="cell-spec">
                    <div class="s-name">{{ row.specName }}</div>
                    <div v-if="row.sku" class="s-sku">编号：{{ row.sku }}</div>
                    <div v-if="row.barcode" class="s-barcode">条码：{{ row.barcode }}</div>
                  </td>
                  <td class="cell-price">
                    <div v-if="row.costPrice" class="pr-cost">成本价：{{ row.costPrice }}</div>
                    <div v-if="row.salePrice" class="pr-sale">销售价：{{ row.salePrice }}</div>
                  </td>
                  <td class="cell-weight">
                    <div v-if="row.netWeight" class="w-net">净重：{{ row.netWeight }}</div>
                    <div v-if="row.grossWeight" class="w-gross">毛重：{{ row.grossWeight }}</div>
                  </td>
                  <td v-if="row.isFirst" :rowspan="row.specCount" class="ol-col">
                    <button class="btn-edit">编辑</button>
                    <button class="btn-del">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="main-floot">
            共 {{ totalCount }} 条记录
            <select class="page-size-select">
              <option>20条/页</option>
              <option>50条/页</option>
            </select>
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
      totalCount: 13,
      treeData: [
        { id: "shucai", label: "蔬菜" },
        { id: "shyp", label: "生活用品" },
        {
          id: "dzcp",
          label: "电子产品",
          open: true,
          children: [
            { id: "sj", label: "手机" },
            { id: "bjb", label: "笔记本电脑" },
          ],
        },
        {
          id: "jydq",
          label: "家用电器",
          open: true,
          children: [
            { id: "bx", label: "冰箱" },
            { id: "kt", label: "空调" },
          ],
        },
        {
          id: "bgwp",
          label: "办公用品",
          open: true,
          children: [
            { id: "dyj", label: "打印机" },
            { id: "bghc", label: "办公耗材" },
          ],
        },
        {
          id: "spyl",
          label: "食品饮料",
          open: true,
          children: [
            { id: "yl", label: "饮料" },
            { id: "ls", label: "零食" },
          ],
        },
      ],
      productList: [
        {
          id: 1,
          name: "呃呃呃",
          code: "abc",
          brand: "苹果",
          category: "蔬菜",
          specs: [
            {
              specName: "ABC",
              sku: "",
              barcode: "",
              costPrice: "",
              salePrice: "",
              netWeight: "",
              grossWeight: "",
            },
          ],
        },
        {
          id: 2,
          name: "红富士苹果",
          code: "SPU-APPLE",
          brand: "",
          category: "水果",
          specs: [
            {
              specName: "5kg 装箱",
              sku: "SKU-APPLE-5KG",
              barcode: "690100120001",
              costPrice: "35.00",
              salePrice: "59.00",
              netWeight: "5.000",
              grossWeight: "5.500",
            },
            {
              specName: "10kg 装箱",
              sku: "SKU-APPLE-10KG",
              barcode: "690100120002",
              costPrice: "68.00",
              salePrice: "109.00",
              netWeight: "10.000",
              grossWeight: "10.800",
            },
          ],
        },
        {
          id: 3,
          name: "盐焗腰果",
          code: "SPU-CASHEW",
          brand: "",
          category: "零食",
          specs: [
            {
              specName: "250g 袋装",
              sku: "SKU-CASHEW-250G",
              barcode: "690100110001",
              costPrice: "18.00",
              salePrice: "29.90",
              netWeight: "0.250",
              grossWeight: "0.280",
            },
          ],
        },
      ],
    };
  },
  computed: {
    tableData() {
      const rows = [];
      this.productList.forEach((product) => {
        product.specs.forEach((spec, index) => {
          rows.push({
            productId: product.id,
            productName: product.name,
            productCode: product.code,
            productBrand: product.brand,
            productCategory: product.category,
            specCount: product.specs.length,
            isFirst: index === 0,
            specName: spec.specName,
            sku: spec.sku,
            barcode: spec.barcode,
            costPrice: spec.costPrice,
            salePrice: spec.salePrice,
            netWeight: spec.netWeight,
            grossWeight: spec.grossWeight,
          });
        });
      });
      return rows;
    },
  },
  methods: {
    toggleNode(node) {
      if (node.children && node.children.length) {
        node.open = !node.open;
      }
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

.left-main {
  width: 100%;
  height: 544px;
  padding: 10px;
  box-sizing: border-box;
}

.left-main input {
  width: 194px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
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

.org-tree .tree-node > .tree-label {
  display: flex;
  align-items: center;
  height: 34px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.org-tree .tree-node.no-child > .tree-label::before {
  content: "";
  display: inline-block;
  width: 18px;
  margin-right: 6px;
}

.org-tree .tree-node.open > .tree-label::before {
  content: "▾";
  display: inline-block;
  width: 18px;
  text-align: center;
  margin-right: 6px;
  color: #8c8c8c;
}

.org-tree .tree-node:not(.open):not(.no-child) > .tree-label::before {
  content: "▸";
  display: inline-block;
  width: 18px;
  text-align: center;
  margin-right: 6px;
  color: #8c8c8c;
}

.org-tree .tree-leaf-level > .tree-label {
  font-weight: normal;
  padding-left: 26px;
  color: #666;
}

.org-tree .tree-leaf-level > .tree-label::before {
  content: none !important;
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
  box-sizing: border-box;
}

.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}

.top-inp > div {
  display: flex;
  align-items: center;
}

.top-inp > div:nth-child(1),
.top-inp > div:nth-child(2) {
  width: 250px;
}

.top-inp div span:first-child {
  display: inline-block;
  width: 80px;
  height: 24px;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
  line-height: 24px;
}

.top-inp div input {
  width: 160px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 0 8px;
  box-sizing: border-box;
}

.top-inp > div:last-child {
  font-size: 14px;
  justify-content: flex-end;
  gap: 10px;
}

.top-inp div button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
}

.top-inp div button:first-of-type {
  border: 1px solid #ccc;
  background-color: #fff;
}

.top-inp div button:last-of-type {
  border: 0;
  background-color: #006be6;
  color: #fff;
}

.expand-text {
  color: #006be6;
  cursor: pointer;
  margin-left: 4px;
}

.right-main {
  width: 100%;
  height: 482px;
  padding: 10px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.right-main .main-top {
  width: 100%;
  height: 47px;
  display: flex;
}

.main-top > div:first-child {
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}

.main-top > div:nth-child(2) {
  width: 43%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}

.main-top > div:nth-child(2) button:first-child {
  width: 106px;
  height: 32px;
  border: 0;
  background-color: #006be6;
  color: #fff;
  border-radius: 10px;
}

.main-top > div:nth-child(2) button:nth-child(2) {
  width: 78px;
  height: 32px;
  border: 0;
  background-color: #006be6;
  color: #fff;
  border-radius: 10px;
}

.main-top > div:nth-child(2) .btn-search-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0;
  background-color: #006be6;
  color: #fff;
  padding: 0;
}

.main-top > div:last-child {
  width: 12%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main-top > div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
}

.main-tab1 {
  width: 100%;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: auto;
}

.main-tab1 table {
  width: max-content;
  min-width: 100%;
  table-layout: auto;
  border-collapse: collapse;
  font-size: 14px;
}

.main-tab1 th {
  height: 40px;
  padding: 0;
  border-bottom: 1px solid #ccc;
  background-color: #f3f0f0;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
}

.main-tab1 td {
  padding: 10px 12px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  text-align: center;
}

/* ===== 表头内部 div：承载右边框 ===== */
.th-inner {
  padding: 0 12px;
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

thead .ol-col {
  background-color: #f3f0f0;
}

/* 商品信息单元格 */
.cell-product {
  width: 180px;
  min-width: 180px;
  text-align: left !important;
  border-right: 1px solid #ccc !important;
}

.p-name {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.p-code {
  font-size: 13px;
  color: #999;
  margin-bottom: 4px;
}

.p-brand,
.p-category {
  font-size: 13px;
  color: #666;
  margin-top: 2px;
}

/* 规格信息单元格 */
.cell-spec {
  width: 200px;
  min-width: 200px;
  text-align: left !important;
}

.s-name {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  text-align: center;
}

.s-sku,
.s-barcode {
  font-size: 13px;
  color: #666;
  margin-top: 2px;
}

/* 金额单元格 */
.cell-price {
  width: 130px;
  min-width: 130px;
  text-align: left !important;
}

.pr-cost,
.pr-sale {
  font-size: 14px;
  color: #666;
  margin-top: 2px;
}

/* 重量单元格 */
.cell-weight {
  width: 130px;
  min-width: 130px;
  text-align: left !important;
}

.w-net,
.w-gross {
  font-size: 14px;
  color: #666;
  margin-top: 2px;
}

/* 操作列 */
.ol-col {
  width: 160px;
  min-width: 160px;
  border-right: 0 !important;
  position: sticky;
  right: 0;
  background-color: #fff;
  border-left: 1px solid #ccc;
  text-align: center !important;
}

thead .ol-col {
  background-color: #f3f0f0;
}

.btn-edit {
  border: 0;
  background-color: #fff;
  color: #006be6;
  cursor: pointer;
  font-size: 14px;
  margin-right: 8px;
}

.btn-del {
  border: 0;
  background-color: #fff;
  color: red;
  cursor: pointer;
  font-size: 14px;
}

/* 底部分页 */
.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 8px;
  font-size: 12px;
  display: flex;
  align-items: center;
}

.page-size-select {
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 6px;
  margin-left: 5px;
  font-size: 12px;
  outline: none;
}
</style>