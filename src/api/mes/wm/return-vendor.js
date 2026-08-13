/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：供应商退货页面 (src/views/pages/mes/wm/return-vendor.vue)
 * 功能：供应商退货的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/return-vendor
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取供应商退货分页列表
function getReturnVendorPage(params) {
  return requestClient.get("/mes/wm/return-vendor/page", { params });
}

// 获取供应商退货详情
function getReturnVendor(id) {
  return requestClient.get(`/mes/wm/return-vendor/get?id=${id}`);
}

// 新增供应商退货
function createReturnVendor(data) {
  return requestClient.post("/mes/wm/return-vendor/create", data);
}

// 修改供应商退货
function updateReturnVendor(data) {
  return requestClient.put("/mes/wm/return-vendor/update", data);
}

// 删除供应商退货
function deleteReturnVendor(id) {
  return requestClient.delete(`/mes/wm/return-vendor/delete?id=${id}`);
}

// 批量删除供应商退货
function deleteReturnVendorListByIds(ids) {
  return requestClient.delete(`/mes/wm/return-vendor/delete-list?ids=${ids.join(",")}`);
}

// 导出供应商退货
function exportReturnVendor(params) {
  return requestClient.download("/mes/wm/return-vendor/export-excel", params);
}

export {
  createReturnVendor,
  deleteReturnVendor,
  deleteReturnVendorListByIds,
  exportReturnVendor,
  getReturnVendor,
  getReturnVendorPage,
  updateReturnVendor,
};
