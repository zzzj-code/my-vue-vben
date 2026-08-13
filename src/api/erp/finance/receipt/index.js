/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getFinanceReceiptPage(params) {
  return requestClient.get(
    "/erp/finance-receipt/page",
    {
      params
    }
  );
}
function getFinanceReceipt(id) {
  return requestClient.get(
    `/erp/finance-receipt/get?id=${id}`
  );
}
function createFinanceReceipt(data) {
  return requestClient.post("/erp/finance-receipt/create", data);
}
function updateFinanceReceipt(data) {
  return requestClient.put("/erp/finance-receipt/update", data);
}
function updateFinanceReceiptStatus(id, status) {
  return requestClient.put("/erp/finance-receipt/update-status", null, {
    params: { id, status }
  });
}
function deleteFinanceReceipt(ids) {
  return requestClient.delete("/erp/finance-receipt/delete", {
    params: {
      ids: ids.join(",")
    }
  });
}
function exportFinanceReceipt(params) {
  return requestClient.download("/erp/finance-receipt/export-excel", {
    params
  });
}
export {
  createFinanceReceipt,
  deleteFinanceReceipt,
  exportFinanceReceipt,
  getFinanceReceipt,
  getFinanceReceiptPage,
  updateFinanceReceipt,
  updateFinanceReceiptStatus
};
