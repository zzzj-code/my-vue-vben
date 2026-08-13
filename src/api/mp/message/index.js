/**
 * ============================================================
 * 模块：公众号模块
 * 页面：index页面
 * 功能：index相关接口
 * 接口前缀：/admin-api/mp
 * ============================================================
 */
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
