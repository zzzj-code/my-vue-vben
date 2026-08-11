import { requestClient } from "#/api/request";
function getLifeTimePage(params) {
  return requestClient.get("/asset/life-time/page", { params });
}
function getLifeTime(id) {
  return requestClient.get(`/asset/life-time/get?id=${id}`);
}
function createLifeTime(data) {
  return requestClient.post("/asset/life-time/create", data);
}
function updateLifeTime(data) {
  return requestClient.put("/asset/life-time/update", data);
}
function deleteLifeTime(id) {
  return requestClient.delete(`/asset/life-time/delete?id=${id}`);
}
function deleteLifeTimeListByIds(ids) {
  return requestClient.delete(`/asset/life-time/delete-list?ids=${ids.join(",")}`);
}
function exportLifeTime(params) {
  return requestClient.download("/asset/life-time/export-excel", params);
}
export {
  createLifeTime,
  deleteLifeTime,
  deleteLifeTimeListByIds,
  exportLifeTime,
  getLifeTime,
  getLifeTimePage,
  updateLifeTime
};
