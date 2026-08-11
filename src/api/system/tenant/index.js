import { requestClient } from "#/api/request";
function getTenantPage(params) {
  return requestClient.get(
    "/system/tenant/page",
    { params }
  );
}
function getSimpleTenantList() {
  return requestClient.get(
    "/system/tenant/simple-list"
  );
}
function getTenant(id) {
  return requestClient.get(
    `/system/tenant/get?id=${id}`
  );
}
function getTenantList() {
  return requestClient.get(
    "/system/tenant/simple-list"
  );
}
function createTenant(data) {
  return requestClient.post("/system/tenant/create", data);
}
function updateTenant(data) {
  return requestClient.put("/system/tenant/update", data);
}
function deleteTenant(id) {
  return requestClient.delete(`/system/tenant/delete?id=${id}`);
}
function deleteTenantList(ids) {
  return requestClient.delete(
    `/system/tenant/delete-list?ids=${ids.join(",")}`
  );
}
function exportTenant(params) {
  return requestClient.download("/system/tenant/export-excel", {
    params
  });
}
export {
  createTenant,
  deleteTenant,
  deleteTenantList,
  exportTenant,
  getSimpleTenantList,
  getTenant,
  getTenantList,
  getTenantPage,
  updateTenant
};
