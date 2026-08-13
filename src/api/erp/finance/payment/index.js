/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getFinancePaymentPage(params) {
  return requestClient.get(
    "/erp/finance-payment/page",
    {
      params
    }
  );
}
function getFinancePayment(id) {
  return requestClient.get(
    `/erp/finance-payment/get?id=${id}`
  );
}
function createFinancePayment(data) {
  return requestClient.post("/erp/finance-payment/create", data);
}
function updateFinancePayment(data) {
  return requestClient.put("/erp/finance-payment/update", data);
}
function updateFinancePaymentStatus(id, status) {
  return requestClient.put("/erp/finance-payment/update-status", null, {
    params: { id, status }
  });
}
function deleteFinancePayment(ids) {
  return requestClient.delete("/erp/finance-payment/delete", {
    params: {
      ids: ids.join(",")
    }
  });
}
function exportFinancePayment(params) {
  return requestClient.download("/erp/finance-payment/export-excel", {
    params
  });
}
export {
  createFinancePayment,
  deleteFinancePayment,
  exportFinancePayment,
  getFinancePayment,
  getFinancePaymentPage,
  updateFinancePayment,
  updateFinancePaymentStatus
};
