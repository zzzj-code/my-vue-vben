/**
 * ============================================================
 * 模块：资产管理模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/asset
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getInfoPage(params) {
  return requestClient.get("/asset/info/page", { params });
}
function getInfo(id) {
  return requestClient.get(`/asset/info/get?id=${id}`);
}
function createInfo(data) {
  return requestClient.post("/asset/info/create", data);
}
function updateInfo(data) {
  return requestClient.put("/asset/info/update", data);
}
function deleteInfo(id) {
  return requestClient.delete(`/asset/info/delete?id=${id}`);
}
function deleteInfoListByIds(ids) {
  return requestClient.delete(`/asset/info/delete-list?ids=${ids.join(",")}`);
}
function exportInfo(params) {
  return requestClient.download("/asset/info/export-excel", params);
}
export {
  createInfo,
  deleteInfo,
  deleteInfoListByIds,
  exportInfo,
  getInfo,
  getInfoPage,
  updateInfo
};
