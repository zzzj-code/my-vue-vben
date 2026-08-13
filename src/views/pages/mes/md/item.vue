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
              <input type="text" placeholder="请输入物料编码" v-model="searchForm.code" />
            </div>
            <div>
              <span>物料名称</span>
              <input type="text" placeholder="请输入物料名称" v-model="searchForm.name" />
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
            <div>物料产品列表</div>
            <div>
              <button @click="handleAdd">+新增物料</button>
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
                  <th><div class="th-inner">物料编码</div></th>
                  <th><div class="th-inner">物料名称</div></th>
                  <th><div class="th-inner">规格型号</div></th>
                  <th><div class="th-inner">单位</div></th>
                  <th><div class="th-inner">物料分类</div></th>
                  <th><div class="th-inner">物料/产品</div></th>
                  <th><div class="th-inner">安全库存</div></th>
                  <th><div class="th-inner">状态</div></th>
                  <th><div class="th-inner">创建时间</div></th>
                  <th class="ol-col"><div class="th-inner no-border">操作</div></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tabValue" :key="item.code">
                  <td style="color: #006be6">{{ item.code }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.spec }}</td>
                  <td>{{ item.unit }}</td>
                  <td>{{ item.category }}</td>
                  <td>
                    <span
                      :style="{
                        display: 'inline-block',
                        padding: '0 12px',
                        height: '24px',
                        lineHeight: '24px',
                        backgroundColor: item.type === '物料' ? '#e6f6ff' : '#f6ffed',
                        color: item.type === '物料' ? '#006be6' : '#52c41a',
                        border: `1px solid ${item.type === '物料' ? '#006be6' : '#52c41a'}`,
                        borderRadius: '12px',
                        fontSize: '12px'
                      }"
                    >{{ item.type }}</span>
                  </td>
                  <td>{{ item.safetyStock }}</td>
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
                  <td>{{ item.createTime }}</td>
                  <td class="ol-col">
                    <button @click="handleEdit(item)">编辑</button>
                    <button @click="handleDelete(item)">删除</button>
                    <button>标签打印</button>
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
// ========== 导入物料产品相关API ==========
import { getItemPage, deleteItem } from '#/api/mes/md/item';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        code: "",  // 物料编码
        name: "",  // 物料名称
      },
      // 分页信息
      pagination: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      // 表格数据
      tabValue: [],
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
  mounted() {
    this.loadItemList();
  },
  methods: {
    // ========== 获取物料产品列表 ==========
    async loadItemList() {
      try {
        const data = await getItemPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          code: this.searchForm.code,
          name: this.searchForm.name,
        });
        // 字段映射，适配页面表格
        this.tabValue = data.list.map((item) => ({
          id: item.id,
          code: item.code || "",              // 物料编码
          name: item.name || "",              // 物料名称
          spec: item.specification || "",     // 规格型号
          unit: item.unitName || "",          // 单位
          category: item.categoryName || "",  // 分类
          type: item.itemType === 0 ? "物料" : "产品", // 类型
          safetyStock: item.safetyStock || 0, // 安全库存
          status: item.status === 0 ? "启用" : "停用", // 状态
          createTime: this.formatTimestamp(item.createTime), // 创建时间
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error("获取物料产品列表失败", err);
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
      this.loadItemList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { code: "", name: "" };
      this.pagination.pageNo = 1;
      this.loadItemList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadItemList();
    },
    // ========== 新增 ==========
    handleAdd() {
      alert("新增物料功能待实现");
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert(`编辑物料：${row.name}`);
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除「${row.name}」吗？`)) return;
      try {
        await deleteItem(row.id);
        alert("删除成功");
        this.loadItemList();
      } catch (err) {
        console.error("删除失败", err);
      }
    },
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
        '启用': '#52c41a',
        '停用': '#8c8c8c'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '启用': '#f6ffed',
        '停用': '#f5f5f5'
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
  min-width: 1480px;
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
  width: 200px;
  min-width: 200px;
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
.ol-col button:last-child {
  width: 80px;
  color: #006be6;
}
.ol-col button:last-child:hover {
  background-color: #f0f4f9;
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