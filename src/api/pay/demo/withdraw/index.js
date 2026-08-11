import { requestClient } from "#/api/request";
function getDemoWithdrawPage(params) {
  return requestClient.get(
    "/pay/demo-withdraw/page",
    {
      params
    }
  );
}
function createDemoWithdraw(data) {
  return requestClient.post("/pay/demo-withdraw/create", data);
}
function transferDemoWithdraw(id) {
  return requestClient.post(`/pay/demo-withdraw/transfer?id=${id}`);
}
export {
  createDemoWithdraw,
  getDemoWithdrawPage,
  transferDemoWithdraw
};
