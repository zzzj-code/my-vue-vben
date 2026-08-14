/**
 * ============================================================
 * 模块：商城模块
 * 页面：member页面
 * 功能：member相关接口
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

function getMemberSummary() {
  return requestClient.get(
    "/statistics/member/summary"
  );
}
function getMemberAnalyse(params) {
  return requestClient.get(
    "/statistics/member/analyse",
    {
      params: {
        times: [
          formatDateTime(params.times[0]),
          formatDateTime(params.times[1])
        ]
      }
    }
  );
}
function getMemberAreaStatisticsList() {
  return requestClient.get(
    "/statistics/member/area-statistics-list"
  );
}
function getMemberSexStatisticsList() {
  return requestClient.get(
    "/statistics/member/sex-statistics-list"
  );
}
function getMemberTerminalStatisticsList() {
  return requestClient.get(
    "/statistics/member/terminal-statistics-list"
  );
}
function getUserCountComparison() {
  return requestClient.get("/statistics/member/user-count-comparison");
}
function getMemberRegisterCountList(beginTime, endTime) {
  return requestClient.get(
    "/statistics/member/register-count-list",
    {
      params: {
        times: [formatDateTime(beginTime), formatDateTime(endTime)]
      }
    }
  );
}
export {
  getMemberAnalyse,
  getMemberAreaStatisticsList,
  getMemberRegisterCountList,
  getMemberSexStatisticsList,
  getMemberSummary,
  getMemberTerminalStatisticsList,
  getUserCountComparison
};
