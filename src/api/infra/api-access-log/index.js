import { requestClient } from "#/api/request";
function getApiAccessLogPage(params) {
  return requestClient.get(
    "/infra/api-access-log/page",
    { params }
  );
}
function exportApiAccessLog(params) {
  return requestClient.download("/infra/api-access-log/export-excel", {
    params
  });
}
export {
  exportApiAccessLog,
  getApiAccessLogPage
};
