/**
 * ============================================================
 * 模块：商城模块
 * 页面：trade页面
 * 功能：trade相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";

/**
 * 格式化日期时间为 YYYY-MM-DD HH:mm:ss
 * @param {Date|String} date - 日期
 * @returns {String} 格式化后的日期字符串
 */
function formatDateTime(date) {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

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
