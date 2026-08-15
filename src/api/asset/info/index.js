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
  return requestClient.get("/asset/card/page", { params });
}
function getInfo(id) {
  return requestClient.get(`/asset/card/get?id=${id}`);
}
function createInfo(data) {
  return requestClient.post("/asset/card/create", data);
}
function updateInfo(data) {
  return requestClient.put("/asset/card/update", data);
}
function deleteInfo(id) {
  return requestClient.delete(`/asset/card/delete?id=${id}`);
}
function deleteInfoListByIds(ids) {
  return requestClient.delete(`/asset/card/delete-list?ids=${ids.join(",")}`);
}
function exportInfo(params) {
  return requestClient.download("/asset/card/export-excel", params);
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
