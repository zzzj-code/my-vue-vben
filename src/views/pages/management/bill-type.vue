<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="bill-module-container">
        <!-- 左侧模块分类 -->
        <div class="module-sidebar">
          <div class="sidebar-title">单据模块</div>
          <ul class="module-list">
            <li
              v-for="item in moduleList"
              :key="item.key"
              class="module-item"
              :class="{ active: item.active }"
              @click="selectModule(item)"
            >
              <span class="module-name">{{ item.name }}</span>
              <span class="module-count">{{ item.count }}</span>
            </li>
          </ul>
        </div>

        <!-- 右侧内容区 -->
        <div class="module-content">
          <!-- 搜索栏 -->
          <div class="search-bar">
            <div class="search-left">
              <div class="search-item">
                <label>单据编码</label>
                <input type="text" placeholder="请..." />
              </div>
              <div class="search-item">
                <label>单据名称</label>
                <input type="text" placeholder="请..." />
              </div>
              <div class="search-item">
                <label>流程Key</label>
                <input type="text" placeholder="请..." />
              </div>
            </div>
            <div class="search-right">
              <button class="btn-reset">重置</button>
              <button class="btn-search">搜索</button>
              <span class="expand-text">展开 ▽</span>
            </div>
          </div>

          <!-- 主内容 -->
          <div class="content-main">
            <div class="content-header">
              <h3 class="content-title">单据类型列表</h3>
              <div class="header-actions">
                <button class="btn-export">
                  导出
                </button>
                <button class="icon-btn primary">🔍</button>
                <button class="icon-btn">⟳</button>
                <button class="icon-btn">⛶</button>
                <button class="icon-btn">☷</button>
              </div>
            </div>

            <div class="table-wrapper">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>模块</th>
                    <th>单据编码</th>
                    <th>单据名称</th>
                    <th>流程定义Key</th>
                    <th></th>
                    <th class="op-col">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in billList" :key="index">
                    <td>{{ row.module }}</td>
                    <td>{{ row.code }}</td>
                    <td>{{ row.name }}</td>
                    <td class="key-col">{{ row.flowKey }}</td>
                    <td class="flag-col">{{ row.flag }}</td>
                    <td class="op-col">
                      <button class="op-edit">编辑</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- 分页 -->
            <div class="pagination-bar">
              <span class="total-text">共 {{ totalCount }} 条记录</span>
              <select class="page-size-select">
                <option>20条/页</option>
              </select>
              <div class="page-btns">
                <button class="page-btn" disabled>«</button>
                <button class="page-btn" disabled>‹</button>
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">3</button>
                <button class="page-btn">›</button>
                <button class="page-btn">»</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillModule',
  data() {
    return {
      totalCount: 43,
      moduleList: [
        { key: 'all', name: '全部', count: 43, active: true },
        { key: 'asset', name: '资产', count: 9, active: false },
        { key: 'contract', name: '合同', count: 3, active: false },
        { key: 'crm', name: 'CRM', count: 2, active: false },
        { key: 'finance', name: '财务管理', count: 1, active: false },
        { key: 'hr', name: '人力', count: 13, active: false },
        { key: 'oa', name: 'OA', count: 12, active: false },
        { key: 'project', name: '项目', count: 3, active: false },
      ],
      billList: [
        { module: '财务管理', code: '501', name: '开票申请审批', flowKey: 'finance-invoice-apply-audit', flag: 'FI' },
        { module: 'OA', code: '101', name: '用车申请单', flowKey: 'oa_car_apply_bill', flag: 'C' },
        { module: 'OA', code: '102', name: '还车申请单', flowKey: 'oa_car_return_bill', flag: 'C' },
        { module: 'OA', code: '103', name: '用印申请单', flowKey: 'oa_seal_apply_bill', flag: 'C' },
        { module: 'OA', code: '104', name: '会议室预定申请单', flowKey: 'oa_meeting_room_booking', flag: 'C' },
        { module: 'OA', code: '105', name: '公文发文', flowKey: 'oa_office_doc_send', flag: 'C' },
        { module: 'OA', code: '106', name: '公文收文', flowKey: 'oa_office_doc_receive', flag: 'C' },
        { module: 'OA', code: '107', name: '外部收文', flowKey: 'oa_office_doc_outside', flag: 'C' },
        { module: 'OA', code: '108', name: '办公用品领用申请单', flowKey: 'oa_supplies_apply_bill', flag: '编辑' },
      ],
    }
  },
  methods: {
    selectModule(item) {
      this.moduleList.forEach(m => m.active = false)
      item.active = true
    }
  }
}
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

.bill-module-container {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 12px;
}

/* 左侧侧边栏 */
.module-sidebar {
  width: 200px;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px 0;
  flex-shrink: 0;
}

.sidebar-title {
  font-size: 15px;
  font-weight: 600;
  color: #303133;
  padding: 0 16px 12px;
  border-bottom: 1px solid #ebeef5;
  margin-bottom: 8px;
}

.module-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.module-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  transition: all 0.2s;
}

.module-item:hover {
  background-color: #f5f7fa;
  color: #409eff;
}

.module-item.active {
  background-color: #ecf5ff;
  color: #409eff;
  font-weight: 500;
  border-left: 3px solid #409eff;
  padding-left: 13px;
}

.module-name {
  flex: 1;
}

.module-count {
  font-size: 12px;
  color: #909399;
  background-color: #f5f7fa;
  padding: 2px 8px;
  border-radius: 10px;
}

.module-item.active .module-count {
  background-color: #d9ecff;
  color: #409eff;
}

/* 右侧内容区 */
.module-content {
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 搜索栏 */
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #ebeef5;
  flex-shrink: 0;
}

.search-left {
  display: flex;
  align-items: center;
  gap: 32px;
}

.search-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-item label {
  font-size: 14px;
  color: #303133;
  white-space: nowrap;
}

.search-item input {
  width: 100px;
  height: 30px;
  padding: 0 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
}

.search-item input:focus {
  border-color: #409eff;
}

.search-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-reset {
  height: 30px;
  padding: 0 14px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  color: #606266;
  font-size: 13px;
  cursor: pointer;
}

.btn-search {
  height: 30px;
  padding: 0 14px;
  border: none;
  border-radius: 4px;
  background-color: #006be6;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
}

.expand-text {
  font-size: 13px;
  color: #409eff;
  cursor: pointer;
}

/* 主内容区 */
.content-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  overflow: hidden;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-shrink: 0;
}

.content-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-export {
  height: 30px;
  padding: 0 14px;
  border: none;
  border-radius: 4px;
  background-color: #006be6;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.export-icon {
  font-size: 14px;
}

.icon-btn {
  width: 30px;
  height: 30px;
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

.icon-btn.primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}

.icon-btn:hover:not(.primary) {
  color: #409eff;
  border-color: #c6e2ff;
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
  height: 38px;
  padding: 0 14px;
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
  padding: 12px 14px;
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

.key-col {
  color: #606266;
  font-family: monospace;
  font-size: 12px;
}

.flag-col {
  color: #909399;
  font-size: 12px;
  text-align: center;
}

.op-col {
  text-align: center !important;
  white-space: nowrap;
}

.op-edit {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 13px;
  color: #409eff;
  padding: 0;
}

.op-edit:hover {
  color: #66b1ff;
}

/* 分页 */
.pagination-bar {
  display: flex;
  align-items: center;
  padding-top: 12px;
  flex-shrink: 0;
}

.total-text {
  font-size: 13px;
  color: #606266;
}

.page-size-select {
  height: 26px;
  padding: 0 8px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 12px;
  color: #606266;
  outline: none;
  cursor: pointer;
  margin-left: 12px;
}

.page-btns {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
}

.page-btn {
  min-width: 28px;
  height: 28px;
  padding: 0 6px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  color: #606266;
  font-size: 12px;
  cursor: pointer;
}

.page-btn.active {
  background-color: #006be6;
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
