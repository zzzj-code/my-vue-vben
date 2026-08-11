import { requestClient } from "#/api/request";
function getEmployeeResignationBillPage(params) {
  return requestClient.get("/hrm/employee-resignation-bill/page", { params });
}
function getEmployeeResignationBill(id) {
  return requestClient.get(
    `/hrm/employee-resignation-bill/get?id=${id}`
  );
}
function createEmployeeResignationBill(data) {
  return requestClient.post("/hrm/employee-resignation-bill/create", data);
}
function saveEmployeeResignationBill(data) {
  return requestClient.post("/hrm/employee-resignation-bill/save", data);
}
function submitEmployeeResignationBill(data) {
  return requestClient.post("/hrm/employee-resignation-bill/submit", data);
}
function updateEmployeeResignationBill(data) {
  return requestClient.put("/hrm/employee-resignation-bill/update", data);
}
function deleteEmployeeResignationBill(id) {
  return requestClient.delete(`/hrm/employee-resignation-bill/delete?id=${id}`);
}
function deleteEmployeeResignationBillList(ids) {
  return requestClient.delete(
    `/hrm/employee-resignation-bill/delete-list?ids=${ids.join(",")}`
  );
}
function exportEmployeeResignationBill(params) {
  return requestClient.download("/hrm/employee-resignation-bill/export-excel", {
    params
  });
}
export {
  createEmployeeResignationBill,
  deleteEmployeeResignationBill,
  deleteEmployeeResignationBillList,
  exportEmployeeResignationBill,
  getEmployeeResignationBill,
  getEmployeeResignationBillPage,
  saveEmployeeResignationBill,
  submitEmployeeResignationBill,
  updateEmployeeResignationBill
};
