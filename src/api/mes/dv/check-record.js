/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：点检记录页面 (src/views/pages/mes/dv/check-record.vue)
 * 功能：点检记录的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/dv/check-record
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取点检记录分页列表
function getCheckRecordPage(params) {
  return requestClient.get("/mes/dv/check-record/page", { params });
}

// 获取点检记录详情
function getCheckRecord(id) {
  return requestClient.get(`/mes/dv/check-record/get?id=${id}`);
}

// 新增点检记录
function createCheckRecord(data) {
  return requestClient.post("/mes/dv/check-record/create", data);
}

// 修改点检记录
function updateCheckRecord(data) {
  return requestClient.put("/mes/dv/check-record/update", data);
}

// 删除点检记录
function deleteCheckRecord(id) {
  return requestClient.delete(`/mes/dv/check-record/delete?id=${id}`);
}

// 批量删除点检记录
function deleteCheckRecordListByIds(ids) {
  return requestClient.delete(`/mes/dv/check-record/delete-list?ids=${ids.join(",")}`);
}

// 导出点检记录
function exportCheckRecord(params) {
  return requestClient.download("/mes/dv/check-record/export-excel", params);
}

export {
  createCheckRecord,
  deleteCheckRecord,
  deleteCheckRecordListByIds,
  exportCheckRecord,
  getCheckRecord,
  getCheckRecordPage,
  updateCheckRecord,
};
