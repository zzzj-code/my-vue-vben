/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：生产报工页面 (src/views/pages/mes/pro/feedback.vue)
 * 功能：生产报工的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/pro/feedback
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取生产报工分页列表
function getFeedbackPage(params) {
  return requestClient.get("/mes/pro/feedback/page", { params });
}

// 获取生产报工详情
function getFeedback(id) {
  return requestClient.get(`/mes/pro/feedback/get?id=${id}`);
}

// 新增生产报工
function createFeedback(data) {
  return requestClient.post("/mes/pro/feedback/create", data);
}

// 修改生产报工
function updateFeedback(data) {
  return requestClient.put("/mes/pro/feedback/update", data);
}

// 删除生产报工
function deleteFeedback(id) {
  return requestClient.delete(`/mes/pro/feedback/delete?id=${id}`);
}

// 批量删除生产报工
function deleteFeedbackListByIds(ids) {
  return requestClient.delete(`/mes/pro/feedback/delete-list?ids=${ids.join(",")}`);
}

// 导出生产报工
function exportFeedback(params) {
  return requestClient.download("/mes/pro/feedback/export-excel", params);
}

export {
  createFeedback,
  deleteFeedback,
  deleteFeedbackListByIds,
  exportFeedback,
  getFeedback,
  getFeedbackPage,
  updateFeedback,
};
