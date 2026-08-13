/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：客户管理页面
 * 功能：客户管理相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getCustomerPage(params) {
  return requestClient.get(
    "/crm/customer/page",
    { params }
  );
}
function getCustomer(id) {
  return requestClient.get(
    `/crm/customer/get?id=${id}`
  );
}
function createCustomer(data) {
  return requestClient.post("/crm/customer/create", data);
}
function updateCustomer(data) {
  return requestClient.put("/crm/customer/update", data);
}
function deleteCustomer(id) {
  return requestClient.delete(`/crm/customer/delete?id=${id}`);
}
function exportCustomer(params) {
  return requestClient.download("/crm/customer/export-excel", { params });
}
function importCustomerTemplate() {
  return requestClient.download("/crm/customer/get-import-template");
}
function importCustomer(data) {
  return requestClient.upload("/crm/customer/import", data);
}
function getCustomerSimpleList() {
  return requestClient.get(
    "/crm/customer/simple-list"
  );
}
function transferCustomer(data) {
  return requestClient.put("/crm/customer/transfer", data);
}
function lockCustomer(id, lockStatus) {
  return requestClient.put("/crm/customer/lock", { id, lockStatus });
}
function receiveCustomer(ids) {
  return requestClient.put("/crm/customer/receive", { ids: ids.join(",") });
}
function distributeCustomer(ids, ownerUserId) {
  return requestClient.put("/crm/customer/distribute", { ids, ownerUserId });
}
function putCustomerPool(id) {
  return requestClient.put(`/crm/customer/put-pool?id=${id}`);
}
function updateCustomerDealStatus(id, dealStatus) {
  return requestClient.put(
    `/crm/customer/update-deal-status?id=${id}&dealStatus=${dealStatus}`
  );
}
function getPutPoolRemindCustomerPage(params) {
  return requestClient.get(
    "/crm/customer/put-pool-remind-page",
    { params }
  );
}
function getPutPoolRemindCustomerCount() {
  return requestClient.get("/crm/customer/put-pool-remind-count");
}
function getTodayContactCustomerCount() {
  return requestClient.get("/crm/customer/today-contact-count");
}
function getFollowCustomerCount() {
  return requestClient.get("/crm/customer/follow-count");
}
export {
  createCustomer,
  deleteCustomer,
  distributeCustomer,
  exportCustomer,
  getCustomer,
  getCustomerPage,
  getCustomerSimpleList,
  getFollowCustomerCount,
  getPutPoolRemindCustomerCount,
  getPutPoolRemindCustomerPage,
  getTodayContactCustomerCount,
  importCustomer,
  importCustomerTemplate,
  lockCustomer,
  putCustomerPool,
  receiveCustomer,
  transferCustomer,
  updateCustomer,
  updateCustomerDealStatus
};
