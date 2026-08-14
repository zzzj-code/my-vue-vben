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
                  <option value="0">正常</option>
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
                    <th class="check-col"><div><input type="checkbox" /></div></th>
                    <th><div>字典编号</div></th>
                    <th><div>字典名称</div></th>
                    <th><div>字典类型</div></th>
                    <th><div>状态</div></th>
                    <th><div>备注</div></th>
                    <th><div>创建时间</div></th>
                    <th class="op-col op-fixed"><div>操作</div></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in dictTypeList" :key="index">
                    <td class="check-col"><input type="checkbox" /></td>
                    <td>{{ row.code }}</td>
                    <td>{{ row.name }}</td>
                    <td class="type-col">{{ row.type }}</td>
                    <td>{{ row.status }}</td>
                    <td>{{ row.remark }}</td>
                    <td>{{ row.createTime }}</td>
                    <td class="op-col op-fixed">
                      <button class="op-edit" @click="handleEditDictType(row)">编辑</button>
                      <button class="op-del" @click="handleDeleteDictType(row)">删除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pagination-bar">
              <span class="total-text">共 {{ dictTypeTotal }} 条记录</span>
              <select class="page-size">
                <option>20条/页</option>
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
                  <option value="0">正常</option>
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
                    <th class="check-col"><div><input type="checkbox" /></div></th>
                    <th><div>字典编码</div></th>
                    <th><div>字典标签</div></th>
                    <th><div>字典键值</div></th>
                    <th><div>字典排序</div></th>
                    <th><div>状态</div></th>
                    <th><div>颜色类型</div></th>
                    <th><div>CSS Class</div></th>
                    <th><div>创建时间</div></th>
                    <th class="op-col op-fixed"><div>操作</div></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in dictDataList" :key="index">
                    <td class="check-col"><input type="checkbox" /></td>
                    <td>{{ row.code }}</td>
                    <td>{{ row.label }}</td>
                    <td>{{ row.value }}</td>
                    <td>{{ row.sort }}</td>
                    <td>{{ row.status }}</td>
                    <td>{{ row.colorType }}</td>
                    <td>{{ row.cssClass }}</td>
                    <td>{{ row.createTime }}</td>
                    <td class="op-col op-fixed">
                      <button class="op-edit" @click="handleEditDictData(row)">编辑</button>
                      <button class="op-del" @click="handleDeleteDictData(row)">删除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pagination-bar">
              <span class="total-text">共 {{ dictDataTotal }} 条记录</span>
              <select class="page-size">
                <option>20条/页</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ========== 导入字典相关API ==========
import { getDictTypePage, deleteDictType, getDictDataPage, deleteDictData } from '#/api/mdm/basic/dict';

export default {
  name: 'DictManagement',
  data() {
    return {
      // 字典类型搜索
      dictTypeSearch: { name: '', type: '', status: '' },
      // 字典类型分页
      dictTypePagination: { pageNo: 1, pageSize: 10, total: 0 },
      // 字典类型列表
      dictTypeList: [],
      // 字典类型总数
      dictTypeTotal: 0,
      // 选中的字典类型
      selectedDictType: null,
      // 字典数据搜索
      dictDataSearch: { label: '', status: '' },
      // 字典数据分页
      dictDataPagination: { pageNo: 1, pageSize: 10, total: 0 },
      // 字典数据列表
      dictDataList: [],
      // 字典数据总数
      dictDataTotal: 0,
    };
  },
  mounted() {
    this.loadDictTypeList();
  },
  methods: {
    // 加载字典类型列表
    async loadDictTypeList() {
      try {
        const params = {
          pageNo: this.dictTypePagination.pageNo,
          pageSize: this.dictTypePagination.pageSize,
        };
        Object.keys(this.dictTypeSearch).forEach((key) => {
          if (this.dictTypeSearch[key]) params[key] = this.dictTypeSearch[key];
        });
        const data = await getDictTypePage(params);
        this.dictTypeList = data.list.map((item) => ({
          id: item.id,
          code: item.code || '',
          name: item.name || '',
          type: item.type || '',
          status: item.status === 0 ? '正常' : '停用',
          remark: item.remark || '',
          createTime: item.createTime || '',
        }));
        this.dictTypeTotal = data.total;
        this.dictTypePagination.total = data.total;
      } catch (err) {
        console.error('获取字典类型列表失败', err);
      }
    },
    // 字典类型搜索
    handleDictTypeSearch() {
      this.dictTypePagination.pageNo = 1;
      this.loadDictTypeList();
    },
    // 字典类型重置
    handleDictTypeReset() {
      this.dictTypeSearch = { name: '', type: '', status: '' };
      this.dictTypePagination.pageNo = 1;
      this.loadDictTypeList();
    },
    // 新增字典类型
    handleAddDictType() { alert('新增字典类型功能待实现'); },
    // 编辑字典类型
    handleEditDictType(row) {
      this.selectedDictType = row;
      this.loadDictDataList();
      alert('编辑字典类型功能待实现');
    },
    // 删除字典类型
    async handleDeleteDictType(row) {
      if (!confirm(`确定要删除字典类型"${row.name}"吗？`)) return;
      try {
        await deleteDictType(row.id);
        alert('删除成功');
        this.loadDictTypeList();
      } catch (err) {
        console.error('删除失败', err);
      }
    },
    // 加载字典数据列表
    async loadDictDataList() {
      if (!this.selectedDictType) return;
      try {
        const params = {
          pageNo: this.dictDataPagination.pageNo,
          pageSize: this.dictDataPagination.pageSize,
          dictType: this.selectedDictType.type,
        };
        Object.keys(this.dictDataSearch).forEach((key) => {
          if (this.dictDataSearch[key]) params[key] = this.dictDataSearch[key];
        });
        const data = await getDictDataPage(params);
        this.dictDataList = data.list.map((item) => ({
          id: item.id,
          code: item.code || '',
          label: item.label || '',
          value: item.value || '',
          sort: item.sort || 0,
          status: item.status === 0 ? '正常' : '停用',
          colorType: item.colorType || '',
          cssClass: item.cssClass || '',
          createTime: item.createTime || '',
        }));
        this.dictDataTotal = data.total;
        this.dictDataPagination.total = data.total;
      } catch (err) {
        console.error('获取字典数据列表失败', err);
      }
    },
    // 字典数据搜索
    handleDictDataSearch() {
      this.dictDataPagination.pageNo = 1;
      this.loadDictDataList();
    },
    // 字典数据重置
    handleDictDataReset() {
      this.dictDataSearch = { label: '', status: '' };
      this.dictDataPagination.pageNo = 1;
      this.loadDictDataList();
    },
    // 新增字典数据
    handleAddDictData() { alert('新增字典数据功能待实现'); },
    // 编辑字典数据
    handleEditDictData(row) { alert('编辑字典数据功能待实现'); },
    // 删除字典数据
    async handleDeleteDictData(row) {
      if (!confirm(`确定要删除字典数据"${row.label}"吗？`)) return;
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
  table-layout: auto;
}

.data-table thead th {
  height: 36px;
  padding: 0 10px;
  background-color: #e7e6e6;
  border-bottom: 1px solid #ebeef5;
  /* border-right: 1px solid #ebeef5; */
  color: #606266;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
}
.data-table thead th div{
    border-right: 1px solid #ccc;
    padding: 0 8px;
}

.data-table thead th:last-child {
  border-right: none;
}

.data-table tbody td {
  padding: 10px;
  border-bottom: 1px solid #ebeef5;
  color: #303133;
  vertical-align: middle;
  white-space: nowrap;
}

.data-table tbody td:last-child {
  border-right: none;
}

.data-table tbody tr:hover {
  background-color: #f5f7fa;
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
/* 操作列固定右侧 */
.op-fixed {
  position: sticky;
  right: 0;
  background: #fff;
  z-index: 2;
  /* box-shadow: 0 -2px 10px rgba(0,0,0,0.2); */
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
}
.data-table thead th.op-fixed {
  background-color: #e7e6e6;
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