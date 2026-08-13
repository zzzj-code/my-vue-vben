/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：杂项出库页面 (src/views/pages/mes/wm/misc-issue.vue)
 * 功能：杂项出库的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/misc-issue
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取杂项出库分页列表
function getMiscIssuePage(params) {
  return requestClient.get("/mes/wm/misc-issue/page", { params });
}

// 获取杂项出库详情
function getMiscIssue(id) {
  return requestClient.get(`/mes/wm/misc-issue/get?id=${id}`);
}

// 新增杂项出库
function createMiscIssue(data) {
  return requestClient.post("/mes/wm/misc-issue/create", data);
}

// 修改杂项出库
function updateMiscIssue(data) {
  return requestClient.put("/mes/wm/misc-issue/update", data);
}

// 删除杂项出库
function deleteMiscIssue(id) {
  return requestClient.delete(`/mes/wm/misc-issue/delete?id=${id}`);
}

// 批量删除杂项出库
function deleteMiscIssueListByIds(ids) {
  return requestClient.delete(`/mes/wm/misc-issue/delete-list?ids=${ids.join(",")}`);
}

// 导出杂项出库
function exportMiscIssue(params) {
  return requestClient.download("/mes/wm/misc-issue/export-excel", params);
}

export {
  createMiscIssue,
  deleteMiscIssue,
  deleteMiscIssueListByIds,
  exportMiscIssue,
  getMiscIssue,
  getMiscIssuePage,
  updateMiscIssue,
};
