/**
 * ============================================================
 * 模块：IoT物联网模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/iot
 * ============================================================
 */
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
