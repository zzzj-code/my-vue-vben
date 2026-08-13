/**
 * ============================================================
 * 模块：公众号模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mp
 * ============================================================
 */
import { requestClient } from "#/api/request";
function getMessageTemplateList(params) {
  return requestClient.get(
    "/mp/message-template/list",
    { params }
  );
}
function deleteMessageTemplate(id) {
  return requestClient.delete("/mp/message-template/delete", {
    params: { id }
  });
}
function syncMessageTemplate(accountId) {
  return requestClient.post("/mp/message-template/sync", null, {
    params: { accountId }
  });
}
function sendMessageTemplate(data) {
  return requestClient.post("/mp/message-template/send", data);
}
export {
  deleteMessageTemplate,
  getMessageTemplateList,
  sendMessageTemplate,
  syncMessageTemplate
};
