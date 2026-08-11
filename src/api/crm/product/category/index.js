import { requestClient } from "#/api/request";
function getProductCategory(id) {
  return requestClient.get(
    `/crm/product-category/get?id=${id}`
  );
}
function createProductCategory(data) {
  return requestClient.post("/crm/product-category/create", data);
}
function updateProductCategory(data) {
  return requestClient.put("/crm/product-category/update", data);
}
function deleteProductCategory(id) {
  return requestClient.delete(`/crm/product-category/delete?id=${id}`);
}
function getProductCategoryList(params) {
  return requestClient.get(
    "/crm/product-category/list",
    { params }
  );
}
export {
  createProductCategory,
  deleteProductCategory,
  getProductCategory,
  getProductCategoryList,
  updateProductCategory
};
