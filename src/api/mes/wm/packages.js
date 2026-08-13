/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：包装管理页面 (src/views/pages/mes/wm/packages.vue)
 * 功能：包装管理的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/packages
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取包装管理分页列表
function getPackagesPage(params) {
  return requestClient.get("/mes/wm/packages/page", { params });
}

// 获取包装管理详情
function getPackages(id) {
  return requestClient.get(`/mes/wm/packages/get?id=${id}`);
}

// 新增包装管理
function createPackages(data) {
  return requestClient.post("/mes/wm/packages/create", data);
}

// 修改包装管理
function updatePackages(data) {
  return requestClient.put("/mes/wm/packages/update", data);
}

// 删除包装管理
function deletePackages(id) {
  return requestClient.delete(`/mes/wm/packages/delete?id=${id}`);
}

// 批量删除包装管理
function deletePackagesListByIds(ids) {
  return requestClient.delete(`/mes/wm/packages/delete-list?ids=${ids.join(",")}`);
}

// 导出包装管理
function exportPackages(params) {
  return requestClient.download("/mes/wm/packages/export-excel", params);
}

export {
  createPackages,
  deletePackages,
  deletePackagesListByIds,
  exportPackages,
  getPackages,
  getPackagesPage,
  updatePackages,
};
