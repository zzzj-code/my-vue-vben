/**
 * ============================================================
 * 模块：商城模块
 * 页面：couponTemplate页面
 * 功能：couponTemplate相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function createCouponTemplate(data) {
  return requestClient.post("/promotion/coupon-template/create", data);
}
function updateCouponTemplate(data) {
  return requestClient.put("/promotion/coupon-template/update", data);
}
function updateCouponTemplateStatus(id, status) {
  return requestClient.put("/promotion/coupon-template/update-status", {
    id,
    status
  });
}
function deleteCouponTemplate(id) {
  return requestClient.delete(`/promotion/coupon-template/delete?id=${id}`);
}
function getCouponTemplate(id) {
  return requestClient.get(
    `/promotion/coupon-template/get?id=${id}`
  );
}
function getCouponTemplatePage(params) {
  return requestClient.get(
    "/promotion/coupon-template/page",
    { params }
  );
}
function getCouponTemplateList(ids) {
  return requestClient.get(
    `/promotion/coupon-template/list?ids=${ids}`
  );
}
export {
  createCouponTemplate,
  deleteCouponTemplate,
  getCouponTemplate,
  getCouponTemplateList,
  getCouponTemplatePage,
  updateCouponTemplate,
  updateCouponTemplateStatus
};
