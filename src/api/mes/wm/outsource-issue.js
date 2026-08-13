/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：委外出库页面 (src/views/pages/mes/wm/outsource-issue.vue)
 * 功能：委外出库的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/outsource-issue
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取委外出库分页列表
function getOutsourceIssuePage(params) {
  return requestClient.get("/mes/wm/outsource-issue/page", { params });
}

// 获取委外出库详情
function getOutsourceIssue(id) {
  return requestClient.get(`/mes/wm/outsource-issue/get?id=${id}`);
}

// 新增委外出库
function createOutsourceIssue(data) {
  return requestClient.post("/mes/wm/outsource-issue/create", data);
}

// 修改委外出库
function updateOutsourceIssue(data) {
  return requestClient.put("/mes/wm/outsource-issue/update", data);
}

// 删除委外出库
function deleteOutsourceIssue(id) {
  return requestClient.delete(`/mes/wm/outsource-issue/delete?id=${id}`);
}

// 批量删除委外出库
function deleteOutsourceIssueListByIds(ids) {
  return requestClient.delete(`/mes/wm/outsource-issue/delete-list?ids=${ids.join(",")}`);
}

// 导出委外出库
function exportOutsourceIssue(params) {
  return requestClient.download("/mes/wm/outsource-issue/export-excel", params);
}

export {
  createOutsourceIssue,
  deleteOutsourceIssue,
  deleteOutsourceIssueListByIds,
  exportOutsourceIssue,
  getOutsourceIssue,
  getOutsourceIssuePage,
  updateOutsourceIssue,
};
