import { requestClient } from "#/api/request";
function getKnowledgeDocumentPage(params) {
  return requestClient.get("/ai/knowledge/document/page", { params });
}
function getKnowledgeDocument(id) {
  return requestClient.get(`/ai/knowledge/document/get?id=${id}`);
}
function createKnowledge(data) {
  return requestClient.post("/ai/knowledge/document/create", data);
}
function createKnowledgeDocumentList(data) {
  return requestClient.post("/ai/knowledge/document/create-list", data);
}
function updateKnowledgeDocument(data) {
  return requestClient.put("/ai/knowledge/document/update", data);
}
function updateKnowledgeDocumentStatus(data) {
  return requestClient.put("/ai/knowledge/document/update-status", data);
}
function deleteKnowledgeDocument(id) {
  return requestClient.delete(`/ai/knowledge/document/delete?id=${id}`);
}
export {
  createKnowledge,
  createKnowledgeDocumentList,
  deleteKnowledgeDocument,
  getKnowledgeDocument,
  getKnowledgeDocumentPage,
  updateKnowledgeDocument,
  updateKnowledgeDocumentStatus
};
