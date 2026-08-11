import { requestClient } from "#/api/request";
function getStatisticsSummary() {
  return requestClient.get(
    "/iot/statistics/get-summary"
  );
}
function getDeviceMessageSummaryByDate(params) {
  return requestClient.get(
    "/iot/statistics/get-device-message-summary-by-date",
    { params }
  );
}
export {
  getDeviceMessageSummaryByDate,
  getStatisticsSummary
};
