import { requestClient } from "#/api/request";
function getBrokerageWithdrawPage(params) {
  return requestClient.get("/trade/brokerage-withdraw/page", { params });
}
function approveBrokerageWithdraw(id) {
  return requestClient.put(`/trade/brokerage-withdraw/approve?id=${id}`);
}
function rejectBrokerageWithdraw(data) {
  return requestClient.put("/trade/brokerage-withdraw/reject", data);
}
export {
  approveBrokerageWithdraw,
  getBrokerageWithdrawPage,
  rejectBrokerageWithdraw
};
