import { requestClient } from "#/api/request";
function getCategoryList(params) {
  return requestClient.get("/asset/category/list", {
    params
  });
}
function getCategory(id) {
  return requestClient.get(
    `/asset/category/get?id=${id}`
  );
}
function createCategory(data) {
  return requestClient.post("/asset/category/create", data);
}
function updateCategory(data) {
  return requestClient.put("/asset/category/update", data);
}
function deleteCategory(id) {
  return requestClient.delete(`/asset/category/delete?id=${id}`);
}
function exportCategory(params) {
  return requestClient.download("/asset/category/export-excel", params);
}
export {
  createCategory,
  deleteCategory,
  exportCategory,
  getCategory,
  getCategoryList,
  updateCategory
};
