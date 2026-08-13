/**
 * ============================================================
 * 模块：商城模块
 * 页面：discountActivity页面
 * 功能：discountActivity相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getDiscountActivityPage(params) {
  return requestClient.get("/promotion/discount-activity/page", { params });
}
function getDiscountActivity(id) {
  return requestClient.get(
    `/promotion/discount-activity/get?id=${id}`
  );
}
function createDiscountActivity(data) {
  return requestClient.post("/promotion/discount-activity/create", data);
}
function updateDiscountActivity(data) {
  return requestClient.put("/promotion/discount-activity/update", data);
}
function closeDiscountActivity(id) {
  return requestClient.put(`/promotion/discount-activity/close?id=${id}`);
}
function deleteDiscountActivity(id) {
  return requestClient.delete(`/promotion/discount-activity/delete?id=${id}`);
}
export {
  closeDiscountActivity,
  createDiscountActivity,
  deleteDiscountActivity,
  getDiscountActivity,
  getDiscountActivityPage,
  updateDiscountActivity
};
