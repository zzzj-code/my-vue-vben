/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getStockRecordPage(params) {
  return requestClient.get(
    "/erp/stock-record/page",
    { params }
  );
}
function exportStockRecord(params) {
  return requestClient.download("/erp/stock-record/export-excel", { params });
}
export {
  exportStockRecord,
  getStockRecordPage
};
