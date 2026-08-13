/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：委外入库页面 (src/views/pages/mes/wm/outsource-receipt.vue)
 * 功能：委外入库的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/outsource-receipt
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取委外入库分页列表
function getOutsourceReceiptPage(params) {
  return requestClient.get("/mes/wm/outsource-receipt/page", { params });
}

// 获取委外入库详情
function getOutsourceReceipt(id) {
  return requestClient.get(`/mes/wm/outsource-receipt/get?id=${id}`);
}

// 新增委外入库
function createOutsourceReceipt(data) {
  return requestClient.post("/mes/wm/outsource-receipt/create", data);
}

// 修改委外入库
function updateOutsourceReceipt(data) {
  return requestClient.put("/mes/wm/outsource-receipt/update", data);
}

// 删除委外入库
function deleteOutsourceReceipt(id) {
  return requestClient.delete(`/mes/wm/outsource-receipt/delete?id=${id}`);
}

// 批量删除委外入库
function deleteOutsourceReceiptListByIds(ids) {
  return requestClient.delete(`/mes/wm/outsource-receipt/delete-list?ids=${ids.join(",")}`);
}

// 导出委外入库
function exportOutsourceReceipt(params) {
  return requestClient.download("/mes/wm/outsource-receipt/export-excel", params);
}

export {
  createOutsourceReceipt,
  deleteOutsourceReceipt,
  deleteOutsourceReceiptListByIds,
  exportOutsourceReceipt,
  getOutsourceReceipt,
  getOutsourceReceiptPage,
  updateOutsourceReceipt,
};
