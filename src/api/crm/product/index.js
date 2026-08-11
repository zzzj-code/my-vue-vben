import { requestClient } from "#/api/request";
function getProductPage(params) {
  return requestClient.get(
    "/crm/product/page",
    { params }
  );
}
function getProductSimpleList() {
  return requestClient.get("/crm/product/simple-list");
}
function getProduct(id) {
  return requestClient.get(`/crm/product/get?id=${id}`);
}
function createProduct(data) {
  return requestClient.post("/crm/product/create", data);
}
function updateProduct(data) {
  return requestClient.put("/crm/product/update", data);
}
function deleteProduct(id) {
  return requestClient.delete(`/crm/product/delete?id=${id}`);
}
function exportProduct(params) {
  return requestClient.download("/crm/product/export-excel", { params });
}
export {
  createProduct,
  deleteProduct,
  exportProduct,
  getProduct,
  getProductPage,
  getProductSimpleList,
  updateProduct
};
