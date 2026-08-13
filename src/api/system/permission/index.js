/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：数据权限配置
 * 功能：数据权限配置相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
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
