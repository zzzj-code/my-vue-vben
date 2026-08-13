/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：工装台账页面 (src/views/pages/mes/tm/tool.vue)
 * 功能：工装台账的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/tm/tool
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取工装台账分页列表
function getToolPage(params) {
  return requestClient.get("/mes/tm/tool/page", { params });
}

// 获取工装台账详情
function getTool(id) {
  return requestClient.get(`/mes/tm/tool/get?id=${id}`);
}

// 新增工装台账
function createTool(data) {
  return requestClient.post("/mes/tm/tool/create", data);
}

// 修改工装台账
function updateTool(data) {
  return requestClient.put("/mes/tm/tool/update", data);
}

// 删除工装台账
function deleteTool(id) {
  return requestClient.delete(`/mes/tm/tool/delete?id=${id}`);
}

// 批量删除工装台账
function deleteToolListByIds(ids) {
  return requestClient.delete(`/mes/tm/tool/delete-list?ids=${ids.join(",")}`);
}

// 导出工装台账
function exportTool(params) {
  return requestClient.download("/mes/tm/tool/export-excel", params);
}

export {
  createTool,
  deleteTool,
  deleteToolListByIds,
  exportTool,
  getTool,
  getToolPage,
  updateTool,
};
