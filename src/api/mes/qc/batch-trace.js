/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：批次追溯页面 (src/views/pages/mes/qc/batch-trace.vue)
 * 功能：批次追溯的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/qc/batch-trace
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取批次追溯分页列表
function getBatchTracePage(params) {
  return requestClient.get("/mes/qc/batch-trace/page", { params });
}

// 获取批次追溯详情
function getBatchTrace(id) {
  return requestClient.get(`/mes/qc/batch-trace/get?id=${id}`);
}

// 新增批次追溯
function createBatchTrace(data) {
  return requestClient.post("/mes/qc/batch-trace/create", data);
}

// 修改批次追溯
function updateBatchTrace(data) {
  return requestClient.put("/mes/qc/batch-trace/update", data);
}

// 删除批次追溯
function deleteBatchTrace(id) {
  return requestClient.delete(`/mes/qc/batch-trace/delete?id=${id}`);
}

// 批量删除批次追溯
function deleteBatchTraceListByIds(ids) {
  return requestClient.delete(`/mes/qc/batch-trace/delete-list?ids=${ids.join(",")}`);
}

// 导出批次追溯
function exportBatchTrace(params) {
  return requestClient.download("/mes/qc/batch-trace/export-excel", params);
}

export {
  createBatchTrace,
  deleteBatchTrace,
  deleteBatchTraceListByIds,
  exportBatchTrace,
  getBatchTrace,
  getBatchTracePage,
  updateBatchTrace,
};
