import { requestClient } from "#/api/request";
function getBrokerageRecordPage(params) {
  return requestClient.get(
    "/trade/brokerage-record/page",
    { params }
  );
}
function getBrokerageRecord(id) {
  return requestClient.get(
    `/trade/brokerage-record/get?id=${id}`
  );
}
export {
  getBrokerageRecord,
  getBrokerageRecordPage
};
