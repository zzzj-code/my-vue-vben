<template>
  <div class="page-wrapper">
    <div class="app">
      <div class="app-top">
        <div class="search-bar">
          <div class="search-left">
            <div class="form-item">
              <label class="form-label">单据类型</label>
              <select class="form-select">
                <option value="">请选择单据类型</option>
              </select>
            </div>
            <div class="form-item">
              <label class="form-label">单据号</label>
              <input type="text" class="form-input" placeholder="请输入单据号" />
            </div>
          </div>
          <div class="search-right">
            <button class="btn btn-default">重置</button>
            <button class="btn btn-primary">搜索</button>
            <button class="btn btn-text">
              展开
              <span class="arrow-down">▼</span>
            </button>
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="main-header">
          <h3 class="main-title">库存流水</h3>
          <div class="main-actions">
            <button class="icon-btn primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button class="icon-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
            </button>
            <button class="icon-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
            </button>
            <button class="icon-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
          </div>
        </div>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>单据号</th>
                <th>单据类型</th>
                <th>商品信息</th>
                <th>规格信息</th>
                <th>仓库</th>
                <th>操作时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>YK202605120001</td>
                <td><span class="tag tag-blue">移库单</span></td>
                <td>
                  <div class="product-name">可口可乐汽水</div>
                  <div class="product-code">商品编号：SPU-COLA</div>
                </td>
                <td>
                  <div class="spec-name">330ml*24 罐</div>
                  <div class="spec-code">规格编号：SKU-COLA-330-24</div>
                </td>
                <td>北京1</td>
                <td>2026-07-31 22:25:05</td>
              </tr>
              <tr>
                <td>YK202605120001</td>
                <td><span class="tag tag-blue">移库单</span></td>
                <td>
                  <div class="product-name">可口可乐汽水</div>
                  <div class="product-code">商品编号：SPU-COLA</div>
                </td>
                <td>
                  <div class="spec-name">330ml*24 罐</div>
                  <div class="spec-code">规格编号：SKU-COLA-330-24</div>
                </td>
                <td>上海1</td>
                <td>2026-07-31 22:25:05</td>
              </tr>
              <tr>
                <td>YK202605120001</td>
                <td><span class="tag tag-blue">移库单</span></td>
                <td>
                  <div class="product-name">A4 复印纸</div>
                  <div class="product-code">商品编号：SPU-A4-PAPER</div>
                </td>
                <td>
                  <div class="spec-name">70g 8 包/箱</div>
                  <div class="spec-code">规格编号：SKU-A4-70G-8</div>
                </td>
                <td>北京1</td>
                <td>2026-07-31 22:25:05</td>
              </tr>
              <tr>
                <td>YK202605120001</td>
                <td><span class="tag tag-blue">移库单</span></td>
                <td>
                  <div class="product-name">A4 复印纸</div>
                  <div class="product-code">商品编号：SPU-A4-PAPER</div>
                </td>
                <td>
                  <div class="spec-name">70g 8 包/箱</div>
                  <div class="spec-code">规格编号：SKU-A4-70G-8</div>
                </td>
                <td>上海1</td>
                <td>2026-07-31 22:25:05</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination">
          <div class="pagination-left">
            <span class="total-text">共 75 条记录</span>
            <select class="page-size-select">
              <option value="20">20条/页</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InventoryFlow',
  data() {
    return {}
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
.app-top {
  width: 100%;
  height: 86px;
  margin-bottom: 12px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
}

.app-main {
  width: 100%;
  height: 492px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 搜索栏 */
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 8px;
}

.search-left {
  display: flex;
  align-items: center;
  gap: 40px;
}

.form-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-label {
  font-size: 14px;
  color: #333;
  white-space: nowrap;
}

.form-select {
  width: 200px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  font-size: 14px;
  color: #606266;
  background-color: #fff;
  cursor: pointer;
  outline: none;
}

.form-select:focus {
  border-color: #409eff;
}

.form-input {
  width: 200px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  font-size: 14px;
  color: #606266;
  outline: none;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: #409eff;
}

.form-input::placeholder {
  color: #c0c4cc;
}

.search-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn {
  height: 32px;
  padding: 0 16px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s;
}

.btn-default {
  background-color: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
}

.btn-default:hover {
  color: #409eff;
  border-color: #006be6;
  background-color: #ecf5ff;
}

.btn-primary {
  background-color: #006be6;
  color: #fff;
}

.btn-primary:hover {
  background-color: #66b1ff;
}

.btn-text {
  background: transparent;
  color: #606266;
  padding: 0 8px;
  font-size: 14px;
}

.btn-text:hover {
  color: #409eff;
}

.arrow-down {
  font-size: 10px;
}

/* 主内容区头部 */
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 12px;
  flex-shrink: 0;
}

.main-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}

.main-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-btn {
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid #dcdfe6;
  border-radius: 50%;
  background-color: #fff;
  color: #606266;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.icon-btn svg {
  width: 16px;
  height: 16px;
}

.icon-btn:hover {
  color: #409eff;
  border-color: #c6e2ff;
}

.icon-btn.primary {
  background-color: #006be6;
  color: #fff;
}

.icon-btn.primary:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

/* 表格 */
.table-container {
  flex: 1;
  overflow-x: auto;
  padding: 0 20px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.data-table thead th {
  background-color: #ccc;
  font-weight: 500;
  text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid #ebeef5;
  white-space: nowrap;
}

.data-table tbody td {
  padding: 14px 16px;
  border-bottom: 1px solid #ebeef5;
  vertical-align: middle;
}

.data-table tbody tr:hover {
  background-color: #f5f7fa;
}

.product-name {
  font-weight: 500;
  color: #303133;
  margin-bottom: 4px;
}

.product-code {
  font-size: 12px;
  color: #909399;
}

.spec-name {
  color: #303133;
  margin-bottom: 4px;
}

.spec-code {
  font-size: 12px;
  color: #909399;
}

/* 标签 */
.tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 1.5;
}

.tag-blue {
  background-color: #ecf5ff;
  border: 1px solid #d9ecff;
  color: #409eff;
}

/* 分页 */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  flex-shrink: 0;
  border-top: 1px solid #ebeef5;
}

.pagination-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.total-text {
  font-size: 14px;
  color: #606266;
}

.page-size-select {
  height: 28px;
  padding: 0 8px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
  color: #606266;
  background-color: #fff;
  cursor: pointer;
  outline: none;
}

.pagination-right {
  display: flex;
  align-items: center;
  gap: 6px;
}

.page-btn {
  min-width: 28px;
  height: 28px;
  padding: 0 6px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  color: #606266;
  font-size: 13px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.page-btn svg {
  width: 14px;
  height: 14px;
}

.page-btn:hover:not(:disabled):not(.active) {
  color: #409eff;
  border-color: #c6e2ff;
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

.page-ellipsis {
  padding: 0 4px;
  color: #909399;
  font-size: 14px;
}
</style>
