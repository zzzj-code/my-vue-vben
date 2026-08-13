/**
 * ============================================================
 * 模块：CRM客户管理模块
 * 页面：线索管理页面
 * 功能：线索管理相关接口
 * 接口前缀：/admin-api/crm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getCluePage(params) {
  return requestClient.get("/crm/clue/page", {
    params
  });
}
function getClue(id) {
  return requestClient.get(`/crm/clue/get?id=${id}`);
}
function createClue(data) {
  return requestClient.post("/crm/clue/create", data);
}
function updateClue(data) {
  return requestClient.put("/crm/clue/update", data);
}
function deleteClue(id) {
  return requestClient.delete(`/crm/clue/delete?id=${id}`);
}
function exportClue(params) {
  return requestClient.download("/crm/clue/export-excel", { params });
}
function transferClue(data) {
  return requestClient.put("/crm/clue/transfer", data);
}
function transformClue(id) {
  return requestClient.put(`/crm/clue/transform?id=${id}`);
}
function getFollowClueCount() {
  return requestClient.get("/crm/clue/follow-count");
}
export {
  createClue,
  deleteClue,
  exportClue,
  getClue,
  getCluePage,
  getFollowClueCount,
  transferClue,
  transformClue,
  updateClue
};
