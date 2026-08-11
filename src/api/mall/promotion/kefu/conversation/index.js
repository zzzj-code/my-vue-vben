import { requestClient } from "#/api/request";
function getConversationList() {
  return requestClient.get(
    "/promotion/kefu-conversation/list"
  );
}
function getConversation(id) {
  return requestClient.get(
    `/promotion/kefu-conversation/get?id=${id}`
  );
}
function updateConversationPinned(data) {
  return requestClient.put(
    "/promotion/kefu-conversation/update-conversation-pinned",
    data
  );
}
function deleteConversation(id) {
  return requestClient.delete(`/promotion/kefu-conversation/delete?id=${id}`);
}
export {
  deleteConversation,
  getConversation,
  getConversationList,
  updateConversationPinned
};
