/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：质量指标页面 (src/views/pages/mes/qc/indicator.vue)
 * 功能：质量指标的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/qc/indicator
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取质量指标分页列表
function getIndicatorPage(params) {
  return requestClient.get("/mes/qc/indicator/page", { params });
}

// 获取质量指标详情
function getIndicator(id) {
  return requestClient.get(`/mes/qc/indicator/get?id=${id}`);
}

// 新增质量指标
function createIndicator(data) {
  return requestClient.post("/mes/qc/indicator/create", data);
}

// 修改质量指标
function updateIndicator(data) {
  return requestClient.put("/mes/qc/indicator/update", data);
}

// 删除质量指标
function deleteIndicator(id) {
  return requestClient.delete(`/mes/qc/indicator/delete?id=${id}`);
}

// 批量删除质量指标
function deleteIndicatorListByIds(ids) {
  return requestClient.delete(`/mes/qc/indicator/delete-list?ids=${ids.join(",")}`);
}

// 导出质量指标
function exportIndicator(params) {
  return requestClient.download("/mes/qc/indicator/export-excel", params);
}

export {
  createIndicator,
  deleteIndicator,
  deleteIndicatorListByIds,
  exportIndicator,
  getIndicator,
  getIndicatorPage,
  updateIndicator,
};
