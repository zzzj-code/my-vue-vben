/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：保养记录页面 (src/views/pages/mes/dv/mainten-record.vue)
 * 功能：保养记录的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/dv/mainten-record
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取保养记录分页列表
function getMaintenRecordPage(params) {
  return requestClient.get("/mes/dv/mainten-record/page", { params });
}

// 获取保养记录详情
function getMaintenRecord(id) {
  return requestClient.get(`/mes/dv/mainten-record/get?id=${id}`);
}

// 新增保养记录
function createMaintenRecord(data) {
  return requestClient.post("/mes/dv/mainten-record/create", data);
}

// 修改保养记录
function updateMaintenRecord(data) {
  return requestClient.put("/mes/dv/mainten-record/update", data);
}

// 删除保养记录
function deleteMaintenRecord(id) {
  return requestClient.delete(`/mes/dv/mainten-record/delete?id=${id}`);
}

// 批量删除保养记录
function deleteMaintenRecordListByIds(ids) {
  return requestClient.delete(`/mes/dv/mainten-record/delete-list?ids=${ids.join(",")}`);
}

// 导出保养记录
function exportMaintenRecord(params) {
  return requestClient.download("/mes/dv/mainten-record/export-excel", params);
}

export {
  createMaintenRecord,
  deleteMaintenRecord,
  deleteMaintenRecordListByIds,
  exportMaintenRecord,
  getMaintenRecord,
  getMaintenRecordPage,
  updateMaintenRecord,
};
