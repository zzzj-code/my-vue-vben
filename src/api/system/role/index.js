import { requestClient } from "#/api/request";
function getRolePage(params) {
  return requestClient.get(
    "/system/role/page",
    { params }
  );
}
function getSimpleRoleList() {
  return requestClient.get("/system/role/simple-list");
}
function getRole(id) {
  return requestClient.get(`/system/role/get?id=${id}`);
}
function createRole(data) {
  return requestClient.post("/system/role/create", data);
}
function updateRole(data) {
  return requestClient.put("/system/role/update", data);
}
function deleteRole(id) {
  return requestClient.delete(`/system/role/delete?id=${id}`);
}
function deleteRoleList(ids) {
  return requestClient.delete(`/system/role/delete-list?ids=${ids.join(",")}`);
}
function exportRole(params) {
  return requestClient.download("/system/role/export-excel", {
    params
  });
}
export {
  createRole,
  deleteRole,
  deleteRoleList,
  exportRole,
  getRole,
  getRolePage,
  getSimpleRoleList,
  updateRole
};
