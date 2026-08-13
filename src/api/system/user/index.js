/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：用户管理页面
 * 功能：用户管理相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getUserPage(params) {
  return requestClient.get(
    "/system/user/page",
    { params }
  );
}
function getUser(id) {
  return requestClient.get(`/system/user/get?id=${id}`);
}
function createUser(data) {
  return requestClient.post("/system/user/create", data);
}
function updateUser(data) {
  return requestClient.put("/system/user/update", data);
}
function deleteUser(id) {
  return requestClient.delete(`/system/user/delete?id=${id}`);
}
function deleteUserList(ids) {
  return requestClient.delete(`/system/user/delete-list?ids=${ids.join(",")}`);
}
function exportUser(params) {
  return requestClient.download("/system/user/export-excel", { params });
}
function importUserTemplate() {
  return requestClient.download("/system/user/get-import-template");
}
function importUser(file, updateSupport) {
  return requestClient.upload("/system/user/import", {
    file,
    updateSupport
  });
}
function resetUserPassword(id, password) {
  return requestClient.put("/system/user/update-password", { id, password });
}
function updateUserStatus(id, status) {
  return requestClient.put("/system/user/update-status", { id, status });
}
function getSimpleUserList() {
  return requestClient.get("/system/user/simple-list");
}
function getUserSelectList() {
  return getSimpleUserList();
}
export {
  createUser,
  deleteUser,
  deleteUserList,
  exportUser,
  getSimpleUserList,
  getUser,
  getUserPage,
  getUserSelectList,
  importUser,
  importUserTemplate,
  resetUserPassword,
  updateUser,
  updateUserStatus
};
