<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-main">
        <div class="main-top">
          <div>物料分类</div>
          <div>
            <button @click="handleAdd">+新增分类</button>
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
                <th><div>分类名称</div></th>
                <th><div>分类编码</div></th>
                <th><div>排序</div></th>
                <th><div>状态</div></th>
                <th><div>创建时间</div></th>
                <th class="ol-col"><div>操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue">
                <td>{{ item.name }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.sort }}</td>
                <td>{{ item.status }}</td>
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
// ========== 导入物料分类相关API ==========
import { getMaterialCategoryList, deleteMaterialCategory } from '#/api/mdm/basic/material-category';

export default {
  data() {
    return {
      // 表格数据
      tabValue: [],
    };
  },
  mounted() {
    this.loadList();
  },
  methods: {
    // 加载列表
    async loadList() {
      try {
        const data = await getMaterialCategoryList();
        this.tabValue = data.map((item) => ({
          id: item.id || '',
          name: item.name || '',
          code: item.code || '',
          sort: item.sort || 0,
          status: item.status === 0 ? '启用' : '停用',
          createTime: item.createTime || '',
        }));
      } catch (err) {
        console.error('获取列表失败', err);
      }
    },
    // 新增
    handleAdd() { alert('新增分类功能待实现'); },
    // 新增下级
    handleAddChild(item) { alert('新增下级功能待实现'); },
    // 编辑
    handleEdit(item) { alert('编辑功能待实现'); },
    // 删除
    async handleDelete(item) {
      if (!confirm(`确定要删除分类"${item.name}"吗？`)) return;
      try {
        await deleteMaterialCategory(item.id);
        alert('删除成功');
        this.loadList();
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
.main-top div:nth-child(2) button:nth-child(2) {
  width: 86px;
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
  width: 100%;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
}
.main-tab th div {
  border-right: 1px solid #ccc;
  padding: 0 8px;
}
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 20px;
  border-right: 0;
  /* max-width: 160px; */
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
}
.ol-col {
  width: 220px;
  position: sticky;
  right: 0;
  /* box-shadow: -2px 0 3px rgba(0, 0, 0, 0.205); */
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
