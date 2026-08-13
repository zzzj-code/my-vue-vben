<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div>
          <span>抬头名称</span>
          <input type="text" placeholder="请输入" v-model="searchForm.titleName" />
        </div>
        <div>
          <span>抬头类型</span>
          <input type="text" placeholder="请输入" v-model="searchForm.titleType" />
        </div>
        <div></div>
        <div>
          <button @click="handleReset">重置</button>
          <button @click="handleSearch">搜索</button>
          展开▽
        </div>
      </div>
      <div class="app-main">
        <div class="main-top">
          <div class="top-1">发票抬头</div>
          <div class="top-2">
            <button @click="handleAdd">+新增</button>
            <button>导出</button>
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
                <th><div>序号</div></th>
                <th><div>抬头名称</div></th>
                <th><div>类型</div></th>
                <th><div>纳税人识别号</div></th>
                <th><div>开户银行</div></th>
                <th><div>银行账号</div></th>
                <th><div>电话</div></th>
                <th><div>创建时间</div></th>
                <th class="ol-col"><div>操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tabValue.length === 0">
                <td colspan="9" class="empty-row">暂无数据</td>
              </tr>
              <tr v-for="(item, index) in tabValue" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.titleName }}</td>
                <td>{{ item.titleType }}</td>
                <td>{{ item.taxNumber }}</td>
                <td>{{ item.bankName }}</td>
                <td>{{ item.bankAccount }}</td>
                <td>{{ item.phone }}</td>
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
            <button @click="handlePageChange(pagination.pageNo + 1)">&gt;</button>
            <button @click="handlePageChange(Math.ceil(pagination.total / pagination.pageSize))">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入发票抬头相关API ==========
import { getInvoiceTitlePage, deleteInvoiceTitle } from '#/api/finance/invoice/title';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        titleName: '',  // 抬头名称
        titleType: '',  // 抬头类型
      },
      // 分页信息
      pagination: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      // 表格数据
      tabValue: [],
    };
  },
  mounted() {
    this.loadInvoiceTitleList();
  },
  methods: {
    // ========== 获取发票抬头列表 ==========
    async loadInvoiceTitleList() {
      try {
        const data = await getInvoiceTitlePage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          titleName: this.searchForm.titleName,
          titleType: this.searchForm.titleType,
        });
        // 字段映射，适配页面表格
        this.tabValue = data.list.map((item) => ({
          id: item.id,
          titleName: item.titleName || '',      // 抬头名称
          titleType: item.titleType || '',      // 抬头类型
          taxNumber: item.taxNumber || '',      // 纳税人识别号
          bankName: item.bankName || '',        // 开户银行
          bankAccount: item.bankAccount || '',  // 银行账号
          phone: item.phone || '',              // 电话
          createTime: this.formatTimestamp(item.createTime), // 创建时间
        }));
        this.pagination.total = data.total;
      } catch (err) {
        console.error('获取发票抬头列表失败', err);
      }
    },
    // ========== 时间戳格式化 ==========
    formatTimestamp(timestamp) {
      if (!timestamp) return '';
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`;
    },
    // ========== 搜索 ==========
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadInvoiceTitleList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = { titleName: '', titleType: '' };
      this.pagination.pageNo = 1;
      this.loadInvoiceTitleList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadInvoiceTitleList();
    },
    // ========== 新增 ==========
    handleAdd() {
      alert('新增发票抬头功能待实现');
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert(`编辑发票抬头：${row.titleName}`);
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm(`确定要删除「${row.titleName}」吗？`)) return;
      try {
        await deleteInvoiceTitle(row.id);
        alert('删除成功');
        this.loadInvoiceTitleList();
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
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top .top-2 {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}
.top-2 button:first-child {
  width: 106px;
  height: 32px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  background-color: #006be6;
}
.top-2 button:last-child {
  width: 38px;
  height: 32px;
  border: 0;
  background: #fff;
  color: #006be6;
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
  min-width: 1310px;
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
.empty-row {
  color: #666;
}
.ol-col {
  width: 160px;
  position: sticky;
  right: 0;
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
