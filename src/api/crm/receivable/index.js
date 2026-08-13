/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：回款管理页面
 * 功能：回款管理相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getReceivablePage(params) {
  return requestClient.get(
    "/crm/receivable/page",
    { params }
  );
}
function getReceivablePageByCustomer(params) {
  return requestClient.get(
    "/crm/receivable/page-by-customer",
    { params }
  );
}
function getReceivable(id) {
  return requestClient.get(
    `/crm/receivable/get?id=${id}`
  );
}
function createReceivable(data) {
  return requestClient.post("/crm/receivable/create", data);
}
function updateReceivable(data) {
  return requestClient.put("/crm/receivable/update", data);
}
function deleteReceivable(id) {
  return requestClient.delete(`/crm/receivable/delete?id=${id}`);
}
function exportReceivable(params) {
  return requestClient.download("/crm/receivable/export-excel", { params });
}
function submitReceivable(id) {
  return requestClient.put(`/crm/receivable/submit?id=${id}`);
}
function getAuditReceivableCount() {
  return requestClient.get("/crm/receivable/audit-count");
}
export {
  createReceivable,
  deleteReceivable,
  exportReceivable,
  getAuditReceivableCount,
  getReceivable,
  getReceivablePage,
  getReceivablePageByCustomer,
  submitReceivable,
  updateReceivable
};
