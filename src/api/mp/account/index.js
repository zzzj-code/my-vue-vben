import { requestClient } from "#/api/request";
function getAccountPage(params) {
  return requestClient.get(
    "/mp/account/page",
    {
      params
    }
  );
}
function getAccount(id) {
  return requestClient.get(`/mp/account/get?id=${id}`);
}
function getSimpleAccountList() {
  return requestClient.get(
    "/mp/account/list-all-simple"
  );
}
function createAccount(data) {
  return requestClient.post("/mp/account/create", data);
}
function updateAccount(data) {
  return requestClient.put("/mp/account/update", data);
}
function deleteAccount(id) {
  return requestClient.delete(`/mp/account/delete?id=${id}`);
}
function generateAccountQrCode(id) {
  return requestClient.put(`/mp/account/generate-qr-code?id=${id}`);
}
function clearAccountQuota(id) {
  return requestClient.put(`/mp/account/clear-quota?id=${id}`);
}
export {
  clearAccountQuota,
  createAccount,
  deleteAccount,
  generateAccountQrCode,
  getAccount,
  getAccountPage,
  getSimpleAccountList,
  updateAccount
};
