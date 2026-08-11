import { requestClient } from "#/api/request";
function getSmsLogPage(params) {
  return requestClient.get(
    "/system/sms-log/page",
    { params }
  );
}
function exportSmsLog(params) {
  return requestClient.download("/system/sms-log/export-excel", { params });
}
export {
  exportSmsLog,
  getSmsLogPage
};
