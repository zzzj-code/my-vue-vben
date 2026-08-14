<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <span>统计区间：</span>
        <input type="text" placeholder="2026-07-01  ——>  2026-07-31"  v-model="searchForm.searchField1" />
        <button @click="handleSearch">查询</button>
      </div>
      <div class="app-tab">
        <table>
          <thead>
            <tr>
              <th><div class="th-inner">成员</div></th>
              <th><div class="th-inner">任务数</div></th>
              <th><div class="th-inner">分配工时(h)</div></th>
              <th><div class="th-inner">填报工时(h)</div></th>
              <th><div class="th-inner">标准工时(h)</div></th>
              <th><div class="th-inner">负载率</div></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tabValue" :key="item.id">
              <td>{{ item.member }}</td>
              <td>{{ item.taskCount }}</td>
              <td>{{ item.allocatedHours }}</td>
              <td>{{ item.filledHours }}</td>
              <td>{{ item.standardHours }}</td>
              <td>
                <span
                  :style="{
                    display: 'inline-block',
                    padding: '0 12px',
                    height: '24px',
                    lineHeight: '24px',
                    backgroundColor: getLoadRateBg(item.loadRate),
                    color: getLoadRateColor(item.loadRate),
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }"
                >
                  {{ item.loadRate }}%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectResourcePage, deleteProjectResource } from '#/api/project/project-resource';

export default {
  data() {
    return {
      searchForm: { searchField1: '' },
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
        const res = await getProjectResourcePage(params);
        this.tabValue = res.list || res.records || [];
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
      this.searchForm = { searchField1: '' };
      this.pagination.pageNo = 1;
      this.loadData();
    },
    handleAdd() {
      alert('新增功能');
    },
    async handleDelete(id) {
      if (!confirm('确定要删除吗？')) return;
      try {
        await deleteProjectResource(id);
        this.loadData();
      } catch (e) {
        console.error('删除失败', e);
      }
    },
    getLoadRateColor(rate) {
      if (rate >= 100) return '#ff4d4f';
      if (rate >= 80) return '#faad14';
      if (rate >= 50) return '#1890ff';
      return '#52c41a';
    },
    getLoadRateBg(rate) {
      if (rate >= 100) return '#fff2f0';
      if (rate >= 80) return '#fffbe6';
      if (rate >= 50) return '#e6f7ff';
      return '#f6ffed';
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
  height: 400px;
  padding: 10px;
  position: absolute;
  top: -380px;
}
.app-top {
  width: 100%;
  height: 56px;
  background-color: #fff;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}
.app-top span {
  display: inline-block;
  width: 70px;
  height: 22px;
  font-size: 14px;
}
.app-top input {
  width: 298px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  margin-left: 10px;
}
.app-top button {
  width: 63px;
  height: 32px;
  border: 0;
  background-color: #006be6;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}
.app-tab {
  width: 100%;
  height: 320px;
  border-radius: 10px;
  border: 1px solid #ccc;
  overflow: auto;
}
.app-tab table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: #fff;
  font-size: 14px;
}
.app-tab th {
  height: 40px;
  background-color: #e9e6e6;
  border-right: none;
  padding: 0;
  white-space: nowrap;
  position: sticky;
  top: 0;
  z-index: 2;
}

/* ===== 表头内部 div：承载右边框 ===== */
.th-inner {
  padding: 0 12px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

/* 最后一列不显示右边框 */
.app-tab th:last-child .th-inner {
  border-right: none;
}

.app-tab td {
  height: 48px;
  padding: 0 12px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}

/* 列宽分配 */
.app-tab th:first-child,
.app-tab td:first-child {
  width: 18%;
  min-width: 100px;
}
.app-tab th:nth-child(2),
.app-tab td:nth-child(2) {
  width: 12%;
  min-width: 80px;
}
.app-tab th:nth-child(3),
.app-tab td:nth-child(3) {
  width: 15%;
  min-width: 100px;
}
.app-tab th:nth-child(4),
.app-tab td:nth-child(4) {
  width: 15%;
  min-width: 100px;
}
.app-tab th:nth-child(5),
.app-tab td:nth-child(5) {
  width: 15%;
  min-width: 100px;
}
.app-tab th:nth-child(6),
.app-tab td:nth-child(6) {
  width: 25%;
  min-width: 120px;
}
</style>
