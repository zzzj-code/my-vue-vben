/**
 * ============================================================
 * 模块：基础设施模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/infra
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getDemo03StudentPage(params) {
  return requestClient.get(
    "/infra/demo03-student-inner/page",
    { params }
  );
}
function getDemo03Student(id) {
  return requestClient.get(
    `/infra/demo03-student-inner/get?id=${id}`
  );
}
function createDemo03Student(data) {
  return requestClient.post("/infra/demo03-student-inner/create", data);
}
function updateDemo03Student(data) {
  return requestClient.put("/infra/demo03-student-inner/update", data);
}
function deleteDemo03Student(id) {
  return requestClient.delete(`/infra/demo03-student-inner/delete?id=${id}`);
}
function deleteDemo03StudentList(ids) {
  return requestClient.delete(
    `/infra/demo03-student-inner/delete-list?ids=${ids.join(",")}`
  );
}
function exportDemo03Student(params) {
  return requestClient.download("/infra/demo03-student-inner/export-excel", {
    params
  });
}
function getDemo03CourseListByStudentId(studentId) {
  return requestClient.get(
    `/infra/demo03-student-inner/demo03-course/list-by-student-id?studentId=${studentId}`
  );
}
function getDemo03GradeByStudentId(studentId) {
  return requestClient.get(
    `/infra/demo03-student-inner/demo03-grade/get-by-student-id?studentId=${studentId}`
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
