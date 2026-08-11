import { requestClient } from "#/api/request";
function sendKeFuMessage(data) {
  return requestClient.post("/promotion/kefu-message/send", data);
}
function updateKeFuMessageReadStatus(conversationId) {
  return requestClient.put(
    `/promotion/kefu-message/update-read-status?conversationId=${conversationId}`
  );
}
function getKeFuMessageList(params) {
  return requestClient.get(
    "/promotion/kefu-message/list",
    { params }
  );
}
export {
  getKeFuMessageList,
  sendKeFuMessage,
  updateKeFuMessageReadStatus
};
