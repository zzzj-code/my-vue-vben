<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="top-inp">
          <div>
            <span>检验单编号</span>
            <input type="text" placeholder="请输入检验单编号" v-model="searchForm.field1" />
          </div>
          <div>
            <span>供应商</span>
            <input type="text" placeholder="" v-model="searchForm.field2" />
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
          <div>来料检验单列表</div>
          <div>
            <button @click="handleAdd">+新增来料检验单</button>
            <button>导出</button>
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
                <th><div class="th-inner">来料检验单编号</div></th>
                <th><div class="th-inner">来料检验单名称</div></th>
                <th><div class="th-inner">供应商简称</div></th>
                <th><div class="th-inner">供应商批次号</div></th>
                <th><div class="th-inner">产品物料编码</div></th>
                <th><div class="th-inner">产品物料名称</div></th>
                <th><div class="th-inner">接收数量</div></th>
                <th><div class="th-inner">检测数量</div></th>
                <th><div class="th-inner">不合格数</div></th>
                <th><div class="th-inner">检测结果</div></th>
                <th><div class="th-inner">来料日期</div></th>
                <th><div class="th-inner">检测日期</div></th>
                <th><div class="th-inner">检测人员</div></th>
                <th><div class="th-inner">单据状态</div></th>
                <th class="ol-col"><div class="th-inner no-border">操作</div></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tabValue" :key="item.id">
                <td style="color: #006be6">{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.supplierName }}</td>
                <td>{{ item.batchNo }}</td>
                <td>{{ item.materialCode }}</td>
                <td>{{ item.materialName }}</td>
                <td>{{ item.receiveQty }}</td>
                <td>{{ item.checkQty }}</td>
                <td>{{ item.defectQty }}</td>
                <td>
                  <span
                    :style="{
                      display: 'inline-block',
                      padding: '0 12px',
                      height: '24px',
                      lineHeight: '24px',
                      backgroundColor: getResultBg(item.result),
                      color: getResultColor(item.result),
                      border: `1px solid ${getResultColor(item.result)}`,
                      borderRadius: '12px',
                      fontSize: '12px'
                    }"
                  >{{ item.result }}</span>
                </td>
                <td>{{ item.receiveDate }}</td>
                <td>{{ item.checkDate }}</td>
                <td>{{ item.checker }}</td>
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
                <td class="ol-col">
                  <button @click="handleEdit(item)">详情</button>
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
    </div></div>
</template>

<script>
// ========== 导入来料检验相关API ==========
import { getIqcPage, deleteIqc } from '#/api/mes/qc/iqc';

export default {
  data() {
    return {
      // 搜索表单
      searchForm: {},
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
    this.loadList();
  },
  methods: {
    // ========== 获取状态文字颜色 ==========
    getStatusColor(status) {
      const colorMap = {
        0: '#006be6',
        1: '#52c41a',
        2: '#faad14',
        3: '#ff4d4f',
        '0': '#006be6',
        '1': '#52c41a',
        '2': '#faad14',
        '3': '#ff4d4f',
      };
      return colorMap[status] || '#006be6';
    },
    // ========== 获取状态背景颜色 ==========
    getStatusBg(status) {
      const bgMap = {
        0: '#e6f6ff',
        1: '#f6ffed',
        2: '#fffbe6',
        3: '#fff2f0',
        '0': '#e6f6ff',
        '1': '#f6ffed',
        '2': '#fffbe6',
        '3': '#fff2f0',
      };
      return bgMap[status] || '#e6f6ff';
    },
    // ========== 获取来料检验列表 ==========
    async loadList() {
      try {
        const data = await getIqcPage({
          pageNo: this.pagination.pageNo,
          pageSize: this.pagination.pageSize,
          ...this.searchForm,
        });
        this.tabValue = data.list || [];
        this.pagination.total = data.total || 0;
      } catch (err) {
        console.error("获取来料检验列表失败", err);
      }
    },
    // ========== 时间戳格式化 ==========
    formatTimestamp(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`;
    },
    // ========== 搜索 ==========
    handleSearch() {
      this.pagination.pageNo = 1;
      this.loadList();
    },
    // ========== 重置 ==========
    handleReset() {
      this.searchForm = {};
      this.pagination.pageNo = 1;
      this.loadList();
    },
    // ========== 分页切换 ==========
    handlePageChange(page) {
      this.pagination.pageNo = page;
      this.loadList();
    },
    // ========== 新增 ==========
    handleAdd() {
      alert("新增来料检验功能待实现");
    },
    // ========== 编辑 ==========
    handleEdit(row) {
      alert("编辑来料检验功能待实现");
    },
    // ========== 删除 ==========
    async handleDelete(row) {
      if (!confirm("确定要删除吗？")) return;
      try {
        await deleteIqc(row.id);
        alert("删除成功");
        this.loadList();
      } catch (err) {
        console.error("删除失败", err);
      }
    },
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
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.main-top div:nth-child(2) {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
.main-top div:nth-child(2) button {
  width: 134px;
  height: 32px;
  background-color: #006be6;
  border: 0;
  color: #fff;
  border-radius: 10px;
}
.main-top div:nth-child(2) button:nth-child(2) {
  width: 63px;
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
  height: 390px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main-tab table {
  width: max-content;
  min-width: 1700px;
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
  width: 80px;
  min-width: 80px;
  position: sticky;
  right: 0;
  z-index: 2;
  border-left: 1px solid #ccc;
  background-color: #fff;
}
.ol-col button {
  width: 56px;
  height: 32px;
  border: 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  color: #006be6;
}
.ol-col button:hover {
  background-color: #f0f4f9;
}

.main-floot {
  width: 100%;
  height: 36px;
  margin-top: 8px;
  font-size: 12px;
}
.main-floot span {
  display: inline-block;
  width: 100px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 3px;
  margin-left: 5px;
  text-align: center;
}
</style>