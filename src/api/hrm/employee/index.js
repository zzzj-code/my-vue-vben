import { requestClient } from "#/api/request";
function getEmployeeArchivePage(params) {
  return requestClient.get(
    "/hrm/employee-archive/page",
    { params }
  );
}
function getEmployeeArchiveSelectPage(params) {
  return requestClient.get(
    "/hrm/employee-archive/select-page",
    { params }
  );
}
function getEmployeeArchive(id) {
  return requestClient.get(
    `/hrm/employee-archive/get?id=${id}`
  );
}
function createEmployeeArchive(data) {
  return requestClient.post("/hrm/employee-archive/create", data);
}
function updateEmployeeArchive(data) {
  return requestClient.put("/hrm/employee-archive/update", data);
}
function deleteEmployeeArchive(id) {
  return requestClient.delete(`/hrm/employee-archive/delete?id=${id}`);
}
function deleteEmployeeArchiveList(ids) {
  return requestClient.delete("/hrm/employee-archive/delete-list", {
    params: { ids: ids.join(",") }
  });
}
function exportEmployeeArchiveExcel(params) {
  return requestClient.download("/hrm/employee-archive/export-excel", {
    params
  });
}
function generateUserForEmployee(id) {
  return requestClient.post(
    `/hrm/employee-archive/generate-user?id=${id}`
  );
}
function batchGenerateUserForEmployee(ids) {
  return requestClient.post(
    `/hrm/employee-archive/batch-generate-user?ids=${ids.join(",")}`
  );
}
export {
  batchGenerateUserForEmployee,
  createEmployeeArchive,
  deleteEmployeeArchive,
  deleteEmployeeArchiveList,
  exportEmployeeArchiveExcel,
  generateUserForEmployee,
  getEmployeeArchive,
  getEmployeeArchivePage,
  getEmployeeArchiveSelectPage,
  updateEmployeeArchive
};
