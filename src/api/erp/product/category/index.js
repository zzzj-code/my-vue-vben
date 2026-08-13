/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getProductCategoryList(params) {
  return requestClient.get(
    "/erp/product-category/list",
    { params }
  );
}
function getProductCategorySimpleList() {
  return requestClient.get(
    "/erp/product-category/simple-list"
  );
}
function getProductCategory(id) {
  return requestClient.get(
    `/erp/product-category/get?id=${id}`
  );
}
function createProductCategory(data) {
  return requestClient.post("/erp/product-category/create", data);
}
function updateProductCategory(data) {
  return requestClient.put("/erp/product-category/update", data);
}
function deleteProductCategory(id) {
  return requestClient.delete(`/erp/product-category/delete?id=${id}`);
}
function exportProductCategory(params) {
  return requestClient.download("/erp/product-category/export-excel", {
    params
  });
}
export {
  createProductCategory,
  deleteProductCategory,
  exportProductCategory,
  getProductCategory,
  getProductCategoryList,
  getProductCategorySimpleList,
  updateProductCategory
};
