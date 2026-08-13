/**
 * ============================================================
 * 模块：商城模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function createCategory(data) {
  return requestClient.post("/product/category/create", data);
}
function updateCategory(data) {
  return requestClient.put("/product/category/update", data);
}
function deleteCategory(id) {
  return requestClient.delete(`/product/category/delete?id=${id}`);
}
function getCategory(id) {
  return requestClient.get(
    `/product/category/get?id=${id}`
  );
}
function getCategoryList(params) {
  return requestClient.get(
    "/product/category/list",
    {
      params
    }
  );
}
export {
  createCategory,
  deleteCategory,
  getCategory,
  getCategoryList,
  updateCategory
};
