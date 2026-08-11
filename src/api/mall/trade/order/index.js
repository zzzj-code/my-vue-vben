import { requestClient } from "#/api/request";
function getOrderPage(params) {
  return requestClient.get(
    "/trade/order/page",
    {
      params
    }
  );
}
function getOrderSummary(params) {
  return requestClient.get(
    "/trade/order/summary",
    {
      params
    }
  );
}
function getOrder(id) {
  return requestClient.get(
    `/trade/order/get-detail?id=${id}`
  );
}
function getExpressTrackList(id) {
  return requestClient.get(`/trade/order/get-express-track-list?id=${id}`);
}
function deliveryOrder(data) {
  return requestClient.put("/trade/order/delivery", data);
}
function updateOrderRemark(data) {
  return requestClient.put("/trade/order/update-remark", data);
}
function updateOrderPrice(data) {
  return requestClient.put("/trade/order/update-price", data);
}
function updateOrderAddress(data) {
  return requestClient.put("/trade/order/update-address", data);
}
function pickUpOrder(id) {
  return requestClient.put(`/trade/order/pick-up-by-id?id=${id}`);
}
function pickUpOrderByVerifyCode(pickUpVerifyCode) {
  return requestClient.put("/trade/order/pick-up-by-verify-code", void 0, {
    params: { pickUpVerifyCode }
  });
}
function getOrderByPickUpVerifyCode(pickUpVerifyCode) {
  return requestClient.get(
    "/trade/order/get-by-pick-up-verify-code",
    { params: { pickUpVerifyCode } }
  );
}
export {
  deliveryOrder,
  getExpressTrackList,
  getOrder,
  getOrderByPickUpVerifyCode,
  getOrderPage,
  getOrderSummary,
  pickUpOrder,
  pickUpOrderByVerifyCode,
  updateOrderAddress,
  updateOrderPrice,
  updateOrderRemark
};
