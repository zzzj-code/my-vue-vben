/**
 * ============================================================
 * 模块：OA协同办公模块
 * 页面：车辆信息页面
 * 功能：车辆信息相关接口
 * 接口前缀：/admin-api/oa
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getCarPage(params) {
  return requestClient.get("/oa/car/page", { params });
}
function getCar(id) {
  return requestClient.get(`/oa/car/get?id=${id}`);
}
function createCar(data) {
  return requestClient.post("/oa/car/create", data);
}
function updateCar(data) {
  return requestClient.put("/oa/car/update", data);
}
function deleteCar(id) {
  return requestClient.delete(`/oa/car/delete?id=${id}`);
}
function deleteCarListByIds(ids) {
  return requestClient.delete(`/oa/car/delete-list?ids=${ids.join(",")}`);
}
function exportCar(params) {
  return requestClient.download("/oa/car/export-excel", params);
}
export {
  createCar,
  deleteCar,
  deleteCarListByIds,
  exportCar,
  getCar,
  getCarPage,
  updateCar
};
