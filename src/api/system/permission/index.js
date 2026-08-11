import { requestClient } from "#/api/request";
async function getRoleMenuList(roleId) {
  return requestClient.get(
    `/system/permission/list-role-menus?roleId=${roleId}`
  );
}
async function assignRoleMenu(data) {
  return requestClient.post("/system/permission/assign-role-menu", data);
}
async function assignRoleDataScope(data) {
  return requestClient.post("/system/permission/assign-role-data-scope", data);
}
async function getUserRoleList(userId) {
  return requestClient.get(
    `/system/permission/list-user-roles?userId=${userId}`
  );
}
async function assignUserRole(data) {
  return requestClient.post("/system/permission/assign-user-role", data);
}
export {
  assignRoleDataScope,
  assignRoleMenu,
  assignUserRole,
  getRoleMenuList,
  getUserRoleList
};
