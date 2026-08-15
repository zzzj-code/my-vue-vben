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
import { getItemPage, deleteItem } from '#/api/wms/item';

export default {
  data() {
    return {
      searchForm: { name: '', code: '' },
      pagination: { pageNo: 1, pageSize: 20, total: 0 },
      treeData: [],
      productList: [],
    };
  },
  mounted() {
    this.loadList();
  },
  methods: {
    async loadList() {
      try {
        const data = await getItemPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          name: this.searchForm.name,
          code: this.searchForm.code,
        });
        const list = (data && data.list) || [];
        this.productList = list.map(item => ({
          id: item.id,
          name: item.name || '',
          code: item.code || '',
          categoryName: item.categoryName || '',
          unit: item.unit || '',
          brandName: item.brandName || '',
          status: item.status === 0 ? '启用' : '禁用',
          createTime: this.formatTime(item.createTime),
        }));
        this.pagination.total = (data && data.total) || 0;
      } catch (e) {
        console.error('获取商品列表失败', e);
      }
    },
    formatTime(timestamp) {
      if (!timestamp) return '';
      const d = new Date(timestamp);
      return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0') + ' ' + String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
    },
    handleSearch() { this.pagination.pageNo = 1; this.loadList(); },
    handleReset() { this.searchForm = { name: '', code: '' }; this.loadList(); },
    handleEdit(row) { alert('编辑：' + row.name); },
    async handleDelete(row) {
      if (!confirm('确定删除「' + row.name + '」吗？')) return;
      try { await deleteItem(row.id); alert('删除成功'); this.loadList(); }
      catch (e) { console.error('删除失败', e); }
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