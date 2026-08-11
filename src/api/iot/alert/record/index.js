import { requestClient } from "#/api/request";
function getAlertRecordPage(params) {
  return requestClient.get(
    "/iot/alert-record/page",
    { params }
  );
}
function getAlertRecord(id) {
  return requestClient.get(
    `/iot/alert-record/get?id=${id}`
  );
}
function processAlertRecord(id, remark) {
  return requestClient.put("/iot/alert-record/process", {
    id,
    remark
  });
}
function batchProcessAlertRecord(ids, remark) {
  return requestClient.put("/iot/alert-record/batch-process", {
    ids,
    remark
  });
}
function deleteAlertRecord(id) {
  return requestClient.delete(`/iot/alert-record/delete?id=${id}`);
}
function deleteAlertRecordList(ids) {
  return requestClient.delete("/iot/alert-record/delete-list", {
    params: { ids: ids.join(",") }
  });
}
export {
  batchProcessAlertRecord,
  deleteAlertRecord,
  deleteAlertRecordList,
  getAlertRecord,
  getAlertRecordPage,
  processAlertRecord
};
