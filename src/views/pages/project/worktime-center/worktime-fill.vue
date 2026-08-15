<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div class="inp-1">
            <span>所属项目</span>
            <input type="text" placeholder="全部"  v-model="searchForm.projectName" />
          </div>
          <div class="inp-1">
            <span>状态</span>
            <input type="text" placeholder="全部"  v-model="searchForm.status" />
          </div>
          <div class="inp-1">
            
          </div>
          <div class="inp-1">
            <button @click="handleReset">重置</button>
            <button @click="handleSearch">搜索</button>
            展开▽
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">我的工时</div>
          <div class="top-2">
            <button></button>
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
                <th><div class="th-inner"><input type="checkbox" /></div></th>
                <th><div class="th-inner">工作日期</div></th>
                <th><div class="th-inner">关联任务</div></th>
                <th><div class="th-inner">工时(h)</div></th>
                <th><div class="th-inner">工作内容</div></th>
                <th><div class="th-inner">状态</div></th>
                <th><div class="th-inner">审核意见</div></th>
                <th><div class="th-inner">创建时间</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td><input type="checkbox" /></td>
                <td>{{ item.workDate }}</td>
                <td>{{ item.taskName }}</td>
                <td>{{ item.hours }}</td>
                <td>{{ item.content }}</td>
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
                  >{{ getStatusText(item.status) }}</span>
                </td>
                <td>{{ item.reviewComment }}</td>
                <td>{{ item.createTime }}</td>
                <td class="ol-col">
                  <button>编辑</button>
                  <button @click="handleDelete(item.id)">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-floot">共{{ tabValue.length }}条记录<span>20条/页</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWorktimeFillPage, deleteWorktimeFill } from '#/api/project/worktime/worktime-fill';

export default {
  data() {
    return {
      searchForm: { projectName: '', status: '' },
      pagination: { pageNo: 1, pageSize: 10, total: 0 },
      tabValue: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const params = {
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          ...this.searchForm
        };
        const res = await getWorktimeFillPage(params);
        const list = res.list || res.records || [];
        this.tabValue = list.map(item => ({
          id: item.id,
          workDate: item.workDate || '',
          taskName: item.taskName || '',
          hours: item.workHours || 0,
          content: item.workContent || '',
          status: item.status,
          reviewComment: item.reviewComment || '',
          createTime: this.formatTime(item.createTime)
        }));
        this.pagination.total = res.total || 0;
      } catch (e) {
        console.error('加载数据失败', e);
      }
    },
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadData();
    },
    handleReset() {
      this.searchForm = { projectName: '', status: '' };
      this.pagination.pageNo = 1;
      this.loadData();
    },
    handleAdd() {
      alert('新增功能');
    },
    async handleDelete(id) {
      if (!confirm('确定要删除吗？')) return;
      try {
        await deleteWorktimeFill(id);
        this.loadData();
      } catch (e) {
        console.error('删除失败', e);
      }
    },
    getStatusColor(status) {
      const map = { 0: '#8c8c8c', 1: '#faad14', 2: '#52c41a', 3: '#ff4d4f', '草稿': '#8c8c8c', '审核中': '#faad14', '已通过': '#52c41a', '已驳回': '#ff4d4f' };
      return map[status] || '#333';
    },
    getStatusBg(status) {
      const map = { 0: '#f5f5f5', 1: '#fffbe6', 2: '#f6ffed', 3: '#fff2f0', '草稿': '#f5f5f5', '审核中': '#fffbe6', '已通过': '#f6ffed', '已驳回': '#fff2f0' };
      return map[status] || '#fff';
    },
    getStatusText(status) {
      const map = { 0: '草稿', 1: '审核中', 2: '已通过', 3: '已驳回' };
      return map[status] || status;
    },
    formatTime(timestamp) {
      if (!timestamp) return '';
      const d = new Date(timestamp);
      return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`;
    },
    getStatusBg(status) {
      const map = { '待审核': '#fffbe6', '已通过': '#f6ffed', '已驳回': '#fff2f0' };
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
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
}
.top-inp {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-inp .inp-1 {
  width: 246px;
  height: 100%;
}
.top-inp .inp-1 span {
  display: inline-block;
  width: 100px;
  height: 24px;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
}
.top-inp .inp-1 input {
  width: 125px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.top-inp .inp-1:last-child {
  font-size: 14px;
  color: #006be6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
}
.top-inp .inp-1:last-child button:first-child {
  width: 63px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.top-inp .inp-1 button:last-child {
  width: 63px;
  height: 32px;
  background-color: #006be6;
  border-radius: 10px;
  color: #fff;
  border: 0;
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
  align-items: center;
}
.top-1 {
  width: 70%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.top-2 {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 134px;
  height: 32px;
  background-color: #fff;
  border-radius: 10px;
  border: 0;
  color: #fff;
}
.top-2 button:nth-child(2) {
  width: 78px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  border-radius: 10px;
  color: #fff;
}
.top-2 button:last-child {
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background-color: #006be6;
  color: #fff;
}
.top-3 {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-3 button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
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
  min-width: 1090px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #e9e6e6;
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
  height: 40px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

/* 复选框列 */
.main-tab td:first-child,
.main-tab th:first-child {
  width: 40px;
  min-width: 40px;
  max-width: 40px;
}

.ol-col {
  width: 120px;
  min-width: 120px;
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
  color: #006be6;
}
.ol-col button:first-child:hover {
  background-color: #f0f4f9;
}
.ol-col button:last-child {
  color: red;
}
.ol-col button:last-child:hover {
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
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  padding-top: 3px;
  margin-left: 5px;
}
</style>
