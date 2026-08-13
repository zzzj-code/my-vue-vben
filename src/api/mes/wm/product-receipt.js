/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：产品入库页面 (src/views/pages/mes/wm/product-receipt.vue)
 * 功能：产品入库的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/product-receipt
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取产品入库分页列表
function getProductReceiptPage(params) {
  return requestClient.get("/mes/wm/product-receipt/page", { params });
}

// 获取产品入库详情
function getProductReceipt(id) {
  return requestClient.get(`/mes/wm/product-receipt/get?id=${id}`);
}

// 新增产品入库
function createProductReceipt(data) {
  return requestClient.post("/mes/wm/product-receipt/create", data);
}

// 修改产品入库
function updateProductReceipt(data) {
  return requestClient.put("/mes/wm/product-receipt/update", data);
}

// 删除产品入库
function deleteProductReceipt(id) {
  return requestClient.delete(`/mes/wm/product-receipt/delete?id=${id}`);
}

// 批量删除产品入库
function deleteProductReceiptListByIds(ids) {
  return requestClient.delete(`/mes/wm/product-receipt/delete-list?ids=${ids.join(",")}`);
}

// 导出产品入库
function exportProductReceipt(params) {
  return requestClient.download("/mes/wm/product-receipt/export-excel", params);
}

export {
  createProductReceipt,
  deleteProductReceipt,
  deleteProductReceiptListByIds,
  exportProductReceipt,
  getProductReceipt,
  getProductReceiptPage,
  updateProductReceipt,
};
