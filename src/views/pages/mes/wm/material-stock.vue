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
              <input type="text" placeholder="请输入物料" v-model="searchForm.field1" />
            </div>
            <div>
              <span>批次号</span>
              <input type="text" placeholder="请输入批次号" v-model="searchForm.field2" />
            </div>
            <div>
              <button @click="handleReset">重置</button>
              <button @click="handleSearch">搜索</button>
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
          <div class="main-floot">
          共{{ pagination.total }}条记录<span>{{ pagination.pageSize }}条/页</span>
          <div style="float: right;">
            <button @click="handlePageChange(1)">&lt;&lt;</button>
            <button @click="handlePageChange(Math.max(1, pagination.pageNo - 1))" :disabled="pagination.pageNo <= 1">&lt;</button>
            <button class="active">{{ pagination.pageNo }}</button>
            <button @click="handlePageChange(pagination.pageNo + 1)">&gt;</button>
            <button @click="handlePageChange(Math.ceil(pagination.total / pagination.pageSize))">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// ========== 导入物料库存相关API ==========
import { getMaterialStockPage, deleteMaterialStock } from '#/api/mes/wm/material-stock';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {},
      // 分页信息
      pagination: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      // 表格数据
      tabValue: [],
    };
  },
  mounted() {
    this.loadList();
  },
  methods: {
    // ========== 获取物料库存列表 ==========
    async loadList() {
      try {
        const data = await getMaterialStockPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          ...this.searchForm,
        });
        this.tabValue = data.list || [];
        this.pagination.total = data.total || 0;
      } catch (err) {
        console.error("获取物料库存列表失败", err);
      }
    },
    // ========== 时间戳格式化 ==========
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`;
    },
    // ========== 搜索 ==========
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = {};
      this.pagination.pageNo = 1;
      this.loadList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadList();
    },
    // ========== 新增 ==========
    handleAdd() {
      alert("新增物料库存功能待实现");
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert("编辑物料库存功能待实现");
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm("确定要删除吗？")) return;
      try {
        await deleteMaterialStock(row.id);
        alert("删除成功");
        this.loadList();
      } catch (err) {
        console.error("删除失败", err);
      }
    },
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