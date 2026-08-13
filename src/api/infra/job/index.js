/**
 * ============================================================
 * 模块：基础设施模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/infra
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getJobPage(params) {
  return requestClient.get("/infra/job/page", {
    params
  });
}
function getJob(id) {
  return requestClient.get(`/infra/job/get?id=${id}`);
}
function createJob(data) {
  return requestClient.post("/infra/job/create", data);
}
function updateJob(data) {
  return requestClient.put("/infra/job/update", data);
}
function deleteJob(id) {
  return requestClient.delete(`/infra/job/delete?id=${id}`);
}
function deleteJobList(ids) {
  return requestClient.delete(`/infra/job/delete-list?ids=${ids.join(",")}`);
}
function exportJob(params) {
  return requestClient.download("/infra/job/export-excel", { params });
}
function updateJobStatus(id, status) {
  return requestClient.put("/infra/job/update-status", void 0, {
    params: {
      id,
      status
    }
  });
}
function runJob(id) {
  return requestClient.put(`/infra/job/trigger?id=${id}`);
}
function getJobNextTimes(id) {
  return requestClient.get(`/infra/job/get_next_times?id=${id}`);
}
export {
  createJob,
  deleteJob,
  deleteJobList,
  exportJob,
  getJob,
  getJobNextTimes,
  getJobPage,
  runJob,
  updateJob,
  updateJobStatus
};
