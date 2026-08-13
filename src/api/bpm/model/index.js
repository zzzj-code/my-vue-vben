/**
 * ============================================================
 * 模块：BPM审批流模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/bpm
 * ============================================================
 */
import { requestClient } from "#/api/request";
async function getModelList(name) {
  return requestClient.get("/bpm/model/list", {
    params: { name }
  });
}
async function getModel(id) {
  return requestClient.get(`/bpm/model/get?id=${id}`);
}
async function updateModel(data) {
  return requestClient.put("/bpm/model/update", data);
}
async function updateModelSortBatch(ids) {
  const params = ids.join(",");
  return requestClient.put(
    `/bpm/model/update-sort-batch?ids=${params}`
  );
}
async function updateModelBpmn(data) {
  return requestClient.put("/bpm/model/update-bpmn", data);
}
async function updateModelState(id, state) {
  const data = {
    id,
    state
  };
  return requestClient.put("/bpm/model/update-state", data);
}
async function createModel(data) {
  return requestClient.post("/bpm/model/create", data);
}
async function deleteModel(id) {
  return requestClient.delete(`/bpm/model/delete?id=${id}`);
}
async function deployModel(id) {
  return requestClient.post(`/bpm/model/deploy?id=${id}`);
}
async function cleanModel(id) {
  return requestClient.delete(`/bpm/model/clean?id=${id}`);
}
export {
  cleanModel,
  createModel,
  deleteModel,
  deployModel,
  getModel,
  getModelList,
  updateModel,
  updateModelBpmn,
  updateModelSortBatch,
  updateModelState
};
