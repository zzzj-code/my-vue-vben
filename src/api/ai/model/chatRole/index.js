/**
 * ============================================================
 * 模块：AI智能助手模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/ai
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getChatRolePage(params) {
  return requestClient.get(
    "/ai/chat-role/page",
    { params }
  );
}
function getChatRole(id) {
  return requestClient.get(
    `/ai/chat-role/get?id=${id}`
  );
}
function createChatRole(data) {
  return requestClient.post("/ai/chat-role/create", data);
}
function updateChatRole(data) {
  return requestClient.put("/ai/chat-role/update", data);
}
function deleteChatRole(id) {
  return requestClient.delete(`/ai/chat-role/delete?id=${id}`);
}
function getMyPage(params) {
  return requestClient.get("/ai/chat-role/my-page", { params });
}
function getCategoryList() {
  return requestClient.get("/ai/chat-role/category-list");
}
function createMy(data) {
  return requestClient.post("/ai/chat-role/create-my", data);
}
function updateMy(data) {
  return requestClient.put("/ai/chat-role/update", data);
}
function deleteMy(id) {
  return requestClient.delete(`/ai/chat-role/delete-my?id=${id}`);
}
export {
  createChatRole,
  createMy,
  deleteChatRole,
  deleteMy,
  getCategoryList,
  getChatRole,
  getChatRolePage,
  getMyPage,
  updateChatRole,
  updateMy
};
