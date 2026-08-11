import { requestClient } from "#/api/request";
function getProductCategoryPage(params) {
  return requestClient.get(
    "/iot/product-category/page",
    { params }
  );
}
function getProductCategory(id) {
  return requestClient.get(
    `/iot/product-category/get?id=${id}`
  );
}
function createProductCategory(data) {
  return requestClient.post("/iot/product-category/create", data);
}
function updateProductCategory(data) {
  return requestClient.put("/iot/product-category/update", data);
}
function deleteProductCategory(id) {
  return requestClient.delete(`/iot/product-category/delete?id=${id}`);
}
function getSimpleProductCategoryList() {
  return requestClient.get(
    "/iot/product-category/simple-list"
  );
}
export {
  createProductCategory,
  deleteProductCategory,
  getProductCategory,
  getProductCategoryPage,
  getSimpleProductCategoryList,
  updateProductCategory
};
