<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="dict-container">
        <!-- 左侧：字典类型 -->
        <div class="dict-left">
          <div class="left-search">
            <div class="search-row">
              <div class="search-item">
                <label>字典名称</label>
                <input type="text" placeholder="请输入" v-model="dictTypeSearch.name" />
              </div>
              <div class="search-item">
                <label>字典类型</label>
                <input type="text" placeholder="请输入" v-model="dictTypeSearch.type" />
              </div>
              <div class="search-item">
                <label>状态</label>
                <select v-model="dictTypeSearch.status">
                  <option value="">请选择</option>
                  <option value="0">启用</option>
                  <option value="1">停用</option>
                </select>
              </div>
            </div>
            <div class="search-btns">
              <button class="btn-reset" @click="handleDictTypeReset">重置</button>
              <button class="btn-search" @click="handleDictTypeSearch">搜索</button>
              <span class="collapse-text">收起 △</span>
            </div>
          </div>
          <div class="left-content">
            <div class="content-header">
              <div class="header-left">
                <span class="title">字典类型列表</span>
                <button class="btn-primary" @click="handleAddDictType">+ 新增字典类型</button>
                <button class="btn-primary">导出</button>
                <button class="btn-outline">批量删除</button>
                <button class="btn-icon-circle blue">🔍</button>
              </div>
              <div class="header-right">
                <button class="btn-icon-circle">⟳</button>
                <button class="btn-icon-circle">⛶</button>
                <button class="btn-icon-circle">☷</button>
              </div>
            </div>
            <div class="table-wrapper">
              <table class="data-table">
                <thead>
                  <tr>
                    <th class="check-col"><input type="checkbox" /></th>
                    <th>字典编号</th>
                    <th>字典名称</th>
                    <th></th>
                    <th class="op-col">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="dictTypeList.length === 0">
                    <td colspan="5" class="empty-row">暂无数据</td>
                  </tr>
                  <tr v-for="(row, index) in dictTypeList" :key="row.id" :class="{ active: selectedDictTypeId === row.id }" @click="handleSelectDictType(row)">
                    <td class="check-col"><input type="checkbox" /></td>
                    <td>{{ row.id }}</td>
                    <td>{{ row.name }}</td>
                    <td class="type-col">{{ row.type }}</td>
                    <td class="op-col">
                      <button class="op-edit" @click.stop="handleEditDictType(row)">编辑</button>
                      <button class="op-del" @click.stop="handleDeleteDictType(row)">删除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pagination-bar">
              <span class="total-text">共 {{ dictTypePagination.total }} 条记录</span>
              <select class="page-size" v-model="dictTypePagination.pageSize" @change="handleDictTypePageSizeChange">
                <option :value="10">10条/页</option>
                <option :value="20">20条/页</option>
                <option :value="50">50条/页</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 右侧：字典数据 -->
        <div class="dict-right">
          <div class="right-search">
            <div class="search-row">
              <div class="search-item">
                <label>字典标签</label>
                <input type="text" placeholder="请输入" v-model="dictDataSearch.label" />
              </div>
              <div class="search-item">
                <label>状态</label>
                <select v-model="dictDataSearch.status">
                  <option value="">请选择</option>
                  <option value="0">启用</option>
                  <option value="1">停用</option>
                </select>
              </div>
            </div>
            <div class="search-btns">
              <button class="btn-reset" @click="handleDictDataReset">重置</button>
              <button class="btn-search" @click="handleDictDataSearch">搜索</button>
              <span class="collapse-text">收起 △</span>
            </div>
          </div>
          <div class="right-content">
            <div class="content-header">
              <div class="header-left">
                <span class="title">字典数据列表</span>
                <button class="btn-primary" @click="handleAddDictData">+新增字典数据</button>
                <button class="btn-primary">导出</button>
                <button class="btn-outline">批量删除</button>
                <button class="btn-icon-circle blue">🔍</button>
              </div>
              <div class="header-right">
                <button class="btn-icon-circle">⟳</button>
                <button class="btn-icon-circle">⛶</button>
                <button class="btn-icon-circle">☷</button>
              </div>
            </div>
            <div class="table-wrapper">
              <table class="data-table">
                <thead>
                  <tr>
                    <th class="check-col"><input type="checkbox" /></th>
                    <th>字典编码</th>
                    <th>字典标签</th>
                    <th>字典键值</th>
                    <th class="op-col">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="dictDataList.length === 0">
                    <td colspan="5" class="empty-row">暂无数据</td>
                  </tr>
                  <tr v-for="(row, index) in dictDataList" :key="row.id">
                    <td class="check-col"><input type="checkbox" /></td>
                    <td>{{ row.id }}</td>
                    <td>{{ row.label }}</td>
                    <td>{{ row.value }}</td>
                    <td class="op-col">
                      <button class="op-edit" @click="handleEditDictData(row)">编辑</button>
                      <button class="op-del" @click="handleDeleteDictData(row)">删除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pagination-bar">
              <span class="total-text">共 {{ dictDataPagination.total }} 条记录</span>
              <select class="page-size" v-model="dictDataPagination.pageSize" @change="handleDictDataPageSizeChange">
                <option :value="10">10条/页</option>
                <option :value="20">20条/页</option>
                <option :value="50">50条/页</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入字典类型和字典数据相关API ==========
import { getDictTypePage, deleteDictType } from '#/api/system/dict/type';
import { getDictDataPage, deleteDictData } from '#/api/system/dict/data';

export default {
  name: 'DictManagement',
  data() {
    return {
      // 选中的字典类型ID
      selectedDictTypeId: '',
      // 字典类型搜索表单
      dictTypeSearch: {
        name: '',    // 字典名称
        type: '',    // 字典类型
        status: '',  // 状态
      },
      // 字典类型分页
      dictTypePagination: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      // 字典类型列表
      dictTypeList: [],
      // 字典数据搜索表单
      dictDataSearch: {
        label: '',   // 字典标签
        status: '',  // 状态
      },
      // 字典数据分页
      dictDataPagination: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      // 字典数据列表
      dictDataList: [],
    };
  },
  mounted() {
    this.loadDictTypeList();
  },
  methods: {
    // ========== 加载字典类型列表 ==========
    async loadDictTypeList() {
      try {
        const data = await getDictTypePage({
          pageNo: this.dictTypePagination.pageNo,
          pageSize: this.dictTypePagination.pageSize,
          name: this.dictTypeSearch.name,
          type: this.dictTypeSearch.type,
          status: this.dictTypeSearch.status,
        });
        this.dictTypeList = data.list.map((item) => ({
          id: item.id,
          name: item.name || '',
          type: item.type || '',
          status: item.status,
        }));
        this.dictTypePagination.total = data.total;
      } catch (err) {
        console.error('加载字典类型列表失败', err);
      }
    },
    // ========== 加载字典数据列表 ==========
    async loadDictDataList() {
      if (!this.selectedDictTypeId) {
        this.dictDataList = [];
        this.dictDataPagination.total = 0;
        return;
      }
      try {
        const data = await getDictDataPage({
          pageNo: this.dictDataPagination.pageNo,
          pageSize: this.dictDataPagination.pageSize,
          dictTypeId: this.selectedDictTypeId,
          label: this.dictDataSearch.label,
          status: this.dictDataSearch.status,
        });
        this.dictDataList = data.list.map((item) => ({
          id: item.id,
          label: item.label || '',
          value: item.value || '',
          status: item.status,
        }));
        this.dictDataPagination.total = data.total;
      } catch (err) {
        console.error('加载字典数据列表失败', err);
      }
    },
    // ========== 选中字典类型 ==========
    handleSelectDictType(row) {
      this.selectedDictTypeId = row.id;
      this.dictDataPagination.pageNo = 1;
      this.loadDictDataList();
    },
    // ========== 字典类型搜索 ==========
    handleDictTypeSearch() {
      this.dictTypePagination.pageNo = 1;
      this.loadDictTypeList();
    },
    // ========== 字典类型重置 ==========
    handleDictTypeReset() {
      this.dictTypeSearch = { name: '', type: '', status: '' };
      this.dictTypePagination.pageNo = 1;
      this.loadDictTypeList();
    },
    // ========== 字典类型每页条数切换 ==========
    handleDictTypePageSizeChange() {
      this.dictTypePagination.pageNo = 1;
      this.loadDictTypeList();
    },
    // ========== 字典数据搜索 ==========
    handleDictDataSearch() {
      this.dictDataPagination.pageNo = 1;
      this.loadDictDataList();
    },
    // ========== 字典数据重置 ==========
    handleDictDataReset() {
      this.dictDataSearch = { label: '', status: '' };
      this.dictDataPagination.pageNo = 1;
      this.loadDictDataList();
    },
    // ========== 字典数据每页条数切换 ==========
    handleDictDataPageSizeChange() {
      this.dictDataPagination.pageNo = 1;
      this.loadDictDataList();
    },
    // ========== 新增字典类型 ==========
    handleAddDictType() {
      alert('新增字典类型功能待实现');
    },
    // ========== 编辑字典类型 ==========
    handleEditDictType(row) {
      alert(`编辑字典类型：${row.name}`);
    },
    // ========== 删除字典类型 ==========
    async handleDeleteDictType(row) {
      if (!confirm(`确定要删除字典类型「${row.name}」吗？`)) return;
      try {
        await deleteDictType(row.id);
        alert('删除成功');
        if (this.selectedDictTypeId === row.id) {
          this.selectedDictTypeId = '';
          this.dictDataList = [];
        }
        this.loadDictTypeList();
      } catch (err) {
        console.error('删除失败', err);
      }
    },
    // ========== 新增字典数据 ==========
    handleAddDictData() {
      if (!this.selectedDictTypeId) {
        alert('请先选择字典类型');
        return;
      }
      alert('新增字典数据功能待实现');
    },
    // ========== 编辑字典数据 ==========
    handleEditDictData(row) {
      alert(`编辑字典数据：${row.label}`);
    },
    // ========== 删除字典数据 ==========
    async handleDeleteDictData(row) {
      if (!confirm(`确定要删除字典数据「${row.label}」吗？`)) return;
      try {
        await deleteDictData(row.id);
        alert('删除成功');
        this.loadDictDataList();
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
  position: absolute;
  top: -375px;
}

.dict-container {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 12px;
}

/* 左右面板通用 */
.dict-left,
.dict-right {
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dict-left {
  width: 48%;
}

.dict-right {
  width: 52%;
}

/* 搜索区 */
.left-search,
.right-search {
  padding: 12px 16px;
  border-bottom: 1px solid #ebeef5;
}

.search-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 10px;
}

.search-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.search-item label {
  font-size: 14px;
  color: #333;
  white-space: nowrap;
}

.search-item input,
.search-item select {
  width: 100px;
  height: 28px;
  padding: 0 8px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  box-sizing: border-box;
}

.search-item input:focus,
.search-item select:focus {
  border-color: #409eff;
}

.search-btns {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

.btn-reset {
  height: 28px;
  padding: 0 14px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  color: #606266;
  font-size: 13px;
  cursor: pointer;
}

.btn-search {
  height: 28px;
  padding: 0 14px;
  border: none;
  border-radius: 4px;
  background-color: #006be6;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
}

.collapse-text {
  font-size: 13px;
  color: #409eff;
  cursor: pointer;
}

/* 内容区 */
.left-content,
.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  overflow: hidden;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title {
  font-size: 15px;
  font-weight: 600;
  color: #303133;
  margin-right: 4px;
}

.btn-primary {
  height: 28px;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  background-color: #006be6;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
}

.btn-outline {
  height: 28px;
  padding: 0 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  color: #606266;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
}

.btn-icon-circle {
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid #dcdfe6;
  border-radius: 50%;
  background-color: #fff;
  color: #606266;
  font-size: 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-icon-circle.blue {
  background-color: #006be6;
  color: #fff;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* 表格 */
.table-wrapper {
  flex: 1;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  overflow: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.data-table thead th {
  height: 36px;
  padding: 0 10px;
  background-color: #fafafa;
  border-bottom: 1px solid #ebeef5;
  border-right: 1px solid #ebeef5;
  color: #606266;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
}

.data-table thead th:last-child {
  border-right: none;
}

.data-table tbody td {
  padding: 10px;
  border-bottom: 1px solid #ebeef5;
  border-right: 1px solid #ebeef5;
  color: #303133;
  vertical-align: middle;
}

.data-table tbody td:last-child {
  border-right: none;
}

.data-table tbody tr:hover {
  background-color: #f5f7fa;
}

.data-table tbody tr.active {
  background-color: #ecf5ff;
}

.check-col {
  width: 36px;
  text-align: center !important;
  padding: 0 8px !important;
}

.check-col input[type="checkbox"] {
  cursor: pointer;
}

.type-col {
  color: #909399;
  font-size: 12px;
}

.op-col {
  text-align: center !important;
  white-space: nowrap;
}

.op-edit,
.op-del {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 12px;
  padding: 0 4px;
}

.op-edit {
  color: #409eff;
}

.op-del {
  color: #f56c6c;
}

.op-edit:hover {
  color: #66b1ff;
}

.op-del:hover {
  color: #f78989;
}

.empty-row {
  color: #666;
  text-align: center;
}

/* 分页 */
.pagination-bar {
  display: flex;
  align-items: center;
  padding-top: 10px;
  flex-shrink: 0;
}

.total-text {
  font-size: 12px;
  color: #606266;
}

.page-size {
  height: 24px;
  padding: 0 6px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 12px;
  color: #606266;
  outline: none;
  cursor: pointer;
  margin-left: auto;
  margin-right: 12px;
}

.page-btns {
  display: flex;
  align-items: center;
  gap: 4px;
}

.page-btn {
  min-width: 26px;
  height: 26px;
  padding: 0 4px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  color: #606266;
  font-size: 12px;
  cursor: pointer;
}

.page-btn.active {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}

.page-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.page-btn:hover:not(:disabled):not(.active) {
  color: #409eff;
  border-color: #c6e2ff;
}
</style>
