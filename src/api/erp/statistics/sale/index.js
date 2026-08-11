import { requestClient } from "#/api/request";
function getSaleSummary() {
  return requestClient.get(
    "/erp/sale-statistics/summary"
  );
}
function getSaleTimeSummary() {
  return requestClient.get(
    "/erp/sale-statistics/time-summary"
  );
}
export {
  getSaleSummary,
  getSaleTimeSummary
};
