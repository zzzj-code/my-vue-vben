/**
 * ============================================================
 * 模块：BPM审批流模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/bpm
 * ============================================================
 */
import { requestClient } from "#/api/request";
async function getProcessListenerPage(params) {
  return requestClient.get(
    "/bpm/process-listener/page",
    { params }
  );
}
async function getProcessListener(id) {
  return requestClient.get(
    `/bpm/process-listener/get?id=${id}`
  );
}
async function createProcessListener(data) {
  return requestClient.post("/bpm/process-listener/create", data);
}
async function updateProcessListener(data) {
  return requestClient.put("/bpm/process-listener/update", data);
}
async function deleteProcessListener(id) {
  return requestClient.delete(`/bpm/process-listener/delete?id=${id}`);
}
export {
  createProcessListener,
  deleteProcessListener,
  getProcessListener,
  getProcessListenerPage,
  updateProcessListener
};
