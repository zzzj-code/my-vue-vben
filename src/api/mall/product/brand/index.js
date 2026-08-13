/**
 * ============================================================
 * 模块：商城模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function createBrand(data) {
  return requestClient.post("/product/brand/create", data);
}
function updateBrand(data) {
  return requestClient.put("/product/brand/update", data);
}
function deleteBrand(id) {
  return requestClient.delete(`/product/brand/delete?id=${id}`);
}
function getBrand(id) {
  return requestClient.get(`/product/brand/get?id=${id}`);
}
function getBrandPage(params) {
  return requestClient.get(
    "/product/brand/page",
    {
      params
    }
  );
}
function getSimpleBrandList() {
  return requestClient.get(
    "/product/brand/list-all-simple"
  );
}
export {
  createBrand,
  deleteBrand,
  getBrand,
  getBrandPage,
  getSimpleBrandList,
  updateBrand
};
