<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div>部门列表</div>
          <div>
            <button @click="handleAdd">+新增部门</button>
            <button>收缩</button>
            <button>导出</button>
            <button disabled>批量删除</button>
            <button>🔍</button>
          </div>
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
                <th>ID</th>
                <th>部门名称</th>
                <th><input type="checkbox" /></th>
                <th>部门类型</th>
                <th>负责人</th>
                <th>显示顺序</th>
                <th>部门状态</th>
                <th>创建时间</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="9" class="empty-row">暂无数据</td>
              </tr>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td><input type="checkbox" /></td>
                <td>{{ item.type }}</td>
                <td>{{ item.leaderUserId }}</td>
                <td>{{ item.sort }}</td>
                <td>{{ item.status === 0 ? '启用' : '停用' }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button @click="handleAddChild(item)">+新增下级</button>
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
// ========== 导入部门管理相关API ==========
import { getDeptList, deleteDept } from '#/api/system/dept';

export default {
  data() {
    return {
      // 表格数据
      tabValue: [],
    };
  },
  mounted() {
    this.loadDeptList();
  },
  methods: {
    // ========== 获取部门列表 ==========
    async loadDeptList() {
      try {
        const data = await getDeptList();
        // 字段映射，适配页面表格（部门列表是树形结构，这里平铺显示）
        this.tabValue = data.map((item) => ({
          id: item.id,                          // 部门ID
          name: item.name || '',                // 部门名称
          type: item.type || '',                // 部门类型
          leaderUserId: item.leaderUserId || '', // 负责人
          sort: item.sort || 0,                 // 显示顺序
          status: item.status,                  // 部门状态（0=启用，1=停用）
          createTime: this.formatTimestamp(item.createTime), // 创建时间
        }));
      } catch (err) {
        console.error('获取部门列表失败', err);
      }
    },
    // ========== 时间戳格式化 ==========
    formatTimestamp(timestamp) {
      if (!timestamp) return '';
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`;
    },
    // ========== 新增部门 ==========
    handleAdd() {
      alert('新增部门功能待实现');
    },
    // ========== 新增下级部门 ==========
    handleAddChild(row) {
      alert(`新增下级部门：${row.name}`);
    },
    // ========== 编辑部门 ==========
    handleEdit(row) {
      alert(`编辑部门：${row.name}`);
    },
    // ========== 删除部门 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除部门「${row.name}」吗？`)) return;
      try {
        await deleteDept(row.id);
        alert('删除成功');
        this.loadDeptList();
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
  height: 590px;
  background-color: #ecebeb;
  /* border: 1px solid red; */
  position: absolute;
  top: -375px;
}
.app-main {
  width: 100%;
  height: 578px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}
.main-top {
  width: 100%;
  height: 47px;
  display: flex;
}
.main-top div:first-child {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 106px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:nth-child(2),
.main-top div:nth-child(2) button:nth-child(3) {
  width: 63px;
}
.main-top div:nth-child(2) button:nth-child(4) {
  width: 106px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: black;
}
.main-top div:nth-child(2) button:last-child {
  width: 30px;
  height: 30px;
  border-radius: 50%;
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
}
.main-tab {
  width: 100%;
  height: 500px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1070px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 56px;
  border-right: 1px solid #ccc;
  background-color: #ece8e8;
}
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 20px;
  border-right: 0;
}
.empty-row {
  color: #666;
}
.ol-col {
  width: 220px;
  position: sticky;
  right: 0;
  border-left: 1px solid #ccc;
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: #006be6;
}
.ol-col button:first-child {
  width: 84px;
}
.ol-col button:last-child {
  color: red;
}
</style>
