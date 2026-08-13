/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：自动编码页面 (src/views/pages/mes/md/auto-code.vue)
 * 功能：自动编码的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/md/auto-code
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取自动编码分页列表
function getAutoCodePage(params) {
  return requestClient.get("/mes/md/auto-code/page", { params });
}

// 获取自动编码详情
function getAutoCode(id) {
  return requestClient.get(`/mes/md/auto-code/get?id=${id}`);
}

// 新增自动编码
function createAutoCode(data) {
  return requestClient.post("/mes/md/auto-code/create", data);
}

// 修改自动编码
function updateAutoCode(data) {
  return requestClient.put("/mes/md/auto-code/update", data);
}

// 删除自动编码
function deleteAutoCode(id) {
  return requestClient.delete(`/mes/md/auto-code/delete?id=${id}`);
}

// 批量删除自动编码
function deleteAutoCodeListByIds(ids) {
  return requestClient.delete(`/mes/md/auto-code/delete-list?ids=${ids.join(",")}`);
}

// 导出自动编码
function exportAutoCode(params) {
  return requestClient.download("/mes/md/auto-code/export-excel", params);
}

export {
  createAutoCode,
  deleteAutoCode,
  deleteAutoCodeListByIds,
  exportAutoCode,
  getAutoCode,
  getAutoCodePage,
  updateAutoCode,
};
