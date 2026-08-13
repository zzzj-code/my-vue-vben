/**
 * ============================================================
 * 模块：BPM审批流模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/bpm
 * ============================================================
 */
import { requestClient } from "#/api/request";
async function getFormPage(params) {
  return requestClient.get("/bpm/form/page", {
    params
  });
}
async function getForm(id) {
  return requestClient.get(`/bpm/form/get?id=${id}`);
}
async function createForm(data) {
  return requestClient.post("/bpm/form/create", data);
}
async function updateForm(data) {
  return requestClient.put("/bpm/form/update", data);
}
async function deleteForm(id) {
  return requestClient.delete(`/bpm/form/delete?id=${id}`);
}
async function getFormSimpleList() {
  return requestClient.get("/bpm/form/simple-list");
}
export {
  createForm,
  deleteForm,
  getForm,
  getFormPage,
  getFormSimpleList,
  updateForm
};
