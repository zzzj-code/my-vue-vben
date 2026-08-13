/**
 * ============================================================
 * 模块：OA协同办公模块
 * 页面：印章信息页面
 * 功能：印章信息相关接口
 * 接口前缀：/admin-api/oa
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getSealPage(params) {
  return requestClient.get("/oa/seal/page", { params });
}
function getSeal(id) {
  return requestClient.get(`/oa/seal/get?id=${id}`);
}
function createSeal(data) {
  return requestClient.post("/oa/seal/create", data);
}
function updateSeal(data) {
  return requestClient.put("/oa/seal/update", data);
}
function deleteSeal(id) {
  return requestClient.delete(`/oa/seal/delete?id=${id}`);
}
function deleteSealListByIds(ids) {
  return requestClient.delete(`/oa/seal/delete-list?ids=${ids.join(",")}`);
}
function exportSeal(params) {
  return requestClient.download("/oa/seal/export-excel", params);
}
export {
  createSeal,
  deleteSeal,
  deleteSealListByIds,
  exportSeal,
  getSeal,
  getSealPage,
  updateSeal
};
