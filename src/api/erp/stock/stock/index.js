/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getStockPage(params) {
  return requestClient.get("/erp/stock/page", {
    params
  });
}
function getStockCount(productId, warehouseId) {
  const params = { productId };
  if (warehouseId !== void 0) {
    params.warehouseId = warehouseId;
  }
  return requestClient.get("/erp/stock/get-count", {
    params
  });
}
function exportStock(params) {
  return requestClient.download("/erp/stock/export-excel", {
    params
  });
}
function getWarehouseStockCount(params) {
  return requestClient.get("/erp/stock/get-count", {
    params
  });
}
export {
  exportStock,
  getStockCount,
  getStockPage,
  getWarehouseStockCount
};
