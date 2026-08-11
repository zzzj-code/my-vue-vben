import { requestClient } from "#/api/request";
function getJobLogPage(params) {
  return requestClient.get(
    "/infra/job-log/page",
    { params }
  );
}
function getJobLog(id) {
  return requestClient.get(
    `/infra/job-log/get?id=${id}`
  );
}
function exportJobLog(params) {
  return requestClient.download("/infra/job-log/export-excel", { params });
}
export {
  exportJobLog,
  getJobLog,
  getJobLogPage
};
