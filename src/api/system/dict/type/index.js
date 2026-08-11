import { requestClient } from "#/api/request";
function getSimpleDictTypeList() {
  return requestClient.get(
    "/system/dict-type/list-all-simple"
  );
}
function getDictTypePage(params) {
  return requestClient.get(
    "/system/dict-type/page",
    { params }
  );
}
function getDictType(id) {
  return requestClient.get(
    `/system/dict-type/get?id=${id}`
  );
}
function createDictType(data) {
  return requestClient.post("/system/dict-type/create", data);
}
function updateDictType(data) {
  return requestClient.put("/system/dict-type/update", data);
}
function deleteDictType(id) {
  return requestClient.delete(`/system/dict-type/delete?id=${id}`);
}
function deleteDictTypeList(ids) {
  return requestClient.delete(
    `/system/dict-type/delete-list?ids=${ids.join(",")}`
  );
}
function exportDictType(params) {
  return requestClient.download("/system/dict-type/export-excel", { params });
}
export {
  createDictType,
  deleteDictType,
  deleteDictTypeList,
  exportDictType,
  getDictType,
  getDictTypePage,
  getSimpleDictTypeList,
  updateDictType
};
