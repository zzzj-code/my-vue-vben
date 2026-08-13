/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：产品分类配置页面
 * 功能：产品分类配置相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
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
