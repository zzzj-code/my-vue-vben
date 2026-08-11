import { formatDateTime } from "@vben/utils";
import { requestClient } from "#/api/request";
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
