<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <div class="left-title">物料分类</div>
        <div class="left-main">
          <input type="text" placeholder="🔍请输入分类名称" v-model="treeSearch" />
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
              <input type="text" placeholder="请输入名称" v-model="searchForm.name" />
            </div>
            <div>
              <span>物料编码</span>
              <input type="text" placeholder="请输入物料编码" v-model="searchForm.code" />
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
            <div>物料信息</div>
            <div>
              <button @click="handleAdd">+新增物料</button>
              <button>导入</button>
              <button @click="handleExport">导出</button>
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
                    <button @click="handleEdit(item)">编辑</button>
                    <button @click="handleDelete(item)">删除</button>
                  </td>
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
              <button @click="handlePageChange(pagination.pageNo + 1)">></button>
              <button @click="handlePageChange(Math.ceil(pagination.total / pagination.pageSize))">&gt;&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入物料和物料分类相关API ==========
import { getMaterialPage, deleteMaterial, exportMaterial } from '#/api/mdm/basic/material';
import { getMaterialCategoryList } from '#/api/mdm/basic/material-category';

export default {
  data() {
    return {
      // 分类树搜索
      treeSearch: '',
      // 搜索表单
      searchForm: {
        name: '',
        code: '',
      },
      // 分页数据
      pagination: { pageNo: 1, pageSize: 10, total: 0 },
      // 表格数据
      tabValue: [],
      // 分类树数据
      treeData: [],
    };
  },
  mounted() {
    this.loadCategoryTree();
    this.loadList();
  },
  methods: {
    // 加载分类树
    async loadCategoryTree() {
      try {
        const data = await getMaterialCategoryList();
        this.treeData = this.buildTree(data);
      } catch (err) {
        console.error('获取分类树失败', err);
      }
    },
    // 构建树形结构
    buildTree(list) {
      const map = {};
      const roots = [];
      list.forEach((item) => {
        map[item.id] = { ...item, label: item.name, children: [], open: true };
      });
      list.forEach((item) => {
        if (item.parentId && map[item.parentId]) {
          map[item.parentId].children.push(map[item.id]);
        } else {
          roots.push(map[item.id]);
        }
      });
      return roots;
    },
    // 加载列表
    async loadList() {
      try {
        const params = {
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
        };
        Object.keys(this.searchForm).forEach((key) => {
          if (this.searchForm[key]) params[key] = this.searchForm[key];
        });
        const data = await getMaterialPage(params);
        this.tabValue = data.list.map((item) => ({
          id: item.id || '',
          name: item.name || '',
          code: item.code || '',
          spec: item.specification || '',
          type: item.typeName || '',
          purchasePrice: item.purchasePrice / 100 || 0,
          salePrice: item.salePrice / 100 || 0,
          status: item.status === 0 ? '启用' : '停用',
          createTime: item.createTime || '',
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error('获取列表失败', err);
      }
    },
    // 搜索
    handleSearch() { this.pagination.pageNo = 1; this.loadList(); },
    // 重置
    handleReset() {
      Object.keys(this.searchForm).forEach((key) => { this.searchForm[key] = ''; });
      this.pagination.pageNo = 1;
      this.loadList();
    },
    // 分页
    handlePageChange(page) { this.pagination.pageNo = page; this.loadList(); },
    // 新增
    handleAdd() { alert('新增功能待实现'); },
    // 编辑
    handleEdit(item) { alert('编辑功能待实现'); },
    // 删除
    async handleDelete(item) {
      if (!confirm(`确定要删除物料"${item.name}"吗？`)) return;
      try {
        await deleteMaterial(item.id);
        alert('删除成功');
        this.loadList();
      } catch (err) {
        console.error('删除失败', err);
      }
    },
    // 导出
    handleExport() { alert('导出功能待实现'); },
    // 展开/收起节点
    toggleNode(node) {
      if (node.children && node.children.length) {
        node.open = !node.open;
      }
    },
    // 状态颜色
    getStatusColor(status) {
      const map = { 启用: "#52c41a", 停用: "#8c8c8c" };
      return map[status] || "#333";
    },
    getStatusBg(status) {
      const map = { 启用: "#f6ffed", 停用: "#f5f5f5" };
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
