import { requestClient } from "#/api/request";
function getPurchaseSummary() {
  return requestClient.get(
    "/erp/purchase-statistics/summary"
  );
}
function getPurchaseTimeSummary() {
  return requestClient.get("/erp/purchase-statistics/time-summary");
}
export {
  getPurchaseSummary,
  getPurchaseTimeSummary
};
