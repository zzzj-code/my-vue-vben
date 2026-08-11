import { requestClient } from "#/api/request";
function getEmployeeRegularBillPage(params) {
  return requestClient.get("/hrm/employee-regular-bill/page", { params });
}
function getEmployeeRegularBill(id) {
  return requestClient.get(
    `/hrm/employee-regular-bill/get?id=${id}`
  );
}
function createEmployeeRegularBill(data) {
  return requestClient.post("/hrm/employee-regular-bill/create", data);
}
function saveEmployeeRegularBill(data) {
  return requestClient.post("/hrm/employee-regular-bill/save", data);
}
function submitEmployeeRegularBill(data) {
  return requestClient.post("/hrm/employee-regular-bill/submit", data);
}
function updateEmployeeRegularBill(data) {
  return requestClient.put("/hrm/employee-regular-bill/update", data);
}
function deleteEmployeeRegularBill(id) {
  return requestClient.delete(`/hrm/employee-regular-bill/delete?id=${id}`);
}
function deleteEmployeeRegularBillList(ids) {
  return requestClient.delete(
    `/hrm/employee-regular-bill/delete-list?ids=${ids.join(",")}`
  );
}
function exportEmployeeRegularBill(params) {
  return requestClient.download("/hrm/employee-regular-bill/export-excel", {
    params
  });
}
export {
  createEmployeeRegularBill,
  deleteEmployeeRegularBill,
  deleteEmployeeRegularBillList,
  exportEmployeeRegularBill,
  getEmployeeRegularBill,
  getEmployeeRegularBillPage,
  saveEmployeeRegularBill,
  submitEmployeeRegularBill,
  updateEmployeeRegularBill
};
