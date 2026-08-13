/**
 * ============================================================
 * 模块：OA协同办公模块
 * 页面：还车登记页面
 * 功能：还车登记相关接口
 * 接口前缀：/admin-api/oa
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getCarReturnBillPage(params) {
  return requestClient.get("/oa/car-return-bill/page", { params });
}
function getCarReturnBill(id) {
  return requestClient.get(`/oa/car-return-bill/get?id=${id}`);
}
function saveCarReturnBill(data) {
  return requestClient.post(`/oa/car-return-bill/save`, data);
}
function submitCarReturnBill(data) {
  return requestClient.post(`/oa/car-return-bill/submit`, data);
}
function createCarReturnBill(data) {
  return requestClient.post("/oa/car-return-bill/create", data);
}
function updateCarReturnBill(data) {
  return requestClient.put("/oa/car-return-bill/update", data);
}
function deleteCarReturnBill(id) {
  return requestClient.delete(`/oa/car-return-bill/delete?id=${id}`);
}
function deleteCarReturnBillList(ids) {
  return requestClient.delete(`/oa/car-return-bill/delete-list?ids=${ids.join(",")}`);
}
function exportCarReturnBill(params) {
  return requestClient.download("/oa/car-return-bill/export-excel", params);
}
export {
  createCarReturnBill,
  deleteCarReturnBill,
  deleteCarReturnBillList,
  exportCarReturnBill,
  getCarReturnBill,
  getCarReturnBillPage,
  saveCarReturnBill,
  submitCarReturnBill,
  updateCarReturnBill
};
