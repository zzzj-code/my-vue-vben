import { requestClient } from "#/api/request";
function createDemoOrder(data) {
  return requestClient.post("/pay/demo-order/create", data);
}
function getDemoOrderPage(params) {
  return requestClient.get(
    "/pay/demo-order/page",
    {
      params
    }
  );
}
function refundDemoOrder(id) {
  return requestClient.put(`/pay/demo-order/refund?id=${id}`);
}
export {
  createDemoOrder,
  getDemoOrderPage,
  refundDemoOrder
};
