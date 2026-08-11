import { requestClient } from "#/api/request";
function getOtaTaskRecordPage(params) {
  return requestClient.get(
    "/iot/ota/task/record/page",
    { params }
  );
}
function getOtaTaskRecord(id) {
  return requestClient.get(
    `/iot/ota/task/record/get?id=${id}`
  );
}
function getOtaTaskRecordListByTaskId(taskId) {
  return requestClient.get(
    "/iot/ota/task/record/list-by-task-id",
    { params: { taskId } }
  );
}
function getOtaTaskRecordListByDeviceId(deviceId) {
  return requestClient.get(
    "/iot/ota/task/record/list-by-device-id",
    { params: { deviceId } }
  );
}
function getOtaTaskRecordListByFirmwareId(firmwareId) {
  return requestClient.get(
    "/iot/ota/task/record/list-by-firmware-id",
    { params: { firmwareId } }
  );
}
function retryOtaTaskRecord(id) {
  return requestClient.put(`/iot/ota/task/record/retry?id=${id}`);
}
function cancelOtaTaskRecord(id) {
  return requestClient.put(`/iot/ota/task/record/cancel?id=${id}`);
}
function getOtaTaskRecordStatusStatistics(firmwareId, taskId) {
  return requestClient.get(
    "/iot/ota/task/record/get-status-statistics",
    { params: { firmwareId, taskId } }
  );
}
export {
  cancelOtaTaskRecord,
  getOtaTaskRecord,
  getOtaTaskRecordListByDeviceId,
  getOtaTaskRecordListByFirmwareId,
  getOtaTaskRecordListByTaskId,
  getOtaTaskRecordPage,
  getOtaTaskRecordStatusStatistics,
  retryOtaTaskRecord
};
