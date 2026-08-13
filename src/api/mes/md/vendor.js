/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：供应商管理页面 (src/views/pages/mes/md/vendor.vue)
 * 功能：供应商管理的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/md/vendor
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取供应商管理分页列表
function getVendorPage(params) {
  return requestClient.get("/mes/md/vendor/page", { params });
}

// 获取供应商管理详情
function getVendor(id) {
  return requestClient.get(`/mes/md/vendor/get?id=${id}`);
}

// 新增供应商管理
function createVendor(data) {
  return requestClient.post("/mes/md/vendor/create", data);
}

// 修改供应商管理
function updateVendor(data) {
  return requestClient.put("/mes/md/vendor/update", data);
}

// 删除供应商管理
function deleteVendor(id) {
  return requestClient.delete(`/mes/md/vendor/delete?id=${id}`);
}

// 批量删除供应商管理
function deleteVendorListByIds(ids) {
  return requestClient.delete(`/mes/md/vendor/delete-list?ids=${ids.join(",")}`);
}

// 导出供应商管理
function exportVendor(params) {
  return requestClient.download("/mes/md/vendor/export-excel", params);
}

export {
  createVendor,
  deleteVendor,
  deleteVendorListByIds,
  exportVendor,
  getVendor,
  getVendorPage,
  updateVendor,
};
