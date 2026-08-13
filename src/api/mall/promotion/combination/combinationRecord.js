/**
 * ============================================================
 * 模块：商城模块
 * 页面：combinationRecord页面
 * 功能：combinationRecord相关接口
 * 接口前缀：/admin-api/mall
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getCombinationRecordPage(params) {
  return requestClient.get("/promotion/combination-record/page", { params });
}
function getCombinationRecordSummary() {
  return requestClient.get(
    "/promotion/combination-record/get-summary"
  );
}
export {
  getCombinationRecordPage,
  getCombinationRecordSummary
};
