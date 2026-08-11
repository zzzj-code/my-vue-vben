import { requestClient } from "#/api/request";
function getMailAccountPage(params) {
  return requestClient.get(
    "/system/mail-account/page",
    { params }
  );
}
function getMailAccount(id) {
  return requestClient.get(
    `/system/mail-account/get?id=${id}`
  );
}
function createMailAccount(data) {
  return requestClient.post("/system/mail-account/create", data);
}
function updateMailAccount(data) {
  return requestClient.put("/system/mail-account/update", data);
}
function deleteMailAccount(id) {
  return requestClient.delete(`/system/mail-account/delete?id=${id}`);
}
function deleteMailAccountList(ids) {
  return requestClient.delete(
    `/system/mail-account/delete-list?ids=${ids.join(",")}`
  );
}
function getSimpleMailAccountList() {
  return requestClient.get(
    "/system/mail-account/simple-list"
  );
}
export {
  createMailAccount,
  deleteMailAccount,
  deleteMailAccountList,
  getMailAccount,
  getMailAccountPage,
  getSimpleMailAccountList,
  updateMailAccount
};
