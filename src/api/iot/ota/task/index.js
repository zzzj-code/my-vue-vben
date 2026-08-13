/**
 * ============================================================
 * 模块：IoT物联网模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/iot
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getOtaTaskPage(params) {
  return requestClient.get(
    "/iot/ota/task/page",
    { params }
  );
}
function getOtaTask(id) {
  return requestClient.get(`/iot/ota/task/get?id=${id}`);
}
function createOtaTask(data) {
  return requestClient.post("/iot/ota/task/create", data);
}
function updateOtaTask(data) {
  return requestClient.put("/iot/ota/task/update", data);
}
function deleteOtaTask(id) {
  return requestClient.delete(`/iot/ota/task/delete?id=${id}`);
}
function deleteOtaTaskList(ids) {
  return requestClient.delete("/iot/ota/task/delete-list", {
    params: { ids: ids.join(",") }
  });
}
function cancelOtaTask(id) {
  return requestClient.put(`/iot/ota/task/cancel?id=${id}`);
}
function startOtaTask(id) {
  return requestClient.put(`/iot/ota/task/start?id=${id}`);
}
function pauseOtaTask(id) {
  return requestClient.put(`/iot/ota/task/pause?id=${id}`);
}
function resumeOtaTask(id) {
  return requestClient.put(`/iot/ota/task/resume?id=${id}`);
}
export {
  cancelOtaTask,
  createOtaTask,
  deleteOtaTask,
  deleteOtaTaskList,
  getOtaTask,
  getOtaTaskPage,
  pauseOtaTask,
  resumeOtaTask,
  startOtaTask,
  updateOtaTask
};
