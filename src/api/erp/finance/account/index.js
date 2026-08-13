/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getAccountPage(params) {
  return requestClient.get(
    "/erp/account/page",
    { params }
  );
}
function getAccountSimpleList() {
  return requestClient.get("/erp/account/simple-list");
}
function getAccount(id) {
  return requestClient.get(`/erp/account/get?id=${id}`);
}
function createAccount(data) {
  return requestClient.post("/erp/account/create", data);
}
function updateAccount(data) {
  return requestClient.put("/erp/account/update", data);
}
function updateAccountDefaultStatus(id, defaultStatus) {
  return requestClient.put("/erp/account/update-default-status", null, {
    params: { id, defaultStatus }
  });
}
function deleteAccount(id) {
  return requestClient.delete(`/erp/account/delete?id=${id}`);
}
function exportAccount(params) {
  return requestClient.download("/erp/account/export-excel", { params });
}
export {
  createAccount,
  deleteAccount,
  exportAccount,
  getAccount,
  getAccountPage,
  getAccountSimpleList,
  updateAccount,
  updateAccountDefaultStatus
};
