/**
 * ============================================================
 * 模块：AI智能助手模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/ai
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getToolPage(params) {
  return requestClient.get("/ai/tool/page", {
    params
  });
}
function getTool(id) {
  return requestClient.get(`/ai/tool/get?id=${id}`);
}
function createTool(data) {
  return requestClient.post("/ai/tool/create", data);
}
function updateTool(data) {
  return requestClient.put("/ai/tool/update", data);
}
function deleteTool(id) {
  return requestClient.delete(`/ai/tool/delete?id=${id}`);
}
function getToolSimpleList() {
  return requestClient.get("/ai/tool/simple-list");
}
export {
  createTool,
  deleteTool,
  getTool,
  getToolPage,
  getToolSimpleList,
  updateTool
};
