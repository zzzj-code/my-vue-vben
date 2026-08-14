<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>工单编号</span>
          <input type="text" placeholder="请输入工单编号" v-model="searchForm.no" />
        </div>
        <div>
          <span>工单标题</span>
          <input type="text" placeholder="请输入工单标题" v-model="searchForm.title" />
        </div>
        <div>
          <span>流程状态</span>
          <input type="text" placeholder="请输入流程状态" v-model="searchForm.processStatus" />
        </div>
        <div>
          <button @click="handleReset">重置</button>
          <button @click="handleSearch">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">工单列表</div>
          <div class="top-2">
            <button @click="handleAdd">+新增</button>
            <button disabled>批量删除</button>
            <button>🔍</button>
          </div>
          <div class="top-3">
            <button>⟳</button>
            <button>⛶</button>
            <button>☷</button>
          </div>
        </div>
        <div class="main-tab">
          <table>
            <thead>
              <tr>
                <th>
                  <div><input type="checkbox" /></div>
                </th>
                <th><div>工单编号</div></th>
                <th><div>流程状态</div></th>
                <th><div>工单状态</div></th>
                <th><div>工单标题</div></th>
                <th><div>工单分类</div></th>
                <th><div>优先级</div></th>
                <th><div>处理人</div></th>
                <th><div>创建人</div></th>
                <th><div>创建时间</div></th>
                <th class="ol-col"><div>操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.invoiceNo">
                <td><input type="checkbox" /></td>
                <td style="color: #006be6">{{ item.invoiceNo }}</td>
                <td>{{ item.processStatus }}</td>
                <td>{{ item.orderStatus }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.priority }}</td>
                <td>{{ item.handler }}</td>
                <td>{{ item.creator }}</td>
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
</template>

<script>
// ========== 导入工单相关API ==========
import { getTicketPage, deleteTicket } from '#/api/ticket/ticket';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        no: '',
        title: '',
        processStatus: '',
      },
      // 分页数据
      pagination: { pageNo: 1, pageSize: 10, total: 0 },
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
        const params = {
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
        };
        Object.keys(this.searchForm).forEach((key) => {
          if (this.searchForm[key]) params[key] = this.searchForm[key];
        });
        const data = await getTicketPage(params);
        this.tabValue = data.list.map((item) => ({
          id: item.id || '',
          invoiceNo: item.no || '',
          processStatus: item.processStatus || '',
          orderStatus: item.status || '',
          title: item.title || '',
          category: item.categoryName || '',
          priority: item.priority || '',
          handler: item.handlerName || '',
          creator: item.creatorName || '',
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
      if (!confirm(`确定要删除工单"${item.title}"吗？`)) return;
      try {
        await deleteTicket(item.id);
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
  width: 1014px;
  height: 590px;
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 86px;
  margin-bottom: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}
.app-top div {
  width: 246px;
  height: 42px;
}
.app-top div span {
  display: inline-block;
  width: 90px;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
  text-align: right;
}
.app-top div input {
  width: 136px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}
.app-top div:last-child {
  font-size: 14px;
  color: #006be6;
  text-align: right;
}
.app-top div:last-child button {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 10px;
}
.app-top div:last-child button:last-child {
  border: 0;
  background-color: #006be6;
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
.main-top .top-1 {
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top .top-2 {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 78px;
  height: 32px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  background-color: #006be6;
}
.top-2 button:nth-child(2) {
  width: 106px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border: 0;
  background: #006be6;
  color: #fff;
  border-radius: 50%;
}
.main-top .top-3 {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
}
.main-tab {
  width: 100%;
  height: 401px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1560px;
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
.main-tab th > div {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-weight: 600;
  color: #333;
}
.main-tab th.ol-col > div {
  border-right: none;
}
.main-tab td {
  text-align: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 20px;
  border-right: 0;
}
.ol-col {
  width: 120px;
  position: sticky;
  right: 0;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  background-color: #fff;
  color: red;
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
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  margin-left: 5px;
  padding-top: 3px;
}
</style>
