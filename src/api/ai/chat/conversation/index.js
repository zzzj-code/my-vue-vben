import { requestClient } from "#/api/request";
function getChatConversationMy(id) {
  return requestClient.get(
    `/ai/chat/conversation/get-my?id=${id}`
  );
}
function createChatConversationMy(data) {
  return requestClient.post("/ai/chat/conversation/create-my", data);
}
function updateChatConversationMy(data) {
  return requestClient.put(`/ai/chat/conversation/update-my`, data);
}
function deleteChatConversationMy(id) {
  return requestClient.delete(`/ai/chat/conversation/delete-my?id=${id}`);
}
function deleteChatConversationMyByUnpinned() {
  return requestClient.delete(`/ai/chat/conversation/delete-by-unpinned`);
}
function getChatConversationMyList() {
  return requestClient.get(
    `/ai/chat/conversation/my-list`
  );
}
function getChatConversationPage(params) {
  return requestClient.get(`/ai/chat/conversation/page`, { params });
}
function deleteChatConversationByAdmin(id) {
  return requestClient.delete(`/ai/chat/conversation/delete-by-admin?id=${id}`);
}
export {
  createChatConversationMy,
  deleteChatConversationByAdmin,
  deleteChatConversationMy,
  deleteChatConversationMyByUnpinned,
  getChatConversationMy,
  getChatConversationMyList,
  getChatConversationPage,
  updateChatConversationMy
};
