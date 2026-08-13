<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div>菜单列表</div>
          <div>
            <button @click="handleAdd">+新增菜单</button>
            <button>收缩</button>
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
                <th>菜单名称</th>
                <th>菜单类型</th>
                <th>显示排序</th>
                <th>权限标识</th>
                <th>组件路径</th>
                <th>组件名称</th>
                <th>状态</th>
                <th class="ol-col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="8" class="empty-row">暂无数据</td>
              </tr>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.type === 1 ? '目录' : item.type === 2 ? '菜单' : '按钮' }}</td>
                <td>{{ item.sort }}</td>
                <td>{{ item.permission }}</td>
                <td>{{ item.component }}</td>
                <td>{{ item.componentName }}</td>
                <td>{{ item.status === 0 ? '启用' : '停用' }}</td>
                <td class="ol-col">
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
// ========== 导入菜单管理相关API ==========
import { getMenuList, deleteMenu } from '#/api/system/menu';

export default {
  data() {
    return {
      // 表格数据
      tabValue: [],
    };
  },
  mounted() {
    this.loadMenuList();
  },
  methods: {
    // ========== 获取菜单列表 ==========
    async loadMenuList() {
      try {
        const data = await getMenuList({});
        // 字段映射，适配页面表格（菜单列表是树形结构，这里平铺显示）
        this.tabValue = data.map((item) => ({
          id: item.id,                          // 菜单ID
          name: item.name || '',                // 菜单名称
          type: item.type,                      // 菜单类型（1=目录，2=菜单，3=按钮）
          sort: item.sort || 0,                 // 显示排序
          permission: item.permission || '',    // 权限标识
          component: item.component || '',      // 组件路径
          componentName: item.componentName || '', // 组件名称
          status: item.status,                  // 状态（0=启用，1=停用）
        }));
      } catch (err) {
        console.error('获取菜单列表失败', err);
      }
    },
    // ========== 新增菜单 ==========
    handleAdd() {
      alert('新增菜单功能待实现');
    },
    // ========== 编辑菜单 ==========
    handleEdit(row) {
      alert(`编辑菜单：${row.name}`);
    },
    // ========== 删除菜单 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除菜单「${row.name}」吗？`)) return;
      try {
        await deleteMenu(row.id);
        alert('删除成功');
        this.loadMenuList();
      } catch (err) {
        console.error('删除失败', err);
      }
    },
  },
};
</script>

<style scoped>
.asd{
    position: absolute;
    top: 50%;
    left: 51%;
}
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
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 20%;
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
.main-top div:nth-child(2) button:first-child{
    border: 1px solid #ccc;
    background-color: #fff;
    color: #ccc;
}
.main-top div:nth-child(2) button:nth-child(2) {
  width: 63px;
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
  min-width: 1370px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
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
