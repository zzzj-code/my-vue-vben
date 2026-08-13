/**
 * ============================================================
 * 模块：系统管理模块
 * 页面：部门管理页面
 * 功能：部门管理相关接口
 * 接口前缀：/admin-api/system
 * ============================================================
 */
import { requestClient } from "#/api/request";
async function getSimpleDeptList() {
  return requestClient.get("/system/dept/simple-list");
}
async function getDeptList() {
  return requestClient.get("/system/dept/list");
}
async function getCompanyList() {
  return requestClient.get("/system/dept/company-list");
}
async function getDept(id) {
  return requestClient.get(`/system/dept/get?id=${id}`);
}
async function createDept(data) {
  return requestClient.post("/system/dept/create", data);
}
async function updateDept(data) {
  return requestClient.put("/system/dept/update", data);
}
async function deleteDept(id) {
  return requestClient.delete(`/system/dept/delete?id=${id}`);
}
async function deleteDeptList(ids) {
  return requestClient.delete(`/system/dept/delete-list?ids=${ids.join(",")}`);
}
export {
  createDept,
  deleteDept,
  deleteDeptList,
  getCompanyList,
  getDept,
  getDeptList,
  getSimpleDeptList,
  updateDept
};
