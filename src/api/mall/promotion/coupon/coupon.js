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
