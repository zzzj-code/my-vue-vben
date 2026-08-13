/**
 * ============================================================
 * 模块：MES制造执行系统模块
 * 页面：条码管理页面 (src/views/pages/mes/wm/barcode.vue)
 * 功能：条码管理的增删改查、导入导出等操作
 * 接口前缀：/admin-api/mes/wm/barcode
 * ============================================================
 */
import { requestClient } from "#/api/request";

// 获取条码管理分页列表
function getBarcodePage(params) {
  return requestClient.get("/mes/wm/barcode/page", { params });
}

// 获取条码管理详情
function getBarcode(id) {
  return requestClient.get(`/mes/wm/barcode/get?id=${id}`);
}

// 新增条码管理
function createBarcode(data) {
  return requestClient.post("/mes/wm/barcode/create", data);
}

// 修改条码管理
function updateBarcode(data) {
  return requestClient.put("/mes/wm/barcode/update", data);
}

// 删除条码管理
function deleteBarcode(id) {
  return requestClient.delete(`/mes/wm/barcode/delete?id=${id}`);
}

// 批量删除条码管理
function deleteBarcodeListByIds(ids) {
  return requestClient.delete(`/mes/wm/barcode/delete-list?ids=${ids.join(",")}`);
}

// 导出条码管理
function exportBarcode(params) {
  return requestClient.download("/mes/wm/barcode/export-excel", params);
}

export {
  createBarcode,
  deleteBarcode,
  deleteBarcodeListByIds,
  exportBarcode,
  getBarcode,
  getBarcodePage,
  updateBarcode,
};
