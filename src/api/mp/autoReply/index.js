import { requestClient } from "#/api/request";
function getAutoReplyPage(params) {
  return requestClient.get(
    "/mp/auto-reply/page",
    {
      params
    }
  );
}
function getAutoReply(id) {
  return requestClient.get(
    `/mp/auto-reply/get?id=${id}`
  );
}
function createAutoReply(data) {
  return requestClient.post("/mp/auto-reply/create", data);
}
function updateAutoReply(data) {
  return requestClient.put("/mp/auto-reply/update", data);
}
function deleteAutoReply(id) {
  return requestClient.delete(`/mp/auto-reply/delete?id=${id}`);
}
export {
  createAutoReply,
  deleteAutoReply,
  getAutoReply,
  getAutoReplyPage,
  updateAutoReply
};
