<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>规则名称</span>
            <input type="text" placeholder="请输入规则名称" v-model="searchForm.name" />
          </div>
          <div>
            <span>匹配优先级</span>
            <input type="text" placeholder="请输入" v-model="searchForm.priority" />
          </div>
          <div>
            <span>状态</span>
            <input type="text" placeholder="请输入状态" v-model="searchForm.status" />
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
          <div>SLA 规则列表</div>
          <div>
            <button @click="handleAdd">+新增SLA规则</button>
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
                <th><div class="th-cell">规则名称</div></th>
                <th><div class="th-cell">匹配优先级</div></th>
                <th><div class="th-cell">匹配分类</div></th>
                <th><div class="th-cell">响应时限(h)</div></th>
                <th><div class="th-cell">解决时限(h)</div></th>
                <th><div class="th-cell">预警提前(min)</div></th>
                <th><div class="th-cell">状态</div></th>
                <th><div class="th-cell">排序</div></th>
                <th><div class="th-cell">创建时间</div></th>
                <th class="ol-col"><div class="th-cell">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.priority }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.responseTime }}</td>
                <td>{{ item.solveTime }}</td>
                <td>{{ item.warningTime }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.sort }}</td>
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
          <div class="left-info">
            共{{ pagination.total }}条记录
            <span>{{ pagination.pageSize }}条/页</span>
          </div>
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
// ========== 导入SLA规则相关API ==========
import { getSlaRulePage, deleteSlaRule } from '#/api/ticket/sla-rule';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        name: '',
        priority: '',
        status: '',
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
        const data = await getSlaRulePage(params);
        this.tabValue = data.list.map((item) => ({
          id: item.id || '',
          name: item.name || '',
          priority: this.formatPriority(item.priority),
          category: this.formatCategory(item.category),
          responseTime: item.responseHours ? item.responseHours + '小时' : '',
          solveTime: item.resolveHours ? item.resolveHours + '小时' : '',
          warningTime: item.warnBeforeMinutes ? item.warnBeforeMinutes + '分钟' : '',
          status: item.status === 0 ? '启用' : '停用',
          sort: item.sort || 0,
          createTime: this.formatTime(item.createTime),
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
      if (!confirm(`确定要删除SLA规则"${item.name}"吗？`)) return;
      try {
        await deleteSlaRule(item.id);
        alert('删除成功');
        this.loadList();
      } catch (err) {
        console.error('删除失败', err);
      }
    },
    // 优先级转换
    formatPriority(priority) {
      const map = { 1: '低', 2: '中', 3: '高', 4: '紧急' };
      return map[priority] || priority || '';
    },
    // 工单分类转换
    formatCategory(category) {
      const map = { 1: '问题咨询', 2: '故障报修', 3: '服务请求', 4: '投诉建议', 5: '其他' };
      return map[category] || category || '';
    },
    // 时间格式化
    formatTime(timestamp) {
      if (!timestamp) return '';
      const d = new Date(timestamp);
      return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0') + ' ' + String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
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
  width: 80px;
  height: 24px;
  text-align: right;
  margin-right: 8px;
  font-size: 14px;
}
.top-inp div input {
  width: 150px;
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
  cursor: pointer;
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
  cursor: pointer;
}

.main-tab {
  width: 100%;
  height: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1140px;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e6e6e6;
  font-size: 14px;
}
.main-tab th {
  height: 40px;
  background-color: #ece8e8;
  padding: 0;
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
}
.main-tab th:last-child {
  border-right: none;
}
.th-cell {
  padding: 0 8px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
.main-tab th:last-child .th-cell {
  border-right: none;
}
.main-tab td {
  text-align: center;
  height: 56px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 12px;
  border-right: 0;
}
.ol-col {
  width: 160px;
  min-width: 80px;
  position: sticky;
  right: 0;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
}
.ol-col button {
  width: 38px;
  height: 32px;
  border: 0;
  border-radius: 6px;
  background-color: #fff;
  color: #006be6;
  cursor: pointer;
}
.ol-col button:hover {
  background-color: #006be6;
  color: #fff;
}
.ol-col button:last-child {
  color: red;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.left-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.left-info span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 3px;
}
</style>
