import { requestClient } from "#/api/request";
function getAfterSalePage(params) {
  return requestClient.get(
    "/trade/after-sale/page",
    { params }
  );
}
function getAfterSale(id) {
  return requestClient.get(
    `/trade/after-sale/get-detail?id=${id}`
  );
}
function agreeAfterSale(id) {
  return requestClient.put(`/trade/after-sale/agree?id=${id}`);
}
function disagreeAfterSale(data) {
  return requestClient.put("/trade/after-sale/disagree", data);
}
function receiveAfterSale(id) {
  return requestClient.put(`/trade/after-sale/receive?id=${id}`);
}
function refuseAfterSale(id) {
  return requestClient.put(`/trade/after-sale/refuse?id=${id}`);
}
function refundAfterSale(id) {
  return requestClient.put(`/trade/after-sale/refund?id=${id}`);
}
export {
  agreeAfterSale,
  disagreeAfterSale,
  getAfterSale,
  getAfterSalePage,
  receiveAfterSale,
  refundAfterSale,
  refuseAfterSale
};
