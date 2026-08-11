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
