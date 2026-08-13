/**
 * ============================================================
 * 模块：BPM审批流模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/bpm
 * ============================================================
 */
import { requestClient } from "#/api/request";
async function createLeave(data) {
  return requestClient.post("/bpm/oa/leave/create", data);
}
async function updateLeave(data) {
  return requestClient.post("/bpm/oa/leave/update", data);
}
async function getLeave(id) {
  return requestClient.get(`/bpm/oa/leave/get?id=${id}`);
}
async function getLeavePage(params) {
  return requestClient.get(
    "/bpm/oa/leave/page",
    { params }
  );
}
export {
  createLeave,
  getLeave,
  getLeavePage,
  updateLeave
};
