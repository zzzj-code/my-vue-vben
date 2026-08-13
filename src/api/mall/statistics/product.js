/**
 * ============================================================
 * 模块：商城模块
 * 页面：product页面
 * 功能：product相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getProductStatisticsAnalyse(params) {
  return requestClient.get("/statistics/product/analyse", { params });
}
function getProductStatisticsList(params) {
  return requestClient.get(
    "/statistics/product/list",
    { params }
  );
}
function exportProductStatisticsExcel(params) {
  return requestClient.download("/statistics/product/export-excel", { params });
}
function getProductStatisticsRankPage(params) {
  return requestClient.get("/statistics/product/rank-page", { params });
}
export {
  exportProductStatisticsExcel,
  getProductStatisticsAnalyse,
  getProductStatisticsList,
  getProductStatisticsRankPage
};
