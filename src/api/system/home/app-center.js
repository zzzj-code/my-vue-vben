import { requestClient } from "#/api/request";
function getAppConfigPage(params) {
  return requestClient.get(
    "/system/home-app-config/page",
    { params }
  );
}
function getAppConfigList() {
  return requestClient.get(
    "/system/home-app-config/list"
  );
}
function getAppConfig(id) {
  return requestClient.get(
    `/system/home-app-config/get?id=${id}`
  );
}
function createAppConfig(data) {
  return requestClient.post("/system/home-app-config/create", data);
}
function updateAppConfig(data) {
  return requestClient.put("/system/home-app-config/update", data);
}
function deleteAppConfig(id) {
  return requestClient.delete(`/system/home-app-config/delete?id=${id}`);
}
function updateAppConfigSort(data) {
  return requestClient.put("/system/home-app-config/update-sort", data);
}
function getUserAppList() {
  return requestClient.get(
    "/system/home-app-user/my-list"
  );
}
function getUserApp(id) {
  return requestClient.get(
    `/system/home-app-user/get?id=${id}`
  );
}
function createUserApp(data) {
  return requestClient.post("/system/home-app-user/create", data);
}
function updateUserApp(data) {
  return requestClient.put("/system/home-app-user/update", data);
}
function deleteUserApp(id) {
  return requestClient.delete(`/system/home-app-user/delete?id=${id}`);
}
function deleteUserAppBatch(ids) {
  return requestClient.delete("/system/home-app-user/delete-batch", {
    data: { ids }
  });
}
function updateUserAppSort(data) {
  return requestClient.put("/system/home-app-user/update-sort", data);
}
function initUserApp() {
  return requestClient.post("/system/home-app-user/init");
}
function resetUserApp() {
  return requestClient.post("/system/home-app-user/reset");
}
function getUserMenuOptions() {
  return requestClient.get(
    "/system/home-app-user/menu-options"
  );
}
export {
  createAppConfig,
  createUserApp,
  deleteAppConfig,
  deleteUserApp,
  deleteUserAppBatch,
  getAppConfig,
  getAppConfigList,
  getAppConfigPage,
  getUserApp,
  getUserAppList,
  getUserMenuOptions,
  initUserApp,
  resetUserApp,
  updateAppConfig,
  updateAppConfigSort,
  updateUserApp,
  updateUserAppSort
};
