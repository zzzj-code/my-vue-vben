import { requestClient } from "#/api/request";
function getEmployeeEntryBillPage(params) {
  return requestClient.get(
    "/hrm/employee-entry-bill/page",
    { params }
  );
}
function getEmployeeEntryBill(id) {
  return requestClient.get(
    `/hrm/employee-entry-bill/get?id=${id}`
  );
}
function createEmployeeEntryBill(data) {
  return requestClient.post("/hrm/employee-entry-bill/create", data);
}
function saveEmployeeEntryBill(data) {
  return requestClient.post("/hrm/employee-entry-bill/save", data);
}
function submitEmployeeEntryBill(data) {
  return requestClient.post("/hrm/employee-entry-bill/submit", data);
}
function updateEmployeeEntryBill(data) {
  return requestClient.put("/hrm/employee-entry-bill/update", data);
}
function deleteEmployeeEntryBill(id) {
  return requestClient.delete(`/hrm/employee-entry-bill/delete?id=${id}`);
}
function deleteEmployeeEntryBillList(ids) {
  return requestClient.delete(
    `/hrm/employee-entry-bill/delete-list?ids=${ids.join(",")}`
  );
}
function exportEmployeeEntryBill(params) {
  return requestClient.download("/hrm/employee-entry-bill/export-excel", {
    params
  });
}
export {
  createEmployeeEntryBill,
  deleteEmployeeEntryBill,
  deleteEmployeeEntryBillList,
  exportEmployeeEntryBill,
  getEmployeeEntryBill,
  getEmployeeEntryBillPage,
  saveEmployeeEntryBill,
  submitEmployeeEntryBill,
  updateEmployeeEntryBill
};
