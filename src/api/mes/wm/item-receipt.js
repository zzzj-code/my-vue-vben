/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：物料入库页面 (src/views/pages/mes/wm/item-receipt.vue)
 * 功能：物料入库的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/item-receipt
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取物料入库分页列表
function getItemReceiptPage(params) {
  return requestClient.get("/mes/wm/item-receipt/page", { params });
}

// 获取物料入库详情
function getItemReceipt(id) {
  return requestClient.get(`/mes/wm/item-receipt/get?id=${id}`);
}

// 新增物料入库
function createItemReceipt(data) {
  return requestClient.post("/mes/wm/item-receipt/create", data);
}

// 修改物料入库
function updateItemReceipt(data) {
  return requestClient.put("/mes/wm/item-receipt/update", data);
}

// 删除物料入库
function deleteItemReceipt(id) {
  return requestClient.delete(`/mes/wm/item-receipt/delete?id=${id}`);
}

// 批量删除物料入库
function deleteItemReceiptListByIds(ids) {
  return requestClient.delete(`/mes/wm/item-receipt/delete-list?ids=${ids.join(",")}`);
}

// 导出物料入库
function exportItemReceipt(params) {
  return requestClient.download("/mes/wm/item-receipt/export-excel", params);
}

export {
  createItemReceipt,
  deleteItemReceipt,
  deleteItemReceiptListByIds,
  exportItemReceipt,
  getItemReceipt,
  getItemReceiptPage,
  updateItemReceipt,
};
