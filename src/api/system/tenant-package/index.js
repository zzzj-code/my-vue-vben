import { requestClient } from "#/api/request";
function getTenantPackagePage(params) {
  return requestClient.get(
    "/system/tenant-package/page",
    { params }
  );
}
function getTenantPackage(id) {
  return requestClient.get(`/system/tenant-package/get?id=${id}`);
}
function createTenantPackage(data) {
  return requestClient.post("/system/tenant-package/create", data);
}
function updateTenantPackage(data) {
  return requestClient.put("/system/tenant-package/update", data);
}
function deleteTenantPackage(id) {
  return requestClient.delete(`/system/tenant-package/delete?id=${id}`);
}
function deleteTenantPackageList(ids) {
  return requestClient.delete(
    `/system/tenant-package/delete-list?ids=${ids.join(",")}`
  );
}
function getTenantPackageList() {
  return requestClient.get(
    "/system/tenant-package/get-simple-list"
  );
}
export {
  createTenantPackage,
  deleteTenantPackage,
  deleteTenantPackageList,
  getTenantPackage,
  getTenantPackageList,
  getTenantPackagePage,
  updateTenantPackage
};
