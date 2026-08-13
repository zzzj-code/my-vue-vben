/**
 * ============================================================
 * 模块：AI智能助手模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/ai
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getModelPage(params) {
  return requestClient.get(
    "/ai/model/page",
    { params }
  );
}
function getModelSimpleList(type) {
  return requestClient.get("/ai/model/simple-list", {
    params: {
      type
    }
  });
}
function getModel(id) {
  return requestClient.get(`/ai/model/get?id=${id}`);
}
function createModel(data) {
  return requestClient.post("/ai/model/create", data);
}
function updateModel(data) {
  return requestClient.put("/ai/model/update", data);
}
function deleteModel(id) {
  return requestClient.delete(`/ai/model/delete?id=${id}`);
}
export {
  createModel,
  deleteModel,
  getModel,
  getModelPage,
  getModelSimpleList,
  updateModel
};
