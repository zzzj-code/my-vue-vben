/**
 * ============================================================
 * 模块：商城模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getBannerPage(params) {
  return requestClient.get(
    "/promotion/banner/page",
    { params }
  );
}
function getBanner(id) {
  return requestClient.get(
    `/promotion/banner/get?id=${id}`
  );
}
function createBanner(data) {
  return requestClient.post("/promotion/banner/create", data);
}
function updateBanner(data) {
  return requestClient.put("/promotion/banner/update", data);
}
function deleteBanner(id) {
  return requestClient.delete(`/promotion/banner/delete?id=${id}`);
}
export {
  createBanner,
  deleteBanner,
  getBanner,
  getBannerPage,
  updateBanner
};
