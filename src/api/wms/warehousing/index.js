/**
 * ============================================================
 * 模块：WMS仓储模块
 * 页面：仓库管理页面
 * 功能：仓库管理相关接口
 * 接口前缀：/admin-api/wms
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getWarehousingList(params) {
  return requestClient.get("/wms/warehousing/list", { params });
}
function getWarehousing(id) {
  return requestClient.get(`/wms/warehousing/get?id=${id}`);
}
function createWarehousing(data) {
  return requestClient.post("/wms/warehousing/create", data);
}
function updateWarehousing(data) {
  return requestClient.put("/wms/warehousing/update", data);
}
function deleteWarehousing(id) {
  return requestClient.delete(`/wms/warehousing/delete?id=${id}`);
}
function exportWarehousing(params) {
  return requestClient.download("/wms/warehousing/export-excel", params);
}
export {
  createWarehousing,
  deleteWarehousing,
  exportWarehousing,
  getWarehousing,
  getWarehousingList,
  updateWarehousing
};
