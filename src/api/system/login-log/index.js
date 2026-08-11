import { requestClient } from "#/api/request";
function getLoginLogPage(params) {
  return requestClient.get(
    "/system/login-log/page",
    { params }
  );
}
function exportLoginLog(params) {
  return requestClient.download("/system/login-log/export-excel", { params });
}
export {
  exportLoginLog,
  getLoginLogPage
};
