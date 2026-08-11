import { requestClient } from "#/api/request";
function getDemo03StudentPage(params) {
  return requestClient.get(
    "/infra/demo03-student-erp/page",
    { params }
  );
}
function getDemo03Student(id) {
  return requestClient.get(
    `/infra/demo03-student-erp/get?id=${id}`
  );
}
function createDemo03Student(data) {
  return requestClient.post("/infra/demo03-student-erp/create", data);
}
function updateDemo03Student(data) {
  return requestClient.put("/infra/demo03-student-erp/update", data);
}
function deleteDemo03Student(id) {
  return requestClient.delete(`/infra/demo03-student-erp/delete?id=${id}`);
}
function deleteDemo03StudentList(ids) {
  return requestClient.delete(
    `/infra/demo03-student-erp/delete-list?ids=${ids.join(",")}`
  );
}
function exportDemo03Student(params) {
  return requestClient.download("/infra/demo03-student-erp/export-excel", {
    params
  });
}
function getDemo03CoursePage(params) {
  return requestClient.get(
    `/infra/demo03-student-erp/demo03-course/page`,
    { params }
  );
}
function createDemo03Course(data) {
  return requestClient.post(
    `/infra/demo03-student-erp/demo03-course/create`,
    data
  );
}
function updateDemo03Course(data) {
  return requestClient.put(
    `/infra/demo03-student-erp/demo03-course/update`,
    data
  );
}
function deleteDemo03Course(id) {
  return requestClient.delete(
    `/infra/demo03-student-erp/demo03-course/delete?id=${id}`
  );
}
function deleteDemo03CourseList(ids) {
  return requestClient.delete(
    `/infra/demo03-student-erp/demo03-course/delete-list?ids=${ids.join(",")}`
  );
}
function getDemo03Course(id) {
  return requestClient.get(
    `/infra/demo03-student-erp/demo03-course/get?id=${id}`
  );
}
function getDemo03GradePage(params) {
  return requestClient.get(
    `/infra/demo03-student-erp/demo03-grade/page`,
    { params }
  );
}
function createDemo03Grade(data) {
  return requestClient.post(
    `/infra/demo03-student-erp/demo03-grade/create`,
    data
  );
}
function updateDemo03Grade(data) {
  return requestClient.put(
    `/infra/demo03-student-erp/demo03-grade/update`,
    data
  );
}
function deleteDemo03Grade(id) {
  return requestClient.delete(
    `/infra/demo03-student-erp/demo03-grade/delete?id=${id}`
  );
}
function deleteDemo03GradeList(ids) {
  return requestClient.delete(
    `/infra/demo03-student-erp/demo03-grade/delete-list?ids=${ids.join(",")}`
  );
}
function getDemo03Grade(id) {
  return requestClient.get(
    `/infra/demo03-student-erp/demo03-grade/get?id=${id}`
  );
}
export {
  createDemo03Course,
  createDemo03Grade,
  createDemo03Student,
  deleteDemo03Course,
  deleteDemo03CourseList,
  deleteDemo03Grade,
  deleteDemo03GradeList,
  deleteDemo03Student,
  deleteDemo03StudentList,
  exportDemo03Student,
  getDemo03Course,
  getDemo03CoursePage,
  getDemo03Grade,
  getDemo03GradePage,
  getDemo03Student,
  getDemo03StudentPage,
  updateDemo03Course,
  updateDemo03Grade,
  updateDemo03Student
};
