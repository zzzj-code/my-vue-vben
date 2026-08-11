import { requestClient } from "#/api/request";
function getMessagePage(params) {
  return requestClient.get(
    "/mp/message/page",
    {
      params
    }
  );
}
function sendMessage(data) {
  return requestClient.post("/mp/message/send", data);
}
export {
  getMessagePage,
  sendMessage
};
