import { requestClient } from "#/api/request";
function getDemo03StudentPage(params) {
  return requestClient.get(
    "/infra/demo03-student-normal/page",
    { params }
  );
}
function getDemo03Student(id) {
  return requestClient.get(
    `/infra/demo03-student-normal/get?id=${id}`
  );
}
function createDemo03Student(data) {
  return requestClient.post("/infra/demo03-student-normal/create", data);
}
function updateDemo03Student(data) {
  return requestClient.put("/infra/demo03-student-normal/update", data);
}
function deleteDemo03Student(id) {
  return requestClient.delete(`/infra/demo03-student-normal/delete?id=${id}`);
}
function deleteDemo03StudentList(ids) {
  return requestClient.delete(
    `/infra/demo03-student-normal/delete-list?ids=${ids.join(",")}`
  );
}
function exportDemo03Student(params) {
  return requestClient.download("/infra/demo03-student-normal/export-excel", {
    params
  });
}
function getDemo03CourseListByStudentId(studentId) {
  return requestClient.get(
    `/infra/demo03-student-normal/demo03-course/list-by-student-id?studentId=${studentId}`
  );
}
function getDemo03GradeByStudentId(studentId) {
  return requestClient.get(
    `/infra/demo03-student-normal/demo03-grade/get-by-student-id?studentId=${studentId}`
  );
}
export {
  createDemo03Student,
  deleteDemo03Student,
  deleteDemo03StudentList,
  exportDemo03Student,
  getDemo03CourseListByStudentId,
  getDemo03GradeByStudentId,
  getDemo03Student,
  getDemo03StudentPage,
  updateDemo03Student
};
