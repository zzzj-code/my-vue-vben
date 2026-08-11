import { requestClient } from "#/api/request";
function getOperateLogPage(params) {
  return requestClient.get(
    "/system/operate-log/page",
    { params }
  );
}
function exportOperateLog(params) {
  return requestClient.download("/system/operate-log/export-excel", { params });
}
export {
  exportOperateLog,
  getOperateLogPage
};
