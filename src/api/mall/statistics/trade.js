import { formatDateTime } from "@vben/utils";
import { requestClient } from "#/api/request";
function getTradeStatisticsSummary() {
  return requestClient.get("/statistics/trade/summary");
}
function getTradeStatisticsAnalyse(params) {
  return requestClient.get("/statistics/trade/analyse", { params });
}
function getTradeStatisticsList(params) {
  return requestClient.get(
    "/statistics/trade/list",
    { params }
  );
}
function exportTradeStatisticsExcel(params) {
  return requestClient.download("/statistics/trade/export-excel", { params });
}
function getOrderCount() {
  return requestClient.get(
    "/statistics/trade/order-count"
  );
}
function getOrderComparison() {
  return requestClient.get("/statistics/trade/order-comparison");
}
function getOrderCountTrendComparison(type, beginTime, endTime) {
  return requestClient.get("/statistics/trade/order-count-trend", {
    params: {
      type,
      beginTime: formatDateTime(beginTime),
      endTime: formatDateTime(endTime)
    }
  });
}
export {
  exportTradeStatisticsExcel,
  getOrderComparison,
  getOrderCount,
  getOrderCountTrendComparison,
  getTradeStatisticsAnalyse,
  getTradeStatisticsList,
  getTradeStatisticsSummary
};
