import { requestClient } from "#/api/request";
function getComponentPage(params) {
  return requestClient.get(
    "/system/home/component/page",
    { params }
  );
}
function getComponent(id) {
  return requestClient.get(
    `/system/home/component/get?id=${id}`
  );
}
function createComponent(data) {
  return requestClient.post("/system/home/component/create", data);
}
function updateComponent(data) {
  return requestClient.put("/system/home/component/update", data);
}
function deleteComponent(id) {
  return requestClient.delete(`/system/home/component/delete?id=${id}`);
}
function getAvailableComponentList() {
  return requestClient.get(
    "/system/home/component/available-list"
  );
}
function getComponentsByCategory() {
  return requestClient.get(
    "/system/home/component/by-category"
  );
}
function getCategoryList() {
  return requestClient.get(
    "/system/home/component/category/list"
  );
}
export {
  createComponent,
  deleteComponent,
  getAvailableComponentList,
  getCategoryList,
  getComponent,
  getComponentPage,
  getComponentsByCategory,
  updateComponent
};
