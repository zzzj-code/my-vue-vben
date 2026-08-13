<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <div class="left-main">
          <input type="text" placeholder="🔍搜索部门" v-model="deptSearch" />
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
                    :class="{ open: child.open, 'no-child': !child.children || !child.children.length }"
                  >
                    <span class="tree-label" @click="toggleNode(child)">{{ child.label }}</span>
                    <ul
                      v-show="child.open"
                      v-if="child.children && child.children.length"
                    >
                      <li
                        v-for="grandChild in child.children"
                        :key="grandChild.id"
                        class="tree-node tree-leaf-level-2"
                      >
                        <span class="tree-label">{{ grandChild.label }}</span>
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
              <span>用户名</span>
              <input type="text" placeholder="请输入用户名（..." v-model="searchForm.username" />
            </div>
            <div>
              <span>用户姓名</span>
              <input type="text" placeholder="请输入用户姓名" v-model="searchForm.nickname" />
            </div>
            <div>
              <button @click="handleReset">重置</button>
              <button @click="handleSearch">搜索</button>
              <span class="expand-text">展开 ▽</span>
            </div>
          </div>
        </div>
        <div class="right-main">
          <div class="main-top">
            <div>用户列表</div>
            <div>
              <button @click="handleAdd">+ 新增用户</button>
              <button>导出</button>
              <button>导入</button>
              <button>批量删除</button>
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
                  <th class="check-col"><input type="checkbox" /></th>
                  <th>用户ID</th>
                  <th>用户名（账号）</th>
                  <th>用户姓名</th>
                  <th>部门</th>
                  <th>手机号码</th>
                  <th class="ol-col">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="tableData.length === 0">
                  <td colspan="7" class="empty-row">暂无数据</td>
                </tr>
                <tr v-for="(row, index) in tableData" :key="row.id">
                  <td class="check-col"><input type="checkbox" /></td>
                  <td>{{ row.id }}</td>
                  <td>{{ row.username }}</td>
                  <td>{{ row.nickname }}</td>
                  <td>{{ row.deptName }}</td>
                  <td>{{ row.mobile }}</td>
                  <td class="ol-col">
                    <button class="btn-edit" @click="handleEdit(row)">编辑</button>
                    <button class="btn-del" @click="handleDelete(row)">删除</button>
                    <button class="btn-more">更多 ▾</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="main-floot">
            <span>共 {{ pagination.total }} 条记录</span>
            <select class="page-size-select" v-model="pagination.pageSize" @change="handlePageSizeChange">
              <option :value="10">10条/页</option>
              <option :value="20">20条/页</option>
              <option :value="50">50条/页</option>
            </select>
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
// ========== 导入用户管理和部门管理相关API ==========
import { getUserPage, deleteUser } from '#/api/system/user';
import { getDeptList } from '#/api/system/dept';

export default {
  data() {
    return {
      // 部门搜索关键词
      deptSearch: '',
      // 部门树数据
      treeData: [],
      // 搜索表单
      searchForm: {
        username: '',  // 用户名
        nickname: '',  // 用户姓名
        deptId: '',    // 部门ID
      },
      // 分页信息
      pagination: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      // 表格数据
      tableData: [],
    };
  },
  mounted() {
    this.loadDeptTree();
    this.loadUserList();
  },
  methods: {
    // ========== 加载部门树 ==========
    async loadDeptTree() {
      try {
        const data = await getDeptList();
        // 将扁平的部门列表转换为树形结构
        this.treeData = this.buildTree(data);
      } catch (err) {
        console.error('加载部门树失败', err);
      }
    },
    // ========== 构建树形结构 ==========
    buildTree(list) {
      const map = {};
      const roots = [];
      // 先建立id到节点的映射
      list.forEach((item) => {
        map[item.id] = {
          id: item.id,
          label: item.name,
          open: true,
          children: [],
        };
      });
      // 构建父子关系
      list.forEach((item) => {
        const node = map[item.id];
        if (item.parentId && map[item.parentId]) {
          map[item.parentId].children.push(node);
        } else {
          roots.push(node);
        }
      });
      return roots;
    },
    // ========== 加载用户列表 ==========
    async loadUserList() {
      try {
        const data = await getUserPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          username: this.searchForm.username,
          nickname: this.searchForm.nickname,
          deptId: this.searchForm.deptId,
        });
        // 字段映射，适配页面表格
        this.tableData = data.list.map((item) => ({
          id: item.id,                    // 用户ID
          username: item.username || '',  // 用户名（账号）
          nickname: item.nickname || '',  // 用户姓名
          deptName: item.deptName || '',  // 部门名称
          mobile: item.mobile || '',      // 手机号码
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error('加载用户列表失败', err);
      }
    },
    // ========== 展开/收起部门树节点 ==========
    toggleNode(node) {
      if (node.children && node.children.length) {
        node.open = !node.open;
      }
    },
    // ========== 搜索 ==========
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadUserList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { username: '', nickname: '', deptId: '' };
      this.pagination.pageNo = 1;
      this.loadUserList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadUserList();
    },
    // ========== 每页条数切换 ==========
    handlePageSizeChange() {
      this.pagination.pageNo = 1;
      this.loadUserList();
    },
    // ========== 新增用户 ==========
    handleAdd() {
      alert('新增用户功能待实现');
    },
    // ========== 编辑用户 ==========
    handleEdit(row) {
      alert(`编辑用户：${row.username}`);
    },
    // ========== 删除用户 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除用户「${row.username}」吗？`)) return;
      try {
        await deleteUser(row.id);
        alert('删除成功');
        this.loadUserList();
      } catch (err) {
        console.error('删除失败', err);
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
  max-height: 480px;
  overflow-y: auto;
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

.org-tree .tree-leaf-level-2 > .tree-label {
  font-weight: normal;
  padding-left: 50px;
  color: #666;
  font-size: 13px;
}

.org-tree ul ul {
  padding-left: 0;
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
  width: 100px;
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
  cursor: pointer;
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
  font-size: 14px;
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
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}

.main-top > div:nth-child(2) {
  width: 68%;
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
  cursor: pointer;
}

.main-top > div:nth-child(2) button:nth-child(2),
.main-top > div:nth-child(2) button:nth-child(3),
.main-top > div:nth-child(2) button:nth-child(4) {
  width: 78px;
  height: 32px;
  border: 0;
  background-color: #006be6;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}

.main-top > div:nth-child(2) .btn-search-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0;
  background-color: #006be6;
  color: #fff;
  padding: 0;
  cursor: pointer;
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
  cursor: pointer;
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
  padding: 0 12px;
  border-right: 1px solid #ccc;
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
  vertical-align: middle;
}

.main-tab1 tbody tr:hover {
  background-color: #f9f9f9;
}

.check-col {
  width: 40px;
  padding: 0 8px !important;
}

.check-col input[type="checkbox"] {
  cursor: pointer;
}

.empty-row {
  color: #666;
}

/* 操作按钮 */
.btn-edit,
.btn-del,
.btn-more {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 13px;
  padding: 0 4px;
}

.btn-edit {
  color: #006be6;
}

.btn-del {
  color: #666;
}

.btn-more {
  color: #666;
}

.btn-edit:hover {
  color: #3385ff;
}

.btn-del:hover {
  color: #f56c6c;
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
  cursor: pointer;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 4px;
}

.page-btn {
  min-width: 28px;
  height: 28px;
  padding: 0 6px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.page-btn.active {
  background-color: #006be6;
  border-color: #006be6;
  color: #fff;
}

.page-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
