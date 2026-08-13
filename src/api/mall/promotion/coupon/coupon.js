/**
 * ============================================================
 * 模块：商城模块
 * 页面：coupon页面
 * 功能：coupon相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function deleteCoupon(id) {
  return requestClient.delete(`/promotion/coupon/delete?id=${id}`);
}
function getCouponPage(params) {
  return requestClient.get(
    "/promotion/coupon/page",
    { params }
  );
}
function sendCoupon(data) {
  return requestClient.post("/promotion/coupon/send", data);
}
export {
  deleteCoupon,
  getCouponPage,
  sendCoupon
};
