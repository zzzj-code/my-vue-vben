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
                <input type="text" placeholder="请输入" />
              </div>
              <div class="search-item">
                <label>字典类型</label>
                <input type="text" placeholder="请输入" />
              </div>
              <div class="search-item">
                <label>状态</label>
                <select>
                  <option value="">请选择</option>
                </select>
              </div>
            </div>
            <div class="search-btns">
              <button class="btn-reset">重置</button>
              <button class="btn-search">搜索</button>
              <span class="collapse-text">收起 △</span>
            </div>
          </div>
          <div class="left-content">
            <div class="content-header">
              <div class="header-left">
                <span class="title">字典类型列表</span>
                <button class="btn-primary">+ 新增字典类型</button>
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
                      <button class="op-edit">编辑</button>
                      <button class="op-del">删除</button>
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
                <input type="text" placeholder="请输入" />
              </div>
              <div class="search-item">
                <label>状态</label>
                <select>
                  <option value="">请选择</option>
                </select>
              </div>
            </div>
            <div class="search-btns">
              <button class="btn-reset">重置</button>
              <button class="btn-search">搜索</button>
              <span class="collapse-text">收起 △</span>
            </div>
          </div>
          <div class="right-content">
            <div class="content-header">
              <div class="header-left">
                <span class="title">字典数据列表</span>
                <button class="btn-primary">+新增字典数据</button>
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
                      <button class="op-edit">编辑</button>
                      <button class="op-del">删除</button>
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
export default {
  name: 'DictManagement',
  data() {
    return {
      dictTypeTotal: 361,
      dictDataTotal: 1729,
      dictTypeList: [
        { code: '1061127', name: '资产折旧单据类型', type: '', status: '正常', remark: '资产折旧相关单据', createTime: '2026-05-12 14:20:11' },
        { code: '1061126', name: '资产折旧财务推送状态', type: 'asset', status: '正常', remark: '财务推送状态字典', createTime: '2026-05-11 09:15:33' },
        { code: '1061125', name: '资产折旧过账状态', type: 'as', status: '停用', remark: '', createTime: '2026-05-10 16:40:22' },
        { code: '1061124', name: '盘点差异处理类型', type: '', status: '正常', remark: '盘点差异处理', createTime: '2026-05-09 11:22:45' },
        { code: '1061123', name: '资产自定义字段类型', type: '', status: '正常', remark: '', createTime: '2026-05-08 10:33:17' },
        { code: '1061122', name: '盘点分派状态', type: '', status: '停用', remark: '盘点任务分派', createTime: '2026-05-07 15:10:08' },
        { code: '1061116', name: '巡检记录状态', type: '', status: '正常', remark: '设备巡检状态', createTime: '2026-05-06 08:55:36' },
        { code: '1061116', name: '巡检记录状态', type: '', status: '正常', remark: '设备巡检状态', createTime: '2026-05-06 08:55:36' },
        { code: '1061116', name: '巡检记录状态', type: '', status: '正常', remark: '设备巡检状态', createTime: '2026-05-06 08:55:36' },
        { code: '1061116', name: '巡检记录状态', type: '', status: '正常', remark: '设备巡检状态', createTime: '2026-05-06 08:55:36' },
        { code: '1061116', name: '巡检记录状态', type: '', status: '正常', remark: '设备巡检状态', createTime: '2026-05-06 08:55:36' },
        { code: '1061116', name: '巡检记录状态', type: '', status: '正常', remark: '设备巡检状态', createTime: '2026-05-06 08:55:36' },
        { code: '1061116', name: '巡检记录状态', type: '', status: '正常', remark: '设备巡检状态', createTime: '2026-05-06 08:55:36' },
      ],
      dictDataList: [
        { code: '4175', label: '生产出库', value: '202', sort: 1, status: '正常', colorType: 'primary', cssClass: 'tag-primary', createTime: '2026-06-01 10:11:22' },
        { code: '4174', label: '销售出库', value: '201', sort: 2, status: '正常', colorType: 'success', cssClass: 'tag-success', createTime: '2026-06-01 10:10:15' },
        { code: '4173', label: '退货出库', value: '200', sort: 3, status: '正常', colorType: 'warning', cssClass: 'tag-warning', createTime: '2026-06-01 10:09:33' },
        { code: '4172', label: '归还入库', value: '103', sort: 4, status: '停用', colorType: 'info', cssClass: 'tag-info', createTime: '2026-06-01 10:08:44' },
        { code: '4171', label: '退货入库', value: '102', sort: 5, status: '正常', colorType: 'danger', cssClass: 'tag-danger', createTime: '2026-06-01 10:07:21' },
        { code: '4170', label: '采购入库', value: '101', sort: 6, status: '正常', colorType: 'primary', cssClass: 'tag-primary', createTime: '2026-06-01 10:06:18' },
        { code: '4169', label: '生产入库', value: '100', sort: 7, status: '正常', colorType: 'success', cssClass: 'tag-success', createTime: '2026-06-01 10:05:09' },
        { code: '4165', label: '盘库单', value: '4', sort: 8, status: '正常', colorType: 'warning', cssClass: 'tag-warning', createTime: '2026-06-01 10:04:32' },
        { code: '4165', label: '盘库单', value: '4', sort: 8, status: '正常', colorType: 'warning', cssClass: 'tag-warning', createTime: '2026-06-01 10:04:32' },
        { code: '4165', label: '盘库单', value: '4', sort: 8, status: '正常', colorType: 'warning', cssClass: 'tag-warning', createTime: '2026-06-01 10:04:32' },
        { code: '4165', label: '盘库单', value: '4', sort: 8, status: '正常', colorType: 'warning', cssClass: 'tag-warning', createTime: '2026-06-01 10:04:32' },
        { code: '4165', label: '盘库单', value: '4', sort: 8, status: '正常', colorType: 'warning', cssClass: 'tag-warning', createTime: '2026-06-01 10:04:32' },
        { code: '4165', label: '盘库单', value: '4', sort: 8, status: '正常', colorType: 'warning', cssClass: 'tag-warning', createTime: '2026-06-01 10:04:32' },
        { code: '4165', label: '盘库单', value: '4', sort: 8, status: '正常', colorType: 'warning', cssClass: 'tag-warning', createTime: '2026-06-01 10:04:32' },
      ],
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
  background-color: #fafafa;
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
  box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
}
.data-table thead th.op-fixed {
  background-color: #fafafa;
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