/**
 * ============================================================
 * 模块：AI智能助手模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/ai
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getKnowledgeSegmentPage(params) {
  return requestClient.get(
    "/ai/knowledge/segment/page",
    { params }
  );
}
function getKnowledgeSegment(id) {
  return requestClient.get(
    `/ai/knowledge/segment/get?id=${id}`
  );
}
function createKnowledgeSegment(data) {
  return requestClient.post("/ai/knowledge/segment/create", data);
}
function updateKnowledgeSegment(data) {
  return requestClient.put("/ai/knowledge/segment/update", data);
}
function updateKnowledgeSegmentStatus(id, status) {
  return requestClient.put("/ai/knowledge/segment/update-status", {
    id,
    status
  });
}
function deleteKnowledgeSegment(id) {
  return requestClient.delete(`/ai/knowledge/segment/delete?id=${id}`);
}
function splitContent(url, segmentMaxTokens) {
  return requestClient.get("/ai/knowledge/segment/split", {
    params: { url, segmentMaxTokens }
  });
}
function getKnowledgeSegmentProcessList(documentIds) {
  return requestClient.get("/ai/knowledge/segment/get-process-list", {
    params: { documentIds: documentIds.join(",") }
  });
}
function searchKnowledgeSegment(params) {
  return requestClient.get("/ai/knowledge/segment/search", {
    params
  });
}
export {
  createKnowledgeSegment,
  deleteKnowledgeSegment,
  getKnowledgeSegment,
  getKnowledgeSegmentPage,
  getKnowledgeSegmentProcessList,
  searchKnowledgeSegment,
  splitContent,
  updateKnowledgeSegment,
  updateKnowledgeSegmentStatus
};
