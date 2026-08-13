/**
 * ============================================================
 * 模块：AI智能助手模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/ai
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getKnowledgePage(params) {
  return requestClient.get(
    "/ai/knowledge/page",
    { params }
  );
}
function getKnowledge(id) {
  return requestClient.get(
    `/ai/knowledge/get?id=${id}`
  );
}
function createKnowledge(data) {
  return requestClient.post("/ai/knowledge/create", data);
}
function updateKnowledge(data) {
  return requestClient.put("/ai/knowledge/update", data);
}
function deleteKnowledge(id) {
  return requestClient.delete(`/ai/knowledge/delete?id=${id}`);
}
function getSimpleKnowledgeList() {
  return requestClient.get(
    "/ai/knowledge/simple-list"
  );
}
export {
  createKnowledge,
  deleteKnowledge,
  getKnowledge,
  getKnowledgePage,
  getSimpleKnowledgeList,
  updateKnowledge
};
