/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：客户管理页面 (src/views/pages/mes/md/client.vue)
 * 功能：客户管理的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/md/client
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取客户管理分页列表
function getClientPage(params) {
  return requestClient.get("/mes/md/client/page", { params });
}

// 获取客户管理详情
function getClient(id) {
  return requestClient.get(`/mes/md/client/get?id=${id}`);
}

// 新增客户管理
function createClient(data) {
  return requestClient.post("/mes/md/client/create", data);
}

// 修改客户管理
function updateClient(data) {
  return requestClient.put("/mes/md/client/update", data);
}

// 删除客户管理
function deleteClient(id) {
  return requestClient.delete(`/mes/md/client/delete?id=${id}`);
}

// 批量删除客户管理
function deleteClientListByIds(ids) {
  return requestClient.delete(`/mes/md/client/delete-list?ids=${ids.join(",")}`);
}

// 导出客户管理
function exportClient(params) {
  return requestClient.download("/mes/md/client/export-excel", params);
}

export {
  createClient,
  deleteClient,
  deleteClientListByIds,
  exportClient,
  getClient,
  getClientPage,
  updateClient,
};
