<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-left">
        <div class="left-main">
          <input type="text" placeholder="🔍搜索部门" />
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
              <input type="text" placeholder="请输入用户名（..." />
            </div>
            <div>
              <span>用户姓名</span>
              <input type="text" placeholder="请输入用户姓名" />
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
            <div>用户列表</div>
            <div>
              <button>+ 新增用户</button>
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
                <tr v-for="(row, index) in tableData" :key="index">
                  <td class="check-col"><input type="checkbox" /></td>
                  <td>{{ row.userId }}</td>
                  <td>{{ row.username }}</td>
                  <td>{{ row.realName }}</td>
                  <td>{{ row.department }}</td>
                  <td>{{ row.phone }}</td>
                  <td class="ol-col">
                    <button class="btn-edit">编辑</button>
                    <button class="btn-del">删除</button>
                    <button class="btn-more">更多 ▾</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="main-floot">
            <span>共 {{ totalCount }} 条记录</span>
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
      totalCount: 21,
      treeData: [
        {
          id: "yuqing",
          label: "宇擎源码",
          open: true,
          children: [
            {
              id: "shenzhen",
              label: "深圳总公司",
              open: true,
              children: [
                {
                  id: "yanfa",
                  label: "研发部门",
                  open: true,
                  children: [
                    { id: "test", label: "测试部门" },
                  ],
                },
                { id: "market", label: "市场部门" },
                { id: "finance", label: "财务部门" },
              ],
            },
            {
              id: "changsha",
              label: "长沙分公司",
              open: true,
              children: [
                { id: "cs-market", label: "市场部门" },
                { id: "cs-finance", label: "财务部门" },
              ],
            },
            {
              id: "jinan",
              label: "济南研发分公司",
              open: true,
              children: [
                { id: "jinan-yanfa", label: "济南研发部" },
              ],
            },
          ],
        },
        {
          id: "bodazhengheng",
          label: "博大正恒集团",
          open: true,
          children: [
            { id: "zongjingban", label: "集团总经办" },
            { id: "zongheguanli", label: "集团综合管理部" },
            { id: "jituan-caiwu", label: "集团财务部" },
            {
              id: "sichuan-boda",
              label: "四川博大正恒信息技术有限公司",
              open: true,
              children: [
                { id: "sichuan-yanfa", label: "四川博大正恒研发部" },
              ],
            },
          ],
        },
      ],
      tableData: [
        {
          userId: "161",
          username: "132300018",
          realName: "王宁",
          department: "研发部门",
          phone: "13323455555",
        },
        {
          userId: "160",
          username: "132300027",
          realName: "张华",
          department: "济南研发部",
          phone: "13532223444",
        },
        {
          userId: "159",
          username: "132300028",
          realName: "张鑫鑫",
          department: "济南研发部",
          phone: "13222222222",
        },
        {
          userId: "158",
          username: "oatest",
          realName: "OA用户",
          department: "深圳总公司",
          phone: "",
        },
        {
          userId: "151",
          username: "132300025",
          realName: "张离职",
          department: "研发部门",
          phone: "13322342222",
        },
        {
          userId: "150",
          username: "132300024",
          realName: "陈雨薇",
          department: "研发部门",
          phone: "13600136004",
        },
        {
          userId: "149",
          username: "10000301",
          realName: "张一",
          department: "研发部门",
          phone: "13800138001",
        },
        {
          userId: "148",
          username: "132300023",
          realName: "李晓丽",
          department: "研发部门",
          phone: "13345556666",
        },
        {
          userId: "146",
          username: "132300019",
          realName: "王国刚",
          department: "市场部门",
          phone: "13222322222",
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
