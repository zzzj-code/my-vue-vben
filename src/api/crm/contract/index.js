/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：合同管理页面
 * 功能：合同管理相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getContractPage(params) {
  return requestClient.get(
    "/crm/contract/page",
    { params }
  );
}
function getContractPageByCustomer(params) {
  return requestClient.get(
    "/crm/contract/page-by-customer",
    { params }
  );
}
function getContractPageByBusiness(params) {
  return requestClient.get(
    "/crm/contract/page-by-business",
    { params }
  );
}
function getContract(id) {
  return requestClient.get(
    `/crm/contract/get?id=${id}`
  );
}
function getContractSimpleList(customerId) {
  return requestClient.get(
    `/crm/contract/simple-list?customerId=${customerId}`
  );
}
function createContract(data) {
  return requestClient.post("/crm/contract/create", data);
}
function updateContract(data) {
  return requestClient.put("/crm/contract/update", data);
}
function deleteContract(id) {
  return requestClient.delete(`/crm/contract/delete?id=${id}`);
}
function exportContract(params) {
  return requestClient.download("/crm/contract/export-excel", { params });
}
function submitContract(id) {
  return requestClient.put(`/crm/contract/submit?id=${id}`);
}
function transferContract(data) {
  return requestClient.put("/crm/contract/transfer", data);
}
function getAuditContractCount() {
  return requestClient.get("/crm/contract/audit-count");
}
function getRemindContractCount() {
  return requestClient.get("/crm/contract/remind-count");
}
export {
  createContract,
  deleteContract,
  exportContract,
  getAuditContractCount,
  getContract,
  getContractPage,
  getContractPageByBusiness,
  getContractPageByCustomer,
  getContractSimpleList,
  getRemindContractCount,
  submitContract,
  transferContract,
  updateContract
};
