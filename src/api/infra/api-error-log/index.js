import { requestClient } from "#/api/request";
function getApiErrorLogPage(params) {
  return requestClient.get(
    "/infra/api-error-log/page",
    { params }
  );
}
function updateApiErrorLogStatus(id, processStatus) {
  return requestClient.put(
    `/infra/api-error-log/update-status?id=${id}&processStatus=${processStatus}`
  );
}
function exportApiErrorLog(params) {
  return requestClient.download("/infra/api-error-log/export-excel", {
    params
  });
}
export {
  exportApiErrorLog,
  getApiErrorLogPage,
  updateApiErrorLogStatus
};
