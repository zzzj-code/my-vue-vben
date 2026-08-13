/**
 * ============================================================
 * 模块：HRM人力资源模块
 * 页面：调动申请页面
 * 功能：调动申请相关接口
 * 接口前缀：/admin-api/hrm
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getEmployeeTransferBillPage(params) {
  return requestClient.get("/hrm/employee-transfer-bill/page", { params });
}
function getEmployeeTransferBill(id) {
  return requestClient.get(
    `/hrm/employee-transfer-bill/get?id=${id}`
  );
}
function createEmployeeTransferBill(data) {
  return requestClient.post("/hrm/employee-transfer-bill/create", data);
}
function saveEmployeeTransferBill(data) {
  return requestClient.post("/hrm/employee-transfer-bill/save", data);
}
function submitEmployeeTransferBill(data) {
  return requestClient.post("/hrm/employee-transfer-bill/submit", data);
}
function updateEmployeeTransferBill(data) {
  return requestClient.put("/hrm/employee-transfer-bill/update", data);
}
function deleteEmployeeTransferBill(id) {
  return requestClient.delete(`/hrm/employee-transfer-bill/delete?id=${id}`);
}
function deleteEmployeeTransferBillList(ids) {
  return requestClient.delete(
    `/hrm/employee-transfer-bill/delete-list?ids=${ids.join(",")}`
  );
}
function exportEmployeeTransferBill(params) {
  return requestClient.download("/hrm/employee-transfer-bill/export-excel", {
    params
  });
}
export {
  createEmployeeTransferBill,
  deleteEmployeeTransferBill,
  deleteEmployeeTransferBillList,
  exportEmployeeTransferBill,
  getEmployeeTransferBill,
  getEmployeeTransferBillPage,
  saveEmployeeTransferBill,
  submitEmployeeTransferBill,
  updateEmployeeTransferBill
};
