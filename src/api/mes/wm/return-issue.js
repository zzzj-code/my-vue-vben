/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：退货出库页面 (src/views/pages/mes/wm/return-issue.vue)
 * 功能：退货出库的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/return-issue
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取退货出库分页列表
function getReturnIssuePage(params) {
  return requestClient.get("/mes/wm/return-issue/page", { params });
}

// 获取退货出库详情
function getReturnIssue(id) {
  return requestClient.get(`/mes/wm/return-issue/get?id=${id}`);
}

// 新增退货出库
function createReturnIssue(data) {
  return requestClient.post("/mes/wm/return-issue/create", data);
}

// 修改退货出库
function updateReturnIssue(data) {
  return requestClient.put("/mes/wm/return-issue/update", data);
}

// 删除退货出库
function deleteReturnIssue(id) {
  return requestClient.delete(`/mes/wm/return-issue/delete?id=${id}`);
}

// 批量删除退货出库
function deleteReturnIssueListByIds(ids) {
  return requestClient.delete(`/mes/wm/return-issue/delete-list?ids=${ids.join(",")}`);
}

// 导出退货出库
function exportReturnIssue(params) {
  return requestClient.download("/mes/wm/return-issue/export-excel", params);
}

export {
  createReturnIssue,
  deleteReturnIssue,
  deleteReturnIssueListByIds,
  exportReturnIssue,
  getReturnIssue,
  getReturnIssuePage,
  updateReturnIssue,
};
