/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：产品出库页面 (src/views/pages/mes/wm/product-issue.vue)
 * 功能：产品出库的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/product-issue
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取产品出库分页列表
function getProductIssuePage(params) {
  return requestClient.get("/mes/wm/product-issue/page", { params });
}

// 获取产品出库详情
function getProductIssue(id) {
  return requestClient.get(`/mes/wm/product-issue/get?id=${id}`);
}

// 新增产品出库
function createProductIssue(data) {
  return requestClient.post("/mes/wm/product-issue/create", data);
}

// 修改产品出库
function updateProductIssue(data) {
  return requestClient.put("/mes/wm/product-issue/update", data);
}

// 删除产品出库
function deleteProductIssue(id) {
  return requestClient.delete(`/mes/wm/product-issue/delete?id=${id}`);
}

// 批量删除产品出库
function deleteProductIssueListByIds(ids) {
  return requestClient.delete(`/mes/wm/product-issue/delete-list?ids=${ids.join(",")}`);
}

// 导出产品出库
function exportProductIssue(params) {
  return requestClient.download("/mes/wm/product-issue/export-excel", params);
}

export {
  createProductIssue,
  deleteProductIssue,
  deleteProductIssueListByIds,
  exportProductIssue,
  getProductIssue,
  getProductIssuePage,
  updateProductIssue,
};
