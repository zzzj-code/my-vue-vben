<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>分类名称</span>
            <input type="text" placeholder="模糊搜索名称" v-model="searchForm.name" />
          </div>
          <div>
            <span>分类编码</span>
            <input type="text" placeholder="如 A02010108" v-model="searchForm.code" />
          </div>
          <div>
            <button @click="handleReset">重置</button>
            <button @click="handleSearch">搜索</button>
            收起^
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div>资产分类（GB/T 14885-2022）</div>
          <div><button @click="handleAdd">新增</button></div>
          <div>
            <button>⟳</button>
            <button>⛶</button>
            <button>⊞</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th><div class="th-inner">分类名称</div></th>
                <th><div class="th-inner">分类编码</div></th>
                <th><div class="th-inner">折旧方法</div></th>
                <th><div class="th-inner">使用年限(月)</div></th>
                <th><div class="th-inner">残值率(%)</div></th>
                <th><div class="th-inner">排序</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.code">
                <td>{{ item.name }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.depreciationMethod }}</td>
                <td>{{ item.usefulLife }}</td>
                <td>{{ item.residualRate }}</td>
                <td>{{ item.sort }}</td>
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
                  <button @click="handleAddChild(item)">新增子分类</button>
                  <button @click="handleEdit(item)">编辑</button>
                  <button @click="handleDelete(item)">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入资产分类相关API ==========
import { getCategoryList, deleteCategory } from '#/api/asset/category';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        name: "",  // 分类名称
        code: "",  // 分类编码
      },
      // 表格数据
      tabValue: [],
    };
  },
  mounted() {
    this.loadCategoryList();
  },
  methods: {
    // ========== 获取资产分类列表 ==========
    async loadCategoryList() {
      try {
        const data = await getCategoryList({
          name: this.searchForm.name,
          code: this.searchForm.code,
        });
        // 字段映射，适配页面表格
        this.tabValue = (data || []).map((item) => ({
          id: item.id,
          name: item.name || "",                    // 分类名称
          code: item.code || "",                    // 分类编码
          depreciationMethod: this.getDepreciationMethodName(item.depreciationMethod), // 折旧方法
          usefulLife: item.usefulLife || 0,         // 使用年限(月)
          residualRate: item.residualRate || 0,     // 残值率(%)
          sort: item.sort || 0,                     // 排序
          status: item.status === 0 ? "启用" : "停用", // 状态
          createTime: this.formatTimestamp(item.createTime), // 创建时间
        }));
      } catch (err) {
        console.error("获取资产分类列表失败", err);
      }
    },
    // ========== 折旧方法名称转换 ==========
    getDepreciationMethodName(method) {
      const map = { 1: "平均年限法", 2: "双倍余额递减法", 3: "年数总和法", 4: "工作量法" };
      return map[method] || "平均年限法";
    },
    // ========== 时间戳格式化 ==========
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
    },
    // ========== 搜索 ==========
    handleSearch() {
      this.loadCategoryList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { name: "", code: "" };
      this.loadCategoryList();
    },
    // ========== 新增 ==========
    handleAdd() {
      alert("新增分类功能待实现");
    },
    // ========== 新增子分类 ==========
    handleAddChild(row) {
      alert(`新增子分类：${row.name}`);
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert(`编辑分类：${row.name}`);
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除「${row.name}」吗？`)) return;
      try {
        await deleteCategory(row.id);
        alert("删除成功");
        this.loadCategoryList();
      } catch (err) {
        console.error("删除失败", err);
      }
    },
    getStatusColor(status) {
      const map = {
        '启用': '#52c41a',
        '停用': '#8c8c8c',
        '维修中': '#faad14',
        '已报废': '#ff4d4f'
      };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = {
        '启用': '#f6ffed',
        '停用': '#f5f5f5',
        '维修中': '#fffbe6',
        '已报废': '#fff2f0'
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
  height: 590px;
  background-color: #ecebeb;
  position: absolute;
  top: -375px;
}
.app-top {
  width: 100%;
  height: 86px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.top-inp div {
  width: 331px;
  height: 42px;
}
.top-inp div span {
  display: inline-block;
  width: 100px;
  height: 24px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
.top-inp div input {
  width: 215px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
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
  background-color: #006be6;
  border: 0;
  color: #fff;
}

.app-main {
  width: 100%;
  height: 492px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.main-top div:first-child {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-top div:nth-child(2) button {
  width: 78px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}
.main-top div:last-child {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main-top div:last-child button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
}
.main-tab {
  width: 100%;
  height: 420px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1220px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
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

.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
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
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.ol-col button:first-child {
  width: 80px;
  color: #006be6;
}
.ol-col button:first-child:hover {
  background-color: #f0f4f9;
}
.ol-col button:nth-child(2) {
  color: #006be6;
}
.ol-col button:nth-child(2):hover {
  background-color: #f0f4f9;
}
.ol-col button:last-child {
  color: red;
}
.ol-col button:last-child:hover {
  background-color: #fff2f0;
}
</style>