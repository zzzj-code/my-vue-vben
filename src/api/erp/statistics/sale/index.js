/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
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
