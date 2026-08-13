/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：杂项入库页面 (src/views/pages/mes/wm/misc-receipt.vue)
 * 功能：杂项入库的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/misc-receipt
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取杂项入库分页列表
function getMiscReceiptPage(params) {
  return requestClient.get("/mes/wm/misc-receipt/page", { params });
}

// 获取杂项入库详情
function getMiscReceipt(id) {
  return requestClient.get(`/mes/wm/misc-receipt/get?id=${id}`);
}

// 新增杂项入库
function createMiscReceipt(data) {
  return requestClient.post("/mes/wm/misc-receipt/create", data);
}

// 修改杂项入库
function updateMiscReceipt(data) {
  return requestClient.put("/mes/wm/misc-receipt/update", data);
}

// 删除杂项入库
function deleteMiscReceipt(id) {
  return requestClient.delete(`/mes/wm/misc-receipt/delete?id=${id}`);
}

// 批量删除杂项入库
function deleteMiscReceiptListByIds(ids) {
  return requestClient.delete(`/mes/wm/misc-receipt/delete-list?ids=${ids.join(",")}`);
}

// 导出杂项入库
function exportMiscReceipt(params) {
  return requestClient.download("/mes/wm/misc-receipt/export-excel", params);
}

export {
  createMiscReceipt,
  deleteMiscReceipt,
  deleteMiscReceiptListByIds,
  exportMiscReceipt,
  getMiscReceipt,
  getMiscReceiptPage,
  updateMiscReceipt,
};
