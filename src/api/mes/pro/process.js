/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：工序管理页面 (src/views/pages/mes/pro/process.vue)
 * 功能：工序管理的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/pro/process
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取工序管理分页列表
function getProcessPage(params) {
  return requestClient.get("/mes/pro/process/page", { params });
}

// 获取工序管理详情
function getProcess(id) {
  return requestClient.get(`/mes/pro/process/get?id=${id}`);
}

// 新增工序管理
function createProcess(data) {
  return requestClient.post("/mes/pro/process/create", data);
}

// 修改工序管理
function updateProcess(data) {
  return requestClient.put("/mes/pro/process/update", data);
}

// 删除工序管理
function deleteProcess(id) {
  return requestClient.delete(`/mes/pro/process/delete?id=${id}`);
}

// 批量删除工序管理
function deleteProcessListByIds(ids) {
  return requestClient.delete(`/mes/pro/process/delete-list?ids=${ids.join(",")}`);
}

// 导出工序管理
function exportProcess(params) {
  return requestClient.download("/mes/pro/process/export-excel", params);
}

export {
  createProcess,
  deleteProcess,
  deleteProcessListByIds,
  exportProcess,
  getProcess,
  getProcessPage,
  updateProcess,
};
