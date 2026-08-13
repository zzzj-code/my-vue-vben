/**
 * ============================================================
 * 模块：ERP进销存模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/erp
 * ============================================================
 */
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
