/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getProductPage(params) {
  return requestClient.get(
    "/erp/product/page",
    { params }
  );
}
function getProductSimpleList() {
  return requestClient.get("/erp/product/simple-list");
}
function getProduct(id) {
  return requestClient.get(`/erp/product/get?id=${id}`);
}
function createProduct(data) {
  return requestClient.post("/erp/product/create", data);
}
function updateProduct(data) {
  return requestClient.put("/erp/product/update", data);
}
function deleteProduct(id) {
  return requestClient.delete(`/erp/product/delete?id=${id}`);
}
function exportProduct(params) {
  return requestClient.download("/erp/product/export-excel", { params });
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
