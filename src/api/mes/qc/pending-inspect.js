/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：待检列表页面 (src/views/pages/mes/qc/pending-inspect.vue)
 * 功能：待检列表的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/qc/pending-inspect
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取待检列表分页列表
function getPendingInspectPage(params) {
  return requestClient.get("/mes/qc/pending-inspect/page", { params });
}

// 获取待检列表详情
function getPendingInspect(id) {
  return requestClient.get(`/mes/qc/pending-inspect/get?id=${id}`);
}

// 新增待检列表
function createPendingInspect(data) {
  return requestClient.post("/mes/qc/pending-inspect/create", data);
}

// 修改待检列表
function updatePendingInspect(data) {
  return requestClient.put("/mes/qc/pending-inspect/update", data);
}

// 删除待检列表
function deletePendingInspect(id) {
  return requestClient.delete(`/mes/qc/pending-inspect/delete?id=${id}`);
}

// 批量删除待检列表
function deletePendingInspectListByIds(ids) {
  return requestClient.delete(`/mes/qc/pending-inspect/delete-list?ids=${ids.join(",")}`);
}

// 导出待检列表
function exportPendingInspect(params) {
  return requestClient.download("/mes/qc/pending-inspect/export-excel", params);
}

export {
  createPendingInspect,
  deletePendingInspect,
  deletePendingInspectListByIds,
  exportPendingInspect,
  getPendingInspect,
  getPendingInspectPage,
  updatePendingInspect,
};
