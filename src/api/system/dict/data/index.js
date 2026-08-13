/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：字典数据管理页面
 * 功能：字典数据管理相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getSimpleDictDataList() {
  return requestClient.get(
    "/system/dict-data/simple-list"
  );
}
function getDictDataPage(params) {
  return requestClient.get(
    "/system/dict-data/page",
    { params }
  );
}
function getDictData(id) {
  return requestClient.get(
    `/system/dict-data/get?id=${id}`
  );
}
function createDictData(data) {
  return requestClient.post("/system/dict-data/create", data);
}
function updateDictData(data) {
  return requestClient.put("/system/dict-data/update", data);
}
function deleteDictData(id) {
  return requestClient.delete(`/system/dict-data/delete?id=${id}`);
}
function deleteDictDataList(ids) {
  return requestClient.delete(
    `/system/dict-data/delete-list?ids=${ids.join(",")}`
  );
}
function exportDictData(params) {
  return requestClient.download("/system/dict-data/export-excel", { params });
}
export {
  createDictData,
  deleteDictData,
  deleteDictDataList,
  exportDictData,
  getDictData,
  getDictDataPage,
  getSimpleDictDataList,
  updateDictData
};
